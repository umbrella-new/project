import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { selectSettingsOfEss } from '../../../../store/slices/settingsOfEssSlice';
import { flexboxCenter } from '../../../../styles/commonStyles';
import ButtonCloseAndExpand from '../ForceAndCommand/ButtonCloseAndExpand';

function SystemHeader({
  toggleButtonColor,
  // handleCloseExpandButton,
  name,
  index,
  handleSelect,
  options,
  adminAccess,
  tesSwitch,
  essSwitch,
}) {
  const tesSwitchFalse = !tesSwitch && index === 1 && !essSwitch;

  const state = useSelector(selectSettingsOfEss);
  const mode = state.interfaceMode;

  console.log('index', index);
  console.log('options', options);

  return (
    <Wrapper
      tesSwitchFalse={tesSwitchFalse}
      mode={mode}
      index={index}
      options={options}
    >
      <ButtonHole>
        <Img
          src={
            !tesSwitch && index === 1 && !essSwitch
              ? './images/greyTesButton.svg'
              : toggleButtonColor
          }
          onClick={() => {
            return adminAccess && essSwitch
              ? handleSelect(index)
              : adminAccess && !tesSwitch && index === 1
              ? ''
              : adminAccess && handleSelect(index);
          }}
        />
      </ButtonHole>
      <Span></Span>
      <ContainerTitle tesSwitchFalse={tesSwitchFalse}>
        <P tesSwitchFalse={tesSwitchFalse}>{name}</P>
      </ContainerTitle>

      <ContainerButton
        onClick={() => {
          return adminAccess && essSwitch
            ? handleSelect(index)
            : adminAccess && !tesSwitch && index === 1
            ? ''
            : adminAccess && handleSelect(index);
        }}
        tesSwitchFalse={tesSwitchFalse}
      >
        {essSwitch ? (
          <ButtonCloseAndExpand name={options === index ? 'close' : 'expand'} />
        ) : (
          <ButtonCloseAndExpand
            name={
              adminAccess
                ? options === index
                  ? 'close'
                  : 'expand'
                : index === 0
                ? 'expand'
                : index === 1
                ? 'expand'
                : 'close'
            }
            tesSwitchFalse={tesSwitchFalse}
          />
        )}
      </ContainerButton>
    </Wrapper>
  );
}

export default SystemHeader;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  background: ${({ tesSwitchFalse, mode }) =>
    tesSwitchFalse
      ? 'transparent linear-gradient(180deg, #565656 0%, #1D1D1D 100%)'
      : mode
      ? 'transparent linear-gradient(180deg, #EBEBEB 0%, #BBBBBB 100%)'
      : 'transparent linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(35, 58, 84) 100%)'};
  box-shadow: inset 0px 0px 2px rgb(255, 255, 255, 0.1);
  border: 1px solid #142033;

  background: ${({ index }) =>
    index === 2 &&
    css`transparent
          linear-gradient(180deg, #50412e 0%, #ff920c 100%) 0% 0% no-repeat
          padding-box`};
  box-shadow: ${({ index }) =>
    index === 2 && css`inset 0px 0px 2px #ffffff5e, 0px 0px 2px #000000`};

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

  /* background: #233a54 0% 0% no-repeat padding-box; */
  background: ${({ tesSwitchFalse }) =>
    tesSwitchFalse ? '#3B3B3B' : '#233a54'};
  box-shadow: inset 0px 0px 4px #000000;
  /* border: 1px solid #142033; */
  border: ${({ tesSwitchFalse }) =>
    tesSwitchFalse ? '1px solid #3B3B3B' : '1px solid #142033'};
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

  background: ${({ tesSwitchFalse }) =>
    tesSwitchFalse ? '#3B3B3B' : '#1b2b44'};

  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 19px;
  opacity: 1;
  ${flexboxCenter}
`;
