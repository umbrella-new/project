import styled from 'styled-components';
import { flexboxCenter } from '../../../../styles/commonStyles';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setResetAllSettingsButtons } from '../../../../store/slices/settingsOfEssSlice';
import SystemHeaderForceAndCommand from './SysHeaderForceAndCommand';
import SelectArts from './selectArts/SelectArts';
import SelectTc from './selectTc/SelectTc';
import { selectUserState } from '../../../../store/slices/userSlice';

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

  // State buttons of Sys, Ess, Tgs and Tes
  const [toggleSysButtonColor, setToggleSysButtonColor] =
    useState(sysButtonActive);
  const [toggleEssButtonColor, setToggleEssButtonColor] = useState(essButton);
  const [toggleTgsButtonColor, setToggleTgsButtonColor] = useState(tgsButton);
  const [toggleTesButtonColor, setToggleTesButtonColor] = useState(tesButton);
  // expand and close states

  // const [sysExpandOrClose, setSysExpandOrClose] = useState(true);
  // const [essExpandOrClose, setEssExpandOrClose] = useState(false);
  // const [tgsExpandOrClose, setTgsExpandOrClose] = useState(false);
  // const [tesExpandOrClose, setTesExpandOrClose] = useState(false);
  const [options, setOptions] = useState(2);

  const essHeaders = [
    {
      button: toggleEssButtonColor,
      title: 'typhoon gas system',
    },
    {
      button: toggleSysButtonColor,
      title: 'typhoon gas system',
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

  useEffect(() => {
    dispatch(setResetAllSettingsButtons());
  }, []);

  const handleEssCloseExpandButton = (index) => {
    switch (index) {
      case 0: {
        // switch (essExpandOrClose) {
        //   case false: {
        // setEssExpandOrClose(true);
        // setSysExpandOrClose(false);
        setToggleEssButtonColor(essButtonActive);
        setToggleSysButtonColor(sysButton);
        setToggleTgsButtonColor(tgsButton);
        setToggleTesButtonColor(tesButton);
        break;
        // }

        // default:
        //   return;
        // }
        // break;
      }

      case 1: {
        // switch (sysExpandOrClose) {
        //   case false: {
        //     // setSysExpandOrClose(true);
        //     // setTesExpandOrClose(false);
        setToggleSysButtonColor(sysButtonActive);
        setToggleEssButtonColor(essButton);
        setToggleTgsButtonColor(tgsButton);
        setToggleTesButtonColor(tesButton);
        break;
        //   }

        //   default:
        //     return;
        // }
        // break;
      }

      default:
        return;
    }
  };

  const handleTgsCloseExpandButton = (index) => {
    switch (index) {
      case 0: {
        // switch (tgsExpandOrClose) {
        //   case false: {
        //     // setTgsExpandOrClose(true);
        //     // setTesExpandOrClose(false);
        //     // setSysExpandOrClose(false);
        setToggleTgsButtonColor(tgsButtonActive);
        setToggleTesButtonColor(tesButton);
        setToggleSysButtonColor(sysButton);
        setToggleEssButtonColor(essButton);
        break;
        // }
        // default:
        //   return;
        // }
        // break;
      }
      case 1: {
        // switch (tesExpandOrClose) {
        //   case false: {
        //     // setTesExpandOrClose(true);
        //     // setTgsExpandOrClose(false);
        //     // setSysExpandOrClose(false);
        setToggleTesButtonColor(tesButtonActive);
        setToggleSysButtonColor(sysButton);
        setToggleEssButtonColor(essButton);
        setToggleTgsButtonColor(tgsButton);
        break;
        //   }
        //   default:
        //     return;
        // }
        // break;
      }

      case 2: {
        // switch (sysExpandOrClose) {
        //   case false: {
        //     // setSysExpandOrClose(true);
        //     // setTgsExpandOrClose(false);
        //     // setTesExpandOrClose(false);
        setToggleSysButtonColor(sysButtonActive);
        setToggleEssButtonColor(essButton);
        setToggleTgsButtonColor(tgsButton);
        setToggleTesButtonColor(tesButton);
        break;
        //   }

        //   default:
        //     return;
        // }
        // break;
      }

      default:
        return;
    }
  };

  const handleSelect = (index) => options !== index && setOptions(index);

  return (
    <Wrapper>
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
                        handleCloseExpandButton={handleEssCloseExpandButton}
                        handleSelect={handleSelect}
                        index={index}
                        options={options}
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
                        handleCloseExpandButton={handleTgsCloseExpandButton}
                        handleSelect={handleSelect}
                        index={index}
                        options={options}
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

                      {options === index && index === 1 && (
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
