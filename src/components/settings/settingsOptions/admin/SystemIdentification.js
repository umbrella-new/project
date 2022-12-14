import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { SettingsContext } from '../../../../context/ContextOfSettings';
import { selectSettingsOfEss } from '../../../../store/slices/settingsOfEssSlice';
import {
  handleAdditionalSSRRating,
  handleAdditionalSystemIdentification,
  selectSystemIdentification,
} from '../../../../store/slices/settingSystemIdentificationSlice';
import { flexboxCenter } from '../../../../styles/commonStyles';
import InputKeyboard from '../../../keyboard/InputKeyboard';
import InputTempMessage from '../../../userMessages/InputTempMessage';
import SettingConfirmedMessage from '../../../userMessages/SettingConfirmedMessage';
import SysIdRadioBox from './SysIdRadioBox';

const SystemIdentification = () => {
  // const initialInputState = {
  //   locationName: '',
  //   switchName: '',
  //   heatingSystem: '',
  //   application: '',
  //   switchSize: '',
  //   ssrRating: '',
  //   sysId: '',
  //   additionalRating: '',
  // };

  const initialSelectBox = {
    heatingSystem: false,
    switchSize: false,
    ssrRating: false,
  };
  // states
  // const [inputData, setInputData] = useState(initialInputState);
  const [focusedName, setFocusedName] = useState(null);
  const [activateKeyboard, setActivateKeyboard] = useState(false);
  const [displaySelectBox, setDisplaySelectBox] = useState(initialSelectBox);
  const [isChecked, setIsChecked] = useState(null);
  const [isEditable, setIsEditable] = useState(false);
  const [activateMessageBox, setActivateMessageBox] = useState(false);
  const [message, setMessage] = useState(null);
  const [isReadyToSave, setIsReadyToSave] = useState(false);
  const [keyboardPosition, setKeyboardPosition] = useState(null);
  const [displayAdditionalInput, setDisplayingAdditionalInput] =
    useState(false);
  // const [buttonNames, setButtonNames] = useState(['edit system', 'save']);

  // useContext
  const {
    sysIdentification,
    setSysIdentification,
    inputData,
    setInputData,
    buttonNames,
    setButtonNames,
  } = useContext(SettingsContext);

  const systemIdState = useSelector(selectSystemIdentification);
  const { heatingSysOptions, switchSizeOptions, ssrRatingOptions } =
    systemIdState;
  const state = useSelector(selectSettingsOfEss);
  const mode = state.interfaceMode;
  const { settingsEditButton } = state.buttonsOfSettings;
  const dispatch = useDispatch();

  useEffect(() => {
    return setSysIdentification(false);
  }, []);

  useEffect(() => {
    inputData.locationName !== '' &&
      inputData.heatingSystem !== '' &&
      inputData.switchName !== '' &&
      inputData.application !== '' &&
      inputData.switchSize !== '' &&
      inputData.ssrRating !== '' &&
      inputData.sysId !== '' &&
      setIsReadyToSave(true);
  }, [inputData]);

  useEffect(() => {
    return setIsEditable(false);
  }, [settingsEditButton]);

  const handleButtonClick = (name) => {
    if (name === 'save') {
      if (isEditable) {
        if (isReadyToSave) {
          setButtonNames(['edit system', 'saved']);
          setSysIdentification(true);
          setIsEditable(!isEditable);
        } else {
          setMessage('please fill in all fields');
          setActivateMessageBox(true);
        }
      } else {
        setMessage('please activate "edit system" button first');
        setActivateMessageBox(true);
      }
    } else {
      // do send all input data
      setDisplaySelectBox(initialSelectBox);
      setIsEditable(!isEditable);
      setSysIdentification(false);
      setButtonNames(['edit system', 'save']);
    }
  };

  // For add more ssr ratings.
  useEffect(() => {
    if (Number(inputData.additionalRating) > 100) {
      dispatch(handleAdditionalSSRRating(`${inputData.additionalRating} amps`));
    }
  }, [inputData.additionalRating]);

  const handleOnChange = (input) => {
    if (isEditable) {
      const copyInput = { ...inputData };
      if (focusedName === 'additionalRating') {
        copyInput[focusedName] = input;
      } else {
        copyInput[focusedName] = input;
      }
      setInputData(copyInput);
    }
  };

  // Handler for Select box
  const handleSelector = (selected) => {
    if (isEditable) {
      if (selected === 'add ssr rating') {
        // Do something to add more ssr ratings
        setIsChecked(selected);
        const copyInput = { ...inputData };
        copyInput[focusedName] = 'please input additional ssr rating';
        setInputData(copyInput);
        setDisplayingAdditionalInput(true);
      } else {
        setIsChecked(selected);
        setDisplayingAdditionalInput(false);
        const copyInput = { ...inputData };
        copyInput[focusedName] = selected;
        setInputData(copyInput);
      }
    }
    setDisplaySelectBox(initialSelectBox);
  };

  const handleDisplaySelectBox = (name) => {
    if (isEditable) {
      setFocusedName(name);
      // To open radio box
      const currentState = displaySelectBox[name];
      const copyInput = { ...initialSelectBox };
      copyInput[name] = !currentState;
      setDisplaySelectBox(copyInput);
    }
  };

  return (
    <Wrapper>
      <ContentWrapper>
        <InnerWrapper>
          {/* <TitleWrapper> */}
          <TitleTop>system identification</TitleTop>
          {/* </TitleWrapper> */}
          {/* input location name and select heating system */}
          <Section>
            <ComponentWrapperHole>
              <ComponentWrapper>
                <ContentSpan>
                  location <br></br>name :
                </ContentSpan>
                <ContentInput
                  type='text'
                  onChange={(event) => {
                    handleOnChange(event.target.value);
                  }}
                  onClick={() => {
                    isEditable && setActivateKeyboard(true);
                    setKeyboardPosition(1);
                    setFocusedName('locationName');
                  }}
                  value={inputData.locationName}
                  placeholder='--------'
                />
              </ComponentWrapper>
            </ComponentWrapperHole>

            <ComponentWrapperHole
              displayRadioBox={displaySelectBox.heatingSystem}
            >
              <ComponentWrapper
                displayRadioBox={displaySelectBox.heatingSystem}
              >
                <TitleAndButtonWrapper>
                  <DisplaySelectedOne>
                    {isEditable && inputData.heatingSystem
                      ? inputData.heatingSystem
                      : `select heating system`}
                  </DisplaySelectedOne>
                  <SelectButton
                    onClick={() => {
                      // Open select box
                      handleDisplaySelectBox('heatingSystem');
                    }}
                  >
                    <img src={'/images/sys-id-select-btn.svg'} />
                  </SelectButton>
                </TitleAndButtonWrapper>

                {displaySelectBox.heatingSystem && (
                  <RadioBoxWrapper>
                    <RadioBoxContentWrapper>
                      {heatingSysOptions.map((name, index) => (
                        <SysIdRadioBox
                          key={index}
                          data={name}
                          isChecked={isChecked}
                          selectHandler={handleSelector}
                        />
                      ))}
                    </RadioBoxContentWrapper>
                  </RadioBoxWrapper>
                )}
              </ComponentWrapper>
            </ComponentWrapperHole>
          </Section>
          {/* input switch name and input application */}
          <Section>
            <ComponentWrapperHole>
              <ComponentWrapper>
                <ContentSpan>
                  switch <br></br>name :
                </ContentSpan>
                <ContentInput
                  type='text'
                  onChange={(event) => handleOnChange(event.target.value)}
                  onClick={() => {
                    isEditable && setActivateKeyboard(true);
                    setKeyboardPosition(2);
                    setFocusedName('switchName');
                  }}
                  value={inputData.switchName}
                  placeholder='--------'
                />
              </ComponentWrapper>
            </ComponentWrapperHole>

            <ComponentWrapperHole>
              <ComponentWrapper>
                <ContentSpan>application :</ContentSpan>
                <ContentInput
                  type='text'
                  onChange={(event) => handleOnChange(event.target.value)}
                  onClick={() => {
                    isEditable && setActivateKeyboard(true);
                    setKeyboardPosition(2);
                    setFocusedName('application');
                  }}
                  value={inputData.application}
                  placeholder='--------'
                />
              </ComponentWrapper>
            </ComponentWrapperHole>
          </Section>

          {/* select switch size and select ssr rating */}
          <Section>
            <ComponentWrapperHole displayRadioBox={displaySelectBox.switchSize}>
              <ComponentWrapper displayRadioBox={displaySelectBox.switchSize}>
                <TitleAndButtonWrapper>
                  <DisplaySelectedOne>
                    {isEditable && inputData.switchSize
                      ? inputData.switchSize
                      : `select switch size`}
                  </DisplaySelectedOne>
                  <SelectButton
                    onClick={() => handleDisplaySelectBox('switchSize')}
                  >
                    <img src={'/images/sys-id-select-btn.svg'} />
                  </SelectButton>
                </TitleAndButtonWrapper>

                {displaySelectBox.switchSize && (
                  <RadioBoxWrapper>
                    <RadioBoxContentWrapper>
                      {switchSizeOptions.map((name, index) => (
                        <SysIdRadioBox
                          key={index}
                          data={name}
                          isChecked={isChecked}
                          selectHandler={handleSelector}
                        />
                      ))}
                    </RadioBoxContentWrapper>
                  </RadioBoxWrapper>
                )}
              </ComponentWrapper>
            </ComponentWrapperHole>

            <ComponentWrapperHole displayRadioBox={displaySelectBox.ssrRating}>
              <ComponentWrapper displayRadioBox={displaySelectBox.ssrRating}>
                <TitleAndButtonWrapper>
                  <DisplaySelectedOne>
                    {isEditable && inputData.ssrRating
                      ? inputData.ssrRating
                      : `select ssr rating`}
                  </DisplaySelectedOne>
                  <SelectButton
                    onClick={() => handleDisplaySelectBox('ssrRating')}
                  >
                    <img src={'/images/sys-id-select-btn.svg'} />
                  </SelectButton>
                </TitleAndButtonWrapper>

                {displaySelectBox.ssrRating && (
                  <RadioBoxWrapper>
                    <RadioBoxContentWrapper wrap='sysId'>
                      {ssrRatingOptions.map((name, index) => (
                        <SysIdRadioBox
                          key={index}
                          data={name}
                          isChecked={isChecked}
                          selectHandler={handleSelector}
                          name='sysId'
                        />
                      ))}
                    </RadioBoxContentWrapper>
                  </RadioBoxWrapper>
                )}
              </ComponentWrapper>
            </ComponentWrapperHole>
          </Section>
          {/* input system id */}
          <Section>
            <ComponentWrapperHole>
              <ComponentWrapper>
                <ContentSpan>system i.d. :</ContentSpan>
                <ContentInput
                  type='text'
                  onChange={(event) => handleOnChange(event.target.value)}
                  onClick={() => {
                    isEditable && setActivateKeyboard(true);
                    setKeyboardPosition(3);
                    setFocusedName('sysId');
                  }}
                  value={inputData.sysId && inputData.sysId}
                  placeholder='--------'
                />
              </ComponentWrapper>
            </ComponentWrapperHole>
            {displayAdditionalInput && (
              <ComponentWrapperHole>
                <ComponentWrapper>
                  <ContentSpan>
                    additional<br></br>ssr rating :
                  </ContentSpan>
                  <ContentInput
                    type='text'
                    onChange={(event) => handleOnChange(event.target.value)}
                    onClick={() => {
                      isEditable && setActivateKeyboard(true);
                      setKeyboardPosition(3);
                      setFocusedName('additionalRating');
                    }}
                    value={inputData.additionalRating}
                    placeholder='-- amps'
                  />
                </ComponentWrapper>
              </ComponentWrapperHole>
            )}
          </Section>

          <Section>
            <ButtonGroupWrapper>
              {buttonNames.map((name, index) => (
                <ButtonWrapper
                  onClick={() => settingsEditButton && handleButtonClick(name)}
                  isEditable={isEditable}
                  color={sysIdentification}
                >
                  <ButtonHole>
                    <ButtonTop color={sysIdentification} index={index === 1}>
                      {name}
                    </ButtonTop>
                  </ButtonHole>
                </ButtonWrapper>
              ))}
            </ButtonGroupWrapper>
          </Section>
        </InnerWrapper>

        {activateMessageBox && (
          <SettingConfirmedMessage
            onClose={() => setActivateMessageBox(false)}
            title='system identification'
            message={message}
          />
        )}
      </ContentWrapper>
      {activateKeyboard && (
        <KeyboardWrapper>
          <PositionAbsoluteBox position={keyboardPosition}>
            <InputKeyboard
              closeKeyboard={() => setActivateKeyboard(false)}
              name={focusedName}
              handleOnSubmit={(name, input) => handleOnChange(input)}
            />
          </PositionAbsoluteBox>
        </KeyboardWrapper>
      )}
    </Wrapper>
  );
};

