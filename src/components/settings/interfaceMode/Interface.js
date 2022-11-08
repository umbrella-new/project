import styled from 'styled-components';
import Button from '../settingsOptions/Button';
import { flexboxCenter } from '../../../styles/commonStyles';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInterfaceMode } from '../../../store/slices/settingsOfEssSlice';
import { selectSettingsOfEss } from '../../../store/slices/settingsOfEssSlice';

function Interface() {
  const modesData = ['light mode', 'dark mode'];
  // states
  const [interfaceModeButton, setInterfaceModeButton] = useState(0);
  // redux
  const dispatch = useDispatch();
  const state = useSelector(selectSettingsOfEss);
  const mode = state.interfaceMode;
  // functions
  const handleClick = (index) => {
    if (index !== interfaceModeButton) return setInterfaceModeButton(index);
  };

  const handleMode = () => {
    if (interfaceModeButton === 0) {
      return dispatch(setInterfaceMode(true));
    } else {
      return dispatch(setInterfaceMode(false));
    }
  };

  return (
    <Wrapper mode={mode}>
      <InterfaceContainer mode={mode}>
        <InterfaceP mode={mode}>INTERFACE MODE</InterfaceP>
      </InterfaceContainer>
      <ControlContainer mode={mode}>
        {modesData.map((data, index) => {
          return (
            <ContainerDarkLight key={index}>
              <ContainerImages>
                <OutsideRingGreenCircle
                  onClick={() => {
                    handleClick(index);
                  }}
                  mode={mode}
                >
                  <InsideFilledGreenCircle
                    mode={mode}
                    color={index === interfaceModeButton ? true : false}
                  ></InsideFilledGreenCircle>
                </OutsideRingGreenCircle>
              </ContainerImages>
              <IndividualContainer mode={mode}>
                <ModeP mode={mode}>{data}</ModeP>
              </IndividualContainer>
            </ContainerDarkLight>
          );
        })}
      </ControlContainer>
      <ContainerButton onClick={() => handleMode()}>
        <Button name={'apply'} />
      </ContainerButton>
    </Wrapper>
  );
}

export default Interface;

const Wrapper = styled.div`
  width: 280px;
  height: 160px;
  margin-top: 4px;
  border-radius: 4px;
  opacity: 1;

  ${flexboxCenter}
  flex-direction: column;
  justify-content: space-evenly;

  box-sizing: border-box;

  border: 0.5px solid black;
  background-image: -webkit-linear-gradient(
    180deg,
    ${(props) => (props.mode ? '#BBBBBB' : 'rgb(0, 0, 0) ')} 0%,
    ${(props) => (props.mode ? '#EBEBEB' : 'rgb(35, 58, 84)')} 100%
  );
  opacity: 1;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 14%);
  box-shadow: 0 0 2px rgba(0, 0, 0, 100%);
`;

const InterfaceContainer = styled.div`
  width: 272px;
  height: 26px;

  background: ${(props) => (props.mode ? '#FFFFFF' : '#233a54')};
  box-shadow: inset 0px 0px 3px #000000;
  border: ${(props) => (props.mode ? '1.5px solid #142033' : 'none')};
  border-radius: 16px;
  opacity: 1;
  display: flex;
  align-items: center;
`;

const InterfaceP = styled.p`
  font-size: var(--font-size3);
  margin-left: 12px;
  text-transform: uppercase;
  color: ${(props) => (props.mode ? '#233a54' : '#FFFFFF')};
  letter-spacing: 1.2px;
  opacity: 1;
`;

const ControlContainer = styled.div`
  width: 272px;
  height: 74px;

  background: ${(props) => (props.mode ? '#FFFFFF' : '#233a54')} 0% 0% no-repeat
    padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 18px;
  opacity: 1;
  ${flexboxCenter}
  flex-direction: column;
  justify-content: space-evenly;
`;

const ContainerDarkLight = styled.div`
  display: flex;
  justify-content: center;
  margin-left: -1px;
`;

const ContainerImages = styled.div``;

const OutsideRingGreenCircle = styled.span`
  width: 24px;
  height: 24px;
  margin-left: 4px;
  margin-top: 2px;
  border: 1.5px solid #95ff45;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1b2b44;
`;

const InsideFilledGreenCircle = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${(props) => (props.color ? '#95ff45' : 'none')};
  border-radius: 50%;
`;

const IndividualContainer = styled.div`
  width: 224px;
  height: 32px;
  margin-left: 10px;
  border: 1.5px solid #142033;
  border-radius: 16px;
  opacity: 1;
  ${flexboxCenter}
  justify-content: start;
`;

const ModeP = styled.p`
  font-size: var(--font-size7);
  margin-left: 10px;
  text-transform: uppercase;
  color: ${(props) => (props.mode ? '#233a54' : '#FFFFFF')};
  letter-spacing: 1.2px;
  opacity: 1;
`;

const ContainerButton = styled.div`
  width: 80px;
  height: 37px;
  background: var(--unnamed-color-1b2b44) 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px var(--unnamed-color-000000);
  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 19px;
  opacity: 1;
  ${flexboxCenter}
  margin-left: 192px;
`;
