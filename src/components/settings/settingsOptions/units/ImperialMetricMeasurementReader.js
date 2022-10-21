import styled from 'styled-components';
import { flexboxCenter } from '../../../../../src/styles/commonStyles';
import { useDispatch, useSelector } from 'react-redux';
import { selectSettingsOfEss } from '../../../../store/slices/settingsOfEssSlice';

function ImperialMetricMeasurementReader({
  value,
  index,
  metricImperialToggle,
  handleClick,
}) {
  const { title, temp, energy, measure, gas, backgroundColor } = value;

  const state = useSelector(selectSettingsOfEss);
  const mode = state.interfaceMode;

  const { settingsEditButton } = state.buttonsOfSettings;

  return (
    <div>
      <Wrapper>
        <Wrapper2 backgroundColor={backgroundColor} mode={mode}>
          <ContainerOfTitle mode={mode}>
            <OutsideRingGreenCircle
              onClick={() => settingsEditButton && handleClick(index)}
            >
              <InsideFilledGreenCircle
                color={index === metricImperialToggle ? true : false}
              ></InsideFilledGreenCircle>
            </OutsideRingGreenCircle>

            <Span mode={mode}>{title}</Span>
          </ContainerOfTitle>
          <ContainerOfMeasurements mode={mode}>
            <MeasurementsContainer>
              <Container>
                <Measurements mode={mode}>TEMP:</Measurements>
                <IndividualContainer>
                  <MeasureUnits mode={mode}>{temp}</MeasureUnits>
                </IndividualContainer>
              </Container>
              <Container>
                <Measurements mode={mode}>ENERGY:</Measurements>
                <IndividualContainer>
                  <MeasureUnits mode={mode}>{energy}</MeasureUnits>
                </IndividualContainer>
              </Container>
              <Container>
                <Measurements mode={mode}>MEASURE:</Measurements>
                <IndividualContainer>
                  <MeasureUnits mode={mode}>{measure}</MeasureUnits>
                </IndividualContainer>
              </Container>
              <Container>
                <Measurements mode={mode}>GAS CONSUMP:</Measurements>
                <IndividualContainer>
                  <MeasureUnits mode={mode}>{gas}</MeasureUnits>
                </IndividualContainer>
              </Container>
            </MeasurementsContainer>
          </ContainerOfMeasurements>
        </Wrapper2>
      </Wrapper>
    </div>
  );
}

export default ImperialMetricMeasurementReader;

const Wrapper = styled.div`
  width: 286px;
  height: 218px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 16px;
  opacity: 1;
  ${flexboxCenter};
`;

const Wrapper2 = styled.div`
  width: 284px;
  height: 216px;

  border-radius: 15px;
  opacity: 1;

  ${flexboxCenter}
  flex-direction: column;
  justify-content: space-evenly;

  box-sizing: border-box;

  border: 0.5px solid black;
  background-image: -webkit-linear-gradient(
    ${(props) => props.backgroundColor}deg,
    ${(props) => (props.mode ? '#BBBBBB' : 'rgb(0, 0, 0)')} 0%,
    ${(props) => (props.mode ? '#EBEBEB' : 'rgb(35, 58, 84)')} 100%
  );

  opacity: 1;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 14%);
  box-shadow: 0 0 2px rgba(0, 0, 0, 100%);
`;

const ContainerOfTitle = styled.div`
  width: 274px;
  height: 30px;
  box-shadow: inset 0px 0px 3px #000000;
  background: ${(props) => (props.mode ? '#FFFF' : '#233a54')};
  border: ${(props) => (props.mode ? '1px solid #1B2B44' : 'none')};
  border-radius: 16px;
  opacity: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const OutsideRingGreenCircle = styled.span`
  width: 21px;
  height: 21px;
  margin-left: 4px;
  border: 1.5px solid #95ff45;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1b2b44;
`;

const InsideFilledGreenCircle = styled.div`
  width: 14px;
  height: 14px;
  background-color: ${(props) => (props.color ? '#95ff45' : 'none')};
  border-radius: 50%;
`;

const Span = styled.span`
  margin-left: 6px;
  font-size: var(--font-size3);
  color: ${(props) => (props.mode ? '#1B2B44' : '#FFFF')};
`;

const ContainerOfMeasurements = styled.div`
  width: 274px;
  height: 170px;
  background: ${(props) => (props.mode ? '#FFFF' : '#233a54')};
  border: ${(props) => (props.mode ? '1px solid #1B2B44' : 'none')};

  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 12px;
  opacity: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const MeasurementsContainer = styled.div`
  width: 274px;
  height: 158px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  margin-left: 10px;
  margin-right: 4px;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Measurements = styled.p`
  font-size: var(--space1);
  margin-top: 4px;
  margin-bottom: 4px;
  margin-left: 2px;
  color: ${(props) => (props.mode ? '#1B2B44' : '#FFFF')};
`;

const IndividualContainer = styled.div`
  width: 169px;
  height: 30px;
  border: 1.5px solid #142033;
  border-radius: 16px;
  opacity: 1;
  display: flex;
  align-items: center;
`;

const MeasureUnits = styled.p`
  font-size: var(--space2);
  margin-left: 8px;
  color: ${(props) => (props.mode ? '#1B2B44' : '#FFFF')};
`;
