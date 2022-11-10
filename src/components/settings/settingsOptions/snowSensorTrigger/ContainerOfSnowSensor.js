import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { flexboxCenter } from '../../../../styles/commonStyles';
import SnowFactor from './SnowFactor';
import { setResetAllSettingsButtons } from '../../../../store/slices/settingsOfEssSlice';
import { selectUserState } from '../../../../store/slices/userSlice';
import { selectSettingsOfEss } from '../../../../store/slices/settingsOfEssSlice';
import { useContext } from 'react';
import { SettingsContext } from '../../../../context/ContextOfSettings';
import InvisibleDivForEditButton from '../editAndApplyMessageBoxes/InvisibleDivForEditButton';

function ContainerOfSnowSensor() {
  const tgsTes = ['tgs-snow sensor trigger', 'tes-snow sensor trigger'];
  const ess = ['ess-snow sensor trigger'];
  const temp = ['350'];

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
  const editSlice = useSelector(selectSettingsOfEss);
  const editState = editSlice.buttonsOfSettings.settingsEditButton;
  const mode = state.interfaceMode;
  const settingsEditButton = editSlice.buttonsOfSettings.settingsEditButton;

  useEffect(() => {
    dispatch(setResetAllSettingsButtons());
  }, []);
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
    </Wrapper>
  );
}

export default ContainerOfSnowSensor;

const Wrapper = styled.div`
  width: 596px;
  height: auto;
  ${({ essSwitch }) => essSwitch && 'width: auto'};
  ${flexboxCenter};
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
