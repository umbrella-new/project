import styled from 'styled-components';
import DisplayTemperatureStates from './displayState/DisplayTemperatureStates';
import ConstantHeat from './../controls/optionalConstantTemp/ConstantTemp';
import HeatingSchedule from './../controls/HeatingSchedule/HeatingSchedule';
import InstantHeat from './../controls/instantHeat/InstantHeat';
import SnowSensor from './../controls/snowSensor/SnowSensor';
import WindFactor from './../controls/windFactor/WindFactor';
import { flexboxCenter } from '../../../styles/commonStyles';
import { useContext } from 'react';
import { Context } from '../../../context/Context';
import TgsInstantHeat from './instantHeat/TgsInstantHeat';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectEssSwitch } from '../../../store/slices/essSwitchSlice';
import { selectUserState } from '../../../store/slices/userSlice';
import { selectTgsSwitch } from '../../../store/slices/tgsSwitchSlice';

const ControlBox = () => {
  // const { state } = useContext(Context);

  const userState = useSelector(selectUserState);
  const { isEssSwitch } = userState;
  // conditionally change state ess || tgs || tes
  const essState = useSelector(selectEssSwitch);
  const tgsState = useSelector(selectTgsSwitch);

  // Read current URL
  const location = useLocation();

  return (
    <Wrapper>
      <BackgroundImg src={'/images/controller-background.svg'} />

      <PositionAbsolute>
        <Title>
          {isEssSwitch ? 'ess' : location.pathname === '/' ? 'tgs' : 'tes'}
          -controls
        </Title>
        {/* conditionally change the instant heat controller */}
        <ControlsList>
          {isEssSwitch ? (
            <InstantHeat state={essState} />
          ) : location.pathname === '/' ? (
            <TgsInstantHeat state={tgsState} />
          ) : (
            <InstantHeat state={essState} />
          )}

          <SnowSensor />
          <ConstantHeat state={essState} />

          <HeatingSchedule
            state={
              isEssSwitch
                ? essState
                : location.pathname === '/'
                ? tgsState
                : essState
            }
          />

          <WindFactor
            state={
              isEssSwitch
                ? essState
                : location.pathname === '/'
                ? tgsState
                : essState
            }
          />
          <DisplayTemperatureStates
            state={
              isEssSwitch
                ? essState
                : location.pathname === '/'
                ? tgsState
                : essState
            }
          />
        </ControlsList>
      </PositionAbsolute>
    </Wrapper>
  );
};

export default ControlBox;

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
