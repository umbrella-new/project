import { useState } from 'react';
import styled from 'styled-components';
import SettingConfirmedMessage from '../../userMessages/SettingConfirmedMessage';

function InvisibleDivForEditButton() {
  const [display, setDisplay] = useState(false);
  const handleMessage = () => {
    return setDisplay(true);
  };

  const closeMessageBox = () => {
    return setDisplay(false);
  };
  console.log(display);

  const editTitle = 'Edit';
  const editMessage = ' please press ok';

  return (
    <Div onClick={() => handleMessage()}>
      {display && (
        <SettingConfirmedMessage
          onClose={closeMessageBox}
          title={editTitle}
          message={editMessage}
        />
      )}
    </Div>
  );
}

const Div = styled.div`
  height: 327px;
  width: 592px;
  background-color: transparent;
`;

export default InvisibleDivForEditButton;
