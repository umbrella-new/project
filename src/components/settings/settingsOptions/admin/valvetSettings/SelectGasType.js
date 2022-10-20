import styled from 'styled-components';
import { flexboxCenter } from '../../../../../styles/commonStyles';

function SelectGasType() {
  return (
    <Wrapper>
      <Wrapper2>
        <WrapperTitle>
          <WrapperTitle2>
            <Title>select gas type</Title>
          </WrapperTitle2>
        </WrapperTitle>
        <WrapperSelection></WrapperSelection>
        <button></button>
      </Wrapper2>
    </Wrapper>
  );
}

export default SelectGasType;

const Wrapper = styled.div`
  width: 270px;
  height: 168px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 12px;
  opacity: 1;
`;

const Wrapper2 = styled.div`
  width: 264px;
  height: 162px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 0px 2px #000000;
  border: 0.5px solid #142033;
  border-radius: 9px;
  opacity: 1;
`;

const WrapperTitle = styled.div`
  width: 252px;
  height: 32px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 16px;
  opacity: 1;
`;

const WrapperTitle2 = styled.div`
  width: 246px;
  height: 26px;
  border: 1px solid var(--unnamed-color-142033);
  border: 1px solid #142033;
  border-radius: 13px;
  opacity: 1;
`;

const Title = styled.p`
  width: 120px;
  height: 18px;

  text-align: center;
  font-size: var(--space2);
  letter-spacing: 0.8px;
  color: #ffffff;
  opacity: 1;
`;

const WrapperSelection = styled.div`
  width: 252px;
  height: 63px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 16px;
  opacity: 1;
`;
