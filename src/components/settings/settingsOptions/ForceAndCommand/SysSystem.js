import { useState } from 'react';
import styled from 'styled-components';
import { flexboxCenter } from '../../../../styles/commonStyles';
import ButtonCloseAndExpand from './ButtonCloseAndExpand';

function SysSystem({
  sysExpandOrClose,
  handleCloseExpandButton,
  toggleSysButton,
}) {
  return (
    <Wrapper>
      <ButtonHole>
        <img src={toggleSysButton} />
      </ButtonHole>
      <Span></Span>
      <ContainerTitle>
        <P>system commands</P>
      </ContainerTitle>
      <ContainerButton
        onClick={() => {
          handleCloseExpandButton();
        }}
      >
        <ButtonCloseAndExpand name={sysExpandOrClose} />
      </ContainerButton>
    </Wrapper>
  );
}

export default SysSystem;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  background: transparent
    linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(35, 58, 84) 100%) 0% 0% no-repeat
    padding-box;
  box-shadow: inset 0px 0px 2px rgb(255, 255, 255, 0.1);
  border: 1px solid #142033;
  border-radius: 38px;
  opacity: 1;
  ${flexboxCenter};
  justify-content: space-evenly;
`;

const ButtonHole = styled.div`
  width: 43px;
  height: 43px;
  margin-left: 6px;

  border-radius: 50%;
  background: #18253a 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border: 0.5px solid #142033;
  opacity: 1;
  ${flexboxCenter};
`;

const Span = styled.span`
  content: '';
  flex: 1;
  border-bottom: solid 2px #ffff;
  margin: auto 0.25em;
`;

const ContainerTitle = styled.div`
  width: 194px;
  height: 36px;
  margin-right: 4px;
  margin-left: 2px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 4px #000000;
  border: 1px solid #142033;
  border-radius: 25px;
  opacity: 1;
  ${flexboxCenter};
`;

const P = styled.p`
  font-size: var(--space2);
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: #ffffff;
  opacity: 1;
`;

const ContainerButton = styled.div`
  margin-right: 6px;
  width: 66px;
  height: 24px;
  background: var(--unnamed-color-1b2b44) 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px var(--unnamed-color-000000);
  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 19px;
  opacity: 1;
  ${flexboxCenter}
`;
