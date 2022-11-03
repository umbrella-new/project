import { useState } from 'react';
import styled from 'styled-components';
import SettingConfirmedMessage from '../../../userMessages/SettingConfirmedMessage';

function InvisibleDivForEditButton() {
  const [display, setDisplay] = useState(false);

  const handleMessage = (event) => {
    event.stopPropagation();
    return setDisplay(true);
  };

  const closeMessageBox = (event) => {
    event.stopPropagation();
    return setDisplay(false);
  };

  const editTitle = 'settings options';
  const editMessage = 'please select edit to allow changes';

  return (
    <Div onClick={(e) => handleMessage(e)}>
      {display && (
        <SettingConfirmedMessage
          onClose={closeMessageBox}
          title={editTitle}
          message={editMessage}
          enableButton={display}
        />
      )}
    </Div>
  );
}

const Div = styled.div`
  height: 800px;
  width: 592px;
  background-color: transparent;
  position: absolute;
  z-index: 10;
`;

export default InvisibleDivForEditButton;
