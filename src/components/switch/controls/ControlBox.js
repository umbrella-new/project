import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectEssSwitch } from "../../../store/slices/essSwitchSlice";
import { selectUserState } from "../../../store/slices/userSlice";

import styled from "styled-components";
import { flexboxCenter } from "../../../styles/commonStyles";

import DisplayTemperatureStates from "./displayState/DisplayTemperatureStates";
import ConstantHeat from "./optionalConstantTemp/ConstantHeat";
import HeatingSchedule from "./../controls/HeatingSchedule/HeatingSchedule";
import InstantHeat from "./../controls/instantHeat/InstantHeat";
import SnowSensor from "./../controls/snowSensor/SnowSensor";
import WindFactor from "./../controls/windFactor/WindFactor";

import InputKeyboard from "../../keyboard/InputKeyboard";
import {
  activateTgsSwitchStatus,
  selectTgsSwitch,
} from "../../../store/slices/tgsSwitchSlice";

const ControlBox = () => {
  const userState = useSelector(selectUserState);
  const { isEssSwitch, isKeyboardActivated } = userState;
  const state = useSelector(selectEssSwitch);
  const tgsState = useSelector(selectTgsSwitch);
  const {
    instantButtonToggler,
    fanOnly,
    snowSensor,
    optionalConstantTemp,
    heatingSchedule,
    windFactor,
  } = tgsState;

  const dispatch = useDispatch();

  useEffect(() => {
    instantButtonToggler && dispatch(activateTgsSwitchStatus());
    fanOnly && dispatch(activateTgsSwitchStatus());
    snowSensor.isReady && dispatch(activateTgsSwitchStatus());
    snowSensor.activated && dispatch(activateTgsSwitchStatus());
    optionalConstantTemp.apply && dispatch(activateTgsSwitchStatus());
    heatingSchedule.isReady && dispatch(activateTgsSwitchStatus());
    heatingSchedule.isActivated && dispatch(activateTgsSwitchStatus());
    windFactor.isReady && dispatch(activateTgsSwitchStatus());
    windFactor.isActivated && dispatch(activateTgsSwitchStatus());
  }, [tgsState]);

  return (
    <Wrapper>
      <BackgroundImg src={"/images/controller-background.svg"} />

      <PositionAbsolute>
        <Title>
          {isEssSwitch ? "ess" : "tes"}
          -controls
        </Title>

        <ControlsList>
          <InstantHeat />
          <SnowSensor />
          <ConstantHeat />
          <HeatingSchedule />
          <WindFactor />
          <DisplayTemperatureStates state={state} />
        </ControlsList>
      </PositionAbsolute>

      {isKeyboardActivated && (
        <KeyboardWrapper>
          <InputKeyboard />
        </KeyboardWrapper>
      )}
    </Wrapper>
  );
};

export default ControlBox;

const Wrapper = styled.div`
  width: 293px;
  height: 490px;

  /* Space between the control box with chart container */
  margin-right: var(--space1);
`;

const BackgroundImg = styled.img`
  height: 100%;
`;

const PositionAbsolute = styled.div`
  /* later!!! edit format */
  width: 293px;
  height: 485px;
  position: absolute;
  top: 0rem;
  left: 0.5rem;

  /* border: 1px solid red; */
`;

const Title = styled.span`
  font-size: 10px;
  text-transform: uppercase;
  margin-left: var(--space3);
`;

const ControlsList = styled.ul`
  margin-top: var(--space3);
  ${flexboxCenter}

  /* Layout Properties */

  width: 282px;
  height: 458px;
  /* UI Properties */
  background: var(--unnamed-color-233a54) 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px var(--unnamed-color-000000);
  border: 1px solid var(--unnamed-color-1b2b44);
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  /* border: 1px solid #1b2b44; */
  border-radius: 10px;
  opacity: 1;

  ${flexboxCenter}
  flex-direction: column;
  justify-content: space-between;
  padding-top: 0.3rem;
  padding-bottom: 0.1rem;

  box-sizing: border-box;
`;

const KeyboardWrapper = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 1000;
`;
