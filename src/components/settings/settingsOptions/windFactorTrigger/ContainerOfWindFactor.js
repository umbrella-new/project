import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectSettingsOfEss } from '../../../../store/slices/settingsOfEssSlice';
import { flexboxCenter } from '../../../../styles/commonStyles';
import WindFactor from './WindFactor';

function ContainerOfWindFactor() {
  const content = [
    {
      title: 'low wind factor',
      windMiles: '15-24',
      temperatureF: '302',
      windKilo: '24-39',
      temperatureC: '150',
    },
    {
      title: 'high wind factor',
      windMiles: '38-82',
      temperatureF: '392',
      windKilo: '61-84',
      temperatureC: '200',
    },
    {
      title: 'med wind factor',
      windMiles: '25-37',
      temperatureF: '347',
      windKilo: '40-60',
      temperatureC: '175',
    },
    {
      title: 'extreme wind factor',
      windMiles: '53-65',
      temperatureF: '437',
      windKilo: '85-105',
      temperatureC: '225',
    },
  ];
  const state = useSelector(selectSettingsOfEss);
  const unitsMeasurement = state.buttonsOfSettings.unitsMeasurement;

  return (
    <Wrapper>
      <FlexWrapper>
        {content.map((value, index) => {
          return (
            <div key={index}>
              <WindFactor
                contents={value}
                index={index}
                selectedMeasurement={unitsMeasurement}
              />
            </div>
          );
        })}
      </FlexWrapper>
    </Wrapper>
  );
}

export default ContainerOfWindFactor;

const Wrapper = styled.div`
  width: 596px;
  height: 212px;
  margin-left: -3px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 18px;
  opacity: 1;
  ${flexboxCenter};
`;

const FlexWrapper = styled.div`
  width: 596px;
  height: 212px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
