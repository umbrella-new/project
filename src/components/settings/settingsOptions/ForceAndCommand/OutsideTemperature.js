import styled from 'styled-components';
import { flexboxCenter } from '../../../../styles/commonStyles';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectSettingsOfEss } from '../../../../store/slices/settingsOfEssSlice';

function OutsideTemperature() {
  const tempMeasurementSelection = ['internet', 'thermocouple'];
  const whiteTriangle = './images/whiteTriangle.svg';
  const greyTriangle = './images/greyTriangle.svg';

  // states
  const [temperatureSelection, setTemperatureSelection] = useState(0);
  const [activeSelect, setActiveSelect] = useState(true);

  // redux
  const state = useSelector(selectSettingsOfEss);
  const mode = state.interfaceMode;

  // functions
  const handleToggle = (index) => {
    if (index !== temperatureSelection) return setTemperatureSelection(index);
  };

  const handleSelect = (index) => {
    if (index === 0) return setActiveSelect(!activeSelect);
    else return setActiveSelect(!activeSelect);
  };

  return (
    <div>
      <SubTitleWrapper>
        <SubTitleWrapper2>
          <SubTitle>{'outside temperature'}</SubTitle>
        </SubTitleWrapper2>
      </SubTitleWrapper>
      <ControlContainer mode={mode}>
        {tempMeasurementSelection.map((data, index) => {
          return (
            <ContainerOfSelections key={index}>
              <ContainerOfCircles>
                <OutsideRingGreenCircle
                  onClick={() => {
                    handleToggle(index);
                    handleSelect(index);
                  }}
                  mode={mode}
                >
                  <InsideFilledGreenCircle
                    mode={mode}
                    color={index === temperatureSelection ? true : false}
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

      <SelectionShadowWrapper>
        <SelectionWrapper color={activeSelect}>
          <SelectionIndentWrapper color={activeSelect}>
            <Selection color={activeSelect}>select t/c</Selection>
          </SelectionIndentWrapper>

          <Img src={`${activeSelect ? whiteTriangle : greyTriangle}`} />
        </SelectionWrapper>
      </SelectionShadowWrapper>
    </div>
  );
}

export default OutsideTemperature;

const SubTitleWrapper = styled.div`
  width: 252px;
  height: 32px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 16px;
  opacity: 1;
  ${flexboxCenter}
`;

const SubTitleWrapper2 = styled.div`
  width: 246px;
  height: 26px;

  border: 1px solid #142033;
  border-radius: 13px;
  opacity: 1;
  ${flexboxCenter}
`;

const SubTitle = styled.div`
  font-size: var(--space2);
  text-transform: uppercase;
`;

const ControlContainer = styled.div`
  width: 252px;
  height: 74px;

  background: ${(props) => (props.mode ? '#FFFFFF' : '#233a54')} 0% 0% no-repeat
    padding-box;
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
  font-size: var(--font-size7);
  margin-left: 10px;
  text-transform: uppercase;
  color: ${(props) => (props.mode ? '#233a54' : '#FFFFFF')};
  letter-spacing: 1.2px;
  opacity: 1;
`;

const SelectionShadowWrapper = styled.div`
  width: 252px;
  height: 51px;
  margin-top: 4px;

  background: #142033 0% 0% no-repeat padding-box;
  border-radius: 31px;
  opacity: 1;
  ${flexboxCenter}
`;

const SelectionWrapper = styled.div`
  width: 248px;
  height: 47px;

  background: transparent
    linear-gradient(
      180deg,
      ${({ color }) =>
        color ? ' #233a54 0%, #060d19 100%' : '#565656 0%, #1D1D1D 100%'}
    )
    0% 0;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 33px;
  opacity: 1;
  ${flexboxCenter}
  justify-content: space-around;
`;
const SelectionIndentWrapper = styled.div`
  width: 195px;
  height: 38px;

  background: ${({ color }) => (color ? ' #233a54' : '#3B3B3B')};
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 22px;
  opacity: 1;
  ${flexboxCenter}
`;

const Selection = styled.p`
  font-size: var(--font-size7);
  text-transform: uppercase;
  color: ${({ color }) => (color ? '#ffff' : '#808080')};
`;

const Img = styled.img`
  margin-top: 6px;
  margin-right: 4px;
  color: #808080 0% 0% no-repeat padding-box;
`;
