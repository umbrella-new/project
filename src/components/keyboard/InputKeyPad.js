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
    const inputNumber = Number(input);

    // 1. no name, no column
    // 2. no column
    // 3.
    if (name !== undefined) {
      if (column !== undefined) {
        inputNumber !== 0 && handleOnSubmit(column, name, inputNumber);
      } else {
        inputNumber !== 0 && handleOnSubmit(name, inputNumber);
      }
    } else {
      inputNumber !== 0 && handleOnSubmit(inputNumber);
    }
    closeKeyPad();
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
      <ButtonWrapper>
        <EnterButtonWrapper onClick={handleOnClick}>
          <ButtonOuter>
            <ButtonHole>
              <ButtonInner>
                <ButtonTop>
                  <ButtonName>ok</ButtonName>
                </ButtonTop>
              </ButtonInner>
            </ButtonHole>
          </ButtonOuter>
        </EnterButtonWrapper>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default InputKeyPad;

const Wrapper = styled.div`
  /* width: 200px; */
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 0.4rem;

  ${flexboxCenter}

  background: transparent linear-gradient(180deg, #233A54 0%, #060D19 100%) 0% 0% no-repeat padding-box;
  border: 1px solid #142033;
  opacity: 1;
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

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const EnterButtonWrapper = styled.button`
  cursor: pointer;
  ${flexboxCenter}
  margin-top: 0.2rem;

  /* width: 82px;
  height: 56px; */

  width: 58px;
  height: 36px;
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border: 0.5px solid #142033;
  border-radius: 12px;
`;

const ButtonOuter = styled.div`
  ${flexboxCenter}

  width: 54px;
  height: 32px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 1px #000000;
  border-radius: 10px;
`;

const ButtonHole = styled.div`
  ${flexboxCenter}

  width: 52px;
  height: 30px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 9px;
`;

const ButtonInner = styled.div`
  ${flexboxCenter}
  width: 46px;
  height: 24px;
  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 1px #000000;
  border-radius: 7px;
`;

const ButtonTop = styled.div`
  width: 44px;
  height: 22px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 6px;
  opacity: 1;

  ${flexboxCenter}
`;

const ButtonName = styled.span`
  font-size: 16px;
  text-align: center;
`;
