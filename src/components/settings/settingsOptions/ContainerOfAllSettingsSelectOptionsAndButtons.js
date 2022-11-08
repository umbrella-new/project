import styled from 'styled-components';
import { useContext, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { flexboxCenter } from '../../../styles/commonStyles';
import TitleOfSettingsOptions from './TitleOfSettingsOptions';
import AllTheSelectionsOfSettingsOptions from './AllTheSelectionsOfSettingsOptions';
import {
  selectSettingsOfEss,
  setSettingsEditButton,
  setSettingsCancelButton,
  setSettingsApplyButton,
  setSettingsApplyUnitsButton,
  setSettingsApplyWindFactorTriggerButton,
  setSettingsApplySnowSensorTriggerButton,
  setSettingsApplyForceCommandButton,
  setSettingsApplyAdminButton,
  setEditButtonToFalse,
  setCancelButtonToFalse,
  setApplyButtonToFalse,
  setApplyButtonToTrue,
} from '../../../store/slices/settingsOfEssSlice';
import {
  setTgsSettingsEditButton,
  setTgsSettingsCancelButton,
  setTgsSettingsApplyUnitsButton,
  setTgsSettingsApplySnowSensorButton,
  setTgsSettingsApplyForceAndCommandButton,
  setTgsSettingsApplyAdminButton,
} from '../../../store/slices/settingsOfTgsSlice';
import {
  setTgsTesSettingsEditButton,
  setTgsTesSettingsCancelButton,
  setTgsTesSettingsApplyUnitsButton,
  setTgsTesSettingsApplySnowSensorButton,
  setTgsTesSettingsApplyForceAndCommandButton,
  setTgsTesSettingsApplyAdminButton,
} from '../../../store/slices/settingsOfTgsTesSlice';
import EditCancelApplyButtons from './EditCancelApplyButtons';
import {
  handleTesSwitch,
  selectUserState,
} from '../../../store/slices/userSlice';
import { SettingsContext } from '../../../context/ContextOfSettings';
import { handleSnowSensorDefaultTemp } from '../../../store/slices/essSwitchSlice';
import { selectForceAndCommand } from '../../../store/slices/forceAndCommandSlice';
import { handleTgsSnowSensorDefaultTemp } from '../../../store/slices/tgsSwitchSlice';
import ApplyButtonInvisibleDiv from './editAndApplyMessageBoxes/ApplyButtonInvisibleDiv';

function ContainerOfAllSettingsSelectOptionsAndButtons() {
  const settingsData = [
    'units',
    'wind factor trigger',
    'snow sensor trigger',
    'force & commands',
    'admin.',
  ];
  // useContext
  const {
    settingState,
    essSnowSensorInput,
    tgsSnowSensorInput,
    tesSnowSensorInput,
    selectUnitsState,
    metricImperialToggle,
    savedSelection,
  } = useContext(SettingsContext);

  // useState
  const buttonsName = ['edit', 'cancel', 'apply'];
  const [settingsState, setSettingsState] = useState('units');

  // redux
  const dispatch = useDispatch();
  const state = useSelector(selectSettingsOfEss);
  const mode = state.interfaceMode;
  const applyState = state.buttonsOfSettings.settingsApplyButton;
  const essTesState = useSelector(selectUserState);
  const essState = essTesState.isEssSwitch;
  const tesState = essTesState.isTesSwitch;
  const forceCommandState = useSelector(selectForceAndCommand);
  const essHeaterTemp = forceCommandState.essHeaterTemp;
  const essEncloseTemp = forceCommandState.essEncloseTemp;
  const essOutsideTemp = forceCommandState.essOutsideTemp;
  const tgsTesOutsideTemp = forceCommandState.tgsTesOutsideTemp;
  const burningChamberTemp = forceCommandState.burningChamberTemp;
  const tgsHeaterTemp = forceCommandState.tgsHeaterTemp;
  const tgsTesEncloseTemp = forceCommandState.tgsTesEncloseTemp;
  const tesHeaterTemp = forceCommandState.tesHeaterTemp;

  const handleEssEditCancelApplyButtons = (buttonId) => {
    switch (settingsState) {
      case 'units':
        switch (buttonId) {
          case 0:
            dispatch(setSettingsEditButton());
            break;
          case 1:
            dispatch(setSettingsCancelButton());
            break;
          case 2:
            dispatch(setSettingsApplyUnitsButton(selectUnitsState));
            break;
          default:
            return;
        }
        break;
      // case 'wind factor trigger':
      //   switch (buttonId) {
      //     case 0:
      //       dispatch(setSettingsEditButton());
      //       break;
      //     case 1:
      //       dispatch(setSettingsCancelButton());
      //       break;
      //     case 2:
      //       dispatch(setSettingsApplyWindFactorTriggerButton());
      //       break;
      //     default:
      //       return;
      //   }
      //   break;
      case 'snow sensor trigger':
        switch (buttonId) {
          case 0:
            dispatch(setSettingsEditButton());
            break;
          case 1:
            dispatch(setSettingsCancelButton());
            break;
          case 2:
            dispatch(setSettingsApplyButton());
            dispatch(
              handleSnowSensorDefaultTemp(
                metricImperialToggle === 1
                  ? Math.round(
                      (Number(essSnowSensorInput.current.value - 32) * 5) / 9
                    )
                  : Number(essSnowSensorInput.current.value)
              )
            );

            break;
          default:
            return;
        }
        break;
      case 'force & commands':
        switch (buttonId) {
          case 0:
            dispatch(setSettingsEditButton());
            break;
          case 1:
            dispatch(setSettingsCancelButton());
            break;
          case 2:
            // todo finalize the ess select arts dispatch
            dispatch(setSettingsApplyButton());
            dispatch(
              setSettingsApplyForceCommandButton({
                essHeaterTemp,
                essEncloseTemp,
                essOutsideTemp,
              })
            );
            break;
          default:
            return;
        }
        break;
      case 'admin.':
        switch (buttonId) {
          case 0:
            dispatch(setSettingsEditButton());
            break;
          case 1:
            dispatch(setSettingsCancelButton());
            break;
          case 2:
            dispatch(setSettingsApplyButton());
            dispatch(setSettingsApplyAdminButton());
            break;
          default:
            return;
        }
        break;
      default:
        break;
    }
  };

  const handleTgsEditCancelApplyButtons = (buttonId) => {
    switch (settingsState) {
      case 'units':
        switch (buttonId) {
          case 0:
            dispatch(setSettingsEditButton());
            break;
          case 1:
            dispatch(setSettingsCancelButton());
            break;
          case 2:
            dispatch(setSettingsApplyButton());
            dispatch(setSettingsApplyUnitsButton(selectUnitsState));

            break;
          default:
            return;
        }
        break;
      // case 'wind factor trigger':
      //   switch (buttonId) {
      //     case 0:
      //       dispatch(setTgsSettingsEditButton());
      //       break;
      //     case 1:
      //       dispatch(setTgsSettingsCancelButton());
      //       break;
      //     case 2:
      //       dispatch(setTgsSettingsApplySnowFactorButton());
      //       break;
      //     default:
      //       return;
      //   }
      //   break;
      case 'snow sensor trigger':
        switch (buttonId) {
          case 0:
            dispatch(setSettingsEditButton());
            break;
          case 1:
            dispatch(setSettingsCancelButton());
            break;
          case 2:
            dispatch(setSettingsApplyButton());
            dispatch(
              handleTgsSnowSensorDefaultTemp(
                metricImperialToggle === 1
                  ? Math.round(
                      (Number(tgsSnowSensorInput.current.value - 32) * 5) / 9
                    )
                  : Number(tgsSnowSensorInput.current.value)
              )
            );
            break;
          default:
            return;
        }
        break;
      case 'force & commands':
        switch (buttonId) {
          case 0:
            dispatch(setSettingsEditButton());
            break;
          case 1:
            dispatch(setSettingsCancelButton());
            break;
          case 2:
            dispatch(setSettingsApplyButton());
            dispatch(
              setTgsSettingsApplyForceAndCommandButton({
                tgsTesOutsideTemp,
                burningChamberTemp,
                tgsHeaterTemp,
                tgsTesEncloseTemp,
              })
            );
            break;

          default:
            return;
        }
        break;
      case 'admin.':
        switch (buttonId) {
          case 0:
            dispatch(setSettingsEditButton());
            break;
          case 1:
            dispatch(setSettingsCancelButton());
            break;
          case 2:
            dispatch(setSettingsApplyButton());
            dispatch(handleTesSwitch(savedSelection));
            break;
          default:
            return;
        }
        break;
      default:
        break;
    }
  };

  const handleTgsTesEditCancelApplyButtons = (buttonId) => {
    switch (settingsState) {
      case 'units':
        switch (buttonId) {
          case 0:
            dispatch(setSettingsEditButton());
            break;
          case 1:
            dispatch(setSettingsCancelButton());
            break;
          case 2:
            dispatch(setSettingsApplyButton());
            dispatch(setSettingsApplyUnitsButton(selectUnitsState));
            break;
          default:
            return;
        }
        break;
      // case 'wind factor trigger':
      //   switch (buttonId) {
      //     case 0:
      //       dispatch(setTgsTesSettingsEditButton());
      //       break;
      //     case 1:
      //       dispatch(setTgsTesSettingsCancelButton());
      //       break;
      //     case 2:
      //       dispatch(setTgsTesSettingsApplyButton());
      //       break;
      //     default:
      //       return;
      //   }
      //   break;
      case 'snow sensor trigger':
        switch (buttonId) {
          case 0:
            dispatch(setSettingsEditButton());
            break;
          case 1:
            dispatch(setSettingsCancelButton());
            break;
          case 2:
            dispatch(setSettingsApplyButton());
            dispatch(
              handleSnowSensorDefaultTemp(
                metricImperialToggle === 1
                  ? Math.round(
                      (Number(tesSnowSensorInput.current.value - 32) * 5) / 9
                    )
                  : Number(tesSnowSensorInput.current.value)
              )
            );
            dispatch(
              handleTgsSnowSensorDefaultTemp(
                metricImperialToggle === 1
                  ? Math.round(
                      (Number(tgsSnowSensorInput.current.value - 32) * 5) / 9
                    )
                  : Number(tgsSnowSensorInput.current.value)
              )
            );
            break;
          default:
            return;
        }
        break;
      case 'force & commands':
        switch (buttonId) {
          case 0:
            dispatch(setSettingsEditButton());
            break;
          case 1:
            dispatch(setSettingsCancelButton());
            break;
          case 2:
            dispatch(setSettingsApplyButton());
            dispatch(
              setTgsTesSettingsApplyForceAndCommandButton({
                tgsTesOutsideTemp,
                burningChamberTemp,
                tgsHeaterTemp,
                tesHeaterTemp,
                tgsTesEncloseTemp,
              })
            );

            break;
          default:
            return;
        }
        break;
      case 'admin.':
        switch (buttonId) {
          case 0:
            dispatch(setSettingsEditButton());
            break;
          case 1:
            dispatch(setSettingsCancelButton());
            break;
          case 2:
            console.log('savedSelection', savedSelection);
            dispatch(setSettingsApplyButton());
            dispatch(handleTesSwitch(savedSelection));
            break;
          default:
            return;
        }
        break;
      default:
        break;
    }
  };

  return (
    <Wrapper mode={mode}>
      <TitleOfSettingsOptions />
      <>
        {applyState && (
          <Div>
            <ApplyButtonInvisibleDiv />
          </Div>
        )}
        <AllTheSelectionsOfSettingsOptions
          settingsData={settingsData}
          setSettingsState={setSettingsState}
        />
      </>
      <EditCancelApplyButtons
        handleClick={
          essState
            ? handleEssEditCancelApplyButtons
            : tesState
            ? handleTgsTesEditCancelApplyButtons
            : handleTgsEditCancelApplyButtons
        }
        buttonsName={buttonsName}
      />
    </Wrapper>
  );
}
export default ContainerOfAllSettingsSelectOptionsAndButtons;

const Wrapper = styled.div`
  width: 280px;
  height: 216px;

  border-radius: 4px;
  opacity: 1;

  ${flexboxCenter}
  flex-direction: column;
  justify-content: space-evenly;

  box-sizing: border-box;

  border: 0.5px solid black;
  background-image: -webkit-linear-gradient(
    180deg,
    ${(props) => (props.mode ? '#BBBBBB' : 'rgb(0, 0, 0) ')} 0%,
    ${(props) => (props.mode ? '#EBEBEB' : 'rgb(35, 58, 84)')} 100%
  );
  opacity: 1;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 14%);
  box-shadow: 0 0 2px rgba(0, 0, 0, 100%);
`;

const Div = styled.div`
  height: 140px;
  width: 270px;
  position: absolute;
`;
