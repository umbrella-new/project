import styled from 'styled-components';
import { flexboxCenter } from '../../../../styles/commonStyles';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectSettingsOfEss,
  setResetAllSettingsButtons,
} from '../../../../store/slices/settingsOfEssSlice';
import SystemHeader from './SystemHeader';
import SelectArts from './SelectArts';
import SelectTc from './SelectTc';

function ContainerOfForceAndCommand() {
  const essButton = './images/blueEssButton.svg';
  const essButtonActive = './images/greenEssButton.svg';
  const sysButton = './images/sysButton.svg';
  const sysButtonActive = './images/greenSysButton.svg';
  const tgsButton = './images/blueTgsButton.svg';
  const tgsButtonActive = './images/greenTgsButton.svg';
  const tesButton = './images/blueTesButton.svg';
  const tesButtonActive = './images/greenTesButton.svg';

  // redux
  const dispatch = useDispatch();
  const state = useSelector(selectSettingsOfEss);
  const activatedByEditButton = state.buttonsOfSettings.settingsEditButton;

  // State buttons of Sys, Ess, Tgs and Tes
  const [toggleSysButtonColor, setToggleSysButtonColor] =
    useState(sysButtonActive);
  const [toggleEssButtonColor, setToggleEssButtonColor] = useState(essButton);
  const [toggleTgsButtonColor, setToggleTgsButtonColor] = useState(tgsButton);
  const [toggleTesButtonColor, setToggleTesButtonColor] = useState(tesButton);
  // expand and close states
  // const [sysExpandOrClose, setEssExpandOrClose] = useState('close');
  const [sysExpandOrClose, setSysExpandOrClose] = useState(true);
  const [essExpandOrClose, setEssExpandOrClose] = useState(false);
  const [tgsExpandOrClose, setTgsExpandOrClose] = useState(false);
  const [tesExpandOrClose, setTesExpandOrClose] = useState(false);
  const [options, setOptions] = useState(3);

  const headers = [
    {
      button: toggleTgsButtonColor,
      title: 'typhoon gas system',
      // expandClose: expandOrClose,
    },
    {
      button: toggleTesButtonColor,
      title: 'typhoon gas system',
      // expandClose: expandOrClose,
    },
    {
      button: toggleEssButtonColor,
      title: 'typhoon gas system',
      // expandClose: expandOrClose,
    },
    {
      button: toggleSysButtonColor,
      title: 'typhoon gas system',
      // expandClose: expandOrClose,
    },
  ];

  useEffect(() => {
    dispatch(setResetAllSettingsButtons());
  }, []);

  const handleCloseExpandButton = (index) => {
    switch (index) {
      case 0: {
        switch (tgsExpandOrClose) {
          case false: {
            setTgsExpandOrClose(true);
            setSysExpandOrClose(false);
            setToggleTgsButtonColor(tgsButtonActive);
            setToggleTesButtonColor(tesButton);
            setToggleSysButtonColor(sysButton);
            setToggleEssButtonColor(essButton);
            break;
          }
          default:
            return;
        }
        break;
      }
      case 1: {
        switch (tesExpandOrClose) {
          case false: {
            setTesExpandOrClose(true);
            setSysExpandOrClose(false);
            setToggleTesButtonColor(tesButtonActive);
            setToggleSysButtonColor(sysButton);
            setToggleEssButtonColor(essButton);
            setToggleTgsButtonColor(tgsButton);
            break;
          }
          default:
            return;
        }
        break;
      }
      case 2: {
        switch (essExpandOrClose) {
          case false: {
            setEssExpandOrClose(true);
            setSysExpandOrClose(false);
            setToggleEssButtonColor(essButtonActive);
            setToggleSysButtonColor(sysButton);
            setToggleTgsButtonColor(tgsButton);
            setToggleTesButtonColor(tesButton);
            break;
          }

          default:
            return;
        }
        break;
      }

      case 3: {
        switch (sysExpandOrClose) {
          case false: {
            setSysExpandOrClose(true);
            setEssExpandOrClose(false);
            setToggleSysButtonColor(sysButtonActive);
            setToggleEssButtonColor(essButton);
            setToggleTgsButtonColor(tgsButton);
            setToggleTesButtonColor(tesButton);
            break;
          }
          // case true: {
          //   setExpandOrClose(false);
          //   setToggleSysButtonColor(sysButton);
          //   break;
          // }
          default:
            return;
        }
        break;
      }

      default:
        return;
    }
  };

  // switch (sysExpandOrClose) {
  //   case true: {
  //     setSysExpandOrClose(false);
  //     setToggleEssButtonColor(essButtonActive);
  //     setToggleSysButtonColor(sysButton);
  //     setToggleTgsButtonColor(tgsButton);
  //     setToggleTesButtonColor(tesButton);
  //     break;
  //   }
  //   case false: {
  //     setSysExpandOrClose(false);
  //     setToggleEssButtonColor(essButtonActive);
  //     setToggleTesButtonColor(tesButton);
  //     setToggleSysButtonColor(sysButton);
  //     setToggleTgsButtonColor(tgsButton);
  //     break;
  //   }
  //   default:
  //     return;
  // }

  // index === 3 && expandClose ? 'close' : 'expand'

  const handleSelect = (index) => options !== index && setOptions(index);

  return (
    <Wrapper>
      <Wrapper2>
        <Wrapper3>
          {headers.map((value, index) => {
            return (
              <Wrapper4 key={index}>
                <Wrapper5>
                  <SystemHeader
                    name={value.title}
                    toggleButtonColor={value.button}
                    handleCloseExpandButton={handleCloseExpandButton}
                    handleSelect={handleSelect}
                    index={index}
                    options={options}
                  />
                  {essExpandOrClose && index === 2 && (
                    <NewWrapper>
                      <WrapperSelectTcSelect>
                        <FlexWrapper>
                          <SelectArts
                            activateSelectButton={activatedByEditButton}
                          />
                        </FlexWrapper>
                      </WrapperSelectTcSelect>
                    </NewWrapper>
                  )}

                  {sysExpandOrClose && index === 3 && (
                    <NewWrapper>
                      <WrapperSelectTcSelect>
                        <SelectTc
                          activateSelectButton={activatedByEditButton}
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
