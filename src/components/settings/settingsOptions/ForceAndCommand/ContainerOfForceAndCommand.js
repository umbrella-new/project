import styled from 'styled-components';
import { flexboxCenter } from '../../../../styles/commonStyles';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectSettingsOfEss,
  setResetAllSettingsButtons,
} from '../../../../store/slices/settingsOfEssSlice';
import SystemHeaderForceAndCommand from './SysHeaderForceAndCommand';
import SelectArts from './selectArts/SelectArts';
import SelectTc from './selectTc/SelectTc';
import { selectUserState } from '../../../../store/slices/userSlice';
import { clear } from '@testing-library/user-event/dist/clear';
import InvisibleDivForEditButton from '../editAndApplyMessageBoxes/InvisibleDivForEditButton';

function ContainerOfForceAndCommand() {
  // button images of TGS TES ESS SYS
  const essButton = './images/blueEssButton.svg';
  const essButtonActive = './images/greenEssButton.svg';
  const sysButton = './images/sysButton.svg';
  const sysButtonActive = './images/greenSysButton.svg';
  const tgsButton = './images/blueTgsButton.svg';
  const tgsButtonActive = './images/greenTgsButton.svg';
  const tesButton = './images/blueTesButton.svg';
  const tesButtonActive = './images/greenTesButton.svg';

  const essGpEbp = [
    'block and do not allow ess to operate when on ebp-emergency backup power',
    'reactivates ess when powered by ebp emergency backup power',
  ];
  const tesGpEbp = [
    'switch to typhoon gas powered heating system when on emergency backup power',
    'reactivates tes when powered by ebp emergency backup power',
    'should be blocked and do not allow tes to operate when on ebp emergency backup power',
  ];
  const tgsGpEbp = [
    'reactive to tgs typhoon gas power heating system when on ebp emergency backup power',
    'block and do not allow tgs to operate when on ebp emergency backup power',
  ];

  // redux
  const dispatch = useDispatch();
  const stateOfEssTgs = useSelector(selectUserState);
  const essSwitch = stateOfEssTgs.isEssSwitch;
  const tesSwitch = stateOfEssTgs.isTesSwitch;
  const state = useSelector(selectSettingsOfEss);
  const mode = state.interfaceMode;
  const settingsEditButton = state.buttonsOfSettings.settingsEditButton;

  // State buttons of Sys, Ess, Tgs and Tes
  const [toggleSysButtonColor, setToggleSysButtonColor] =
    useState(sysButtonActive);
  const [toggleEssButtonColor, setToggleEssButtonColor] = useState(essButton);
  const [toggleTgsButtonColor, setToggleTgsButtonColor] = useState(tgsButton);
  const [toggleTesButtonColor, setToggleTesButtonColor] = useState(tesButton);
  // expand and close states

  const [options, setOptions] = useState(essSwitch ? 1 : 2);

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

  useEffect(() => {
    dispatch(setResetAllSettingsButtons());
  }, []);

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
          console.log('2');
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

  // const handleEssCloseExpandButton = (index) => {
  //   switch (index) {
  //     case 0: {
  //       setToggleEssButtonColor(essButtonActive);
  //       setToggleSysButtonColor(sysButton);
  //       // setToggleTgsButtonColor(tgsButton);
  //       // setToggleTesButtonColor(tesButton);
  //       break;
  //     }

  //     case 1: {
  //       setToggleSysButtonColor(sysButtonActive);
  //       setToggleEssButtonColor(essButton);
  //       // setToggleTgsButtonColor(tgsButton);
  //       // setToggleTesButtonColor(tesButton);
  //       break;
  //     }

  //     default:
  //       return;
  //   }
  // };

  // const handleTgsCloseExpandButton = (options) => {
  //   // if (index === options) {
  //   //   setToggleSysButtonColor(sysButton);
  //   //   setToggleTgsButtonColor(tgsButton);
  //   //   setToggleTesButtonColor(tesButton);
  //   // } else if ()
  //   switch (options) {
  //     case '': {
  //       console.log('hello');
  //       setToggleSysButtonColor(sysButton);
  //       setToggleTgsButtonColor(tgsButton);
  //       setToggleTesButtonColor(tesButton);
  //       break;
  //     }
  //     case 0: {
  //       console.log('0');
  //       setToggleTgsButtonColor(tgsButtonActive);
  //       setToggleTesButtonColor(tesButton);
  //       setToggleSysButtonColor(sysButton);

  //       break;
  //     }
  //     case 1: {
  //       console.log('1');
  //       setToggleTesButtonColor(tesButtonActive);
  //       setToggleSysButtonColor(sysButton);
  //       setToggleTgsButtonColor(tgsButton);
  //       break;
  //     }

  //     case 2: {
  //       console.log('2');
  //       setToggleSysButtonColor(sysButtonActive);
  //       setToggleTgsButtonColor(tgsButton);
  //       setToggleTesButtonColor(tesButton);
  //       break;
  //     }

  //     default:
  //       break;
  //   }
  // };

  return (
    <Wrapper>
      {!settingsEditButton && <InvisibleDivForEditButton />}
      <Wrapper2>
        <Wrapper3>
          {essSwitch
            ? essHeaders.map((value, index) => {
                return (
                  <Wrapper4 key={index}>
                    <Wrapper5>
                      <SystemHeaderForceAndCommand
                        name={value.title}
                        toggleButtonColor={value.button}
                        // handleCloseExpandButton={handleEssCloseExpandButton}
                        handleSelect={handleSelect}
                        index={index}
                        options={options}
                        essSwitch={essSwitch}
                      />
                      {options === index && index === 0 && (
                        <NewWrapper>
                          <WrapperSelectTcSelect>
                            <FlexWrapper>
                              <SelectArts
                                propIndex={index}
                                essSwitch={essSwitch}
                                essGpEbp={essGpEbp}
                                tesGpEbp={tesGpEbp}
                                tgsGpEbp={tgsGpEbp}
                              />
                            </FlexWrapper>
                          </WrapperSelectTcSelect>
                        </NewWrapper>
                      )}

                      {options === index && index === 1 && (
                        <NewWrapper>
                          <WrapperSelectTcSelect>
                            <SelectTc
                              ess={'ess'}
                              tgs={['tgs', 'tes']}
                              essSwitch={essSwitch}
                            />
                          </WrapperSelectTcSelect>
                        </NewWrapper>
                      )}
                    </Wrapper5>
                  </Wrapper4>
                );
              })
            : tgsHeaders.map((value, index) => {
                return (
                  <Wrapper4 key={index}>
                    <Wrapper5>
                      <SystemHeaderForceAndCommand
                        name={value.title}
                        toggleButtonColor={value.button}
                        // handleCloseExpandButton={handleTgsCloseExpandButton}
                        handleSelect={handleSelect}
                        index={index}
                        options={options}
                        tesSwitch={tesSwitch}
                        essSwitch={essSwitch}
                      />
                      {options === index && index === 0 && (
                        <NewWrapper>
                          <WrapperSelectTcSelect>
                            <FlexWrapper>
                              <SelectArts
                                propIndex={index}
                                essSwitch={essSwitch}
                                tgsGpEbp={tgsGpEbp}
                                essGpEbp={essGpEbp}
                                tesGpEbp={tesGpEbp}
                              />
                            </FlexWrapper>
                          </WrapperSelectTcSelect>
                        </NewWrapper>
                      )}

                      {tesSwitch && options === index && index === 1 && (
                        <NewWrapper>
                          <WrapperSelectTcSelect>
                            <FlexWrapper>
                              <SelectArts
                                propIndex={index}
                                essSwitch={essSwitch}
                                tgsGpEbp={tgsGpEbp}
                                essGpEbp={essGpEbp}
                                tesGpEbp={tesGpEbp}
                              />
                            </FlexWrapper>
                          </WrapperSelectTcSelect>
                        </NewWrapper>
                      )}

                      {options === index && index === 2 && (
                        <NewWrapper>
                          <WrapperSelectTcSelect>
                            <SelectTc
                              tgs={['tgs', 'tes']}
                              ess={'ess'}
                              essSwitch={essSwitch}
                            />
                          </WrapperSelectTcSelect>
                        </NewWrapper>
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
  margin-bottom: 2px;
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 4px;
  opacity: 1;
  ${flexboxCenter};
  justify-content: space-around;
  flex-direction: column;
`;

const Wrapper2 = styled.div`
  width: 590px;
  height: auto;
  margin-top: 2px;
  margin-bottom: 2px;

  opacity: 1;

  ${flexboxCenter}
  flex-direction: column;
  justify-content: space-evenly;
  box-sizing: border-box;
  border: 0.5px solid #000000;
  border-radius: 4px;
  background-image: -webkit-linear-gradient(
    90deg,
    rgb(0, 0, 0) 0%,
    rgb(35, 58, 84) 100%
  );
  opacity: 1;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 14%);
  box-shadow: 0 0 2px rgba(0, 0, 0, 100%);
`;

const Wrapper3 = styled.div`
  width: 570px;
  height: auto;
  margin-top: 2px;
  margin-bottom: 6px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 1px 5px #000000, 0px 0px 2px #00000080;
  border-radius: 28px;
  opacity: 1;
  ${flexboxCenter}
  flex-direction: column;
`;

const Wrapper4 = styled.div`
  width: 566px;
  height: auto;
  margin-top: 2px;
  margin-bottom: 2px;

  background-image: -webkit-linear-gradient(
    270deg,
    rgb(0, 0, 0) 0%,
    rgb(35, 58, 84) 100%
  );
  box-shadow: inset 0px 1px 5px #000000, 0px 0px 2px #00000080;
  border-radius: 28px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper5 = styled.div`
  width: 564px;
  height: auto;
  margin-top: 1px;
`;

const NewWrapper = styled.div`
  width: 560px;
  height: auto;
  margin-top: 5px;
  margin-bottom: 2px;
  background-image: -webkit-linear-gradient(
    90deg,
    rgb(0, 0, 0) 0%,
    rgb(35, 58, 84) 100%
  );
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 14%);
  box-shadow: 0 0 2px rgba(0, 0, 0, 100%);
  border-radius: 9px 9px 24px 24px;
  border: none;
  opacity: 1;
  ${flexboxCenter}
  flex-direction:row;
  align-items: flex-start;
`;

const WrapperSelectTcSelect = styled.div`
  width: 556px;
  height: auto;
  margin-top: 4px;
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
  margin-left: 4px;
  margin-bottom: 2px;
  margin-top: 2px;
`;
