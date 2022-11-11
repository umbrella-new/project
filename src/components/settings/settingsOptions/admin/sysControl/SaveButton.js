import styled, { css } from 'styled-components';
import { flexboxCenter } from '../../../../../styles/commonStyles';

const SaveButton = ({ name, handleClick, id, editState, buttonColor }) => {
  return (
    <Wrapper
      onClick={() => editState && handleClick(true)}
      borderColor={editState}
      index={id}
      color={buttonColor}
    >
      <ButtonHole>
        <ButtonTop color={buttonColor}>
          <ButtonName>{name}</ButtonName>
        </ButtonTop>
      </ButtonHole>
    </Wrapper>
  );
};

export default SaveButton;

const Wrapper = styled.button`
  cursor: pointer;
  height: 26px;
  width: 121px;
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
  ${({ color }) =>
    color &&
    css`
      background: transparent linear-gradient(180deg, #1e7fc1 0%, #001640 100%);
    `};
  opacity: 1;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 14%);
  box-shadow: 0 0 2px rgba(0, 0, 0, 100%);
  border: ${({ borderColor, index }) =>
    borderColor && index === 0 ? '1.5px solid #95ff45' : 'none'};
  ${flexboxCenter};
`;
const ButtonHole = styled.div`
  width: 113px;
  height: 18px;

  border-radius: 20px;

  background: #233a54;
  border-color: #707070;
  box-shadow: inset 0 0 6px #000000;
  opacity: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonTop = styled.div`
  width: 111px;
  height: 17px;
  margin-bottom: 0.5px;
  border-radius: 25px;

  border-style: solid;
  border-width: 0.5px;
  border-color: rgb(0, 0, 0);

  background-image: -webkit-linear-gradient(
    90deg,
    rgb(0, 0, 0) 0%,
    rgb(35, 58, 84) 100%
  );
  ${({ color }) =>
    color &&
    css`
      background: transparent linear-gradient(180deg, #1e7fc1 0%, #001640 100%);
    `};
  opacity: 1;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 14%);
  box-shadow: 0 0 2px rgba(0, 0, 0, 100%);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonName = styled.span`
  height: 12px;
  display: inline-block;
  font-size: 10px;
  text-transform: uppercase;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 1px;
  color: #ffffff;
  opacity: 1;
`;
