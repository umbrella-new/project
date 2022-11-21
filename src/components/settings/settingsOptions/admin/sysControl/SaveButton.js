import styled, { css } from 'styled-components';
import { flexboxCenter } from '../../../../../styles/commonStyles';

const SaveButton = ({ name, handleClick, id, editState, buttonColor }) => {
  return (
    <Wrapper1>
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
    </Wrapper1>
  );
};

export default SaveButton;

const Wrapper1 = styled.div`
  width: 123px;
  height: 28px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 26px;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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

  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: ${({ borderColor, index }) =>
    borderColor && index === 0 ? '1.5px solid #95ff45' : 'none'};
  ${flexboxCenter};
`;
const ButtonHole = styled.div`
  width: 115px;
  height: 20px;

  border-radius: 22px;

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
  height: 16px;
  margin-bottom: 0.5px;
  border-radius: 20px;

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

  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonName = styled.span`
  /* height: 12px; */
  display: inline-block;
  font-size: 10px;
  text-transform: uppercase;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 1px;
  color: #ffffff;
  opacity: 1;
`;