export default SystemIdentification;

const Wrapper = styled.div``;
const ContentWrapper = styled.div`
  ${flexboxCenter}

  width: 548px;
  height: 206px;
  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 11px;
`;
const InnerWrapper = styled.div`
  width: 544px;
  height: 201px;
  background: transparent linear-gradient(90deg, #233a54 0%, #060d19 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 0px 0px 2px #000000;
  box-shadow: inset 1px 1px 2px rgb(255, 255, 255, 0.1);
  border: 0.5px solid #000000;
  border-radius: 9px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 0.15rem 0;
`;
const TitleWrapper = styled.div`
  ${flexboxCenter}

  width: 539px;
  height: 32px;
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 16px;
`;
const TitleTop = styled.div`
  width: 533px;
  height: 26px;
  margin-top: 6px;
  font-size: 10px;

  text-transform: uppercase;

  background: #233a54;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 16px;
  opacity: 1;
  ${flexboxCenter}
`;

const Section = styled.div`
  width: 539px;
  display: flex;

  align-items: center;
  justify-content: space-between;

  &:last-child {
    justify-content: flex-end;
  }
`;

const ComponentWrapperHole = styled.div`
  width: 260px;
  height: auto;
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 13px;
  ${flexboxCenter}

  ${(p) =>
    p.displayRadioBox &&
    css`
      position: relative;
    `}
`;

