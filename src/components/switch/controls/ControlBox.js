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

const ControlBox = () => {
  const { state } = useContext(Context);
  const { isEssSwitch } = state;

  // Read current URL
  const location = useLocation();

  return (
    <Wrapper>
      <BackgroundImg src={'/images/controller-background.svg'} />

      <PositionAbsolute>
        <Title>{isEssSwitch ? 'ess' : 'tgs'}-controls</Title>
        {/* conditionally change the instant heat controller */}

        <ControlsList>
          {isEssSwitch ? (
            <InstantHeat />
          ) : location.pathname === '/' ? (
            <TgsInstantHeat />
          ) : (
            <InstantHeat />
          )}

          <SnowSensor />
          <ConstantHeat />

          <HeatingSchedule />

          <WindFactor />
          <DisplayTemperatureStates />
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
