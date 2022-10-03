import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Context } from '../../../../context/Context';
import {
  flexboxCenter,
  ControllerEnabledBackground,
  ControllerDisabledBackground,
} from '../../../../styles/commonStyles';
import ControllerName from '../ControllerName';
import TempAndButton from '../TempAndButton';

const ConstantHeat = () => {
  const { state } = useContext(Context);
  const { isEssSwitch } = state;
  const location = useLocation();

  const CONTROLLER_NAME = 'optional constant temp.';
  const IMG_SRC = isEssSwitch
    ? '/images/optional-Constant-Temperature-Logo.svg'
    : '/images/optional-Constant-Temperature-Logo-enable.svg';
  const isEnable = isEssSwitch
    ? true
    : location.pathname === '/tes'
    ? true
    : false;
  return (
    <Wrapper isEssSwitch={isEnable}>
      <ControllerName
        isEnable={isEnable}
        name={CONTROLLER_NAME}
        imgSrc={IMG_SRC}
      />
      <TempAndButton isEnable={isEnable} />
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
