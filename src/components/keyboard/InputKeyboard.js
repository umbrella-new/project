import React, { useRef, useState } from 'react';
import Keyboard from 'react-simple-keyboard';
import './inputKeyboard.css';

import styled from 'styled-components';
import { flexboxCenter } from '../../styles/commonStyles';

const InputKeyboard = ({
  setInput,
  handleSubmit,
  handleOnSubmit,
  column,
  name,
  closeKeyboard,
}) => {
  const [layout, setLayout] = useState('default');
  const keyboard = useRef();

  const onChange = (input) => {
    if (column >= 0) {
      handleOnSubmit(column, name, input);
    } else if (name === 'password') {
      setInput(input);
    } else {
      handleOnSubmit(name, input);
    }
  };

  const onKeyPress = (button) => {
    if (button === '{enter}') {
      if (column >= 0) {
        closeKeyboard();
      } else if (name === 'password') {
        handleSubmit();
      } else {
        closeKeyboard();
      }
    } else if (button === '{shift}') {
      const layoutName = layout === 'default' ? 'shift' : 'default';
      setLayout(layoutName);
    }
  };

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
          '{shift}': '⇧',
          '{shift}': '⇧',
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
            '0 1 2 3 4 5 6 7 8 9 - _ {backspace}',
            'q w e r t y u i o p \\',
            'a s d f g h j k l {enter}',
            '{shift} z x c v b n m . / {shift}',
            '{space}',
          ],
          shift: [
            '0 1 2 3 4 5 6 7 8 9 - _ {backspace}',
            'Q W E R T Y U I O P \\',
            'A S D F G H J K L {enter}',
            '{shift} Z X C V B N M . / {shift}',
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

const Logo = styled.div`
  width: ;
  ${flexboxCenter}
`;
