import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { flexboxCenter } from '../../../../../styles/commonStyles';
import { selectSettingsOfEss } from '../../../../../store/slices/settingsOfEssSlice';

function SelectGasType({ gasType, gasSelection, handleSelect, handleToggle }) {
  // redux
  const state = useSelector(selectSettingsOfEss);
  const mode = state.interfaceMode;
  const editState = state.buttonsOfSettings.settingsEditButton;

  return (
    <Wrapper>
      <WrapperSelection>
        <ControlContainer mode={mode}>
          {gasType.map((data, index) => {
            return (
              <ContainerOfSelections key={index}>
                <ContainerOfCircles>
                  <OutsideRingGreenCircle
                    onClick={() => {
                      editState && handleToggle(index);
                      editState && handleSelect(index);
                    }}
                    mode={mode}
                  >
                    <InsideFilledGreenCircle
                      mode={mode}
                      color={index === gasSelection ? true : false}
                    ></InsideFilledGreenCircle>
                  </OutsideRingGreenCircle>
                </ContainerOfCircles>
                <IndividualContainer mode={mode}>
                  <Text mode={mode}>{data}</Text>
                </IndividualContainer>
              </ContainerOfSelections>
            );
          })}
        </ControlContainer>
      </WrapperSelection>
    </Wrapper>
  );
}

export default SelectGasType;

const Wrapper = styled.div`
  ${flexboxCenter}
`;

const WrapperSelection = styled.div`
  width: 252px;
  height: 74px;

  background: #233a54;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 16px;
  opacity: 1;
  ${flexboxCenter}
`;

const ControlContainer = styled.div`
  width: 252px;
  height: 74px;

  background: ${(props) => (props.mode ? '#FFFFFF' : '#233a54')};
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 18px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

const ContainerOfSelections = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 1px;
`;

const ContainerOfCircles = styled.div``;

const OutsideRingGreenCircle = styled.span`
  width: 22px;
  height: 22px;
  margin-left: 4px;
  margin-top: 2px;
  border: 1.5px solid #95ff45;
  border-radius: 50%;
  ${flexboxCenter};
  background: #1b2b44;
`;

const InsideFilledGreenCircle = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${(props) => (props.color ? '#95ff45' : 'none')};
  border-radius: 50%;
`;

const IndividualContainer = styled.div`
  width: 218px;
  height: 26px;
  margin-left: 4px;
  border: 1.5px solid #142033;
  border-radius: 16px;
  opacity: 1;
  ${flexboxCenter};
`;

const Text = styled.p`
  font-size: var(--space2);
  margin-left: 10px;
  text-transform: uppercase;
  color: ${(props) => (props.mode ? '#233a54' : '#FFFFFF')};
  letter-spacing: 1.2px;
  opacity: 1;
`;
