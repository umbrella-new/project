import styled from 'styled-components';
import { flexboxCenter } from '../../../../../styles/commonStyles';
import ValveSettings from './ValveSettings';
import SelectGasType from '../selectGasType/ContainerSelectGasType';
import { useState } from 'react';
import InputValveSettingsMessage from './InputValveSettingsMessage';

function ContainerValveSettings() {
  const title = 'warning';
  const message = 'please input a number between 0 and 100';

  const initialState = { first: '', second: '', third: '' };
  const [inputValue, setInputValue] = useState(initialState);
  const [warningMessage, setWarningMessage] = useState(false);

  const onClose = () => {
    setInputValue(initialState);
    setWarningMessage(false);
  };

  return (
    // <Wrapper>
    <Wrapper>
      <WrapperValveSettings>
        <ValveSettings
          setWarningMessage={setWarningMessage}
          inputValue={inputValue}
          setInputValue={setInputValue}
          initialState={initialState}
        />
      </WrapperValveSettings>
      <WrapperSelectGasType>
        <SelectGasType />
      </WrapperSelectGasType>
      {warningMessage && (
        <>
          <InputValveSettingsMessage
            title={title}
            onClose={onClose}
            message={message}
          />
        </>
      )}
    </Wrapper>
    /* </Wrapper> */
  );
}

export default ContainerValveSettings;

// const Wrapper = styled.div`
//   width: 558px;
//   height: 350px;

//   background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
//     0% no-repeat padding-box;
//   box-shadow: 0px 0px 2px #000000;
//   border: 0.5px solid #142033;
//   border-radius: 9px 9px 24px 24px;
//   opacity: 1;
//   ${flexboxCenter};
//   align-items: flex-start;
// `;

const Wrapper = styled.div`
  width: 554px;
  height: auto;
  /* height: auto; */
  margin-top: 2px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 13px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;

const WrapperValveSettings = styled.div`
  margin-left: 3px;
  margin-top: 3px;
`;

const WrapperSelectGasType = styled.div`
  margin-left: 3px;
  margin-top: 3px;
  margin-bottom: 3px;
`;

// const WrapperMessage = styled.div``;
