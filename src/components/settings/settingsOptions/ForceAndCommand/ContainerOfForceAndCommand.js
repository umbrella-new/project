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
  const [toggleEssButtonColor, setToggleEssButtonColor] =
    useState(essButtonActive);
  const [toggleTgsButtonColor, setToggleTgsButtonColor] =
    useState(tgsButtonActive);
  const [toggleTesButtonColor, setToggleTesButtonColor] =
    useState(tesButtonActive);
  // expand and close states
  // const [sysExpandOrClose, setEssExpandOrClose] = useState('close');
  const [expandOrClose, setExpandOrClose] = useState(true);
  const [options, setOptions] = useState(3);

  const headers = [
    {
      button: toggleTgsButtonColor,
      title: 'typhoon gas system',
      expandClose: expandOrClose,
    },
    {
      button: toggleTesButtonColor,
      title: 'typhoon gas system',
      expandClose: expandOrClose,
    },
    {
      button: toggleEssButtonColor,
      title: 'typhoon gas system',
      expandClose: expandOrClose,
    },
    {
      button: toggleSysButtonColor,
      title: 'typhoon gas system',
      expandClose: expandOrClose,
    },
  ];

  useEffect(() => {
    dispatch(setResetAllSettingsButtons());
    setToggleSysButtonColor(sysButtonActive);
    setToggleEssButtonColor(essButton);
    setToggleTgsButtonColor(tgsButton);
    setToggleTesButtonColor(tesButton);
  }, []);

  const handleCloseExpandButton = (index) => {
    switch (index) {
      case 0: {
        switch (expandOrClose) {
          case true: {
            setExpandOrClose(false);
            setToggleTgsButtonColor(tgsButtonActive);
            setToggleSysButtonColor(sysButton);
            setToggleEssButtonColor(essButton);
            setToggleTesButtonColor(tesButton);
            break;
          }
          case false: {
            setExpandOrClose(false);
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
        switch (expandOrClose) {
          case true: {
            setExpandOrClose(false);
            setToggleTesButtonColor(tesButtonActive);
            setToggleSysButtonColor(sysButton);
            setToggleEssButtonColor(essButton);
            setToggleTgsButtonColor(tgsButton);
            break;
          }
          case false: {
            setExpandOrClose(false);
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
        switch (expandOrClose) {
          case true: {
            setExpandOrClose(false);
            setToggleEssButtonColor(essButtonActive);
            setToggleSysButtonColor(sysButton);
            setToggleTgsButtonColor(tgsButton);
            setToggleTesButtonColor(tesButton);
            break;
          }
          case false: {
            setExpandOrClose(false);
            setToggleEssButtonColor(essButtonActive);
            setToggleTesButtonColor(tesButton);
            setToggleSysButtonColor(sysButton);
            setToggleTgsButtonColor(tgsButton);
            break;
          }
          default:
            return;
        }
        break;
      }
      case 3: {
        switch (expandOrClose) {
          case false: {
            setExpandOrClose(true);
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
                    // expandOrClose={
                    //   index === 3 && value.expandClose ? 'close' : 'expand'
                    // }
                    // expandClose={value.expandClose}
                    toggleButtonColor={value.button}
                    handleCloseExpandButton={handleCloseExpandButton}
                    handleSelect={handleSelect}
                    index={index}
                    options={options}
                  />

                  {expandOrClose && index === 3 && (
                    <NewWrapper>
                      <WrapperSelectTcSelectArts>
                        <SelectTc
                          activateSelectButton={activatedByEditButton}
                        />
                      </WrapperSelectTcSelectArts>
                    </NewWrapper>
                  )}
                </Wrapper5>
              </Wrapper4>
            );
          })}
          {/* <Wrapper4>
            <TgsWrapper>
              <SystemHeader
                name={'typhoon gas system'}
                expandOrClose={'expand'}
                toggleButtonColor={toggleTgsButtonColor}
                handleTgsCloseExpandButton={handleTgsCloseExpandButton}
              />
            </TgsWrapper>
          </Wrapper4>
          <Wrapper4>
            <TesWrapper>
              <SystemHeader
                name={'typhoon electrical system'}
                expandOrClose={'expand'}
                toggleButtonColor={toggleTesButtonColor}
                handleTesCloseExpandButton={handleTesCloseExpandButton}
              />
            </TesWrapper>
          </Wrapper4>
          <Wrapper4>
            <EssWrapper>
              <SystemHeader
                name={'electrical switch system'}
                expandOrClose={'expand'}
                toggleButtonColor={toggleEssButtonColor}
                handleEssCloseExpandButton={handleEssCloseExpandButton}
              />
            </EssWrapper>
          </Wrapper4> */}
          {/* <Wrapper4>
            <SysWrapper>
              <SystemHeader
                name={'system commands'}
                toggleButtonColor={toggleSysButtonColor}
                expandOrClose={expandOrClose}
                handleSysCloseExpandButton={handleSysCloseExpandButton}
              />
            </SysWrapper>
            {expandOrClose === 'close' && (
              <NewWrapper>
                <WrapperSelectTcSelectArts>
                  <SelectTc activateSelectButton={activatedByEditButton} />
                </WrapperSelectTcSelectArts>
              </NewWrapper>
            )}
          </Wrapper4> */}
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

const WrapperSelectTcSelectArts = styled.div`
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
  position: relative;
`;

const SysWrapper = styled.div`
  width: 564px;
  height: 53px;
  margin-top: 1px;
`;
