import React, { useRef, useState } from 'react';
import Keyboard from 'react-simple-keyboard';
import './inputKeyboard.css';

import styled from 'styled-components';

const InputKeyboard = ({ input, setInput }) => {
  const [layout, setLayout] = useState('default');
  const keyboard = useRef();

  const onChange = (input) => {
    setInput(input);
  };

  const onKeyPress = (button) => {
    if ((button = '{enter}')) {
    }
  };

  // const onChangeInput = (event) => {
  //   const input = event.target.value;
  //   setInput(input);
  //   keyboard.current.setInput(input);
  // };

  return (
    <Wrapper>
      <Keyboard
        keyboardRef={(r) => (keyboard.current = r)}
        layoutName={layout}
        onChange={onChange}
        onKeyPress={(button) => onKeyPress(button)}
        theme={'hg-theme-default hg-layout-default myTheme'}
        display={{
          '{escape}': '⎋',
          '{tab}': '⇥',
          '{backspace}': '⌫',
          '{enter}': '↵',
          '{capslock}': '⇪',
          '{shiftleft}': '⇧',
          '{shiftright}': '⇧',
          '{controlleft}': '⌃',
          '{controlright}': '⌃',
          '{altleft}': '⌥',
          '{altright}': '⌥',
          '{metaleft}': '⌘',
          '{metaright}': '⌘',
          '{space}': '   ',
        }}
        layout={{
          default: [
            '1 2 3 4 5 6 7 8 9 0 {backspace}',
            'Q W E R T Y U I O P',
            'A S D F G H J K L {enter}',
            'Z X C V B N M . {shiftright}',
            '{space}',
          ],
        }}
      />
    </Wrapper>
  );
};

export default InputKeyboard;

const Wrapper = styled.div`
  width: 600px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  border: 1px solid #142033;
  border-radius: 16px;
  opacity: 1;

  /* position: absolute;
  z-index: 10000;
  top: 10.5rem;
  left: -10rem; */
`;
