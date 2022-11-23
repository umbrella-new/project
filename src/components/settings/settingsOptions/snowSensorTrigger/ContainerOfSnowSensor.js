import styled, { css } from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { flexboxCenter } from '../../../../styles/commonStyles';
import SnowFactor from './SnowFactor';
import {
  setResetAllSettingsButtons,
  setSettingsApplySnowSensorTriggerButton,
  setSettingsCancelButton,
  setSettingsEditButton,
} from '../../../../store/slices/settingsOfEssSlice';
import { selectUserState } from '../../../../store/slices/userSlice';
import { selectSettingsOfEss } from '../../../../store/slices/settingsOfEssSlice';
import { useContext } from 'react';
import { SettingsContext } from '../../../../context/ContextOfSettings';
import InvisibleDivForEditButton from '../editAndApplyMessageBoxes/InvisibleDivForEditButton';
import EditCancelApplyButtons from '../EditCancelApplyButtons';
import {
  selectSettingsOfTgsTes,
  setTgsTesSettingsApplySnowSensorButton,
} from '../../../../store/slices/settingsOfTgsTesSlice';

import SettingAppliedMessage from '../../../userMessages/SettingAppliedMessage';
import {
  SelectSettingsOfTgs,
  setTgsSettingsApplySnowSensorButton,
} from '../../../../store/slices/settingsOfTgsSlice';

