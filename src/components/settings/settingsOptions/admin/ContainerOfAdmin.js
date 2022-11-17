import styled from 'styled-components';
import {
  flexboxCenter,
  justifyContentSpaceEvenly,
  // justifyContentSpaceBetween,
  // alignItemsFlexStart,
} from '../../../../styles/commonStyles';
import { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SystemHeader from './SystemHeader';
// import Control from './sysControl/Control';
import {
  selectSettingsOfEss,
  setResetAllSettingsButtons,
  setSettingsCancelButton,
  setSettingsEditButton,
} from '../../../../store/slices/settingsOfEssSlice';
import ContainerLogin from '../../../adminPassword/ContainerLogin';
import {
  handleTesSwitch,
  selectUserState,
  setAdminAccess,
} from '../../../../store/slices/userSlice';
import ContainerValveSettings from './valvetSettings/ContainerValvetSettings';
import Thermocouple from './sysControl/Thermocouple';
import ForceGasElectricSystem from './sysControl/ForceGasElectricSystem';
import TgsTesSwitch from './systemConfiguration/systemConfiguration';
import AddElementToBank from './AddElementToBank';
import SystemIdentification from './SystemIdentification';
import InvisibleDivForEditButton from '../editAndApplyMessageBoxes/InvisibleDivForEditButton';

import EditCancelApplyButtons from '../EditCancelApplyButtons';
import {
  selectSettingsOfTgsTes,
  setGasType,
  setThermocouple,
  setValveInputs,
} from '../../../../store/slices/settingsOfTgsTesSlice';
import { SettingsContext } from '../../../../context/ContextOfSettings';
import { handleAddNewElement } from '../../../../store/slices/ssrDescriptionSlice';
import { setForceGasAndElectricSystem } from '../../../../store/slices/settingsOfSysSlice';
import settingsSystemIdentificationSlice, {
  handleAdditionalSystemIdentification,
} from '../../../../store/slices/settingSystemIdentificationSlice';
// import SettingConfirmedMessage from '../../../userMessages/SettingConfirmedMessage';
import SettingAppliedMessage from '../../../userMessages/SettingAppliedMessage';
import ApplyButtonInvisibleDiv from '../editAndApplyMessageBoxes/ApplyButtonInvisibleDiv';
import SimulateFaults from './simulateFaults/SimulateFaults';

function ContainerOfAdmin() {
  // all the buttons for headers. blue and green.
  const tgsButton = './images/blueTgsButton.svg';
  const tgsButtonActive = './images/greenTgsButton.svg';
  const tesButton = './images/blueTesButton.svg';
  const tesButtonActive = './images/greenTesButton.svg';
  const essButton = './images/blueEssButton.svg';
  const essButtonActive = './images/greenEssButton.svg';
  const sysButton = './images/blueSysButton.svg';
  const sysButtonActive = './images/greenSysButton.svg';
  const sfButton = './images/blueSfButton.svg';
  const sfButtonActive = './images/greenSfButton.svg';
  // enable disable switches
  const enableSwitch = './images/greenEnableSwitch.png';
  const disableSwitch = './images/redDisableSwitch.png';
  const notActiveSwitch = './images/greyEnableDisableSwitch.png';

  const faultsTitles = [
    'ess - simulate faults',
    'tgs - simulate faults',
    'tes - simulate faults',
  ];

  // Redux
  const dispatch = useDispatch();
  const state = useSelector(selectUserState);
  const essState = useSelector(selectSettingsOfEss);
  const tgsTesState = useSelector(selectSettingsOfTgsTes);

  const adminAccess = state.isAdministrator;
  const essSwitch = state.isEssSwitch;
  const tesSwitch = state.isTesSwitch;

  const settingsEditButton = essState.buttonsOfSettings.settingsEditButton;
  const settingsApplyButton = essState.buttonsOfSettings.settingsApplyButton;
  const mode = essState.interfaceMode;

  const gasType = tgsTesState.gasType;

  // the names of 3 main buttons to make changes
  const buttonsName = ['edit', 'cancel', 'apply'];
  // the height of invisible div for editing

  const tgsHeight = '235px';
  const tesHeight = '312px';
  const sysHeight = '362px';

  // states

  const [toggleSysButton, setToggleSysButton] = useState(sysButtonActive);
  const [toggleTgsButton, setToggleTgsButton] = useState(tgsButton);
  const [toggleTesButton, setToggleTesButton] = useState(tesButton);
  const [toggleEssButton, setToggleEssButton] = useState(essButton);
  const [toggleSfButton, setToggleSfButton] = useState(sfButton);
  const [options, setOptions] = useState('');

  const [toggleThermocoupleSwitch, setToggleThermocoupleSwitch] =
    useState(false);
  const [checkPrevThermocoupleState, setCheckPrevThermocoupleState] =
    useState(false);
  const [toggleEnableDisableSwitch, setToggleEnableDisableSwitch] =
    useState(disableSwitch);
  const [forceGasElectric, setForceGasAndElectric] = useState(false);
  const [messageBox, setMessageBox] = useState(false);
  const [messageBoxContent, setMessageBoxContent] = useState({});

  // Tgs Tes Sys headers information
  const tgsTesSysHeaderData = [
    { title: 'typhoon gas system', button: toggleTgsButton },
    { title: 'typhoon electrical system', button: toggleTesButton },
    { title: 'system commands', button: toggleSysButton },
    { title: 'simulate faults', button: toggleSfButton },
  ];

  // Ess and Sys headers information
  const essHeaders = [
    {
      button: toggleEssButton,
      title: 'electric switch system',
    },
    {
      button: toggleSysButton,
      title: 'system commands',
    },
    { button: toggleSfButton, title: 'simulate faults' },
  ];

  // useContext
  const {
    activeSelect,
    setGasSelection,
    inputValue,
    inputElement,
    savedSelection,
    sysIdentification,
    inputData,
    sysConfiguration,
    saveButtonColor,
    valveButtonColor,
    setValveButtonColor,
    gasTypeButtonColor,
    setGasTypeButtonColor,
    setSaveButtonColor,
    setSysIdentification,
    setSysConfiguration,
    setButtonNames,
    setSaveButtonName,
    setConfigurationButtonName,
    setValveButtonName,
    setGasButtonName,
  } = useContext(SettingsContext);

  // useEffect sets back the selections to previous selection
  useEffect(() => {
    dispatch(setResetAllSettingsButtons());
    setToggleSysButton(sysButtonActive);
    setForceGasAndElectric(false);
    setGasSelection(gasType ? 1 : 0);
    setValveButtonColor(false);
    setGasTypeButtonColor(false);
    setSaveButtonColor(false);
    return function cleanup() {
      dispatch(setAdminAccess(false));
    };
  }, []);

  // toggles the the expend & close buttons and changes the color of Ess Tgs Tes and sys buttons to either blue or green
  useEffect(() => {
    if (!essSwitch) {
      switch (options) {
        case '': {
          setToggleSysButton(sysButton);
          setToggleTgsButton(tgsButton);
          setToggleTesButton(tesButton);
          setToggleSfButton(sfButton);
          break;
        }
        case 0: {
          setToggleSysButton(sysButton);
          setToggleTgsButton(tgsButtonActive);
          setToggleTesButton(tesButton);
          break;
        }
        case 1: {
          setToggleSysButton(sysButton);
          setToggleTgsButton(tgsButton);
          setToggleTesButton(tesButtonActive);
          break;
        }
        case 2: {
          setToggleSysButton(sysButtonActive);
          setToggleTgsButton(tgsButton);
          setToggleTesButton(tesButton);
          break;
        }
        case 3: {
          setToggleSfButton(sfButtonActive);
          setToggleSysButton(sysButton);
          setToggleTgsButton(tgsButton);
          setToggleTesButton(tesButton);
          break;
        }
        default:
          return;
      }
    } else {
      switch (options) {
        case '': {
          setToggleEssButton(essButton);
          setToggleSysButton(sysButton);
          setToggleSfButton(sfButton);
          break;
        }
        case 0: {
          setToggleEssButton(essButtonActive);
          setToggleSysButton(sysButton);
          setToggleSfButton(sfButton);
          break;
        }
        case 1: {
          setToggleSysButton(sysButtonActive);
          setToggleEssButton(essButton);
          setToggleSfButton(sfButton);
          break;
        }
        case 2: {
          setToggleSfButton(sfButtonActive);
          setToggleEssButton(essButton);
          setToggleSysButton(sysButton);
          break;
        }
        default:
          return;
      }
    }
  }, [options]);

  // set toggle for to close or expand the contents of each system
  const handleSelect = (value) =>
    options !== value ? setOptions(value) : setOptions('');

  // handles Ess dispatch once pressed on Apply button, Edit button or Cancel button
  const handleEssDispatches = (value) => {
    const buttonsIndex = Number(value);
    switch (buttonsIndex) {
      case 0:
        dispatch(setSettingsEditButton());
        break;
      case 1:
        dispatch(setSettingsCancelButton());
        setToggleThermocoupleSwitch(false);
        setSaveButtonColor(false);
        setSaveButtonName('save');
        break;
      case 2:
        if (toggleThermocoupleSwitch !== checkPrevThermocoupleState) {
          setCheckPrevThermocoupleState(!checkPrevThermocoupleState);
          dispatch(setThermocouple(toggleThermocoupleSwitch));
        }
        if (saveButtonColor) {
          dispatch(handleAddNewElement(inputElement));
          setSaveButtonColor(false);
          setSaveButtonName('save');
        }
        setMessageBox(true);
        handleEssMessageBox();
        dispatch(setResetAllSettingsButtons());
        break;
      default:
        return;
    }
  };

  // handles Ess Sys dispatch once pressed on Apply button, Edit button or Cancel button
  const handleEssSysDispatches = (value) => {
    const buttonsIndex = Number(value);
    switch (buttonsIndex) {
      case 0:
        dispatch(setSettingsEditButton());
        break;
      case 1:
        dispatch(setSettingsCancelButton());
        setSysIdentification(false);
        setButtonNames(['edit system', 'save']);
        break;
      case 2:
        if (sysIdentification) {
          dispatch(handleAdditionalSystemIdentification(inputData));
          setButtonNames(['edit system', 'save']);
          setSysIdentification(false);
        }
        setMessageBox(true);
        handleEssSysMessageBox();
        dispatch(setResetAllSettingsButtons());
        break;
      default:
        return;
    }
  };

  // handles the Tgs dispatch once pressed on Apply button, Edit button or Cancel button
  const handleTgsDispatches = (value) => {
    const buttonsIndex = Number(value);
    switch (buttonsIndex) {
      case 0:
        dispatch(setSettingsEditButton());
        break;
      case 1:
        dispatch(setSettingsCancelButton());
        setValveButtonColor(false);
        setGasTypeButtonColor(false);
        setValveButtonName('confirm');
        setGasButtonName('confirm');
        break;
      case 2:
        if (gasTypeButtonColor) {
          dispatch(setGasType(activeSelect));
          setGasTypeButtonColor(false);
          setGasButtonName('confirm');
        }
        if (valveButtonColor) {
          dispatch(setValveInputs(inputValue));
          setValveButtonColor(false);
          setValveButtonName('confirm');
        }
        setMessageBox(true);
        handleTgsMessageBox();
        dispatch(setResetAllSettingsButtons());
        break;
      default:
        return;
    }
  };

  // handles the Tes dispatch once pressed on Apply button, Edit button or Cancel button
  const handleTesDispatches = (value) => {
    const buttonsIndex = Number(value);
    switch (buttonsIndex) {
      case 0:
        dispatch(setSettingsEditButton());
        break;
      case 1:
        dispatch(setSettingsCancelButton());
        setSaveButtonColor(false);
        setToggleThermocoupleSwitch(false);
        setSaveButtonName('save');
        break;
      case 2:
        if (toggleThermocoupleSwitch) {
          dispatch(setThermocouple(toggleThermocoupleSwitch));
          setToggleThermocoupleSwitch(false);
        }
        if (saveButtonColor) {
          dispatch(handleAddNewElement(inputElement));
          setSaveButtonColor(false);
          setSaveButtonName('save');
        }
        setMessageBox(true);
        handleTesMessageBox();
        dispatch(setResetAllSettingsButtons());
        break;
      default:
        return;
    }
  };

  // handles the Tgs Tes Sys dispatch once pressed on Apply button, Edit button or Cancel button
  const handleTgsTesSysDispatches = (value) => {
    const buttonsIndex = Number(value);
    switch (buttonsIndex) {
      case 0:
        dispatch(setSettingsEditButton());
        break;
      case 1:
        dispatch(setSettingsCancelButton());
        setForceGasAndElectric(false);
        setButtonNames(['edit system', 'save']);
        setSysIdentification(false);
        setSysConfiguration(false);
        setConfigurationButtonName('save');
        break;
      case 2:
        if (forceGasElectric) {
          dispatch(setForceGasAndElectricSystem(forceGasElectric));
          setForceGasAndElectric(false);
        }
        if (sysIdentification) {
          dispatch(handleAdditionalSystemIdentification(inputData));
          setSysIdentification(false);
          setButtonNames(['edit system', 'save']);
        }
        if (sysConfiguration) {
          dispatch(handleTesSwitch(savedSelection));
          setSysConfiguration(false);
          setConfigurationButtonName('save');
        }

        setMessageBox(true);
        handleSysMessageBox();
        dispatch(setResetAllSettingsButtons());
        break;
      default:
        return;
    }
  };

  // thermocouple in tes content
  const handleThermocoupleSwitch = () => {
    setToggleThermocoupleSwitch(!toggleThermocoupleSwitch);
  };

  // for gas electric in sys content
  const handleForceGasElectricSwitch = () => {
    if (toggleEnableDisableSwitch === enableSwitch) {
      return setToggleEnableDisableSwitch(disableSwitch);
    } else setToggleEnableDisableSwitch(enableSwitch);
  };

  // these variables are used in the 5 functions below
  const messageDescription = 'settings have been applied';
  const noModification = 'no modifications done';

  // admin : Ess : message box shows what was changed
  const handleEssMessageBox = () => {
    const titleThermocouple = 'thermocouple';
    const titleAddElementToBank = 'add element to bank';
    if (
      toggleThermocoupleSwitch !== checkPrevThermocoupleState &&
      saveButtonColor
    ) {
      setMessageBoxContent({
        title: [titleThermocouple, titleAddElementToBank],
        content: messageDescription,
      });
    } else if (toggleThermocoupleSwitch !== checkPrevThermocoupleState) {
      setMessageBoxContent({
        title: [titleThermocouple],
        content: messageDescription,
      });
    } else if (saveButtonColor) {
      setMessageBoxContent({
        title: [titleAddElementToBank],
        content: messageDescription,
      });
    } else {
      setMessageBoxContent({ title: [noModification], content: '' });
    }
    return;
  };

  // admin : Ess : Sys : message box shows what was changed
  const handleEssSysMessageBox = () => {
    const titleOfIdentification = 'system identification';
    if (sysIdentification) {
      setMessageBoxContent({
        title: [titleOfIdentification],
        content: messageDescription,
      });
    } else {
      setMessageBoxContent({ title: [noModification], content: '' });
    }
    return;
  };

  // admin : Tgs : message box shows what was changed
  const handleTgsMessageBox = () => {
    const titleValveSettings = 'valve settings';
    const titleSelectGasType = 'select gas type';
    if (gasTypeButtonColor && valveButtonColor) {
      setMessageBoxContent({
        title: [titleValveSettings, titleSelectGasType],
        content: messageDescription,
      });
    } else if (gasTypeButtonColor) {
      setMessageBoxContent({
        title: [titleSelectGasType],
        content: messageDescription,
      });
    } else if (valveButtonColor) {
      setMessageBoxContent({
        title: [titleValveSettings],
        content: messageDescription,
      });
    } else {
      setMessageBoxContent({ title: [noModification], content: '' });
    }
    return;
  };

  // admin : Tes : message box shows what was changed
  const handleTesMessageBox = () => {
    const titleThermocouple = 'thermocouple';
    const titleAddElementToBank = 'add element to bank';
    if (
      toggleThermocoupleSwitch !== checkPrevThermocoupleState &&
      saveButtonColor
    ) {
      setMessageBoxContent({
        title: [titleThermocouple, titleAddElementToBank],
        content: messageDescription,
      });
    } else if (toggleThermocoupleSwitch !== checkPrevThermocoupleState) {
      setMessageBoxContent({
        title: [titleThermocouple],
        content: messageDescription,
      });
    } else if (saveButtonColor) {
      setMessageBoxContent({
        title: [titleAddElementToBank],
        content: messageDescription,
      });
    } else {
      setMessageBoxContent({ title: [noModification], content: '' });
    }
    return;
  };

  // admin : sys : message box shows what was changed
  const handleSysMessageBox = () => {
    const titleOfForce =
      'force - gas & electric system simultaneously on for 15 minutes';
    const titleOfConfiguration = 'system configuration';
    const titleOfIdentification = 'system identification';
    if (forceGasElectric && sysIdentification && sysConfiguration) {
      setMessageBoxContent({
        title: [titleOfForce, titleOfConfiguration, titleOfIdentification],
        content: messageDescription,
      });
    } else if (forceGasElectric && sysIdentification) {
      setMessageBoxContent({
        title: [titleOfForce, titleOfIdentification],
        content: messageDescription,
      });
    } else if (forceGasElectric && sysConfiguration) {
      setMessageBoxContent({
        title: [titleOfForce, titleOfConfiguration],
        content: messageDescription,
      });
    } else if (sysIdentification && sysConfiguration) {
      setMessageBoxContent({
        title: [titleOfConfiguration, titleOfIdentification],
        content: messageDescription,
      });
    } else if (forceGasElectric) {
      setMessageBoxContent({
        title: [titleOfForce],
        content: messageDescription,
      });
    } else if (sysIdentification) {
      setMessageBoxContent({
        title: [titleOfIdentification],
        content: messageDescription,
      });
    } else if (sysConfiguration) {
      setMessageBoxContent({
        title: [titleOfConfiguration],
        content: messageDescription,
      });
    } else {
      setMessageBoxContent({ title: [noModification], content: '' });
    }
    return;
  };

  const handleCloseMessageBox = () => {
    setMessageBox(false);
    setOptions('');
    return;
  };

  return (
    <Wrapper>
      <Wrapper2>
        <Wrapper3 mode={mode}>
          {/* ess system */}
          {essSwitch
            ? essHeaders.map((value, index) => {
                return (
                  <div key={index}>
                    <Wrapper4>
                      <WrapperEss5
                        changeBorder0={options === index && index === 0}
                        changeBorder1={options === index && index === 1}
                        changeBorder2={options === index && index === 2}
                      >
                        <EssWrapper>
                          {/* invisible div to display message box if the changes done weren't applied */}
                          {settingsApplyButton && (
                            <WrapperApplyButton>
                              <ApplyButtonInvisibleDiv />
                            </WrapperApplyButton>
                          )}
                          {/* headers of ess and sys */}
                          <SystemHeader
                            name={value.title}
                            toggleButtonColor={value.button}
                            handleSelect={handleSelect}
                            index={index}
                            options={options}
                            essSwitch={essSwitch}
                            tesSwitch={tesSwitch}
                            adminAccess={adminAccess}
                          />
                        </EssWrapper>
                        {/* the content of ess */}
                        {adminAccess && index === 0 && options === index && (
                          <WrapperThermocoupleEss>
                            {!settingsEditButton && (
                              <InvisibleDivForEditButton height={'284px'} />
                            )}
                            <SectionWrapperEss>
                              <WrapperThermocouple2>
                                <Thermocouple
                                  changeButtonColor={toggleThermocoupleSwitch}
                                  handleLeftSwitch={handleThermocoupleSwitch}
                                />
                              </WrapperThermocouple2>
                            </SectionWrapperEss>

                            <SectionWrapper>
                              <AddElementToBank />
                            </SectionWrapper>
                            <WrapperButtons>
                              <EditCancelApplyButtons
                                handleClick={handleEssDispatches}
                                buttonsName={buttonsName}
                              />
                            </WrapperButtons>
                            {messageBox && (
                              <SettingAppliedMessage
                                title={'change options'}
                                message={messageBoxContent}
                                onClose={handleCloseMessageBox}
                              />
                            )}
                          </WrapperThermocoupleEss>
                        )}
                        {/* content of general sys*/}
                        {adminAccess && options === index && index === 1 && (
                          <Wrapper6>
                            {!settingsEditButton && (
                              <InvisibleDivForEditButton height={'158px'} />
                            )}

                            <SectionWrapper>
                              <SystemIdentification />
                            </SectionWrapper>
                            {/* the 3 buttons edit cancel and apply */}
                            <WrapperButtons>
                              <EditCancelApplyButtons
                                handleClick={handleEssSysDispatches}
                                buttonsName={buttonsName}
                              />
                            </WrapperButtons>
                            {messageBox && (
                              <SettingAppliedMessage
                                title={'change options'}
                                message={messageBoxContent}
                                onClose={handleCloseMessageBox}
                              />
                            )}
                          </Wrapper6>
                        )}
                        {/* simulate faults */}
                        {adminAccess && index === 2 && options === index ? (
                          <WrapperSf>
                            <WrapperSf1>
                              {faultsTitles?.map((value, index) => {
                                return (
                                  <WrapperContent
                                    key={Math.floor(Math.random() * 1555555)}
                                  >
                                    <SimulateFaults
                                      titles={value}
                                      index={index}
                                      color={index === 1 || index === 2}
                                    />
                                  </WrapperContent>
                                );
                              })}
                            </WrapperSf1>
                          </WrapperSf>
                        ) : (
                          !adminAccess && (
                            <LoginWrapper>
                              {/* login in pop up */}
                              <ContainerLogin />
                            </LoginWrapper>
                          )
                        )}
                      </WrapperEss5>
                    </Wrapper4>
                  </div>
                );
              })
            : tgsTesSysHeaderData.map((data, index) => {
                return (
                  <Wrapper4 key={index}>
                    <Wrapper5
                      changeBorder0={options === index && index === 0}
                      changeBorder1={options === index && index === 1}
                      changeBorder2={options === index && index === 2}
                    >
                      <TgsTesSysWrapper>
                        {/* invisible div to display message box if the changes done weren't applied */}
                        {settingsApplyButton && (
                          <WrapperApplyButton>
                            <ApplyButtonInvisibleDiv />
                          </WrapperApplyButton>
                        )}
                        {/* tgs tes and sys  headers*/}
                        <SystemHeader
                          handleSelect={handleSelect}
                          name={data.title}
                          toggleButtonColor={data.button}
                          index={index}
                          options={options}
                          adminAccess={adminAccess}
                          tesSwitch={tesSwitch}
                          essSwitch={essSwitch}
                        />
                      </TgsTesSysWrapper>
                      {/* tgs content */}
                      {index === 0 && adminAccess && options === index && (
                        <ValveWrapper>
                          {!settingsEditButton && (
                            <InvisibleDivForEditButton height={tgsHeight} />
                          )}
                          <ContainerValveSettings />
                          <WrapperButtons>
                            <EditCancelApplyButtons
                              handleClick={handleTgsDispatches}
                              buttonsName={buttonsName}
                            />
                          </WrapperButtons>
                          {messageBox && (
                            <SettingAppliedMessage
                              title={'change options'}
                              message={messageBoxContent}
                              onClose={handleCloseMessageBox}
                            />
                          )}
                        </ValveWrapper>
                      )}
                      {/* tes content */}
                      {tesSwitch &&
                        index === 1 &&
                        adminAccess &&
                        options === index && (
                          <WrapperThermocoupleAndSimulateFaults>
                            {!settingsEditButton && (
                              <InvisibleDivForEditButton height={tesHeight} />
                            )}
                            <WrapperThermocouple1>
                              <SectionWrapperEss>
                                <WrapperThermocouple2>
                                  <Thermocouple
                                    changeButtonColor={toggleThermocoupleSwitch}
                                    handleLeftSwitch={handleThermocoupleSwitch}
                                  />
                                </WrapperThermocouple2>
                              </SectionWrapperEss>

                              <SectionWrapper1>
                                <AddElementToBank />
                              </SectionWrapper1>
                            </WrapperThermocouple1>
                            <WrapperButtons>
                              <EditCancelApplyButtons
                                handleClick={handleTesDispatches}
                                buttonsName={buttonsName}
                              />
                            </WrapperButtons>
                            {messageBox && (
                              <SettingAppliedMessage
                                title={'change options'}
                                message={messageBoxContent}
                                onClose={handleCloseMessageBox}
                              />
                            )}
                          </WrapperThermocoupleAndSimulateFaults>
                        )}
                      {!adminAccess && index === 2 && (
                        <LoginWrapper>
                          {/* login pop up for tgs tes */}
                          <ContainerLogin />
                        </LoginWrapper>
                      )}
                      {/* general sys content */}
                      {index === 2 && adminAccess && options === index && (
                        <WrapperSys>
                          {!settingsEditButton && (
                            <InvisibleDivForEditButton height={sysHeight} />
                          )}
                          <Wrapper6>
                            <SectionWrapper>
                              <ControlWrapper>
                                <ForceGasElectricSystem
                                  handleRightSwitch={
                                    handleForceGasElectricSwitch
                                  }
                                  toggleRightEnableDisable={
                                    toggleEnableDisableSwitch
                                  }
                                  handleSave={setForceGasAndElectric}
                                  buttonColor={forceGasElectric}
                                />

                                <WrapperTgsTesSwitch>
                                  <TgsTesSwitch tesSwitch={tesSwitch} />
                                </WrapperTgsTesSwitch>
                              </ControlWrapper>
                            </SectionWrapper>

                            <SectionWrapper>
                              <SystemIdentification />
                            </SectionWrapper>
                          </Wrapper6>
                          {/* the 3 buttons edit cancel and apply
                           */}
                          <WrapperButtons>
                            <EditCancelApplyButtons
                              handleClick={handleTgsTesSysDispatches}
                              buttonsName={buttonsName}
                            />
                          </WrapperButtons>
                          {messageBox && (
                            <SettingAppliedMessage
                              title={'change options'}
                              message={messageBoxContent}
                              onClose={handleCloseMessageBox}
                            />
                          )}
                        </WrapperSys>
                      )}
                      {/* simulate faults */}
                      {adminAccess && index === 3 && options === index && (
                        <WrapperSf>
                          <WrapperSf1>
                            {faultsTitles?.map((value, index) => {
                              return (
                                <WrapperContent
                                  key={Math.floor(Math.random() * 1555555)}
                                >
                                  <SimulateFaults
                                    titles={value}
                                    index={index}
                                    color={index === 0}
                                  />
                                </WrapperContent>
                              );
                            })}
                          </WrapperSf1>
                        </WrapperSf>
                      )}
                    </Wrapper5>
                  </Wrapper4>
                );
              })}
        </Wrapper3>
      </Wrapper2>
    </Wrapper>
  );
}

export default ContainerOfAdmin;

const Wrapper = styled.div`
  width: 594px;
  height: auto;
  margin-top: 2px;
  margin-bottom: 6px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 6px;
  opacity: 1;
  ${flexboxCenter};
  justify-content: space-around;
  flex-direction: column;
`;

const Wrapper2 = styled.div`
  width: 590px;
  height: auto;
  margin-bottom: 2px;
  margin-top: 2px;

  background-image: -webkit-linear-gradient(
    90deg,
    rgb(0, 0, 0) 0%,
    rgb(35, 58, 84) 100%
  );

  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 14%);
  box-shadow: 0px 0px 2px #000000;
  border: 0.5px solid #000000;
  border-radius: 4px;
  opacity: 1;

  ${flexboxCenter}
  flex-direction: column;
  justify-content: space-evenly;
`;

const Wrapper3 = styled.div`
  width: 566px;
  height: auto;
  margin-top: 10px;
  margin-bottom: 8px;

  background: ${({ mode }) => (mode ? 'rgb(255,255,255)' : '#233a54')};

  box-shadow: inset 0px 1px 5px #000000, 0px 0px 2px #00000080;
  border-radius: 31px;
  opacity: 1;
  ${flexboxCenter};
  flex-direction: column;
`;

const Wrapper4 = styled.div`
  width: 566px;
  height: auto;
  margin-bottom: 2px;
  margin-top: 3px;
  padding-left: 2px;
  padding-right: 2px;

  background-color: rgb(35, 58, 84) 100%;

  border-radius: 31px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WrapperEss5 = styled.div`
  width: 560px;
  height: auto;
  ${({ changeBorder1 }) => changeBorder1 && 'margin-bottom: 2px'};

  background: transparent
    linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(20, 32, 51) 100%) 0% 0% no-repeat
    padding-box;
  border-radius: ${({ changeBorder0 }) =>
    changeBorder0 ? '28px 28px 14px 14px' : '28px'};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper5 = styled.div`
  width: 560px;
  height: auto;
  ${({ changeBorder2 }) => changeBorder2 && 'margin-bottom: 2px'};

  background: transparent
    linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(20, 32, 51) 100%) 0% 0% no-repeat
    padding-box;
  border-radius: ${({ changeBorder0, changeBorder1 }) =>
    changeBorder0 || changeBorder1 ? '28px 28px 14px 14px' : '28px'};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const EssWrapper = styled.div`
  width: 560px;
  height: 56px;
  padding: 1px;
