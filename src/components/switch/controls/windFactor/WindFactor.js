import { useDispatch, useSelector } from 'react-redux';
import {
  activateEsConflictMessage,
  windFactor,
} from '../../../../store/slices/essSwitchSlice';
import { selectEssSwitch } from '../../../../store/slices/essSwitchSlice';
import { selectTgsSwitch } from '../../../../store/slices/tgsSwitchSlice';

import {
  flexboxCenter,
  activeLayer1,
  ButtonReady,
  activeInput,
} from '../../../../styles/commonStyles';
import styled, { css } from 'styled-components';

import ControllerName from '../ControllerName';

const WindFactor = () => {
  // off || ready || activated

  const state = useSelector(selectEssSwitch);
  const dispatch = useDispatch();

  const isActivated = state.windFactor.Activated;
  const isReady = state.windFactor.isReady;

  const tgsState = useSelector(selectTgsSwitch);
  const { isTgsSwitchActivated } = tgsState;

  const CONTROLLER_NAME = 'wind factor';
  const IMG_SRC = '/images/wind-Factor-Program-Logo.svg';

  const handleWindFactor = () => {
    if (!isTgsSwitchActivated) {
      dispatch(windFactor());
    } else {
      // Activate Conflict Message Box
      dispatch(activateEsConflictMessage());
    }
  };
  return (
    <Wrapper>
      <ControllerName isEnable={true} name={CONTROLLER_NAME} imgSrc={IMG_SRC} />
      <ButtonBackground>
        <ApplyButtonWrapper
          isActivated={isActivated}
          isReady={isReady}
          onClick={handleWindFactor}
        >
          <ButtonHole isActivated={isActivated}>
            <ButtonTop isActivated={isActivated} isReady={isReady}>
              <ButtonName>apply</ButtonName>
            </ButtonTop>
          </ButtonHole>
        </ApplyButtonWrapper>
      </ButtonBackground>
    </Wrapper>
  );
};

export default WindFactor;

const Wrapper = styled.li`
  width: var(--controller-width);
  height: 68px;
  background: transparent
    linear-gradient(90deg, var(--unnamed-color-233a54) 0%, #060d19 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 0px 0px 1px var(--unnamed-color-000000);
  border: 0.5px solid var(--unnamed-color-000000);
  background: transparent linear-gradient(90deg, #233a54 0%, #060d19 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 4px;
  opacity: 1;

  box-sizing: border-box;

  ${flexboxCenter}
  justify-content: space-evenly;
  flex-direction: column;
`;

const ButtonBackground = styled.div`
  height: 36px;
  width: 272px;
  border-radius: 27px;
  background: #233a54;
  border-color: #707070;
  box-shadow: inset 0 0 6px #000000;
  opacity: 1;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ApplyButtonWrapper = styled.button`
  cursor: pointer;
  height: 34px;
  width: 270px;
  border-radius: 25px;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border-style: solid;
  border-width: 0.5px;
  border-color: rgb(0, 0, 0);
  border-radius: 37px;
  background-image: -webkit-linear-gradient(
    90deg,
    rgb(0, 0, 0) 0%,
    rgb(35, 58, 84) 100%
  );
  opacity: 1;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 14%);
  box-shadow: 0 0 2px rgba(0, 0, 0, 100%);

  ${(p) =>
    p.isActivated &&
    css`
      ${activeLayer1};
    `}

  ${(p) =>
    p.isReady &&
    css`
      ${ButtonReady}
    `}
`;

const ButtonHole = styled.div`
  width: 262px;
  height: 28px;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #233a54;
  border-color: #707070;
  box-shadow: inset 0 0 6px #000000;
  opacity: 1;
  padding: 0;

  ${(p) =>
    p.isActivated &&
    css`
      ${activeInput};
    `}
`;

const ButtonTop = styled.div`
  width: 258px;
  height: 24px;
  border-radius: 25px;

  border-style: solid;
  border-width: 0.5px;
  border-color: rgb(0, 0, 0);

  background-image: -webkit-linear-gradient(
    90deg,
    rgb(0, 0, 0) 0%,
    rgb(35, 58, 84) 100%
  );
  opacity: 1;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 14%);
  box-shadow: 0 0 2px rgba(0, 0, 0, 100%);

  display: flex;
  justify-content: center;
  align-items: center;

  ${(p) =>
    p.isActivated &&
    css`
      ${activeLayer1};
    `}

  ${(p) =>
    p.isReady &&
    css`
      ${ButtonReady}
    `}
`;

const ButtonName = styled.span`
  width: 38px;
  height: 12px;
  display: inline-block;
  font-size: 10px;
`;
