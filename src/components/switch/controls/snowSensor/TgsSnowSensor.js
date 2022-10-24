import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectEssSwitch } from '../../../../store/slices/essSwitchSlice';

import {
  selectTgsSwitch,
  tgsSnowSensor,
  FanOnlyActivator,
  activateTgsConflictMessage,
} from '../../../../store/slices/tgsSwitchSlice';
import { flexboxCenter } from '../../../../styles/commonStyles';
import ApplyButton from '../ApplyButton';

import ControllerName from '../ControllerName';
import DefaultTemp from '../DefaultTemp';

const TgsSnowSensor = () => {
  const state = useSelector(selectTgsSwitch);
  const { isReady, isActivated, defaultTemp } = state.snowSensor;

  // Check es switch
  const esState = useSelector(selectEssSwitch);
  const { isEsSwitchActivated } = esState;

  // If snow sensor was activated, activate Fan
  useEffect(() => {
    isActivated && dispatch(FanOnlyActivator());
  }, [isActivated]);

  // console.log(isReady);
  const dispatch = useDispatch();

  const CONTROLLER_NAME = 'snow sensor program';
  const IMG_SRC = '/images/snow-Sensor-Program-Logo.svg';
  const handleSnowSensor = () => {
    // check tgs Switch status
    if (!isEsSwitchActivated) {
      dispatch(tgsSnowSensor());
    } else {
      // Activate Conflict Message Box
      dispatch(activateTgsConflictMessage());
    }
  };
  return (
    <Wrapper>
      <ControllerName isEnable={true} name={CONTROLLER_NAME} imgSrc={IMG_SRC} />
      <TempAndButton>
        <ApplyButton
          name='apply'
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

export default TgsSnowSensor;

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
  background: var(--unnamed-color-233a54) 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px var(--unnamed-color-000000);
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 27px;
  opacity: 1;

  ${flexboxCenter}
  justify-content: space-between;
  padding: 0 3px;
`;
