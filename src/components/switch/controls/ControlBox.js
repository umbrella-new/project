import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  deactivateEsConflictMessage,
  selectEssSwitch,
} from '../../../store/slices/essSwitchSlice';
import {
  activateTgsSwitchStatus,
  deactivateTgsSwitchStatus,
  selectTgsSwitch,
} from '../../../store/slices/tgsSwitchSlice';

import { selectUserState } from '../../../store/slices/userSlice';
import { selectFaults } from '../../../store/slices/faultsSlice';

import styled from 'styled-components';
import { flexboxCenter } from '../../../styles/commonStyles';

import DisplayTemperatureStates from './displayState/DisplayTemperatureStates';
import ConstantHeat from './optionalConstantTemp/ConstantHeat';
import HeatingSchedule from './../controls/HeatingSchedule/HeatingSchedule';
import InstantHeat from './../controls/instantHeat/InstantHeat';
import SnowSensor from './../controls/snowSensor/SnowSensor';
import WindFactor from './../controls/windFactor/WindFactor';
import ConflictMessage from '../../userMessages/ConflictMessage';
import SettingConfirmedMessage from '../../userMessages/SettingConfirmedMessage';

const ControlBox = () => {
  const userState = useSelector(selectUserState);
  const { isEssSwitch } = userState;

  const state = useSelector(selectEssSwitch);
  const { displayConflictMessage } = state;

  const faultsState = useSelector(selectFaults);
  const { message, faultsTypes } = faultsState.ess;
  const isFaults = message.length > 0;

  const tgsState = useSelector(selectTgsSwitch);
  const {
    instantHeat,
    fanOnly,
    snowSensor,
    optionalConstantTemp,
    heatingSchedule,
    windFactor,
  } = tgsState;

  const dispatch = useDispatch();

  const [disabledBox, setDisabledBox] = useState(false);
  const [displayFaultsMessageBox, setDisplayFaultsMessageBox] = useState(false);
  const [faultsType, setFaultsType] = useState(null);
  useEffect(() => {
    if (message.length > 0) {
      if (message.length === 1) {
        setFaultsType(message[0].split(' - ')[0]);
        setDisabledBox(true);
      } else {
        const spFaults = message.map((fault) => fault.split(' - ')[0]);
        spFaults.indexOf(faultsTypes[3]) === -1 && setDisabledBox(true);
      }
    }
  }, [message]);

  // Check if tgs is activated
  useEffect(() => {
    instantHeat.instantButtonToggler && dispatch(activateTgsSwitchStatus());
    fanOnly && dispatch(activateTgsSwitchStatus());
    snowSensor.isReady && dispatch(activateTgsSwitchStatus());
    snowSensor.activated && dispatch(activateTgsSwitchStatus());
    optionalConstantTemp.apply && dispatch(activateTgsSwitchStatus());
    heatingSchedule.isReady && dispatch(activateTgsSwitchStatus());
    heatingSchedule.isActivated && dispatch(activateTgsSwitchStatus());
    windFactor.isReady && dispatch(activateTgsSwitchStatus());
    windFactor.isActivated && dispatch(activateTgsSwitchStatus());
  }, [tgsState]);

  // Conflict message handlers
  const handleCancelConflictMessage = () => {
    // change display conflict message state into false
    dispatch(deactivateEsConflictMessage());
  };
  const handleConfirmConflictMessage = () => {
    // Turn off all tgs switches at once
    dispatch(deactivateTgsSwitchStatus());
    // Deactivate the message box
    dispatch(deactivateEsConflictMessage());
    // conditionally render on ES switch
    // 1. instant Heat
    // 2. snow sensor
    // 3. optional Constant Heat
    // 4. heating scheduler
    // 5. wind factor
  };

  return (
    <Wrapper>
      <BackgroundImg
        src={
          isFaults
            ? '/images/controller-background-faults.svg'
            : '/images/controller-background.svg'
        }
      />

      <PositionAbsolute>
        <Title>
          {isEssSwitch ? 'ess' : 'tes'}
          -controls
        </Title>

        <ControlsList>
          <InstantHeat />
          <SnowSensor />
          <ConstantHeat />
          <HeatingSchedule />
          <WindFactor />
          <DisplayTemperatureStates state={state} />
        </ControlsList>
      </PositionAbsolute>

      {displayConflictMessage && (
        <ConflictMessage
          headerTitle='tgs and tes conflict'
          currentSwitch='tgs-typhoon gas system'
          DesiredSwitch='tes-typhoon electric system'
          handleCancel={handleCancelConflictMessage}
          handleConfirm={handleConfirmConflictMessage}
        />
      )}

      {disabledBox && (
        <DisabledWholePage
          onClick={() => {
            setDisplayFaultsMessageBox(true);
          }}
        ></DisabledWholePage>
      )}

      {displayFaultsMessageBox && (
        <SettingConfirmedMessage
          alert={true}
          onClose={() => setDisplayFaultsMessageBox(false)}
          title={faultsType ? faultsType : 'faults'}
          message='SYSTEM OFF
          UNTIL RELEASE FAULT! Go to faults page to check the details'
          src={'/images/heater-off-alert.svg'}
        />
      )}
    </Wrapper>
  );
};

export default ControlBox;

const Wrapper = styled.div`
  width: 293px;
  height: 490px;

  /* Space between the control box with chart container */
  margin-right: var(--space1);
  /* border: 1px solid blue; */
`;

const BackgroundImg = styled.img`
  height: 100%;
`;

const PositionAbsolute = styled.div`
  /* later!!! edit format */
  width: 293px;
  height: 485px;
  position: absolute;
  top: 0rem;
  left: 0.5rem;

  /* border: 1px solid red; */
`;

const Title = styled.span`
  font-size: 10px;
  margin-left: var(--space3);
`;

const ControlsList = styled.ul`
  margin-top: var(--space3);
  ${flexboxCenter}

  /* Layout Properties */

  width: 282px;
  height: 458px;
  /* UI Properties */
  background: var(--unnamed-color-233a54) 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px var(--unnamed-color-000000);
  border: 1px solid var(--unnamed-color-1b2b44);
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  /* border: 1px solid #1b2b44; */
  border-radius: 10px;
  opacity: 1;

  ${flexboxCenter}
  flex-direction: column;
  justify-content: space-between;
  padding-top: 0.3rem;
  padding-bottom: 0.1rem;

  box-sizing: border-box;
`;

const KeyboardWrapper = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 1000;
`;

const DisabledWholePage = styled.div`
  width: 100vw;
  height: 600px;

  position: absolute;
  top: 0rem;
  left: 0rem;
`;
