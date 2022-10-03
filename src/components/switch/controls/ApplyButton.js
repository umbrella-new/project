import styled, { css } from 'styled-components';
import {
  flexboxCenter,
  DisableApplyButtonBG,
  DisableApplyButtonHole,
} from '../../../styles/commonStyles';

const ApplyButton = ({ buttonHandler, name, isEnable }) => {
  // Apply button handler
  // When click the apply button it calls button handler in it's parents component
  const handleOnClick = () => {
    buttonHandler();
  };
  return (
    <Wrapper isEnable={isEnable} onClick={() => buttonHandler()}>
      <ButtonHole isEnable={isEnable}>
        <ButtonTop isEnable={isEnable}>
          <ButtonName isEnable={isEnable}>{name}</ButtonName>
        </ButtonTop>
      </ButtonHole>
    </Wrapper>
  );
};

export default ApplyButton;

const Wrapper = styled.button`
  cursor: pointer;
  height: 30px;
  width: 126px;
  border-radius: 25px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${(p) =>
    p.isEnable
      ? css`
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
        `
      : css`
          ${DisableApplyButtonBG}
        `}
`;
const ButtonHole = styled.div`
  width: 118px;
  height: 22px;

  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(p) =>
    p.isEnable
      ? css`
          background: #233a54;
          border-color: #707070;
          box-shadow: inset 0 0 6px #000000;
          opacity: 1;
        `
      : css`
          ${DisableApplyButtonHole}
        `}
`;

const ButtonTop = styled.div`
  width: 114px;
  height: 18px;
  border-radius: 25px;

  ${(p) =>
    p.isEnable
      ? css`
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
        `
      : css`
          ${DisableApplyButtonBG}
        `}

  ${flexboxCenter}
`;

const ButtonName = styled.span`
  display: inline-block;
  font-size: 10px;
  text-transform: uppercase;
  font-family: 'Orbitron', sans-serif;
  text-align: center;
  color: ${(p) => (p.isEnable ? '#ffff' : '#808080')};
`;
