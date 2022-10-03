import styled from 'styled-components';
import { flexboxCenter } from '../../../styles/commonStyles';

const SelectButton = ({ onSelect }) => {
  const handleOnClick = () => {
    onSelect();
  };
  return (
    <WrapperHole onClick={handleOnClick}>
      <ButtonOuterWrapper>
        <ButtonHole>
          <ButtonTop>
            <ButtonName>select</ButtonName>
          </ButtonTop>
        </ButtonHole>
      </ButtonOuterWrapper>
    </WrapperHole>
  );
};

export default SelectButton;

const WrapperHole = styled.div`
  width: 82px;
  height: 26px;

  /* background: #233a54 0% 0% no-repeat padding-box;
  border: 0.25px solid #142033;
  
  opacity: 1; */

  border-radius: 18px;
  background: #233a54;
  border-color: #707070;
  box-shadow: inset 0 0 6px #000000;
  opacity: 1;
  padding: 0;

  ${flexboxCenter}
`;

const ButtonOuterWrapper = styled.button`
  cursor: pointer;
  width: 80px;
  height: 24px;

  border-radius: 25px;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-style: solid;
  border-width: 0.5px;
  border-color: rgb(0, 0, 0);
  border-radius: 37px;
  background-image: -webkit-linear-gradient(
    90deg,
    rgb(0, 0, 0) 0%,
    rgb(35, 58, 84) 100%
  );
  opacity: 1;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 14%);
  box-shadow: 0 0 2px rgba(0, 0, 0, 100%);
`;

const ButtonHole = styled.div`
  width: 72px;
  height: 16px;

  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: #233a54;
  border-color: #707070;
  box-shadow: inset 0 0 6px #000000;
  opacity: 1;
  padding: 0;
`;

const ButtonTop = styled.div`
  width: 70px;
  height: 14px;
  border-radius: 25px;

  border-style: solid;
  border-width: 0.5px;
  border-color: rgb(0, 0, 0);

  background-image: -webkit-linear-gradient(
    90deg,
    rgb(0, 0, 0) 0%,
    rgb(35, 58, 84) 100%
  );
  opacity: 1;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 14%);
  box-shadow: 0 0 2px rgba(0, 0, 0, 100%);

  ${flexboxCenter}
`;

const ButtonName = styled.span`
  display: inline-block;
  font-size: 10px;
  text-transform: uppercase;
  font-family: 'Orbitron', sans-serif;
  text-align: center;
`;
