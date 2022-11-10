import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectSettingsOfEss } from '../../../store/slices/settingsOfEssSlice';
import {
  flexboxCenter,
  DisableApplyButtonBG,
  DisableApplyButtonHole,
  activeLayer1,
  activeInput,
  ButtonReady,
} from '../../../styles/commonStyles';

import styled, { css } from 'styled-components';

import InputKeyPad from '../../keyboard/InputKeyPad';
import InputTempMessage from '../../userMessages/InputTempMessage';

const TempAndButton = ({
  isEnable,
  buttonHandler,
  isActivated,
  isReady,
  title,
  currTemp,
  isAble,
}) => {
  const inputRef = useRef();

  // Local state displaying the keypad
  const [openKeyPad, setOpenKeyPad] = useState(false);
  const [alertMessage, setAlertMessage] = useState(false);
  const [message, setMessage] = useState(null);
  const [temp, setTemp] = useState(false);

  const unitsState = useSelector(selectSettingsOfEss);
  const { unitsMeasurement } = unitsState.buttonsOfSettings;
  useEffect(() => {
    if (unitsMeasurement) {
      if (currTemp > 0) {
        inputRef.current.value = `${Math.round(
          Number(currTemp) * 1.8 + 32
        )}\u00b0F`;
        if (!isEnable) {
          inputRef.current.value = ``;
        }
      }
    } else {
      if (currTemp > 0) {
        inputRef.current.value = `${currTemp}\u00b0C`;
        if (!isEnable) {
          inputRef.current.value = ``;
        }
      }
    }
  });

  // Button handler
  const handleSubmit = (event) => {
    event.preventDefault();
    // Check the user input and show the user message

    if (inputRef.current.value.length === 0) {
      setMessage('in order to finalize your optional constant temp program,');
      setTemp(true);
      setAlertMessage(true);
    } else {
      const temp = Number(inputRef.current.value);
      if (title === 'scheduler') {
        if (temp !== 0) {
          if (unitsMeasurement) {
            if (!isReady) {
              buttonHandler((temp - 32) / 1.8);
              inputRef.current.value = `${temp}\u00b0F`;
            } else {
              buttonHandler(0);
              inputRef.current.value = '';
            }
          } else {
            if (!isReady) {
              buttonHandler(temp);
              inputRef.current.value = `${temp}\u00b0C`;
            } else {
              buttonHandler(0);
              inputRef.current.value = '';
            }
          }
        }
      } else {
        if (temp !== 0) {
          if (unitsMeasurement) {
            if (temp > 302) {
              setMessage('Maximum temperature is 150\u00b0F (302\u00b0C)');
              setTemp(true);
              setAlertMessage(true);
              inputRef.current.value = '';
            } else {
              if (!isReady) {
                buttonHandler((temp - 32) / 1.8);
                inputRef.current.value = `${temp}\u00b0F`;
              } else {
                buttonHandler(0);

                inputRef.current.value = '';
              }
            }
          } else {
            if (temp > 150) {
              setMessage('Maximum temperature is 150\u00b0F (302\u00b0C)');
              setTemp(true);
              setAlertMessage(true);
              inputRef.current.value = '';
            } else {
              if (!isReady) {
                buttonHandler(temp);
                inputRef.current.value = `${temp}\u00b0C`;
              } else {
                buttonHandler(0);
                inputRef.current.value = '';
              }
            }
          }
        }
      }
    }
  };

  const handleCheck = () => {
    if (!isAble.date) {
      alert('Please Set Schedule First');
      inputRef.current.value = '';
    }
  };

  const handleSchedulerSet = () => {
    setMessage('Please set schedule first');
    setTemp(false);
    setAlertMessage(true);
  };
  // Handlers for keypad
  const onInputHandler = () => {
    if (title === 'scheduler') {
      !isEnable || isActivated || isReady || isAble.date
        ? setOpenKeyPad(true)
        : handleSchedulerSet();
    } else {
      !isEnable || isActivated || isReady || setOpenKeyPad(true);
    }
  };

  // Virtual keyboard input handler
  const handleVirtualKeyboardInput = (input) => {
    const temp = Number(input);

    if (title === 'scheduler') {
      if (unitsMeasurement) {
        buttonHandler(Math.round((temp - 32) / 1.8));
        setOpenKeyPad(false);
        inputRef.current.value = `${temp}\u00b0F`;
      } else {
        buttonHandler(temp);
        setOpenKeyPad(false);
        inputRef.current.value = `${temp}\u00b0C`;
      }
    } else {
      if (unitsMeasurement) {
        if (temp > 302) {
          console.log(temp);
          setMessage('Maximum temperature is 150\u00b0F (302\u00b0C)');
          setTemp(true);
          setAlertMessage(true);
          setOpenKeyPad(false);
          inputRef.current.value = '';
        } else {
          buttonHandler(Math.round((temp - 32) / 1.8));
          setOpenKeyPad(false);
          inputRef.current.value = `${temp}\u00b0F`;
        }
      } else {
        if (temp > 150) {
          setMessage('Maximum temperature is 150\u00b0F (302\u00b0C)');
          setTemp(true);
          setAlertMessage(true);
          setOpenKeyPad(false);
          inputRef.current.value = '';
        } else {
          buttonHandler(temp);
          setOpenKeyPad(false);
          inputRef.current.value = `${temp}\u00b0C`;
        }
      }
    }
  };

  // Display Message box
  const handleHideMessage = () => {
    setAlertMessage(false);
    inputRef.current.focus();
  };

  const messageBoxTitle =
    title === 'scheduler'
      ? 'heating schedule program'
      : 'optional constant temp';

  const unit = unitsMeasurement ? `\u00b0F` : `\u00b0C`;

  return (
    <Wrapper isEnable={isEnable} onSubmit={handleSubmit}>
      <InputAndLabelWrapper isEnable={isEnable} onClick={onInputHandler}>
        <Label isEnable={isEnable}> input temp.</Label>
        <InputWrapper isEnable={isEnable}>
          <InputDegree
            ref={inputRef}
            isEnable={isEnable}
            type='text'
            placeholder={unit}
            disabled={!isEnable}
            // onChange={handleCheck}
            disabled={isReady || isActivated || !isEnable}
          />
        </InputWrapper>
      </InputAndLabelWrapper>

      <ButtonWrapper
        isEnable={isEnable}
        isActivated={isActivated}
        isReady={isReady}
        disabled={!isEnable}
      >
        <ButtonHole isEnable={isEnable} isActivated={isActivated}>
          <ButtonTop
            isEnable={isEnable}
            isActivated={isActivated}
            isReady={isReady}
          >
            <ButtonName isEnable={isEnable}>
              {isReady ? 'ready' : isActivated ? 'activated' : 'apply'}
            </ButtonName>
          </ButtonTop>
        </ButtonHole>
      </ButtonWrapper>

      {openKeyPad && (
        <KeyPadWrapper>
          <InputKeyPad
            handleOnSubmit={handleVirtualKeyboardInput}
            setMainInput={(input) => (inputRef.current.value = input)}
            closeKeyPad={() => setOpenKeyPad(false)}
          />
        </KeyPadWrapper>
      )}
      {alertMessage && (
        <InputTempMessage
          onClose={handleHideMessage}
          title={messageBoxTitle}
          message={message}
          temp={temp}
        />
      )}
    </Wrapper>
  );
};

