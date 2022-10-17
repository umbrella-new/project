import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserState } from '../../../store/slices/userSlice';
import {
  selectTgsSwitch,
  tgsHeatingScheduleDate,
  tgsHeatingScheduleCancel,
  deactivateTgsConflictMessage,
} from '../../../store/slices/tgsSwitchSlice';

import essSwitchSlice, {
  activateEsSwitchStatus,
  deactivateEsSwitchStatus,
  selectEssSwitch,
} from '../../../store/slices/essSwitchSlice';

import styled from 'styled-components';
import { flexboxCenter } from '../../../styles/commonStyles';

import TgsInstantHeat from './instantHeat/TgsInstantHeat';
import TgsSnowSensor from './snowSensor/TgsSnowSensor';
import ConstantHeat from './optionalConstantTemp/ConstantHeat';
import DisplayTemperatureStates from './displayState/DisplayTemperatureStates';
import TgsHeatingSchedule from './HeatingSchedule/TgsHeatingSchedule';
import TgsWindFactor from './windFactor/TgsWindFactor';
import ScheduleCalendar from './HeatingSchedule/ScheduleCalendar';
import ConflictMessage from '../../userMessages/ConflictMessage';

const TgsControlBox = () => {
  const userState = useSelector(selectUserState);
  const { isEssSwitch } = userState;
  // conditionally change state ess || tgs || tes

  const state = useSelector(selectTgsSwitch);
  const { displayConflictMessage } = state;

  const esState = useSelector(selectEssSwitch);
  const {
    instantHeat,
    fanOnly,
    snowSensor,
    optionalConstantTemp,
    heatingSchedule,
    windFactor,
  } = esState;

  const dispatch = useDispatch();

  // Check if es is activated
  useEffect(() => {
    instantHeat.instantButtonToggler && dispatch(activateEsSwitchStatus());
    fanOnly && dispatch(activateEsSwitchStatus());
    snowSensor.isReady && dispatch(activateEsSwitchStatus());
    snowSensor.activated && dispatch(activateEsSwitchStatus());
    optionalConstantTemp.apply && dispatch(activateEsSwitchStatus());
    heatingSchedule.isReady && dispatch(activateEsSwitchStatus());
    heatingSchedule.isActivated && dispatch(activateEsSwitchStatus());
    windFactor.isReady && dispatch(activateEsSwitchStatus());
    windFactor.isActivated && dispatch(activateEsSwitchStatus());
  }, [esState]);

  // Conflict message handlers
  const handleCancelConflictMessage = () => {
    // change display conflict message state into false
    dispatch(deactivateTgsConflictMessage());
  };

  const handleConfirmConflictMessage = () => {
    console.log('turn off es');
    // Turn off all tgs switches at once
    dispatch(deactivateEsSwitchStatus());
    // Deactivate the message box
    dispatch(deactivateTgsConflictMessage());
  };

  return (
    <Wrapper>
      <BackgroundImg src={'/images/controller-background.svg'} />
      <PositionAbsolute>
        <Title>tgs-controls</Title>
        <ControlsList>
          <TgsInstantHeat />
          <TgsSnowSensor />
          <ConstantHeat />
          <TgsHeatingSchedule />
          <TgsWindFactor />
          <DisplayTemperatureStates state={state} />
        </ControlsList>
      </PositionAbsolute>

      {displayConflictMessage && (
        <ConflictMessage
          headerTitle='tgs and tes conflict'
          currentSwitch='tes-typhoon electric system'
          DesiredSwitch='tgs-typhoon gas system'
          handleCancel={handleCancelConflictMessage}
          handleConfirm={handleConfirmConflictMessage}
        />
      )}
    </Wrapper>
  );
};

export default TgsControlBox;

const Wrapper = styled.div`
  width: 293px;
  height: 490px;

  /* Space between the control box with chart container */
  margin-right: var(--space1);
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
  text-transform: uppercase;
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

const SchedulerWrapper = styled.div`
  position: absolute;
  top: 1rem;
  z-index: 100;
`;
