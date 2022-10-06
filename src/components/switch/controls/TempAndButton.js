import { useRef } from 'react';
import styled, { css } from 'styled-components';
import {
  flexboxCenter,
  DisableApplyButtonBG,
  DisableApplyButtonHole,
  activeLayer1,
  activeLayer2,
  activeInput,
  ButtonReady,
} from '../../../styles/commonStyles';

import ApplyButton from './ApplyButton';

const TempAndButton = ({ isEnable, buttonHandler, isActivated, isReady }) => {
  const inputRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const temp = Number(inputRef.current.value);
    if (temp !== 0) {
      if (!isActivated) {
        buttonHandler(temp);
        inputRef.current.value = `${temp}\u00b0C`;
      } else {
        buttonHandler(0);
        inputRef.current.value = '';
      }
    }
  };

  return (
    <Wrapper isEnable={isEnable} onSubmit={handleSubmit}>
      <InputAndLabelWrapper isEnable={isEnable}>
        <Label isEnable={isEnable}> input temp.</Label>
        <InputWrapper isEnable={isEnable}>
          <InputDegree
            ref={inputRef}
            isEnable={isEnable}
            type='text'
            placeholder='0&deg;C'
          />
        </InputWrapper>
      </InputAndLabelWrapper>

      <ButtonWrapper
        isEnable={isEnable}
        isActivated={isActivated}
        isReady={isReady}
      >
        <ButtonHole isEnable={isEnable} isActivated={isActivated}>
          <ButtonTop
            isEnable={isEnable}
            isActivated={isActivated}
            isReady={isReady}
          >
            <ButtonName isEnable={isEnable}>apply</ButtonName>
          </ButtonTop>
        </ButtonHole>
      </ButtonWrapper>
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
  cursor: pointer;
  height: 30px;
  width: 126px;
  border-radius: 25px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${(p) =>
    p.isEnable
      ? css`
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
        `
      : css`
          ${DisableApplyButtonBG}
        `}

  ${(p) =>
    p.isActivated &&
    css`
      ${activeLayer1};
    `}

    ${(p) =>
    p.isReady &&
    css`
      ${ButtonReady}
    `}
`;
const ButtonHole = styled.div`
  width: 118px;
  height: 22px;

  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

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

  ${(p) =>
    p.isActivated &&
    css`
      ${activeInput};
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
    p.isEnable ||
    css`
      ${DisableApplyButtonBG}
    `}

  ${(p) =>
    p.isActivated &&
    css`
      ${activeLayer1};
    `}

  ${flexboxCenter};

  ${(p) =>
    p.isReady &&
    css`
      ${ButtonReady}
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