`;

const WrapperApplyButton = styled.div`
  width: 558px;
  height: 48px;
  position: absolute;
`;

const TgsTesSysWrapper = styled.div`
  width: 560px;
  height: 56px;
  padding: 1px;
  border-radius: 16px;

  /* background: rgb(20, 32, 51) 100%; */
  /* border-radius: 28px;
  ${flexboxCenter}
  flex-direction: column; */
`;

const ValveWrapper = styled.div`
  width: 558px;
  height: auto;
  margin-top: 5px;
  margin-bottom: 1px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 0px 2px #000000;
  border: 0.5px solid #142033;
  border-radius: 14px;
  opacity: 1;
  ${flexboxCenter};
  align-items: flex-start;
  flex-direction: column;
`;

const WrapperThermocoupleEss = styled.div`
  width: 554px;
  height: auto;
  margin-top: 5px;
  margin-bottom: 20px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 0px 2px #000000;
  border: 0.5px solid #142033;
  border-radius: 14px;
  opacity: 1;
  ${flexboxCenter};

  flex-direction: column;
`;

const WrapperThermocoupleAndSimulateFaults = styled.div`
  width: 558px;
  height: auto;
  margin-top: 5px;
  margin-bottom: 1px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 0px 2px #000000;
  border: 0.5px solid #142033;
  border-radius: 14px;
  opacity: 1;
  ${flexboxCenter};
  flex-direction: column;
