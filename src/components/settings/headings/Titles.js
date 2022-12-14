import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectSettingsOfEss } from '../../../store/slices/settingsOfEssSlice';

function Titles({ name }) {
  const state = useSelector(selectSettingsOfEss);
  const mode = state.interfaceMode;

  return (
    <>
      <TitleContainer mode={mode}>
        <Title mode={mode}>{name}</Title>
      </TitleContainer>
    </>
  );
}
const TitleContainer = styled.div`
  width: 901px;
  height: 22px;

  /* background: ${(props) => (props.mode ? '#FFFF' : '#233a54')}; */
  background: ${({ mode }) => (mode ? '#FFFF' : '#233a54')};
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 16px;
  opacity: 1;
`;
const Title = styled.p`
  padding-top: 2px;
  margin-left: 12px;
  margin-right: 12px;
  text-align: left;
  font-family: normal normal 800 12px/12px Orbitron;
  font-size: 12px;
  border-bottom: 1px solid ${(props) => (props.mode ? '#1B2B44' : '#FFFF')};
  letter-spacing: 1.2px;
  color: ${(props) => (props.mode ? '#1B2B44' : '#FFFF')};
  text-transform: uppercase;
`;

export default Titles;
