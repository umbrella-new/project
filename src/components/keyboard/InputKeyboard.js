import React, { useRef, useState } from 'react';
import Keyboard from 'react-simple-keyboard';
import './keyboard.css';

import styled from 'styled-components';

const InputKeyboard = () => {
  const [input, setInput] = useState('');
  const [layout, setLayout] = useState('default');
  const keyboard = useRef();

  const onChange = (input) => {
    setInput(input);
  };

  const handleShift = () => {
    const newLayoutName = layout === 'default' ? 'shift' : 'default';
    setLayout(newLayoutName);
  };

  const onKeyPress = (button) => {
    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === '{shift}' || button === '{lock}') handleShift();
  };

  const onChangeInput = (event) => {
    const input = event.target.value;
    setInput(input);
    keyboard.current.setInput(input);
  };

  return (
    <Wrapper>
      <Keyboard
        keyboardRef={(r) => (keyboard.current = r)}
        layoutName={layout}
        onChange={onChange}
        onKeyPress={onKeyPress}
        theme={'hg-theme-default hg-layout-default myTheme'}
        layout={{
          default: ['1 2 3', '4 5 6', '7 8 9', '0 {enter}'],
        }}
      />
    </Wrapper>
  );
};

export default InputKeyboard;

const Wrapper = styled.div`
  width: 200px;
`;
