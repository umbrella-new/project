import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { flexboxCenter } from '../../../../../styles/commonStyles';
import ButtonSelect from '../ButtonSelect';
import CurrentEncloseAndBurningTemp from './CurrentEncloseAndBurningTemp';
import OutsideTemperature from './OutsideTemperature';
import { selectUserState } from '../../../../../store/slices/userSlice';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import {
  setEssTcTemp,
  selectForceAndCommand,
  setTgsTesTcTemp,
} from '../../../../../store/slices/forceAndCommandSlice';
import { selectSettingsOfEss } from '../../../../../store/slices/settingsOfEssSlice';
import { selectSettingsOfTgsTes } from '../../../../../store/slices/settingsOfTgsTesSlice';
import { SelectSettingsOfTgs } from '../../../../../store/slices/settingsOfTgsSlice';

function SelectTc({ ess, tgs, essSwitch }) {
  const essData = [
    { title: `current ${ess} heater temperature`, selection: 'select t/c' },
    { title: 'enclosure temperature', selection: 'select t/c' },
  ];

  const tgsData = [
    { title: `current ${tgs[0]} heater temperature`, selection: 'select t/c' },
    { title: `current ${tgs[1]} heater temperature`, selection: 'select t/c' },
    { title: 'enclosure temperature', selection: 'select t/c' },
  ];

  const select = [
    'tc-01',
    'tc-02',
    'tc-03',
    'tc-04',
    'tc-05',
    'tc-06',
    'tc-07',
    'tc-08',
    'tc-09',
    'tc-10',
    'tc-11',
  ];

  const state = useSelector(selectUserState);
  const tesSwitch = state.isTesSwitch;
  const selectTcState = useSelector(selectForceAndCommand);

  const dispatch = useDispatch();

  const [isClicked, setIsClicked] = useState({
    essOutsideTemp: false,
    essHeaterTemp: false,
    essEncloseTemp: false,
    tgsTesOutsideTemp: false,
    burningChamberTemp: false,
    tgsHeaterTemp: false,
    tesHeaterTemp: false,
    tgsTesEncloseTemp: false,
  });
  const [checked, setChecked] = useState(select[0]);

  // functions for current enclose and burning temp
  const handleChecked = (elem, e) => {
    e.stopPropagation();
    setChecked(elem);
  };
  const displayOptions = (data) => {
    if (essSwitch) {
      if (data === 'essOutsideTemp') {
        return setIsClicked((prevState) => ({
          ...isClicked,
          essOutsideTemp: !prevState[data],
        }));
      } else if (data === 'essHeaterTemp') {
        return setIsClicked((prevState) => ({
          ...isClicked,
          essHeaterTemp: !prevState[data],
        }));
      } else if (data === 'essEncloseTemp')
        return setIsClicked((prevState) => ({
          ...isClicked,
          essEncloseTemp: !prevState[data],
        }));
    } else {
      if (data === 'tgsTesOutsideTemp') {
        return setIsClicked((prevState) => ({
          ...isClicked,
          tgsTesOutsideTemp: !prevState[data],
        }));
      } else if (data === 'burningChamberTemp') {
        return setIsClicked((prevState) => ({
          ...isClicked,
          burningChamberTemp: !prevState[data],
        }));
      } else if (data === 'tgsHeaterTemp') {
        return setIsClicked((prevState) => ({
          ...isClicked,
          tgsHeaterTemp: !prevState[data],
        }));
      } else if (data === 'tesHeaterTemp') {
        return setIsClicked((prevState) => ({
          ...isClicked,
          tesHeaterTemp: !prevState[data],
        }));
      } else if (data === 'tgsTesEncloseTemp') {
        return setIsClicked((prevState) => ({
          ...isClicked,
          tgsTesEncloseTemp: !prevState[data],
        }));
      }
    }
  };

  const onConfirmCurrentEssHeaterTempHandler = (id) => {
    essSwitch
      ? dispatch(setEssTcTemp({ id: id, data: checked }))
      : dispatch(setTgsTesTcTemp({ id: id, data: checked }));

    setIsClicked(() => ({
      essOutsideTemp: false,
      essHeaterTemp: false,
      essEncloseTemp: false,
      tgsTesOutsideTemp: false,
      burningChamberTemp: false,
      tgsHeaterTemp: false,
      tesHeaterTemp: false,
      tgsTesEncloseTemp: false,
    }));
  };

  return (
    // <WrapperTelemetry>
    <WrapperTelemetry1>
      <WrapperTelemetry2>
        <TitleWrapper>
          <P>select t/c telemetry</P>
        </TitleWrapper>
        <Wrapper>
          <OutsideTemperature
            handleChecked={handleChecked}
            onConfirmHandler={onConfirmCurrentEssHeaterTempHandler}
            displayOptions={displayOptions}
            isClicked={isClicked}
            select={select}
            checked={checked}
            essOutsideTempName={'essOutsideTemp'}
            tgsTesOutsideTempName={'tgsTesOutsideTemp'}
            burningChamberTempName={'burningChamberTemp'}
            essSwitch={essSwitch}
            selectTcState={selectTcState}
          />
          <CurrentEncloseAndBurningTemp
            data={essSwitch ? essData : tgsData}
            essSwitch={essSwitch}
            tesSwitch={tesSwitch}
            handleChecked={handleChecked}
            onConfirmHandler={onConfirmCurrentEssHeaterTempHandler}
            displayOptions={displayOptions}
            isClicked={isClicked}
            select={select}
            checked={checked}
            essHeaterTempName={'essHeaterTemp'}
            essEncloseTempName={'essEncloseTemp'}
            tgsHeaterTempName={'tgsHeaterTemp'}
            tesHeaterTempName={'tesHeaterTemp'}
            tgsTesEncloseTempName={'tgsTesEncloseTemp'}
            selectTcState={selectTcState}
          />
        </Wrapper>
        {/* <WrapperButton>
            <ButtonSelect />
          </WrapperButton> */}
      </WrapperTelemetry2>
    </WrapperTelemetry1>
    // </WrapperTelemetry>
  );
}

export default SelectTc;

const WrapperTelemetry = styled.div`
  width: 552px;
  height: auto;
  margin: 2px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  /* border: 1px solid #142033; */
  border-radius: 12px;
  opacity: 1;
  ${flexboxCenter}
`;

const WrapperTelemetry1 = styled.div`
  width: 550px;
  height: auto;
  margin: 2px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 12px;
  opacity: 1;
  ${flexboxCenter}
`;

const WrapperTelemetry2 = styled.div`
  width: 546px;
  height: auto;
  margin: 2px;

  background: transparent
    linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(35, 58, 84) 100%) 0% 0% no-repeat
    padding-box;
  box-shadow: inset 0px 0px 2px rgb(255, 255, 255, 0.1);
  border: 1px solid #142033;
  border-radius: 9px;
  opacity: 1;
  ${flexboxCenter}
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const P = styled.p`
  font-size: var(--font-size7);
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: #ffffff;
`;

const TitleWrapper = styled.div`
  width: 532px;
  height: 32px;
  margin-top: 4px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 24px;
  opacity: 1;
  ${flexboxCenter}
`;

const Wrapper = styled.div`
  width: 546px;
  height: 234px;
  height: auto;
  margin: 2px 0 2px 0;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
`;

const WrapperButton = styled.div`
  width: 130px;
  height: 46px;
  margin-top: 10px;
  margin-bottom: 10px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 38px;
  opacity: 1;
  ${flexboxCenter}
`;