`;

const WrapperThermocouple1 = styled.div`
  width: 554px;
  height: auto;
  margin-top: 1px;
  margin-bottom: 20px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 13px;
  opacity: 1;

  display: flex;
  flex-direction: column;
`;

const WrapperButtons = styled.div`
  width: 542px;
  height: auto;
  margin-bottom: 10px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const WrapperSys = styled.div`
  width: 558px;
  height: auto;
  margin-top: 5px;
  margin-bottom: 1px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 0px 6px #000000;
  border: 0.5px solid #142033;
  border-radius: 14px 14px 27px 27px;
  opacity: 1;
  ${flexboxCenter};
  flex-direction: column;
`;

const SectionWrapperEss = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: -3px;
  margin-bottom: 3px;
`;

const SectionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -3px;
  margin-bottom: 3px;
`;

const SectionWrapper1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2px;
  width: 100%;
`;

const WrapperThermocouple2 = styled.div`
  width: auto;
  height: auto;
  margin-left: 2px;
  margin-bottom: 2px;
`;

const SysWrapper = styled.div`
  width: 564px;
  height: 52px;
  margin-bottom: 3px;
`;

const Wrapper6 = styled.div`
  width: 554px;
  height: auto;
  margin-top: 1px;
  margin-bottom: 20px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 13px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginWrapper = styled.div`
  /* margin-bottom: 4px;
    margin-bottom: 10px; */
  width: 603px;
  height: 391px;

  position: fixed;
  top: 195px;
  left: 410px;

  background-color: rgba(0, 0, 0, 0.2);
  z-index: 10000;
  ${flexboxCenter};
  align-items: flex-start;
`;

const WrapperSf = styled.div`
  width: 556px;
  height: auto;
  margin-top: 5px;
  margin-bottom: 2px;
  padding: 2px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 0px 2px #000000;
  border: 0.5px solid #142033;
  border-radius: 16px 16px 27px 27px;
  opacity: 1;
  ${flexboxCenter};
`;

const WrapperSf1 = styled.div`
  width: auto;
  height: auto;
  padding: 2px;
  margin-bottom: 2rem;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 14px;
  opacity: 1;
  ${justifyContentSpaceEvenly}
  flex-direction: column;
`;

const WrapperContent = styled.div``;

const ControlWrapper = styled.div`
  width: 554px;
  height: auto;
  margin-top: 4px;
  margin-bottom: 10px;
  display: flex;
  /* flex-direction: row; */
  align-items: flex-start;
  justify-content: space-evenly;
`;

const WrapperTgsTesSwitch = styled.div``;
