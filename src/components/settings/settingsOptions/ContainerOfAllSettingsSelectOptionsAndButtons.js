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
  setSettingsApplyUnitsButton,
  setSettingsApplyWindFactorTriggerButton,
  setSettingsApplySnowSensorTriggerButton,
  setSettingsApplyForceCommandButton,
  setSettingsApplyAdminButton,
  setEditButtonToFalse,
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
import { selectUserState } from '../../../store/slices/userSlice';
import { SettingsContext } from '../../../context/ContextOfSettings';
import { handleSnowSensorDefaultTemp } from '../../../store/slices/essSwitchSlice';
import { selectForceAndCommand } from '../../../store/slices/forceAndCommandSlice';
import { handleTgsSnowSensorDefaultTemp } from '../../../store/slices/tgsSwitchSlice';

function ContainerOfAllSettingsSelectOptionsAndButtons() {
  const settingsData = [
    'units',
    'wind factor trigger',
    'snow sensor trigger',
    'force & command',
    'admin.',
  ];
  // useContext
  const {
    settingState,
    essSnowSensorInput,
    tgsSnowSensorInput,
    tesSnowSensorInput,
    selectUnitsState,
  } = useContext(SettingsContext);

  // useState
  const buttonsName = ['edit', 'cancel', 'apply'];
  const [settingsState, setSettingsState] = useState('units');

  // redux
  const dispatch = useDispatch();
  const state = useSelector(selectSettingsOfEss);
  const mode = state.interfaceMode;
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
            dispatch(setEditButtonToFalse());
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
            dispatch(setEditButtonToFalse());
            break;
          case 2:
            dispatch(setSettingsApplySnowSensorTriggerButton());
            dispatch(
              handleSnowSensorDefaultTemp(essSnowSensorInput.current.value)
            );

            break;
          default:
            return;
        }
        break;
      case 'force & command':
        switch (buttonId) {
          case 0:
            dispatch(setSettingsEditButton());
            break;
          case 1:
            dispatch(setSettingsCancelButton());
            dispatch(setEditButtonToFalse());
            break;
          case 2:
            // todo finalize the ess select arts dispatch
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
            dispatch(setEditButtonToFalse());
            break;
          case 2:
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

  const handleTgsTesEditCancelApplyButtons = (buttonId) => {
    switch (settingsState) {
      case 'units':
        switch (buttonId) {
          case 0:
            dispatch(setSettingsEditButton());
            break;
          case 1:
            dispatch(setTgsTesSettingsCancelButton());
            dispatch(setEditButtonToFalse());
            break;
          case 2:
            dispatch(setSettingsApplyUnitsButton(selectUnitsState));
            dispatch(setEditButtonToFalse());
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
            dispatch(setTgsTesSettingsCancelButton());
            dispatch(setEditButtonToFalse());
            break;
          case 2:
            dispatch(setTgsTesSettingsApplySnowSensorButton());
            dispatch(setEditButtonToFalse());
            dispatch(
              handleSnowSensorDefaultTemp(tesSnowSensorInput.current.value)
            );
            dispatch(
              handleTgsSnowSensorDefaultTemp(tgsSnowSensorInput.current.value)
            );
            break;
          default:
            return;
        }
        break;
      case 'force & command':
        switch (buttonId) {
          case 0:
            dispatch(setSettingsEditButton());
            break;
          case 1:
            dispatch(setTgsTesSettingsCancelButton());
            dispatch(setEditButtonToFalse());
            break;
          case 2:
            dispatch(
              setTgsSettingsApplyForceAndCommandButton({
                tgsTesOutsideTemp,
                burningChamberTemp,
                tgsHeaterTemp,
                tesHeaterTemp,
                tgsTesEncloseTemp,
              })
            );
            dispatch(setEditButtonToFalse());
            break;
          default:
            return;
        }
        break;
      case 'admin.':
        switch (buttonId) {
          case 0:
            // dispatch(setTgsTesSettingsEditButton());
            dispatch(setSettingsEditButton());
            break;
          case 1:
            dispatch(setTgsTesSettingsCancelButton());
            dispatch(setEditButtonToFalse());
            break;
          case 2:
            dispatch(setTgsTesSettingsApplyAdminButton());
            dispatch(setEditButtonToFalse());
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
            // dispatch(setTgsSettingsEditButton());
            dispatch(setSettingsEditButton());
            break;
          case 1:
            dispatch(setTgsSettingsCancelButton());
            dispatch(setEditButtonToFalse());
            break;
          case 2:
            // dispatch(
            //   setTgsSettingsApplyUnitsButton(settingState.essSelectUnits)
            // );
            dispatch(setSettingsApplyUnitsButton(selectUnitsState));
            dispatch(setEditButtonToFalse());

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
            dispatch(setTgsSettingsCancelButton());
            dispatch(setEditButtonToFalse());
            break;
          case 2:
            dispatch(setTgsSettingsApplySnowSensorButton());
            dispatch(
              handleTgsSnowSensorDefaultTemp(tgsSnowSensorInput.current.value)
            );
            dispatch(setEditButtonToFalse());
            break;
          default:
            return;
        }
        break;
      case 'force & command':
        switch (buttonId) {
          case 0:
            dispatch(setSettingsEditButton());
            break;
          case 1:
            dispatch(setTgsSettingsCancelButton());
            dispatch(setEditButtonToFalse());
            break;
          case 2:
            dispatch(
              setTgsSettingsApplyForceAndCommandButton({
                tgsTesOutsideTemp,
                burningChamberTemp,
                tgsHeaterTemp,
                tgsTesEncloseTemp,
              })
            );
            dispatch(setEditButtonToFalse());
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
            dispatch(setTgsSettingsCancelButton());
            dispatch(setEditButtonToFalse());
            break;
          case 2:
            dispatch(setTgsSettingsApplyAdminButton());
            dispatch(setEditButtonToFalse());
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
      <AllTheSelectionsOfSettingsOptions
        settingsData={settingsData}
        setSettingsState={setSettingsState}
      />
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

// const ContainerButtons = styled.div`
//   width: 270px;
//   height: 37px;
//   background: ${(props) => (props.mode ? '#FFFFFF' : '#233a54')};
//   /* background: #233a54 0% 0% no-repeat padding-box; */
//   box-shadow: inset 0px 0px 3px #000000;
//   border-radius: 19px;
//   opacity: 1;

//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 0 1px;
// `;

export default ContainerOfAllSettingsSelectOptionsAndButtons;
