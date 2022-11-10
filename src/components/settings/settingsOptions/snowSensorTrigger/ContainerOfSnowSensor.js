import styled from 'styled-components';
import { useEffect, useRef } from 'react';
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

function ContainerOfSnowSensor() {
  const tgsTes = ['tgs-snow sensor trigger', 'tes-snow sensor trigger'];
  const ess = ['ess-snow sensor trigger'];
  const temp = ['350'];

  const buttonsName = ['edit', 'cancel', 'apply'];
  const height = '150px';

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

  // redux
  const dispatch = useDispatch();
  const state = useSelector(selectUserState);
  const tesSwitch = state.isTesSwitch;
  const essSwitch = state.isEssSwitch;
  const essState = useSelector(selectSettingsOfEss);
  const editState = essState.buttonsOfSettings.settingsEditButton;
  const mode = state.interfaceMode;
  const settingsEditButton = essState.buttonsOfSettings.settingsEditButton;
  const essSnowSensorState = essState.snowSensorState;
  const tgsTesState = useSelector(selectSettingsOfTgsTes);
  const tgsTesSnowSensorState = tgsTesState.snowSensorTemp;

  useEffect(() => {
    dispatch(setResetAllSettingsButtons());
    if (essSwitch) {
      setEssSnowSensor(essSnowSensorState);
    } else {
      setTesSnowSensor(tgsTesSnowSensorState.tesTemp);
      setTgsSnowSensor(tgsTesSnowSensorState.tgsTemp);
    }
  }, []);

  const handleEssButtons = (value) => {
    const buttonsIndex = Number(value);
    switch (buttonsIndex) {
      case 0:
        dispatch(setSettingsEditButton());
        break;
      case 1:
        dispatch(setSettingsCancelButton());
        break;
      case 2:
        dispatch(setSettingsApplySnowSensorTriggerButton(essSnowSensor));
        break;
      default:
        return;
    }
  };

  const handleTgsTesButtons = (value) => {
    const buttonsIndex = Number(value);
    switch (buttonsIndex) {
      case 0:
        dispatch(setSettingsEditButton());
        break;
      case 1:
        dispatch(setSettingsCancelButton());
        break;
      case 2:
        dispatch(setResetAllSettingsButtons());
        dispatch(
          setTgsTesSettingsApplySnowSensorButton({
            tgsSnowSensor,
            tesSnowSensor,
          })
        );
        break;
      default:
        return;
    }
  };

  return (
    <Wrapper essSwitch={essSwitch}>
      {!settingsEditButton && <InvisibleDivForEditButton />}
      <Wrapper1 essSwitch={essSwitch}>
        <SnowFactor
          tgsTes={tgsTes}
          ess={ess}
          temp={temp}
          tesSwitch={tesSwitch}
          essSwitch={essSwitch}
          editState={editState}
          snowSensorState={essSwitch ? essSnowSensor : tgsSnowSensor}
          tesSnowSensorState={tesSnowSensor}
          metricImperialToggle={metricImperialToggle}
        />
      </Wrapper1>
      <WrapperButtons>
        <EditCancelApplyButtons
          handleClick={essSwitch ? handleEssButtons : handleTgsTesButtons}
          buttonsName={buttonsName}
        />
      </WrapperButtons>
    </Wrapper>
  );
}

export default ContainerOfSnowSensor;

const Wrapper = styled.div`
  width: 596px;
  height: auto;
  ${({ essSwitch }) => essSwitch && 'width: auto'};
  ${flexboxCenter};
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
  width: 578px;
  height: auto;
  margin-bottom: 10px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
