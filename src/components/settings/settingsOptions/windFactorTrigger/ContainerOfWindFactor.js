import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { SettingsContext } from '../../../../context/ContextOfSettings';
import {
  selectSettingsOfEss,
  setResetAllSettingsButtons,
  setSettingsCancelButton,
  setSettingsEditButton,
} from '../../../../store/slices/settingsOfEssSlice';
import {
  selectSettingsOfTgsTes,
  setTgsTesSettingsApplyWindFactor,
} from '../../../../store/slices/settingsOfTgsTesSlice';
import { flexboxCenter } from '../../../../styles/commonStyles';
import InvisibleDivForEditButton from '../editAndApplyMessageBoxes/InvisibleDivForEditButton';
import EditCancelApplyButtons from '../EditCancelApplyButtons';
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

  const { windFactor, setWindFactor } = useContext(SettingsContext);

  const buttonsName = ['edit', 'cancel', 'apply'];
  const height = '150px';

  const dispatch = useDispatch();
  const state = useSelector(selectSettingsOfEss);
  const unitsMeasurement = state.buttonsOfSettings.unitsMeasurement;
  const settingsEditButton = state.buttonsOfSettings.settingsEditButton;
  const tgsTesState = useSelector(selectSettingsOfTgsTes);
  const windFactorState = tgsTesState.windFactorTemp;

  useEffect(() => {
    setWindFactor({
      lowWind: windFactorState.low,
      medWind: windFactorState.med,
      highWind: windFactorState.high,
      extremeWind: windFactorState.extreme,
    });
  }, []);

  const handleButtons = (value) => {
    const buttonsIndex = Number(value);
    switch (buttonsIndex) {
      case 0:
        dispatch(setSettingsEditButton());
        break;
      case 1:
        dispatch(setSettingsCancelButton());
        break;
      case 2:
        dispatch(setResetAllSettingsButtons());
        dispatch(setTgsTesSettingsApplyWindFactor(windFactor));
        break;
      default:
        return;
    }
  };

  return (
    <Wrapper>
      {!settingsEditButton && <InvisibleDivForEditButton height={height} />}
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
      <WrapperButtons>
        <EditCancelApplyButtons
          handleClick={handleButtons}
          buttonsName={buttonsName}
        />
      </WrapperButtons>
    </Wrapper>
  );
}

export default ContainerOfWindFactor;

const Wrapper = styled.div`
  width: 596px;
  height: auto;
  margin-left: -3px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 18px;
  opacity: 1;
  ${flexboxCenter};
  flex-direction: column;
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

const WrapperButtons = styled.div`
  width: 578px;
  height: auto;
  margin-bottom: 10px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
