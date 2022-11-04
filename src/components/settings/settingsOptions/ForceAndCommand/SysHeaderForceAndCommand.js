import { useState } from 'react';
import styled from 'styled-components';
import { flexboxCenter } from '../../../../styles/commonStyles';
import ButtonCloseAndExpand from './ButtonCloseAndExpand';

function SysHeaderForceAndCommand({
  toggleButtonColor,
  expandOrClose,
  // handleCloseExpandButton,
  name,
  index,
  handleSelect,
  options,
  tesSwitch,
  essSwitch,
}) {
  const tesSwitchFalse = !tesSwitch && index === 1 && !essSwitch;
  return (
    <Wrapper tesSwitchFalse={tesSwitchFalse}>
      <ButtonHole>
        <Img
          src={
            !tesSwitch && index === 1 && !essSwitch
              ? './images/greyTesButton.svg'
              : toggleButtonColor
          }
        />
      </ButtonHole>
      <Span></Span>
      <ContainerTitle tesSwitchFalse={tesSwitchFalse}>
        <Title tesSwitchFalse={tesSwitchFalse}>{name}</Title>
      </ContainerTitle>
      <ContainerButton
        onClick={() => {
          return essSwitch
            ? handleSelect(index)
            : !tesSwitch && index === 1 && !essSwitch
            ? ''
            : handleSelect(index);
        }}
        tesSwitchFalse={tesSwitchFalse}
      >
        <ButtonCloseAndExpand
          name={options === index ? 'close' : 'expand'}
          tesSwitchFalse={tesSwitchFalse}
          index={index}
        />
      </ContainerButton>
    </Wrapper>
  );
}

export default SysHeaderForceAndCommand;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  background: ${({ tesSwitchFalse }) =>
    tesSwitchFalse
      ? 'transparent linear-gradient(180deg, #565656 0%, #1D1D1D 100%)'
      : 'transparent linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(35, 58, 84) 100%)'};

  box-shadow: inset 0px 0px 2px rgb(255, 255, 255, 0.1);
  border: 1px solid #142033;
  border-radius: 27px;
  opacity: 1;
  ${flexboxCenter};
  justify-content: space-evenly;
`;

const ButtonHole = styled.div`
  ${flexboxCenter};
`;

const Img = styled.img`
  margin-left: 5px;
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

  background: ${({ tesSwitchFalse }) =>
    tesSwitchFalse ? '#3B3B3B' : '#233a54'};
  box-shadow: inset 0px 0px 4px #000000;
  border: ${({ tesSwitchFalse }) =>
    tesSwitchFalse ? '1px solid #3B3B3B' : '1px solid #142033'};
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

  /* background: #1b2b44; */
  background: ${({ tesSwitchFalse }) =>
    tesSwitchFalse ? '#3B3B3B' : '#1b2b44'};
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 19px;
  opacity: 1;
  ${flexboxCenter}
`;