export default TempAndButton;

const Wrapper = styled.form`
  width: 272px;
  height: 34px;
  border-radius: 27px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;

  padding-left: 5px;
  padding-right: 3px;
  box-sizing: border-box;

  ${(p) =>
    p.isEnable
      ? css`
          background: #233a54;
          border-color: #707070;
          box-shadow: inset 0 0 6px #000000;
          opacity: 1;
        `
      : css`
          background: #3b3b3b 0% 0% no-repeat padding-box;
          box-shadow: inset 0px 0px 3px #000000;

          opacity: 1;
        `}
`;

const InputAndLabelWrapper = styled.div`
  height: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Label = styled.label`
  height: 10px;
  width: 66px;
  font-size: 8px;

  text-align: center;
  color: ${(p) => (p.isEnable ? '#ffff' : '#808080')};
`;

const InputWrapper = styled.div`
  height: 22px;
  width: 126px;
  border-radius: 25px;
  ${flexboxCenter}

  ${(p) =>
    p.isEnable
      ? css`
          border: 0.5 solid rgb(0, 0, 0);
          background-image: -webkit-linear-gradient(
            90deg,
            rgb(0, 0, 0) 0%,
            rgb(35, 58, 84) 100%
          );
          opacity: 1;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 14%);
          box-shadow: 0 0 2px rgba(0, 0, 0, 100%);
        `
      : css`
          ${DisableApplyButtonBG}
        `}
