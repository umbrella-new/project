import { useContext } from 'react';
import styled, { css } from 'styled-components';
import { Context } from '../../../context/Context';
import ApplyButton from './ApplyButton';
import InputTemp from './InputTemp';

const TempAndButton = ({ isEnable }) => {
  return (
    <Wrapper isEnable={isEnable}>
      <InputTemp isEnable={isEnable} />
      <ApplyButton isEnable={isEnable} name='apply' />
    </Wrapper>
  );
};

export default TempAndButton;

const Wrapper = styled.div`
  width: 272px;
  height: 34px;
  border-radius: 27px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-left: 5px;
  padding-right: 3px;
  box-sizing: border-box;

  ${(p) =>
    p.isEnable
      ? css`
          background: #233a54;
          border-color: #707070;
          box-shadow: inset 0 0 6px #000000;
          opacity: 1;
        `
      : css`
          background: #3b3b3b 0% 0% no-repeat padding-box;
          box-shadow: inset 0px 0px 3px #000000;

          opacity: 1;
        `}
`;
