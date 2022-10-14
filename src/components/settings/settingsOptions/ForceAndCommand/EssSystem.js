import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { flexboxCenter } from '../../../../styles/commonStyles';
import ButtonCloseAndExpand from './ButtonCloseAndExpand';
import { useDispatch, useSelector } from 'react-redux';
import {
  setEssButtonExpandAndClose,
  selectSettingsOfEss,
} from '../../../../store/slices/settingsOfEssSlice';

function EssHeader({
  toggleEssButton,
  essExpandOrClose,
  handleCloseExpandButton,
}) {
  const state = useSelector(selectSettingsOfEss);
  const buttonExpandClose = state.buttonOfExpandAndClose.essExpandAndClose;

  return (
    <Wrapper>
      {/* {buttonExpandClose ? (
        <ButtonHole>
          <img src={toggleEssButton} />
        </ButtonHole>
      ) : (
        <ButtonHole>
          <img src={essButton} />
        </ButtonHole>
      )} */}
      <ButtonHole>
        <img src={toggleEssButton} />
      </ButtonHole>
      <Span></Span>
      <ContainerTitle>
        <P>electrical switch system</P>
      </ContainerTitle>
      <ContainerButton
        onClick={() => {
          handleCloseExpandButton();
        }}
      >
        <ButtonCloseAndExpand name={essExpandOrClose} />
      </ContainerButton>
    </Wrapper>
  );
}

export default EssHeader;

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

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 19px;
  opacity: 1;
  ${flexboxCenter}
`;