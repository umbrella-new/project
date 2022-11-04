import styled from 'styled-components';
import { flexboxCenter } from '../../../../styles/commonStyles';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SystemHeader from './SystemHeader';
import Control from './sysControl/Control';
import {
  selectSettingsOfEss,
  setResetAllSettingsButtons,
} from '../../../../store/slices/settingsOfEssSlice';
import ContainerLogin from '../../../adminPassword/ContainerLogin';
import {
  selectUserState,
  setAdminAccess,
} from '../../../../store/slices/userSlice';
import ContainerValveSettings from './valvetSettings/ContainerValvetSettings';
import Thermocouple from './sysControl/Thermocouple';
import ForceGasElectricSystem from './sysControl/ForceGasElectricSystem';
import TgsTesSwitch from './systemConfiguration/TgsTesSwitch';
import AddElementToBank from './AddElementToBank';
import SystemIdentification from './SystemIdentification';
import InvisibleDivForEditButton from '../editAndApplyMessageBoxes/InvisibleDivForEditButton';

function ContainerOfAdmin() {
  const tgsButton = './images/blueTgsButton.svg';
  const tgsButtonActive = './images/greenTgsButton.svg';
  const tesButton = './images/blueTesButton.svg';
  const tesButtonActive = './images/greenTesButton.svg';
  const essButton = './images/blueEssButton.svg';
  const essButtonActive = './images/greenEssButton.svg';
  const sysButton = './images/blueSysButton.svg';
  const sysButtonActive = './images/greenSysButton.svg';
  // enable disable switch images
  const enableSwitch = './images/greenEnableSwitch.png';
  const disableSwitch = './images/redDisableSwitch.png';
  const notActiveSwitch = './images/greyEnableDisableSwitch.png';

  // Redux
  const dispatch = useDispatch();
  const state = useSelector(selectUserState);
  const adminAccess = state.isAdministrator;
  const essSwitch = state.isEssSwitch;
  const tesSwitch = state.isTesSwitch;
  const essState = useSelector(selectSettingsOfEss);
  const mode = essState.interfaceMode;
  const settingsEditButton = essState.buttonsOfSettings.settingsEditButton;

  // states
  const [essExpandOrClose, setEssExpandOrClose] = useState('close');
  const [tgsTesExpandOrClose, setTgsTesExpandOrClose] = useState(false);
  const [toggleSysButton, setToggleSysButton] = useState(sysButtonActive);
  const [toggleTgsButton, setToggleTgsButton] = useState(tgsButton);
  const [toggleTesButton, setToggleTesButton] = useState(tesButton);
  const [toggleEssButton, setToggleEssButton] = useState(essButton);
  const [options, setOptions] = useState('');
  const [toggleThermocoupleSwitch, setToggleThermocoupleSwitch] =
    useState(enableSwitch);
  const [toggleEnableDisableSwitch, setToggleEnableDisableSwitch] =
    useState(enableSwitch);

  const tgsTesSysHeaderData = [
    { title: 'typhoon gas system', button: toggleTgsButton },
    { title: 'typhoon electrical system', button: toggleTesButton },
    { title: 'system commands', button: toggleSysButton },
  ];

  const essHeaders = [
    {
      button: toggleEssButton,
      title: 'electric switch system',
    },
    {
      button: toggleSysButton,
      title: 'system commands',
    },
  ];
  // useEffect
  useEffect(() => {
    dispatch(setResetAllSettingsButtons());
    setToggleSysButton(sysButtonActive);

    return function cleanup() {
      dispatch(setAdminAccess(false));
    };
  }, []);

  const handleSelect = (value) =>
    options !== value ? setOptions(value) : setOptions('');

  useEffect(() => {
    if (!essSwitch) {
      switch (options) {
        case '': {
          setToggleSysButton(sysButton);
          setToggleTgsButton(tgsButton);
          setToggleTesButton(tesButton);
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
        default:
          return;
      }
    } else {
      switch (options) {
        case '': {
          setToggleEssButton(essButton);
          setToggleSysButton(sysButton);
          break;
        }
        case 0: {
          setToggleEssButton(essButtonActive);

          setToggleSysButton(sysButton);
          break;
        }
        case 1: {
          setToggleEssButton(essButton);

          setToggleSysButton(sysButtonActive);
          break;
        }
        default:
          return;
      }
    }
  }, [options]);

  const handleThermocoupleSwitch = () => {
    if (toggleThermocoupleSwitch === enableSwitch) {
      return setToggleThermocoupleSwitch(disableSwitch);
    } else setToggleThermocoupleSwitch(enableSwitch);
  };

  const handleForceGasElectricSwitch = () => {
    if (toggleEnableDisableSwitch === enableSwitch) {
      return setToggleEnableDisableSwitch(disableSwitch);
    } else setToggleEnableDisableSwitch(enableSwitch);
  };

  return (
    <Wrapper>
      {!settingsEditButton && <InvisibleDivForEditButton />}
      <Wrapper2>
        <Wrapper3>
          {essSwitch
            ? essHeaders.map((value, index) => {
                return (
                  <div key={index}>
                    <Wrapper4>
                      <Wrapper5
                        changeBorder0={options === index && index === 0}
                        changeBorder1={options === index && index === 1}
                        changeBorder2={options === index && index === 2}
                      >
                        <EssWrapper>
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
                        {adminAccess && index === 0 && options === index && (
                          <WrapperThermocoupleEss>
                            <SectionWrapperEss>
                              <WrapperThermocouple2>
                                <Thermocouple
                                  toggleLeftEnableDisable={
                                    toggleThermocoupleSwitch
                                  }
                                  handleLeftSwitch={handleThermocoupleSwitch}
                                />
                              </WrapperThermocouple2>
                            </SectionWrapperEss>

                            <SectionWrapper>
                              <AddElementToBank />
                            </SectionWrapper>
                          </WrapperThermocoupleEss>
                        )}
                        {adminAccess && options === index && index === 1 ? (
                          <Wrapper6>
                            <SectionWrapper>
                              <ControlWrapper>
                                <Control />
                              </ControlWrapper>
                            </SectionWrapper>

                            <SectionWrapper>
                              <SystemIdentification />
                            </SectionWrapper>
                          </Wrapper6>
                        ) : (
                          !adminAccess && (
                            <LoginWrapper>
                              <ContainerLogin />
                            </LoginWrapper>
                          )
                        )}
                      </Wrapper5>
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

                      {index === 0 && adminAccess && options === index && (
                        <ValveWrapper>
                          <ContainerValveSettings />
                        </ValveWrapper>
                      )}
                      {tesSwitch &&
                        index === 1 &&
                        adminAccess &&
                        options === index && (
                          <WrapperThermocouple>
                            <WrapperThermocouple1>
                              <SectionWrapper>
                                <WrapperThermocouple2>
                                  <Thermocouple
                                    toggleLeftEnableDisable={
                                      toggleThermocoupleSwitch
                                    }
                                    handleLeftSwitch={handleThermocoupleSwitch}
                                  />
                                </WrapperThermocouple2>
                              </SectionWrapper>

                              <SectionWrapper1>
                                <AddElementToBank />
                              </SectionWrapper1>
                            </WrapperThermocouple1>
                          </WrapperThermocouple>
                        )}
                      {!adminAccess && index === 2 && (
                        <LoginWrapper>
                          <ContainerLogin />
                        </LoginWrapper>
                      )}
                      {index === 2 && adminAccess && options === index && (
                        <WrapperSys>
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
                                />
                                {tesSwitch && (
                                  <WrapperTgsTesSwitch>
                                    <TgsTesSwitch tesSwitch={tesSwitch} />
                                  </WrapperTgsTesSwitch>
                                )}
                              </ControlWrapper>
                            </SectionWrapper>

                            <SectionWrapper>
                              <SystemIdentification />
                            </SectionWrapper>
                          </Wrapper6>
                        </WrapperSys>
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

  background: #233a54;

  box-shadow: inset 0px 1px 5px #000000, 0px 0px 2px #00000080;
  border-radius: 30px;
  opacity: 1;
  ${flexboxCenter};
  flex-direction: column;
`;

const Wrapper4 = styled.div`
  width: 566px;
  height: auto;
  margin-bottom: 2px;
  margin-top: 4px;

  background-color: rgb(35, 58, 84) 100%;
  /* background-color: rgb(20, 32, 51) 100%; */
  /* background-image: -webkit-linear-gradient(
    270deg,
    rgb(0, 0, 0) 0%,
    rgb(35, 58, 84) 100%
  ); */
  /* box-shadow: inset 0px 2px 5px #000000; */
  border-radius: 28px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper5 = styled.div`
  width: 560px;
  height: auto;
  ${({ changeBorder2 }) => changeBorder2 && 'margin-bottom: 2px'};

  background: rgb(20, 32, 51) 100%;
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
  margin-bottom: 10px;
`;

const TgsTesSysWrapper = styled.div`
  width: 560px;
  height: 56px;
  padding: 1px;

  background: rgb(20, 32, 51) 100%;
  border-radius: 28px;
  ${flexboxCenter}
  flex-direction: column;
`;

const ValveWrapper = styled.div`
  width: 558px;
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
  align-items: flex-start;
`;

const WrapperThermocoupleEss = styled.div`
  width: 558px;
  height: auto;
  margin-top: 5px;
  margin-bottom: 2px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 0px 2px #000000;
  border: 0.5px solid #142033;
  border-radius: 14px;
  opacity: 1;
  ${flexboxCenter};

  flex-direction: column;
`;

const WrapperThermocouple = styled.div`
  width: 558px;
  height: auto;
  margin-top: 5px;
  margin-bottom: 2px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 0px 2px #000000;
  border: 0.5px solid #142033;
  border-radius: 14px;
  opacity: 1;
  ${flexboxCenter};
`;

const WrapperThermocouple1 = styled.div`
  width: 554px;
  height: auto;
  margin-top: 2px;
  margin-bottom: 20px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 13px;
  opacity: 1;

  display: flex;
  flex-direction: column;
`;

const WrapperSys = styled.div`
  width: 558px;
  height: auto;
  margin-top: 5px;
  margin-bottom: 2px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 0px 2px #000000;
  border: 0.5px solid #142033;
  border-radius: 14px 14px 27px 27px;
  opacity: 1;
  ${flexboxCenter};
`;

const SectionWrapperEss = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: -3px;
`;

const SectionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -3px;
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
`;

const Wrapper6 = styled.div`
  width: 554px;
  height: auto;
  margin-top: 2px;
  margin-bottom: 20px;

  /* background: transparent
    linear-gradient(180deg, rgb(35, 58, 84) 0%, rgb(0, 0, 0) 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 14%);
  border: 0.5px solid #142033;
  border-radius: 9px; */

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 13px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-bottom: 0.5rem;
`;

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
