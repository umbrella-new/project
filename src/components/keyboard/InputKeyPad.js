import React, { useRef, useState } from 'react';
import Keyboard from 'react-simple-keyboard';
import './keypad.css';

import styled from 'styled-components';
import { flexboxCenter } from '../../styles/commonStyles';

const InputKeyPad = ({ closeKeyPad, handleOnSubmit, column, name }) => {
  const [input, setInput] = useState('');
  const keyboard = useRef();

  const onChange = (input) => {
    setInput(input);
  };

  const handleOnClick = () => {
    if (column === undefined) {
      const inputNumber = Number(input);
      if (inputNumber !== 0) {
        handleOnSubmit(inputNumber);
      } else {
        closeKeyPad();
        return;
      }
    } else {
      const inputNumber = Number(input);
      if (inputNumber !== 0) {
        handleOnSubmit(column, name, inputNumber);
        closeKeyPad();
      } else {
        closeKeyPad();
        return;
      }
    }
  };

  return (
    <Wrapper>
      <InputAndButtonWrapper>
        <Input
          value={input}
          placeHoler='Please input numbers'
          onChange={setInput}
        />
      </InputAndButtonWrapper>

      <Keyboard
        keyboardRef={(r) => (keyboard.current = r)}
        onChange={onChange}
        theme={'hg-theme-default hg-layout-default myTheme'}
        display={{ '{bksp}': '⌫' }}
        layout={{
          default: ['1 2 3', '4 5 6', '7 8 9', '{bksp} 0 .'],
        }}
      />
      <EnterButtonWrapper onClick={handleOnClick}>
        <ButtonOuter>
          <ButtonHole>
            <ButtonTop>
              <ButtonName>Enter</ButtonName>
            </ButtonTop>
          </ButtonHole>
        </ButtonOuter>
      </EnterButtonWrapper>
    </Wrapper>
  );
};

export default InputKeyPad;

const Wrapper = styled.div`
  width: 200px;
  border-radius: 1rem;

  ${flexboxCenter}
  background: #233a54;
  border-color: #707070;
  box-shadow: inset 0 0 6px #000000;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 0.4rem;
`;

const InputAndButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 100%;
  height: 42px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border: 0.5px solid #142033;
  border-radius: 12px;
  opacity: 1;
  ::placeholder {
    color: #fff;
  }
  margin-bottom: 0.4rem;
`;

const EnterButtonWrapper = styled.button`
  cursor: pointer;

  width: 129px;
  height: 32px;

  border-radius: 17px;
  background: #233a54;
  border-color: #707070;
  box-shadow: inset 0 0 6px #000000;
  opacity: 1;
  padding: 0;

  ${flexboxCenter}

  cursor: pointer;
  margin-top: 0.4rem;
`;

const ButtonOuter = styled.div`
  height: 30px;
  width: 126px;
  border-radius: 25px;

  ${flexboxCenter}

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
`;

const ButtonHole = styled.div`
  width: 118px;
  height: 22px;
  border-radius: 20px;

  ${flexboxCenter}
  background: #233a54;
  border-color: #707070;
  box-shadow: inset 0 0 6px #000000;
  opacity: 1;
`;

const ButtonTop = styled.div`
  width: 114px;
  height: 18px;
  border-radius: 25px;

  border: 0.5px solid rgb(0, 0, 0);
  background: -webkit-linear-gradient(
    90deg,
    rgb(0, 0, 0) 0%,
    rgb(35, 58, 84) 100%
  );
  opacity: 1;
  box-shadow: 0 0 2px rgba(0, 0, 0, 100%);

  ${flexboxCenter}
`;

const ButtonName = styled.span`
  font-size: 10px;
  text-transform: uppercase;
  text-align: center;
`;
