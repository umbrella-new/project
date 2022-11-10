import styled from 'styled-components';
import { flexboxCenter } from '../../../../../src/styles/commonStyles';
import TitleOfSelectUnitsOfMeasurement from './TitleOfSelectUnitsOfMeasurement';
import ImperialMetricMeasurementReader from './ImperialMetricMeasurementReader';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectSettingsOfEss,
  setResetAllSettingsButtons,
  setSettingsApplyUnitsButton,
  setSettingsCancelButton,
  setSettingsEditButton,
} from '../../../../store/slices/settingsOfEssSlice';
import { useEffect } from 'react';

import { useContext } from 'react';
import { SettingsContext } from '../../../../context/ContextOfSettings';
import InvisibleDivForEditButton from '../editAndApplyMessageBoxes/InvisibleDivForEditButton';
import EditCancelApplyButtons from '../EditCancelApplyButtons';

function ContainerOfMetricImperialAndMeasurementTitle() {
  const measurementsArr = [
    {
      title: 'Metric',
      temp: 'C ° - CENTIGRADE',
      energy: 'Kw - KILOWATTS',
      measure: 'Cms - CENTIMETERS M - METERS',
      gas: 'M³ - CUBIC METERS',
      backgroundColor: '180',
    },
    {
      title: 'Imperial',
      temp: 'F °- FAHRENHEIT',
      energy: 'Kw - KILOWATTS',
      measure: 'In - INCHES - Ft - FEET',
      gas: 'FT³- CUBIC FEET',
      backgroundColor: '360',
    },
  ];

  const buttonsName = ['edit', 'cancel', 'apply'];
  const height = '230px';

  // useContext
  const {
    selectUnitsState,
    setSelectUnitsState,
    metricImperialToggle,
    setMetricImperialToggle,
  } = useContext(SettingsContext);

  // redux
  const state = useSelector(selectSettingsOfEss);
  const mode = state.interfaceMode;
  const dispatch = useDispatch();
  const settingsEditButton = state.buttonsOfSettings.settingsEditButton;
  const unitsMeasurement = state.buttonsOfSettings.unitsMeasurement;
  const cancelState = state.buttonsOfSettings.settingsCancelButton;

  // keeps track and render last state saved either imperial or metric
  useEffect(() => {
    dispatch(setResetAllSettingsButtons());

    if (unitsMeasurement === false) {
      setMetricImperialToggle(0);
      setSelectUnitsState(false);
    } else {
      setMetricImperialToggle(1);
      setSelectUnitsState(true);
    }
  }, []);

  // keeps track and render last state change of either imperial or metric  when pressing cancel button
  useEffect(() => {
    if (unitsMeasurement === false) {
      setMetricImperialToggle(0);
      setSelectUnitsState(false);
    } else {
      setMetricImperialToggle(1);
      setSelectUnitsState(true);
    }
  }, [cancelState]);

  const handleClick = (index) => {
    if (index !== metricImperialToggle) {
      return (
        setSelectUnitsState(!selectUnitsState), setMetricImperialToggle(index)
      );
    }
  };

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
        dispatch(setSettingsApplyUnitsButton(selectUnitsState));
        break;
      default:
        return;
    }
  };

  return (
    <Wrapper>
      {!settingsEditButton && <InvisibleDivForEditButton height={height} />}
      <Wrapper2 mode={mode}>
        <TitleOfSelectUnitsOfMeasurement />
        <ContainerMetricImperial>
          {measurementsArr.map((value, index) => {
            return (
              <div key={index}>
                <ImperialMetricMeasurementReader
                  value={value}
                  index={index}
                  handleClick={handleClick}
                  metricImperialToggle={metricImperialToggle}
                  unitsMeasurement={unitsMeasurement}
                />
              </div>
            );
          })}
        </ContainerMetricImperial>
        <WrapperButtons>
          <EditCancelApplyButtons
            handleClick={handleButtons}
            buttonsName={buttonsName}
          />
        </WrapperButtons>
      </Wrapper2>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 594px;
  height: 318px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 12px 12px 18px 18px;
  opacity: 1;
  ${flexboxCenter};
`;

const Wrapper2 = styled.div`
  width: 592px;
  height: 316px;

  border: 0.5px solid black;
  border-radius: 12px 12px 18px 18px;
  box-sizing: border-box;
  background-image: -webkit-linear-gradient(
    360deg,
    ${(props) => (props.mode ? '#EBEBEB' : 'rgb(0, 0, 0)')} 0%,
    ${(props) => (props.mode ? '#BBBBBB' : 'rgb(35, 58, 84)')} 100%
  );
  box-shadow: inset 0 1px 1px
    rgba(255, 255, 255, ${(props) => (props.mode ? '24%' : '14%')});
  box-shadow: 0 0 2px rgba(0, 0, 0, 100%);
  opacity: 1;
  ${flexboxCenter}
  flex-direction: column;
  justify-content: space-evenly;
`;

const ContainerMetricImperial = styled.div`
  display: flex;
  width: 592px;
  /* ${flexboxCenter} */
  justify-content: space-around;
  align-items: center;
`;

const WrapperButtons = styled.div`
  width: 578px;
  height: auto;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export default ContainerOfMetricImperialAndMeasurementTitle;