const ComponentWrapper = styled.div`
  width: 258px;
  height: auto;
  margin-top: 1px;
  margin-bottom: 1px;
  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff29, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 12px;
  display: flex;
  ${(p) =>
    p.displayRadioBox
      ? css`
          flex-direction: column;
          position: absolute;
          z-index: 100;
          top: -0.75rem;
          padding-top: 0.1rem;
        `
      : css`
          align-items: center;
          justify-content: space-between;
          height: 24px;
        `}
`;

const ContentSpan = styled.span`
  font-size: 8px;
  text-transform: uppercase;
  text-align: left;

  padding-left: 0.4rem;
`;

const ContentInput = styled.input`
  font-size: 8px;
  text-transform: uppercase;
  text-align: center;

  width: 177px;
  height: 20px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 10px;

  margin-right: 0.1rem;

  &::placeholder {
    color: #fff;
  }
`;

const DisplaySelectedOne = styled.div`
  width: 228px;
  height: 20px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 12px;

  text-transform: uppercase;
  text-align: left;

  font-size: 8px;
  display: flex;
  align-items: center;
  /* for text */
  padding-left: 0.3rem;
  /* for gap with its parents */
  margin-left: 0.1rem;
`;

const TitleAndButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SelectButton = styled.button`
  ${flexboxCenter}

  margin-right: 0.4rem;
  margin-top: 0.2rem;
`;

