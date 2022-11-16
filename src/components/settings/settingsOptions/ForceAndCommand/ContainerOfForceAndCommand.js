import styled from 'styled-components';
import { flexboxCenter } from '../../../../styles/commonStyles';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectSettingsOfEss,
  setAts,
  setResetAllSettingsButtons,
  setSettingsCancelButton,
  setSettingsEditButton,
  setTelemetry,
} from '../../../../store/slices/settingsOfEssSlice';
import SystemHeaderForceAndCommand from './SysHeaderForceAndCommand';
import SelectAts from './selectArts/SelectAts';
import SelectTc from './selectTc/SelectTc';
import { selectUserState } from '../../../../store/slices/userSlice';
import InvisibleDivForEditButton from '../editAndApplyMessageBoxes/InvisibleDivForEditButton';
import EditCancelApplyButtons from '../EditCancelApplyButtons';
import SettingAppliedMessage from '../../../userMessages/SettingAppliedMessage';
import { useContext } from 'react';
import { SettingsContext } from '../../../../context/ContextOfSettings';
import {
  selectSettingsOfTgsTes,
  setTesAts,
  setTgsAts,
  setTgsTesTelemetry,
} from '../../../../store/slices/settingsOfTgsTesSlice';
import ApplyButtonInvisibleDiv from '../editAndApplyMessageBoxes/ApplyButtonInvisibleDiv';
import {
  selectForceAndCommand,
  setTgsTesTcTemp,
} from '../../../../store/slices/forceAndCommandSlice';

