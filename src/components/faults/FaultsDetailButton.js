import styled from 'styled-components';
import { flexboxCenter } from '../../styles/commonStyles';

const FaultsDetailButton = ({ name, handleButtonClick, column }) => {
  return (
    <WrapperHole onClick={() => handleButtonClick(name, column)}>
      <ButtonInner>
        <ButtonInnerHole>
          <ButtonTop>
            <Title>{name}</Title>
          </ButtonTop>
        </ButtonInnerHole>
      </ButtonInner>
    </WrapperHole>
  );
};

export default FaultsDetailButton;

const WrapperHole = styled.button`
  cursor: pointer;
  ${flexboxCenter};

  width: 88px;
  height: 28px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 1px #000000;
  border-radius: 27px;

  margin-left: 0.2rem;
`;
const ButtonInner = styled.div`
  ${flexboxCenter};

  width: 86px;
  height: 26px;

  border: 0.5px solid var(--unnamed-color-000000);
  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px;
  border-radius: 25px;
`;
const ButtonInnerHole = styled.div`
  ${flexboxCenter};

  width: 82px;
  height: 20px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 1px #000000;
  border-radius: 20px;
`;
const ButtonTop = styled.div`
  ${flexboxCenter};

  width: 80px;
  height: 18px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 25px;
`;
const Title = styled.span`
  font-size: 8px;
  text-align: center;
  text-transform: uppercase;
`;
