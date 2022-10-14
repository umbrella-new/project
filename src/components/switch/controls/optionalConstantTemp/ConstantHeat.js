import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
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
import InputKeyPad from '../../../keyboard/KeyPad';

const ConstantHeat = () => {
  const state = useSelector(selectEssSwitch);
  const { inputTemp } = state.optionalConstantTemp;

  const userState = useSelector(selectUserState);
  const { isEssSwitch } = userState;
  const dispatch = useDispatch();
  // const isActivated =
  // console.log(state.optionalConstantTemp.temp);
  const { apply } = state.optionalConstantTemp;
  const location = useLocation();

  const CONTROLLER_NAME = 'optional constant temp.';
  const IMG_SRC = isEssSwitch
    ? '/images/optional-Constant-Temperature-Logo.svg'
    : location.pathname === '/'
    ? '/images/optional-Constant-Temperature-Logo.svg-enable'
    : '/images/optional-Constant-Temperature-Logo.svg';

  const isEnable = isEssSwitch
    ? true
    : location.pathname === '/'
    ? false
    : true;

  const handleDispatch = (temp) => {
    dispatch(constantTemp(temp));
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
        isActivated={apply}
        isReady={false}
        currTemp={inputTemp}
        isAble={true}
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