`;
const InputDegree = styled.input`
  height: 14px;
  width: 118px;
  border-radius: 20px;
  font-size: 10px;

  ${(p) =>
    p.isEnable
      ? css`
          background: #233a54;
          border-color: #707070;
          box-shadow: inset 0 0 6px #000000;
          opacity: 1;
        `
      : css`
          ${DisableApplyButtonHole}
        `}

  ::placeholder {
    color: ${(p) => (p.isEnable ? '#ffff' : '#808080')};
    text-align: center;
    font-size: 10px;
  }
`;

const ButtonWrapper = styled.button`
  cursor: ${(p) => (p.isEnable ? `pointer` : 'default')};
  height: 30px;
  width: 126px;
  border-radius: 25px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-style: solid;
  border-width: 0.5px;
  border-color: rgb(0, 0, 0);
  border-radius: 37px;
  background-image: -webkit-linear-gradient(
    90deg,
    rgb(0, 0, 0) 0%,
    rgb(35, 58, 84) 100%
  );
  opacity: 1;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 14%);
  box-shadow: 0 0 2px rgba(0, 0, 0, 100%);

  ${(p) =>
    p.isReady &&
    css`
      ${ButtonReady}
    `}
  ${(p) =>
    p.isActivated &&
    css`
      ${activeLayer1};
    `}


    ${(p) =>
    p.isEnable ||
    css`
      ${DisableApplyButtonBG}
    `}
`;
const ButtonHole = styled.div`
  width: 118px;
  height: 22px;

  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #233a54;
  border-color: #707070;
  box-shadow: inset 0 0 6px #000000;
  opacity: 1;

  ${(p) =>
    p.isActivated &&
    css`
      ${activeInput};
    `}

  ${(p) =>
    p.isEnable ||
    css`
      ${DisableApplyButtonHole}
    `}
`;

const ButtonTop = styled.div`
  width: 114px;
  height: 18px;
  border-radius: 25px;
  border-style: solid;
  border-width: 0.5px;
  border-color: rgb(0, 0, 0);

  background-image: -webkit-linear-gradient(
    90deg,
    rgb(0, 0, 0) 0%,
    rgb(35, 58, 84) 100%
  );
  opacity: 1;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 14%);
  box-shadow: 0 0 2px rgba(0, 0, 0, 100%);

  ${(p) =>
    p.isReady &&
    css`
      ${ButtonReady}
    `}

  ${(p) =>
    p.isActivated &&
    css`
      ${activeLayer1};
    `}

  ${flexboxCenter};

  ${(p) =>
    p.isEnable ||
    css`
      ${DisableApplyButtonBG}
    `}
`;

const ButtonName = styled.span`
  display: inline-block;
  font-size: 10px;

  font-family: 'Orbitron', sans-serif;
  text-align: center;
  color: ${(p) => (p.isEnable ? '#ffff' : '#808080')};
`;

const KeyPadWrapper = styled.div`
  position: absolute;
  top: 0rem;
  right: -13rem;
  z-index: 1000;
`;