function ContainerOfSnowSensor() {
  const tgsTes = ['tgs-snow sensor trigger', 'tes-snow sensor trigger'];
  const ess = ['ess-snow sensor trigger'];
  const temp = ['350'];

  const buttonsName = ['edit', 'cancel', 'apply'];

  // useContext

  const {
    essSnowSensor,
    setEssSnowSensor,
    tgsSnowSensor,
    setTgsSnowSensor,
    tesSnowSensor,
    setTesSnowSensor,
    metricImperialToggle,
  } = useContext(SettingsContext);

  // useState
  const [messageBox, setMessageBox] = useState(false);
  const [messageBoxContent, setMessageBoxContent] = useState({});
  const [options, setOptions] = useState('');

  // redux
  const dispatch = useDispatch();
  const state = useSelector(selectUserState);
  const essState = useSelector(selectSettingsOfEss);
  const tgsTesState = useSelector(selectSettingsOfTgsTes);
  const tgsState = useSelector(SelectSettingsOfTgs);
  const tesSwitch = state.isTesSwitch;
  const essSwitch = state.isEssSwitch;
  const editState = essState.buttonsOfSettings.settingsEditButton;
  const mode = essState.interfaceMode;
  const settingsEditButton = essState.buttonsOfSettings.settingsEditButton;
  const unitsState = essState.buttonsOfSettings.unitsMeasurement;
  const { essTemp, isFEss } = essState.snowSensorTemp;
  const { tgsTemp, tesTemp, isFTgsTes } = tgsTesState.snowSensorTemp;
  const { tgsTempOnly, isFTgs } = tgsState.snowSensorTemp;

  // sets back previous data entered in the input fields either in imperial or metric. if it was metric before and user changes the units, the input(s) will be converted.
  useEffect(() => {
    dispatch(setResetAllSettingsButtons());
    if (essSwitch) {
      if (essTemp > 0) {
        if (unitsState === isFEss) {
          setEssSnowSensor(essTemp);
        } else {
          if (isFEss) {
            // saved unit is F but current unit is C -> formula c = (f-32) * 5/9
            setEssSnowSensor(`${Math.round(((essTemp - 32) * 5) / 9)}`);
          } else {
            // saved unit is C but current unit is F -> formula f = c * 1.8 + 32
            setEssSnowSensor(`${Math.round(essTemp * 1.8 + 32)}`);
          }
        }
      }
    } else if (!tesSwitch) {
      if (tgsTempOnly > 0) {
        if (unitsState === isFTgs) {
          setTgsSnowSensor(tgsTempOnly);
        } else {
          if (isFTgs) {
            // saved unit is F but current unit is C -> formula c = (f-32) * 5/9
            setTgsSnowSensor(`${Math.round(((tgsTempOnly - 32) * 5) / 9)}`);
          } else {
            // saved unit is C but current unit is F -> formula f = c * 1.8 + 32
            setTgsSnowSensor(`${Math.round(tgsTempOnly * 1.8 + 32)}`);
          }
        }
      }
    } else {
      if (tesTemp > 0 && tgsTemp > 0) {
        if (unitsState === isFTgsTes) {
          setTesSnowSensor(tesTemp);
          setTgsSnowSensor(tgsTemp);
        } else {
          if (isFTgsTes) {
            // saved unit is F but current unit is C -> formula c = (f-32) * 5/9
            setTesSnowSensor(`${Math.round(((tesTemp - 32) * 5) / 9)}`);
            setTgsSnowSensor(`${Math.round(((tgsTemp - 32) * 5) / 9)}`);
          } else {
            // saved unit is C but current unit is F -> formula f = c * 1.8 + 32
            setTesSnowSensor(`${Math.round(tesTemp * 1.8 + 32)}`);
            setTgsSnowSensor(`${Math.round(tgsTemp * 1.8 + 32)}`);
          }
        }
      }
    }
  }, []);

  // handles the 2 input fields to direct each data entered  from keypad gets save at the right place in useState in useContext and it will display in the input field as you type
  const handleInputs = (index, inputNumber) => {
    console.log(index, inputNumber);
    switch (index) {
      case 0:
        if (essSwitch) {
          setEssSnowSensor(inputNumber);
        } else {
          setTgsSnowSensor(inputNumber);
        }
        break;
      case 1:
        setTesSnowSensor(inputNumber);
        break;
      default:
        break;
    }
  };

  // 3 buttons(edit, cancel and apply).dispatch the input fields for Ess into ess slice when apply button is clicked
  const handleEssButtons = (value) => {
    const buttonsIndex = Number(value);
    switch (buttonsIndex) {
      case 0:
        dispatch(setSettingsEditButton());
        break;
      case 1:
        dispatch(setSettingsCancelButton());
        setEssSnowSensor('');
        break;
      case 2:
        if (typeof essSnowSensor === 'number') {
          dispatch(
            setSettingsApplySnowSensorTriggerButton({
              essSnowSensor,
              isF: unitsState,
            })
          );
          dispatch(setResetAllSettingsButtons());
        }
        setMessageBox(true);
        handleSnowSensorMessageBox();

        break;
      default:
        return;
    }
  };

  // 3 buttons(edit, cancel and apply). Dispatch the input fields for tgs tes or tgs only into tgs tes slice when apply button is clicked

  const handleTgsTesButtons = (value) => {
    const buttonsIndex = Number(value);
    switch (buttonsIndex) {
      case 0:
        dispatch(setSettingsEditButton());
        break;
      case 1:
        dispatch(setSettingsCancelButton());
        setTesSnowSensor('');
        setTgsSnowSensor('');
        break;
      case 2:
        if (
          typeof tgsSnowSensor == 'number' &&
          typeof tesSnowSensor == 'number'
        ) {
          dispatch(setResetAllSettingsButtons());
          dispatch(
            setTgsTesSettingsApplySnowSensorButton({
              tgsSnowSensor,
              tesSnowSensor,
              isF: unitsState,
            })
          );
        }
        setMessageBox(true);
        handleSnowSensorMessageBox();

        break;
      default:
        return;
    }
  };

  const handleTgsButtons = (value) => {
    const buttonsIndex = Number(value);
    switch (buttonsIndex) {
      case 0:
        dispatch(setSettingsEditButton());
        break;
      case 1:
        dispatch(setSettingsCancelButton());
        setTesSnowSensor('');
        setTgsSnowSensor('');
        break;
      case 2:
        if (typeof tgsSnowSensor === 'number') {
          dispatch(setResetAllSettingsButtons());
          dispatch(
            setTgsSettingsApplySnowSensorButton({
              tgsSnowSensor,
              isF: unitsState,
            })
          );
        }
        setMessageBox(true);
        handleSnowSensorMessageBox();

        break;
      default:
        return;
    }
  };

  const handleSnowSensorMessageBox = () => {
    if (
      typeof essSnowSensor === 'number' ||
      typeof tgsSnowSensor === 'number' ||
      (typeof tgsSnowSensor === 'number' && typeof tesSnowSensor === 'number')
    ) {
      setMessageBoxContent({
        title: ['snow sensor trigger'],
        content: 'settings have been applied',
      });
    } else {
      setMessageBoxContent({
        title: ['input fields incomplete'],
        content: 'please field all the input fields',
      });
    }
    return;
  };

  const handleCloseMessageBox = () => {
    setMessageBox(false);
    return;
  };

  return (
    <Wrapper2>
      <Wrapper essSwitch={essSwitch}>
        {essSwitch && !settingsEditButton && essSnowSensor !== null && (
          <InvisibleDivForEditButton height={'100px'} />
        )}
        {!essSwitch &&
          !settingsEditButton &&
          tgsSnowSensor !== null &&
          tesSnowSensor !== null && (
            <InvisibleDivForEditButton height={'100px'} />
          )}
        {!essSwitch &&
          !tesSwitch &&
          !settingsEditButton &&
          tgsSnowSensor !== null && (
            <InvisibleDivForEditButton height={'100px'} />
          )}

        <Wrapper1 essSwitch={essSwitch}>
          <SnowFactor
            tgsTes={tgsTes}
            ess={ess}
            temp={temp}
            tesSwitch={tesSwitch}
            essSwitch={essSwitch}
            editState={editState}
            options={options}
            setOptions={setOptions}
            metricImperialToggle={unitsState}
            handleInputs={handleInputs}
          />
        </Wrapper1>
        {messageBox && (
          <SettingAppliedMessage
            title={'change options'}
            message={messageBoxContent}
            onClose={handleCloseMessageBox}
          />
        )}
      </Wrapper>
      <WrapperButtons position={essSwitch}>
        <EditCancelApplyButtons
          handleClick={
            essSwitch
              ? handleEssButtons
              : tesSwitch
              ? handleTgsTesButtons
              : handleTgsButtons
          }
          buttonsName={buttonsName}
        />
      </WrapperButtons>
    </Wrapper2>
  );
}

export default ContainerOfSnowSensor;

const Wrapper2 = styled.div`
  width: 596px;
  height: 383px;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const Wrapper = styled.div`
  width: 596px;
  height: 106px;
  margin-right: 3px;
  ${flexboxCenter};
  ${({ essSwitch }) =>
    essSwitch
      ? css`
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
        `
      : css`
          justify-content: flex-start;
        `};
  flex-direction: column;
  margin-left: -3px;
`;

const Wrapper1 = styled.div`
  width: 596px;
  height: 106px;
  padding-top: 4px;
  padding-bottom: 4px;

  ${({ essSwitch }) => essSwitch && 'width: auto'};
  ${({ essSwitch }) => essSwitch && 'padding-left: 6px'};
  ${({ essSwitch }) => essSwitch && 'padding-right: 6px'};

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 18px;
  opacity: 1;
  ${flexboxCenter};
  justify-content: space-around;
`;

const WrapperButtons = styled.div`
  width: auto;
  height: auto;

  display: flex;
  ${({ position }) =>
    position
      ? css`
          justify-content: flex-start;
          margin-left: 1rem;
        `
      : css`
          justify-content: flex-end;
        `};

  align-items: center;
`;
