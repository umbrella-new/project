import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  activateEsConflictMessage,
  selectEssSwitch,
  snowSensor,
} from '../../../../store/slices/essSwitchSlice';

import { selectTgsSwitch } from '../../../../store/slices/tgsSwitchSlice';
import { flexboxCenter } from '../../../../styles/commonStyles';

import ApplyButton from '../ApplyButton';
import ControllerName from '../ControllerName';
import DefaultTemp from '../DefaultTemp';

const SnowSensor = () => {
  const state = useSelector(selectEssSwitch);
  const { isReady, isActivated, defaultTemp } = state.snowSensor;

  const tgsState = useSelector(selectTgsSwitch);
  const { isTgsSwitchActivated } = tgsState;

  const dispatch = useDispatch();

  const CONTROLLER_NAME = 'snow sensor program';
  const IMG_SRC = '/images/snow-Sensor-Program-Logo.svg';

  const handleSnowSensor = () => {
    // check tgs Switch status
    if (!isTgsSwitchActivated) {
      dispatch(snowSensor());
    } else {
      // Activate Conflict Message Box
      dispatch(activateEsConflictMessage());
    }
  };

  return (
    <Wrapper>
      <ControllerName isEnable={true} name={CONTROLLER_NAME} imgSrc={IMG_SRC} />
      <TempAndButton>
        <ApplyButton
          name={isReady ? 'ready' : isActivated ? 'activated' : 'apply'}
          buttonHandler={handleSnowSensor}
          isEnable={true}
          isActivated={isActivated}
          isReady={isReady}
        />
        <DefaultTemp defaultTemp={defaultTemp} />
      </TempAndButton>
    </Wrapper>
  );
};

export default SnowSensor;

const Wrapper = styled.li`
  /* Layout Properties */

  width: var(--controller-width);
  height: 64px;

  /* UI Properties */

  border-radius: 4px;
  opacity: 1;

  ${flexboxCenter}
  flex-direction: column;
  justify-content: space-evenly;

  box-sizing: border-box;

  border: 0.5px solid black;
  background-image: -webkit-linear-gradient(
    180deg,
    rgb(0, 0, 0) 0%,
    rgb(35, 58, 84) 100%
  );
  opacity: 1;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 14%);
  box-shadow: 0 0 2px rgba(0, 0, 0, 100%);
`;

const TempAndButton = styled.div`
  width: 272px;
  height: 36px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 27px;

  ${flexboxCenter}
  justify-content: space-between;
  padding: 0 3px;
`;
