import styled from 'styled-components';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import ControlBox from './controls/ControlBox';
import ChartContainer from './chart/ChartContainer';
import { flexboxCenter } from '../../styles/commonStyles';
import HeaterStatus from './HeaterStatus/HeaterStatus';
import DisplayEnergyConsumption from './DisplayEnergyConsumption';

import ScheduleCalendar from './controls/HeatingSchedule/ScheduleCalendar';
import { useSelector } from 'react-redux';
import { selectEssSwitch } from '../../store/slices/essSwitchSlice';
import { selectUserState } from '../../store/slices/userSlice';
import { selectTgsSwitch } from '../../store/slices/tgsSwitchSlice';
import { useLocation } from 'react-router-dom';
import TgsControlBox from './controls/tgsControlBox';

const Switch = () => {
  const userState = useSelector(selectUserState);
  const { isEssSwitch } = userState;
  const location = useLocation();

  // only display Heater status ' in ESS Switch '
  const isActivated = userState.isEssSwitch ? true : false;
  const backgroundSvg = '/images/background-hat.svg';

  return (
    <Wrapper isActivated={isActivated}>
      <BackgroundImg src={backgroundSvg} />
      <DisplayEnergyConsumption />

      <ContentWrapper>
        <MainSection>
          {isEssSwitch ? (
            <ControlBox />
          ) : location.pathname === '/' ? (
            <TgsControlBox />
          ) : (
            <ControlBox />
          )}

          <ChartContainer />
        </MainSection>

        {isActivated && (
          <SubSection>
            <HeaterStatus />
          </SubSection>
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Switch;

const Wrapper = styled.div`
  width: 901px;
  position: relative;
  /* height: 500px; */

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  opacity: 1;

  border-radius: 16px 0 16px 16px;
  ${flexboxCenter}
  padding-bottom: 0.2rem;
  position: relative;

  /* border: 1px solid red; */
`;

const BackgroundImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;

const ContentWrapper = styled.div`
  width: 901px;
  display: flex;
  flex-direction: column;
`;

const MainSection = styled.section`
  ${flexboxCenter}

  justify-content: flex-start;
`;
const SubSection = styled.section`
  ${flexboxCenter}
`;
