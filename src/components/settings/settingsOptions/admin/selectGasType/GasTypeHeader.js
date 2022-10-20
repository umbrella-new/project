import styled from 'styled-components';
import { flexboxCenter } from '../../../../../styles/commonStyles';

function GasTypeHeader() {
  return (
    <div>
      <WrapperTitle>
        <WrapperTitle2>
          <Title>select gas type</Title>
        </WrapperTitle2>
      </WrapperTitle>
    </div>
  );
}

export default GasTypeHeader;

const WrapperTitle = styled.div`
  width: 252px;
  height: 32px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 16px;
  opacity: 1;
  ${flexboxCenter}
`;

const WrapperTitle2 = styled.div`
  width: 246px;
  height: 26px;

  border: 1px solid var(--unnamed-color-142033);
  border: 1px solid #142033;
  border-radius: 13px;
  opacity: 1;
  ${flexboxCenter}
`;

const Title = styled.p`
  width: 120px;
  height: 18px;
  margin-top: 6px;

  text-align: center;
  font-size: var(--space2);
  letter-spacing: 0.8px;
  color: #ffffff;
  opacity: 1;
`;
