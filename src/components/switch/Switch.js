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

const Switch = () => {
  const userState = useSelector(selectUserState);
  const { isEssSwitch } = userState;
  const faultsState = useSelector(selectFaults);

  const location = useLocation();
  const { message, faultsTypes } =
    location.pathname === '/' ? faultsState.tgs : faultsState.ess;
  const [disabledBox, setDisabledBox] = useState(false);
  const [displayFaultsMessageBox, setDisplayFaultsMessageBox] = useState(false);
  const [faultsMessage, setFaultsMessage] = useState(null);
  const [faults, setFaults] = useState(null);

  useEffect(() => {
    if (message.length > 0) {
      if (location.pathname === '/') {
        setDisabledBox(true);
      } else {
        const spFaults = message.map((fault) => fault.split(' - ')[0]);
        spFaults.indexOf(faultsTypes[3]) === -1 && setDisabledBox(true);
      }
    }
  }, [message]);

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
      {disabledBox && (
        <DisabledWholePage
          onClick={() => {
            setFaultsMessage();
            setDisplayFaultsMessageBox(true);
          }}
        ></DisabledWholePage>
      )}
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

const DisabledWholePage = styled.div`
  width: 100vw;
  height: 100vh;
  width: 100px;
  height: 100px;
  border: 1px solid red;
  position: absolute;
`;
