import styled from 'styled-components';
import { flexboxCenter } from '../../../../styles/commonStyles';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SystemHeader from './SystemHeader';
import Control from './sysControl/Control';
import { setResetAllSettingsButtons } from '../../../../store/slices/settingsOfEssSlice';
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

function ContainerOfAdmin() {
  const tgsButton = './images/blueTgsButton.svg';
  const tgsButtonActive = './images/greenTgsButton.svg';
  const tesButton = './images/blueTesButton.svg';
  const tesButtonActive = './images/greenTesButton.svg';
  const essButton = './images/blueEssButton.svg';
  const essButtonActive = './images/greenEssButton.svg';
  const sysButton = './images/sysButton.svg';
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

  // states
  const [essExpandOrClose, setEssExpandOrClose] = useState('close');
  const [tgsTesExpandOrClose, setTgsTesExpandOrClose] = useState(false);
  const [toggleSysButton, setToggleSysButton] = useState(sysButtonActive);
  const [toggleTgsButton, setToggleTgsButton] = useState(tgsButton);
  const [toggleTesButton, setToggleTesButton] = useState(tesButton);
  const [toggleEssButton, setToggleEssButton] = useState(essButton);
  const [options, setOptions] = useState(essSwitch ? 1 : 2);
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

  const handleSelect = (value) => options !== value && setOptions(value);

  const handleEssCloseExpandButton = (index) => {
    switch (index) {
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
  };

  const handleTgsTesExpandCloseButton = (index) => {
    switch (index) {
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
  };

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
      <Wrapper2>
        <Wrapper3>
          {essSwitch
            ? essHeaders.map((value, index) => {
                return (
                  <div key={index}>
                    <Wrapper4>
                      <EssWrapper>
                        <SystemHeader
                          name={value.title}
                          toggleButtonColor={value.button}
                          handleCloseExpandButton={handleEssCloseExpandButton}
                          handleSelect={handleSelect}
                          index={index}
                          options={options}
                          essSwitch={essSwitch}
                          tesSwitch={tesSwitch}
                          adminAccess={adminAccess}
                        />
                      </EssWrapper>
                      {adminAccess && index === 0 && options === index && (
                        <WrapperThermocouple>
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

                          <SectionWrapper>
                            <AddElementToBank />
                          </SectionWrapper>
                        </WrapperThermocouple>
                      )}
                      {adminAccess && options === index && index === 1 ? (
                        <Wrapper5>
                          <ControlWrapper>
                            <Control />
                          </ControlWrapper>
                        </Wrapper5>
                      ) : (
                        !adminAccess &&
                        options === index && (
                          <LoginWrapper>
                            <ContainerLogin />
                          </LoginWrapper>
                        )
                      )}
                    </Wrapper4>
                  </div>
                );
              })
            : tgsTesSysHeaderData.map((data, index) => {
                return (
                  <Wrapper4 key={index}>
                    <TgsTesSysWrapper>
                      <SystemHeader
                        handleCloseExpandButton={handleTgsTesExpandCloseButton}
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

                          <SectionWrapper>
                            <AddElementToBank />
                          </SectionWrapper>
                        </WrapperThermocouple>
                      )}
                    {!adminAccess && index === 2 && (
                      <LoginWrapper>
                        <ContainerLogin />
                      </LoginWrapper>
                    )}
                    {index === 2 && adminAccess && options === index && (
                      <Wrapper5>
                        <SectionWrapper>
                          <ControlWrapper>
                            <ForceGasElectricSystem
                              handleRightSwitch={handleForceGasElectricSwitch}
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
                      </Wrapper5>
                    )}
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
  width: 592px;
  height: auto;
  margin-bottom: 6px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 4px;
  opacity: 1;
  ${flexboxCenter};
`;

const Wrapper2 = styled.div`
  width: 588px;
  height: auto;
  margin-bottom: 2px;

  background: transparent
    linear-gradient(180deg, rgb(35, 58, 84) 0%, rgb(0, 0, 0) 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: inset 0px 1px 2px #ffffff24, 0px 0px 2px #000000;
  border: 0.5px solid #000000;
  border-radius: 4px;
  opacity: 1;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Wrapper3 = styled.div`
  width: 570px;
  /* height: 303px; */
  height: auto;
  margin-top: 10px;
  margin-bottom: 8px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 27px 27px 30px 30px;
  opacity: 1;
  ${flexboxCenter};
  justify-content: flex-end;
  flex-direction: column;
`;

const EssWrapper = styled.div`
  width: 567px;
  height: 53px;
  margin-bottom: 10px;
`;

const Wrapper4 = styled.div`
  width: 566px;
  height: auto;
  margin-bottom: 2px;

  background-color: rgb(0, 0, 0);
  border-radius: 27px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TgsTesSysWrapper = styled.div`
  width: 567px;
  height: 53px;
`;

const ValveWrapper = styled.div`
  width: auto;
  height: auto;
  ${flexboxCenter}
`;

const WrapperThermocouple = styled.div`
  width: 552px;

  margin-bottom: 10px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 13px;
  opacity: 1;

  display: flex;
  flex-direction: column;
`;

const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

const WrapperThermocouple2 = styled.div`
  width: auto;
  height: auto;
  margin-left: 4px;
  margin-bottom: 4px;
`;

const SysWrapper = styled.div`
  width: 564px;
  height: 52px;
  margin-bottom: 3px;
`;

const LoginWrapper = styled.div`
  margin-bottom: 4px;
  margin-bottom: 10px;
`;

const Wrapper5 = styled.div`
  width: 562px;
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
