import styled, { css } from 'styled-components';
import {
  flexboxCenter,
  DisableApplyButtonBG,
  DisableApplyButtonHole,
} from '../../../styles/commonStyles';

const InputTemp = ({ isEnable, setTemp }) => {
  const handleOnChange = (event) => {
    const value = event.target.value;
    setTemp(value);
    event.target.value = `${value}\u00b0C`;
  };

  return (
    <InputWrapper isEnable={isEnable}>
      <Label isEnable={isEnable}> input temp.</Label>
      <InputWrapper isEnable={isEnable}>
        <InputDegree
          isEnable={isEnable}
          type='text'
          placeholder='0&deg;C'
          onChange={handleOnChange}
        />
      </InputWrapper>
    </InputWrapper>
  );
};

export default InputTemp;

const InputAndLabelWrapper = styled.div`
  height: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Label = styled.label`
  height: 10px;
  width: 66px;
  font-size: 8px;
  text-transform: uppercase;
  text-align: center;
  color: ${(p) => (p.isEnable ? '#ffff' : '#808080')};
`;

const InputWrapper = styled.div`
  height: 22px;
  width: 126px;
  border-radius: 25px;
  ${flexboxCenter}

  ${(p) =>
    p.isEnable
      ? css`
          border: 0.5 solid rgb(0, 0, 0);
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
const InputDegree = styled.input`
  height: 14px;
  width: 118px;
  border-radius: 20px;
  font-size: 10px;

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

  ::placeholder {
    color: ${(p) => (p.isEnable ? '#ffff' : '#808080')};
    text-align: center;
    font-size: 10px;
  }
`;
