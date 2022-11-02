import { useState } from 'react';
import styled from 'styled-components';
import SettingConfirmedMessage from '../../../userMessages/SettingConfirmedMessage';

function ApplyButtonInvisibleDiv() {
  const [display, setDisplay] = useState(false);

  const handleMessage = (event) => {
    event.stopPropagation();
    return setDisplay(true);
  };

  const closeMessageBox = (event) => {
    event.stopPropagation();
    return setDisplay(false);
  };

  const applyTitle = 'settings options';
  const applyMessage =
    'please confirm your selected changes by pressing apply or clear to cancel changes';

  return (
    <Div onClick={(e) => handleMessage(e)}>
      {display === true && (
        <SettingConfirmedMessage
          onClose={closeMessageBox}
          title={applyTitle}
          message={applyMessage}
          enableButton={display}
        />
      )}
    </Div>
  );
}

export default ApplyButtonInvisibleDiv;

const Div = styled.div`
  height: 136px;
  width: 270px;
  background-color: transparent;
  position: absolute;
  z-index: 10;
`;
