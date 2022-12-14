import { selectTgsSwitch } from '../../../../store/slices/tgsSwitchSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  activateEsConflictMessage,
  constantTemp,
  selectEssSwitch,
} from '../../../../store/slices/essSwitchSlice';
import { selectUserState } from '../../../../store/slices/userSlice';

import styled, { css } from 'styled-components';
import {
  flexboxCenter,
  ControllerEnabledBackground,
  ControllerDisabledBackground,
} from '../../../../styles/commonStyles';

import ControllerName from '../ControllerName';
import TempAndButton from '../TempAndButton';
import { selectSettingsOfTgsTes } from '../../../../store/slices/settingsOfTgsTesSlice';
import { selectSettingsOfEss } from '../../../../store/slices/settingsOfEssSlice';

const ConstantHeat = () => {
  const state = useSelector(selectEssSwitch);
  const { inputTemp, isF } = state.optionalConstantTemp;

  const userState = useSelector(selectUserState);
  const { isEssSwitch } = userState;
  const dispatch = useDispatch();

  const { apply, activated } = state.optionalConstantTemp;
  const location = useLocation();

  const tgsState = useSelector(selectTgsSwitch);
  const { isTgsSwitchActivated } = tgsState;

  const CONTROLLER_NAME = 'optional constant temp.';
  const IMG_SRC = isEssSwitch
    ? '/images/optional-Constant-Temperature-Logo.svg'
    : location.pathname === '/'
    ? '/images/optional-Constant-Temperature-Logo-enable.svg'
    : '/images/optional-Constant-Temperature-Logo.svg';

  const settingState = useSelector(selectSettingsOfTgsTes);
  const { thermocouple } = settingState;

  const unitsState = useSelector(selectSettingsOfEss);
  const { unitsMeasurement } = unitsState.buttonsOfSettings;

  const isEnable = isEssSwitch
    ? thermocouple
      ? false
      : true
    : location.pathname === '/'
    ? false
    : thermocouple
    ? false
    : true;

  const handleDispatch = (temp) => {
    if (!isTgsSwitchActivated) {
      dispatch(constantTemp({ temp, unitsMeasurement }));
    } else {
      // Activate Conflict Message Box
      dispatch(activateEsConflictMessage());
    }
  };

  return (
    <Wrapper isEssSwitch={isEnable}>
      <ControllerName
        isEnable={isEnable}
        name={CONTROLLER_NAME}
        imgSrc={IMG_SRC}
      />
      <TempAndButton
        isEnable={isEnable}
        buttonHandler={handleDispatch}
        isActivated={activated}
        isReady={apply}
        currTemp={inputTemp}
        isAble={true}
        isF={isF}
      />
    </Wrapper>
  );
};

export default ConstantHeat;

const Wrapper = styled.li`
  width: var(--controller-width);
  height: 64px;
  ${flexboxCenter}
  flex-direction: column;
  justify-content: space-evenly;

  box-sizing: border-box;

  ${(props) =>
    props.isEssSwitch
      ? css`
          ${ControllerEnabledBackground}
        `
      : css`
          ${ControllerDisabledBackground}
        `}
`;