const ButtonGroupWrapper = styled.div`
  width: 260px;
  height: 26px;
  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 0.1rem;
`;
const ButtonWrapper = styled.button`
  width: 124px;
  height: 24px;
  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 25px;
  &:first-child {
    ${(p) =>
      p.isEditable
        ? css`
            border: 1px solid #95ff45;
          `
        : 'none'}
  }
  &:last-child {
    ${({ color }) =>
      color &&
      css`
        background: transparent
          linear-gradient(180deg, #1e7fc1 0%, #001640 100%) 0% 0% no-repeat
          padding-box;
      `}
  }
  ${flexboxCenter}
`;

const ButtonHole = styled.div`
  ${flexboxCenter}

  width: 116px;
  height: 16px;
  background: #233a54;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 21px;
`;
const ButtonTop = styled.div`
  width: 112px;
  height: 12px;
  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 19px;

  ${({ color, index }) =>
    color &&
    index &&
    css`
      background: transparent linear-gradient(180deg, #1e7fc1 0%, #001640 100%)
        0% 0% no-repeat padding-box;
    `}

  ${flexboxCenter}
  font-size: 8px;
  text-transform: uppercase;
`;

const RadioBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  margin: 0.1rem 0;
`;

const RadioBoxContentWrapper = styled.ul`
  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 11px;
  width: 254px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${(p) =>
    p.wrap === 'sysId' &&
    css`
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 0.1rem;
    `}
`;

const KeyboardWrapper = styled.div`
  height: 100px;
  position: relative;
  z-index: 100;
`;

const PositionAbsoluteBox = styled.div`
  position: absolute;
  right: -1rem;
  ${(p) =>
    p.position === 1 &&
    css`
      top: -8rem;
    `}
  ${(p) =>
    p.position === 2 &&
    css`
      top: -6rem;
    `}

    ${(p) =>
    p.position === 3 &&
    css`
      top: -2rem;
    `}
    z-index:100;
`;
