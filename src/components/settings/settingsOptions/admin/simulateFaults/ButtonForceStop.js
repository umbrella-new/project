import styled, { css } from 'styled-components';
import { flexboxCenter } from '../../../../../styles/commonStyles';

function ButtonForceStop({ handleClick, name, color }) {
  return (
    <Wrapper onClick={() => handleClick()} color={color}>
      <Wrapper1 color={color}>
        <ButtonHole color={color}>
          <ButtonTop color={color}>
            <ButtonName color={color}>{name}</ButtonName>
          </ButtonTop>
        </ButtonHole>
      </Wrapper1>
    </Wrapper>
  );
}

export default ButtonForceStop;

const Wrapper = styled.div`
  width: 90px;
  height: 28px;

  background: #1b2b44;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 19px;

  ${({ color }) =>
    color &&
    css`
      background: #3b3b3b;
      box-shadow: inset 0px 0px 1px #000000;
    `}

  opacity: 1;
  ${flexboxCenter}
`;

const Wrapper1 = styled.button`
  cursor: pointer;
  width: 88px;
  height: 26px;
  border-radius: 25px;

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
  border: ${({ borderColor, index }) =>
    borderColor && index === 0 ? '1.5px solid #95ff45' : 'none'};

  ${({ color }) =>
    color &&
    css`
      background: transparent linear-gradient(180deg, #565656 0%, #1d1d1d 100%);
      box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
      border: 1px solid #000000;
    `}
`;
const ButtonHole = styled.div`
  width: 82px;
  height: 20px;
  padding: 0;

  border-radius: 20px;
  background: #233a54;
  border-color: #707070;
  box-shadow: inset 0 0 6px #000000;

  ${({ color }) =>
    color &&
    css`
      background: #3b3b3b;
      box-shadow: inset 0px 0px 1px #000000;
    `}

  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonTop = styled.div`
  width: 80px;
  height: 18px;
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

  ${({ color }) =>
    color &&
    css`
      background: transparent linear-gradient(180deg, #565656 0%, #1d1d1d 100%);
      box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
      border: 1px solid #000000;
    `}

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonName = styled.span`
  height: 12px;
  display: inline-block;
  font-size: var(--space2);
  letter-spacing: 0.8px;
  color: #ffffff;

  ${({ color }) =>
    color &&
    css`
      color: #808080;
    `}

  opacity: 1;
`;
