import { useState } from 'react';
import styled from 'styled-components';
import { flexboxCenter } from '../../../../../styles/commonStyles';
import GasTypeConfirmButton from './GasTypeConfirmButton';
import GasTypeHeader from './GasTypeHeader';
import SelectGasType from './SelectGasType';

function ContainerSelectGasType() {
  const gasType = ['lp-propane', 'ng-natural gas'];

  // states
  const [gasSelection, setGasSelection] = useState(0);
  const [activeSelect, setActiveSelect] = useState(true);
  const [buttonColor, setButtonColor] = useState(false);

  // functions
  const handleToggle = (index) => {
    if (index !== gasSelection) return setGasSelection(index);
  };

  const handleSelect = (index) => {
    if (index === 0) return setActiveSelect(!activeSelect);
    else return setActiveSelect(!activeSelect);
  };

  const handleButton = () => {
    return setButtonColor(true);
  };

  return (
    <Wrapper>
      <Wrapper2>
        <GasTypeHeader />
        <SelectGasType
          gasType={gasType}
          gasSelection={gasSelection}
          handleSelect={handleSelect}
          handleToggle={handleToggle}
        />
        <WrapperButton>
          <GasTypeConfirmButton
            handleButton={handleButton}
            buttonColor={buttonColor}
          />
        </WrapperButton>
      </Wrapper2>
    </Wrapper>
  );
}

export default ContainerSelectGasType;

const Wrapper = styled.div`
  width: 270px;
  height: 168px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 12px;
  opacity: 1;
  ${flexboxCenter}
`;

const Wrapper2 = styled.div`
  width: 264px;
  height: 162px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 0px 2px #000000;
  box-shadow: inset 1px 1px 2px rgb(255, 255, 255, 0.1);
  border: 0.5px solid #142033;
  border-radius: 9px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const WrapperButton = styled.div`
  width: 252px;
  height: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
