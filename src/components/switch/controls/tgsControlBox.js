import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserState } from '../../../store/slices/userSlice';
import { selectTgsSwitch } from '../../../store/slices/tgsSwitchSlice';

import styled from 'styled-components';
import { flexboxCenter } from '../../../styles/commonStyles';

import TgsInstantHeat from './instantHeat/TgsInstantHeat';
import TgsSnowSensor from './snowSensor/TgsSnowSensor';
import ConstantHeat from './optionalConstantTemp/ConstantTemp';
import DisplayTemperatureStates from './displayState/DisplayTemperatureStates';
import TgsHeatingSchedule from './HeatingSchedule/TgsHeatingSchedule';
import TgsWindFactor from './windFactor/TgsWindFactor';
import TgsScheduleCalendar from './HeatingSchedule/TgsScheduleCalendar';

const TgsControlBox = () => {
  const userState = useSelector(selectUserState);
  const { isEssSwitch } = userState;
  // conditionally change state ess || tgs || tes

  const state = useSelector(selectTgsSwitch);
  // Read current URL
  const location = useLocation();

  return (
    <Wrapper>
      <BackgroundImg src={'/images/controller-background.svg'} />
      <PositionAbsolute>
        <Title>tes-controls</Title>
        <ControlsList>
          <TgsInstantHeat />
          <TgsSnowSensor />
          <ConstantHeat />
          <TgsHeatingSchedule />
          <TgsWindFactor />
          <DisplayTemperatureStates state={state} />
        </ControlsList>
      </PositionAbsolute>
      <SchedulerWrapper>
        {state.heatingSchedule.displayed && <TgsScheduleCalendar />}
      </SchedulerWrapper>
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
