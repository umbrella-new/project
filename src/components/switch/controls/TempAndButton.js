import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import {
  flexboxCenter,
  DisableApplyButtonBG,
  DisableApplyButtonHole,
  activeLayer1,
  activeInput,
  ButtonReady,
} from '../../../styles/commonStyles';
import InputKeyPad from '../../keyboard/KeyPad';

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

  useEffect(() => {
    if (currTemp > 0) {
      inputRef.current.value = `${currTemp}\u00b0C`;
      if (!isEnable) {
        inputRef.current.value = ``;
      }
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const temp = Number(inputRef.current.value);

    if (title === 'scheduler') {
      if (temp !== 0) {
        if (!isReady) {
          buttonHandler(temp);
          inputRef.current.value = `${temp}\u00b0C`;
        } else {
          buttonHandler(0);
          inputRef.current.value = '';
        }
      }
    } else {
      if (temp !== 0) {
        if (temp > 248) {
          window.alert(
            'Maximum temperature is 120\u00b0F(248\u00b0C). Please input desired temperature below the maximum temperature'
          );
          inputRef.current.value = '';
        } else {
          if (!isActivated) {
            buttonHandler(temp);
            inputRef.current.value = `${temp}\u00b0C`;
          } else {
            buttonHandler(0);
            inputRef.current.value = '';
          }
        }
      }
    }
  };

  const handleCheck = () => {
    if (!isAble) {
      alert('Please Set Schedule First');
      inputRef.current.value = '';
    }
  };

  // Handlers for keypad
  const onInputHandler = () => {
    // inputRef.current.focus();
    setOpenKeyPad(true);
  };

  const handleClosekeypad = () => {
    setOpenKeyPad(false);
  };

  // // Virtual keyboard input handler
  // const handleVirtualKeyboardInput = (input) => {
  //   const temp = Number(input);

  //   if (temp !== 0) {
  //     if (!instantButtonToggler) {
  //       dispatch(instantHeat(temp));
  //       inputRef.current.value = `${temp}\u00b0C`;
  //       handleClosekeypad();
  //     } else {
  //       dispatch(instantHeat(0));
  //       inputRef.current.value = ``;
  //     }
  //   } else {
  //     return;
  //   }
  // };

  return (
    <Wrapper isEnable={isEnable} onSubmit={handleSubmit}>
      <InputAndLabelWrapper isEnable={isEnable} onClick={onInputHandler}>
        <Label isEnable={isEnable}> input temp.</Label>
        <InputWrapper isEnable={isEnable}>
          <InputDegree
            ref={inputRef}
            isEnable={isEnable}
            type='text'
            placeholder='0&deg;C'
            disabled={!isEnable}
            onChange={handleCheck}
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
            closeKeyPad={handleClosekeypad}
            // handleOnSubmit={handleVirtualKeyboardInput}
          />
        </KeyPadWrapper>
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
  text-transform: uppercase;
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
  text-transform: uppercase;
  font-family: 'Orbitron', sans-serif;
  text-align: center;
  color: ${(p) => (p.isEnable ? '#ffff' : '#808080')};
`;

const KeyPadWrapper = styled.div`
  position: absolute;
  top: 0rem;
  right: -17rem;
  z-index: 1000;
`;