function ContainerOfForceAndCommand() {
  // button images of TGS TES ESS SYS
  const essButton = './images/blueEssButton.svg';
  const essButtonActive = './images/greenEssButton.svg';
  const sysButton = './images/blueSysButton.svg';
  const sysButtonActive = './images/greenSysButton.svg';
  const tgsButton = './images/blueTgsButton.svg';
  const tgsButtonActive = './images/greenTgsButton.svg';
  const tesButton = './images/blueTesButton.svg';
  const tesButtonActive = './images/greenTesButton.svg';

  // the contents of select ATS of GP and EBP of Ess, Tgs and Tes
  const essGpEbp = [
    'block and do not allow ess to operate when on ebp-emergency backup power',
    'reactivates ess when powered by ebp emergency backup power',
  ];
  const tesGpEbp = [
    'switch to typhoon gas powered heating system when on emergency backup power',
    'reactivates tes when powered by ebp emergency backup power',
    'tes to remain off when powered by ebp emergency backup power',
  ];
  const tgsGpEbp = [
    'reactive to tgs typhoon gas power heating system when on ebp emergency backup power',
    'block and do not allow tgs to operate when on ebp emergency backup power',
  ];

  // the names of 3 main buttons to make changes
  const buttonsName = ['edit', 'cancel', 'apply'];

  // redux
  const dispatch = useDispatch();
  const stateOfEssTgs = useSelector(selectUserState);
  const tgsTesState = useSelector(selectSettingsOfTgsTes);
  const state = useSelector(selectSettingsOfEss);
  const TcState = useSelector(selectForceAndCommand);
  const essSwitch = stateOfEssTgs.isEssSwitch;
  const tesSwitch = stateOfEssTgs.isTesSwitch;
  const mode = state.interfaceMode;
  const settingsEditButton = state.buttonsOfSettings.settingsEditButton;
  const settingsApplyButton = state.buttonsOfSettings.settingsApplyButton;
  // states for select ATS in Ess, Tgs and Tes of force and commands
  const atsEssState = state.selectAtsState;
  const atsTesState = tgsTesState.allSelects.selectAtsTesState;
  const atsTgsState = tgsTesState.allSelects.selectAtsTgsState;
  // states of Tc telemetry of Ess and Tgs/Tes
  const essHeater = TcState.essHeaterTemp;
  const essEnclose = TcState.essEncloseTemp;
  const essOutside = TcState.essOutsideTemp;
  const burningChamber = TcState.burningChamberTemp;
  const tgsHeater = TcState.tgsHeaterTemp;
  const tesHeater = TcState.tesHeaterTemp;
  const tgsTesEnclose = TcState.tgsTesEncloseTemp;
  const tgsTesOutside = TcState.tgsTesOutsideTemp;

  // useContext
  const {
    essAtsState,
    setEssAtsState,
    tgsAtsState,
    setTgsAtsState,
    tesAtsState,
    setTesAtsState,
    temperatureSelection,
  } = useContext(SettingsContext);

  // State buttons of Sys, Ess, Tgs and Tes
  const [toggleSysButtonColor, setToggleSysButtonColor] =
    useState(sysButtonActive);
  const [toggleEssButtonColor, setToggleEssButtonColor] = useState(essButton);
  const [toggleTgsButtonColor, setToggleTgsButtonColor] = useState(tgsButton);
  const [toggleTesButtonColor, setToggleTesButtonColor] = useState(tesButton);

  // states for messageBox
  const [messageBox, setMessageBox] = useState(false);
  const [messageBoxContent, setMessageBoxContent] = useState({});

  // state handling the color of ats confirm button
  const [essAtsConfirmButton, setEssAtsConfirmButton] = useState(false);
  const [tgsAtsConfirmButton, setTgsAtsConfirmButton] = useState(false);
  const [tesAtsConfirmButton, setTesAtsConfirmButton] = useState(false);

  // keewp track of expand or close button states
  const [options, setOptions] = useState('');

  const essHeaders = [
    {
      button: toggleEssButtonColor,
      title: 'electric switch system',
    },
    {
      button: toggleSysButtonColor,
      title: 'system commands',
    },
  ];

  const tgsHeaders = [
    {
      button: toggleTgsButtonColor,
      title: 'typhoon gas system',
    },
    {
      button: toggleTesButtonColor,
      title: 'typhoon electrical system',
    },
    {
      button: toggleSysButtonColor,
      title: 'system commands',
    },
  ];

  const handleSelect = (index) =>
    options !== index ? setOptions(index) : setOptions('');

  // set the last saved states of select Ats
  useEffect(() => {
    dispatch(setResetAllSettingsButtons());
    setEssAtsState(atsEssState);
    setTgsAtsState(atsTgsState);
    setTesAtsState(atsTesState);
  }, []);

  // sets each button tgs, tes, sys or ess to either blue or green
  useEffect(() => {
    if (!essSwitch) {
      switch (options) {
        case '': {
          setToggleSysButtonColor(sysButton);
          setToggleTgsButtonColor(tgsButton);
          setToggleTesButtonColor(tesButton);
          break;
        }
        case 0: {
          setToggleTgsButtonColor(tgsButtonActive);
          setToggleTesButtonColor(tesButton);
          setToggleSysButtonColor(sysButton);

          break;
        }
        case 1: {
          setToggleTesButtonColor(tesButtonActive);
          setToggleSysButtonColor(sysButton);
          setToggleTgsButtonColor(tgsButton);
          break;
        }

        case 2: {
          setToggleSysButtonColor(sysButtonActive);
          setToggleTgsButtonColor(tgsButton);
          setToggleTesButtonColor(tesButton);
          break;
        }

        default:
          break;
      }
    } else {
      switch (options) {
        case '': {
          setToggleEssButtonColor(essButton);
          setToggleSysButtonColor(sysButton);
          break;
        }
        case 0: {
          setToggleEssButtonColor(essButtonActive);
          setToggleSysButtonColor(sysButton);

          break;
        }

        case 1: {
          setToggleSysButtonColor(sysButtonActive);
          setToggleEssButtonColor(essButton);

          break;
        }

        default:
          return;
      }
    }
  }, [options]);

  // handles Ess dispatch once pressed on Apply button, Edit button or Cancel button
  const handleEssDispatches = (value) => {
    const buttonsIndex = Number(value);
    switch (buttonsIndex) {
      case 0:
        dispatch(setSettingsEditButton());
        break;
      case 1:
        dispatch(setSettingsCancelButton());
        setEssAtsConfirmButton(false);
        break;
      case 2:
        if (essAtsConfirmButton && typeof essAtsState === 'number') {
          dispatch(setAts(essAtsState));
          setEssAtsConfirmButton(false);
        }
        setMessageBox(true);
        handleEssMessageBox();
        dispatch(setResetAllSettingsButtons());
        break;
      default:
        return;
    }
  };

  // handles Ess: Sys dispatch once pressed on Apply button, Edit button or Cancel button
  const handleEssSysDispatches = (value) => {
    const buttonsIndex = Number(value);
    switch (buttonsIndex) {
      case 0:
        dispatch(setSettingsEditButton());
        break;
      case 1:
        dispatch(setSettingsCancelButton());
        break;
      case 2:
        if (temperatureSelection === 1 && (essHeater || essEnclose)) {
          dispatch(setTelemetry({ essHeater, essEnclose, essOutside }));
        } else {
          dispatch(setTelemetry({ essHeater, essEnclose, essOutside: null }));
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
        setTgsAtsConfirmButton(false);
        break;
      case 2:
        if (tgsAtsConfirmButton && !isNaN(+tgsAtsState)) {
          dispatch(setTgsAts(tgsAtsState));
          setTgsAtsConfirmButton(false);
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
        setTesAtsConfirmButton(false);
        break;
      case 2:
        if (tesAtsConfirmButton && !isNaN(+atsTesState)) {
          dispatch(setTesAts(tesAtsState));
          setTesAtsConfirmButton(false);
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
        break;
      case 2:
        if (
          temperatureSelection === 1 &&
          (burningChamber || tgsHeater || tesHeater || tgsTesEnclose)
        ) {
          dispatch(
            setTgsTesTelemetry({
              burningChamber,
              tgsHeater,
              tesHeater,
              tgsTesEnclose,
              tgsTesOutside,
            })
          );
        } else {
          dispatch(
            setTgsTesTelemetry({
              burningChamber,
              tgsHeater,
              tesHeater,
              tgsTesEnclose,
              tgsTesOutside: null,
            })
          );
        }
        setMessageBox(true);
        handleTgsTesSysMessageBox();
        dispatch(setResetAllSettingsButtons());
        break;
      default:
        return;
    }
  };

  // theses variables are usd in the 5 functions below
  const messageDescription = 'settings have been applied';
  const noModification = 'no modifications done';
  const errorMessage = 'error';
  // force & commands : Ess :  message box shows what was changed
  const handleEssMessageBox = () => {
    const titleSelectAts = 'select ats';
    if (essAtsConfirmButton && !isNaN(+atsEssState)) {
      setMessageBoxContent({
        title: [titleSelectAts],
        content: messageDescription,
      });
    } else if (!essAtsConfirmButton) {
      setMessageBoxContent({
        title: [errorMessage],
        content: 'please select and press apply to make changes',
      });
    } else {
      setMessageBoxContent({ title: [noModification], content: '' });
    }
    return;
  };

  // force & commands : Ess : Sys: message box shows what was changed
  const handleEssSysMessageBox = () => {
    const titleSelectTc = 'select t/c telemetry';
    if (typeof temperatureSelection === 'number' && (essHeater || essEnclose)) {
      setMessageBoxContent({
        title: [titleSelectTc],
        content: messageDescription,
      });
    } else {
      setMessageBoxContent({ title: [noModification], content: '' });
    }
    return;
  };

  // force & commands : Tgs : message box shows what was changed
  const handleTgsMessageBox = () => {
    const titleSelectAts = 'select ats';
    if (tgsAtsConfirmButton && !isNaN(+tgsAtsState)) {
      setMessageBoxContent({
        title: [titleSelectAts],
        content: messageDescription,
      });
    } else if (!tgsAtsConfirmButton) {
      setMessageBoxContent({
        title: [errorMessage],
        content: 'please select and press apply to make changes',
      });
    } else {
      setMessageBoxContent({ title: [noModification], content: '' });
    }
    return;
  };

  // force & commands : Tes : message box shows what was changed
  const handleTesMessageBox = () => {
    const titleSelectAts = 'select ats';
    if (tesAtsConfirmButton && !isNaN(+atsTesState)) {
      setMessageBoxContent({
        title: [titleSelectAts],
        content: messageDescription,
      });
    } else if (!tesAtsConfirmButton) {
      setMessageBoxContent({
        title: [errorMessage],
        content: 'please select and press apply to make changes',
      });
    } else {
      setMessageBoxContent({ title: [noModification], content: '' });
    }
    return;
  };

  // force & commands : sys : message box shows what was changed
  const handleTgsTesSysMessageBox = () => {
    const titleSelectTc = 'select t/c telemetry';
    if (
      typeof temperatureSelection === 'number' &&
      (burningChamber || tgsHeater || tesHeater || tgsTesEnclose)
    ) {
      setMessageBoxContent({
        title: [titleSelectTc],
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
        <Wrapper3>
          {essSwitch
            ? essHeaders.map((value, index) => {
                return (
                  <Wrapper4 key={index}>
                    <WrapperEss5
                      changeBorder0={options === index && index === 0}
                      changeBorder1={options === index && index === 1}
                    >
                      {/* Ess and Sys headers */}
                      <Wrapper6>
                        {settingsApplyButton && (
                          <WrapperApplyButton>
                            <ApplyButtonInvisibleDiv />
                          </WrapperApplyButton>
                        )}
                        <SystemHeaderForceAndCommand
                          name={value.title}
                          toggleButtonColor={value.button}
                          handleSelect={handleSelect}
                          index={index}
                          options={options}
                          essSwitch={essSwitch}
                        />
                      </Wrapper6>
                      {/* Ess contents */}
                      {options === index && index === 0 && (
                        <NewWrapper>
                          <FlexWrapper>
                            {!settingsEditButton && (
                              <InvisibleDivForEditButton height={'234px'} />
                            )}
                            <SelectAts
                              propIndex={index}
                              essSwitch={essSwitch}
                              essGpEbp={essGpEbp}
                              buttonColor={essAtsConfirmButton}
                              setButtonColor={setEssAtsConfirmButton}
                              editState={settingsEditButton}
                              atsState={essAtsState}
                              setAtsState={setEssAtsState}
                            />
                          </FlexWrapper>

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
                        </NewWrapper>
                      )}
                      {/* Ess: Sys contents */}
                      {options === index && index === 1 && (
                        <NewWrapper>
                          {!settingsEditButton && (
                            <InvisibleDivForEditButton height={'192px'} />
                          )}
                          <SelectTc
                            ess={'ess'}
                            tgs={['tgs', 'tes']}
                            essSwitch={essSwitch}
                          />
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
                        </NewWrapper>
                      )}
                    </WrapperEss5>
                  </Wrapper4>
                );
              })
            : tgsHeaders.map((value, index) => {
                return (
                  <Wrapper4 key={index}>
                    <Wrapper5
                      changeBorder0={options === index && index === 0}
                      changeBorder1={options === index && index === 1}
                      changeBorder2={options === index && index === 2}
                    >
                      {/* Tgs, Tes and Sys headers */}
                      <Wrapper6>
                        {settingsApplyButton && (
                          <WrapperApplyButton>
                            <ApplyButtonInvisibleDiv />
                          </WrapperApplyButton>
                        )}
                        <SystemHeaderForceAndCommand
                          name={value.title}
                          toggleButtonColor={value.button}
                          handleSelect={handleSelect}
                          index={index}
                          options={options}
                          tesSwitch={tesSwitch}
                          essSwitch={essSwitch}
                        />
                      </Wrapper6>
                      {/* Tgs contents */}
                      {options === index && index === 0 && (
                        <NewWrapper1>
                          <NewWrapper>
                            <FlexWrapper>
                              {!settingsEditButton && (
                                <InvisibleDivForEditButton height={'230px'} />
                              )}
                              <SelectAts
                                propIndex={index}
                                essSwitch={essSwitch}
                                tgsGpEbp={tgsGpEbp}
                                buttonColor={tgsAtsConfirmButton}
                                setButtonColor={setTgsAtsConfirmButton}
                                editState={settingsEditButton}
                                atsState={tgsAtsState}
                                setAtsState={setTgsAtsState}
                              />
                            </FlexWrapper>
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
                          </NewWrapper>
                        </NewWrapper1>
                      )}
                      {/* Tes contents */}
                      {tesSwitch && options === index && index === 1 && (
                        <NewWrapper1>
                          <NewWrapper>
                            <FlexWrapper>
                              {!settingsEditButton && (
                                <InvisibleDivForEditButton height={'284px'} />
                              )}
                              <SelectAts
                                propIndex={index}
                                essSwitch={essSwitch}
                                buttonColor={tesAtsConfirmButton}
                                setButtonColor={setTesAtsConfirmButton}
                                editState={settingsEditButton}
                                atsState={tesAtsState}
                                setAtsState={setTesAtsState}
                                tesGpEbp={tesGpEbp}
                              />
                            </FlexWrapper>
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
                          </NewWrapper>
                        </NewWrapper1>
                      )}
                      {/* Tgs and Tes: Sys Contents */}
                      {options === index && index === 2 && (
                        <NewWrapper1
                          changeBorder2={options === index && index === 2}
                        >
                          <NewWrapper>
                            {!settingsEditButton && (
                              <InvisibleDivForEditButton height={'284px'} />
                            )}
                            <SelectTc
                              tgs={['tgs', 'tes']}
                              ess={'ess'}
                              essSwitch={essSwitch}
                            />
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
                          </NewWrapper>
                        </NewWrapper1>
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

export default ContainerOfForceAndCommand;

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
  box-shadow: 0 0 2px rgba(0, 0, 0, 100%);
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

  background: #233a54;
  box-shadow: inset 0px 1px 5px #000000, 0px 0px 2px #00000080;
  border-radius: 31px;
  opacity: 1;
  ${flexboxCenter}
  flex-direction: column;
`;

const Wrapper4 = styled.div`
  width: 566px;
  height: auto;
  margin-top: 3px;
  margin-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;

  background-color: rgb(35, 58, 84) 100%;

  border-radius: 31px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WrapperEss5 = styled.div`
  width: 560px;
  height: auto;
  ${({ changeBorder1 }) => changeBorder1 && 'margin-bottom: 1px'};

  background: transparent
    linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(20, 32, 51) 100%) 0% 0% no-repeat
    padding-box;
  border-radius: ${({ changeBorder0 }) =>
    changeBorder0 ? '28px 28px 14px 14px' : '28px'};
  /* border-radius: 28px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper5 = styled.div`
  width: 560px;
  height: auto;
  ${({ changeBorder2 }) => changeBorder2 && 'margin-bottom: 1px'};

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

const Wrapper6 = styled.div`
  width: 560px;
  height: 56px;
  padding: 1px;
  border-radius: 16px;
`;

const WrapperApplyButton = styled.div`
  width: 558px;
  height: 48px;
  position: absolute;
`;

const NewWrapper1 = styled.div`
  width: 556px;
  height: auto;
  padding-top: 2px;
  padding-bottom: 2px;
  margin-top: 5px;
  margin-bottom: 2px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;

  box-shadow: 0px 0px 2px #000000;
  border: 0.5px solid #142033;
  border-radius: ${({ changeBorder2 }) =>
    changeBorder2 ? '14px 14px 26px 26px' : '12px'};
  opacity: 1;
  ${flexboxCenter};
  align-items: flex-start;
`;

const NewWrapper = styled.div`
  width: 552px;
  height: auto;

  margin-bottom: 20px;
  /* background-image: -webkit-linear-gradient(
    90deg,
    rgb(0, 0, 0) 0%,
    rgb(35, 58, 84) 100%
  ); */
  background: #233a54;
  box-shadow: inset 0px 0px 6px rgba(0, 0, 0, 100%);
  /* box-shadow: 0 0 2px rgba(0, 0, 0, 100%); */
  border-radius: 11px;
  border: none;
  opacity: 1;
  ${flexboxCenter}
  flex-direction:column;
  align-items: flex-start;
`;

const WrapperButtons = styled.div`
  width: 542px;
  height: auto;
  margin-bottom: 10px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const WrapperSelectTcSelect = styled.div`
  width: 556px;
  height: auto;
  margin-top: 2px;
  margin-bottom: 20px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 13px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  margin-left: 2px;
  margin-bottom: 2px;
  margin-top: 2px;
`;
