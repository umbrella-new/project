import React, { useRef, useState } from "react";
import Keyboard from "react-simple-keyboard";
import "./keyboard.css";

import styled from "styled-components";

const InputKeyPad = ({ closeKeyPad, handleOnSubmit }) => {
  const [input, setInput] = useState("");
  const keyboard = useRef();

  const onChange = (input) => {
    setInput(input);
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
        theme={"hg-theme-default hg-layout-default myTheme"}
        layout={{
          default: ["1 2 3", "4 5 6", "7 8 9", "{bksp} 0 ."],
        }}
      />
      <EnterButton onClick={() => handleOnSubmit(input)}>Enter</EnterButton>
    </Wrapper>
  );
};

export default InputKeyPad;

const Wrapper = styled.div`
  width: 256px;
  height: 280px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  border: 1px solid #142033;
  border-radius: 16px;
  opacity: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 0.1rem;
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
`;

const CancelButton = styled.button`
  cursor: pointer;

  width: 42px;
  height: 42px;
  border-radius: 10px;

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
`;

const EnterButton = styled.button`
  height: 42px;
  border-radius: 10px;

  /* border-style: solid;
  border-width: 0.5px;
  border-color: rgb(0, 0, 0);
  background-image: -webkit-linear-gradient(
    90deg,
    rgb(0, 0, 0) 0%,
    rgb(35, 58, 84) 100%
  );
  opacity: 1;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 14%);
  box-shadow: 0 0 2px rgba(0, 0, 0, 100%); */

  cursor: pointer;
  width: 100%;
`;
