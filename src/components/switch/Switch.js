import { useSelector } from 'react-redux';
import { selectUserState } from '../../store/slices/userSlice';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import styled from 'styled-components';
import { flexboxCenter } from '../../styles/commonStyles';

import ControlBox from './controls/ControlBox';
import ChartContainer from './chart/ChartContainer';
import HeaterStatus from './HeaterStatus/HeaterStatus';
import DisplayEnergyConsumption from './DisplayEnergyConsumption';

import TgsControlBox from './controls/tgsControlBox';
import { selectFaults } from '../../store/slices/faultsSlice';
import SettingConfirmedMessage from '../userMessages/SettingConfirmedMessage';

const Switch = () => {
  const userState = useSelector(selectUserState);
  const { isEssSwitch } = userState;

  const location = useLocation();

  // only display Heater status ' in ESS Switch '
  const isActivated = isEssSwitch ? true : false;
  const displayHeaterStatus = isEssSwitch
    ? true
    : location.pathname === '/'
    ? false
    : true;
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

        {displayHeaterStatus && (
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

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;

  border-radius: 16px 0 16px 16px;
  ${flexboxCenter}

  position: relative;

  /* border: 1px solid blue; */
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
  justify-content: space-between;
  align-items: center;
`;
const SubSection = styled.section`
  ${flexboxCenter}
`;
