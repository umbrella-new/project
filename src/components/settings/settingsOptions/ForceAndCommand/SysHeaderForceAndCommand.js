import { useState } from 'react';
import styled from 'styled-components';
import { flexboxCenter } from '../../../../styles/commonStyles';
import ButtonCloseAndExpand from './ButtonCloseAndExpand';

function SysHeaderForceAndCommand({
  toggleButtonColor,
  expandOrClose,
  handleCloseExpandButton,
  name,
  index,
  handleSelect,
  options,
}) {
  return (
    <Wrapper>
      <ButtonHole>
        <Img src={toggleButtonColor} />
      </ButtonHole>
      <Span></Span>
      <ContainerTitle>
        <Title>{name}</Title>
      </ContainerTitle>
      <ContainerButton
        onClick={() => {
          return handleCloseExpandButton(index), handleSelect(index);
        }}
      >
        <ButtonCloseAndExpand name={options === index ? 'close' : 'expand'} />
      </ContainerButton>
    </Wrapper>
  );
}

export default SysHeaderForceAndCommand;

const Wrapper = styled.div`
  width: 100%;
  height: 54px;

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
  ${flexboxCenter};
`;

const Img = styled.img`
  margin-left: 6px;
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

const Title = styled.p`
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
