import { useDispatch, useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";

import {
  activateEsConflictMessage,
  instantHeat,
  selectEssSwitch,
} from "../../../../store/slices/essSwitchSlice";

import userSlice, {
  activateKeyboard,
} from "../../../../store/slices/userSlice";

import {
  activeInput,
  activeLayer1,
  flexboxCenter,
  layer1,
  layer90Deg,
} from "../../../../styles/commonStyles";
import styled, { css } from "styled-components";
import { selectUserState } from "../../../../store/slices/userSlice";
import InputKeyPad from "../../../keyboard/InputKeyPad";
import {
  activateTgsSwitchStatus,
  selectTgsSwitch,
} from "../../../../store/slices/tgsSwitchSlice";
import { selectUnitsState } from "../../../../store/slices/unitsSlice";

const InstantHeat = () => {
  const state = useSelector(selectEssSwitch);
  const unitsState = useSelector(selectUnitsState);
  const { unitsMeasurement } = unitsState;

  const dispatch = useDispatch();
  const { instantButtonToggler, instantHeatTemp } = state.instantHeat;
  const tgsState = useSelector(selectTgsSwitch);
  const { isTgsSwitchActivated } = tgsState;

  // const { isKeyboardActivated } = userState;
  const [openKeyPad, setOpenKeyPad] = useState(false);

  useEffect(() => {
    setOpenKeyPad(false);
  }, [instantButtonToggler]);

  const inputRef = useRef();

  useEffect(() => {
    if (instantHeatTemp > 0) {
      unitsMeasurement
        ? (inputRef.current.value = `${
            Number(instantHeatTemp) * 1.8 + 32
          }\u00b0F`)
        : (inputRef.current.value = `${instantHeatTemp}\u00b0C`);
    }
  }, []);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (!isTgsSwitchActivated) {
      const temp = Number(inputRef.current.value);
      setOpenKeyPad(false);
      if (temp !== 0) {
        if (!instantButtonToggler) {
          unitsMeasurement
            ? dispatch(instantHeat((temp - 32) / 1.8))
            : dispatch(instantHeat(temp));
          unitsMeasurement
            ? (inputRef.current.value = `${temp}\u00b0F`)
            : (inputRef.current.value = `${temp}\u00b0C`);
        } else {
          dispatch(instantHeat(0));

          inputRef.current.value = ``;
        }
      } else {
        return;
      }
    } else {
      // Activate Conflict Message Box
      dispatch(activateEsConflictMessage());
    }
  };

  // Virtual keyboard input handler
  const handleVirtualKeyboardInput = (temp) => {
    if (!isTgsSwitchActivated) {
      if (temp !== 0) {
        if (!instantButtonToggler) {
          unitsMeasurement
            ? dispatch(instantHeat((temp - 32) / 1.8))
            : dispatch(instantHeat(temp));
          unitsMeasurement
            ? (inputRef.current.value = `${temp}\u00b0F`)
            : (inputRef.current.value = `${temp}\u00b0C`);
        } else {
          dispatch(instantHeat(0));

          inputRef.current.value = ``;
        }
      } else {
        return;
      }
    } else {
      setOpenKeyPad(false);
      // Activate Conflict Message Box
      dispatch(activateEsConflictMessage());
    }
  };

  const onInputHandler = () => {
    if (instantButtonToggler) {
      dispatch(instantHeat(0));
      inputRef.current.value = ``;
    } else {
      inputRef.current.focus();
      setOpenKeyPad(true);
    }
  };

  const handleKeypadClosed = () => {
    setOpenKeyPad(false);
  };

  const unit = unitsMeasurement ? `\u00b0F` : `\u00b0C`;

  return (
    <Wrapper isActivated={instantButtonToggler}>
      <InnerWrapper
        isActivated={instantButtonToggler}
        onSubmit={handleOnSubmit}
      >
        <LabelAndInputOuterWrapper
          isActivated={instantButtonToggler}
          onClick={onInputHandler}
        >
          <LabelAndInputInnerWrapper isActivated={instantButtonToggler}>
            <Label>instant heat</Label>
            <InputDegree
              isActivated={instantButtonToggler}
              placeholder={unit}
              type='text'
              ref={inputRef}
              disabled={instantButtonToggler}
            />
          </LabelAndInputInnerWrapper>
        </LabelAndInputOuterWrapper>

        <ActiveButton isActivated={instantButtonToggler}>
          <ActiveButtonOuterWrapper isActivated={instantButtonToggler}>
            <ActiveButtonInnerWrapper isActivated={instantButtonToggler}>
              <ButtonImage src={"/images/instant-Heat-Program -Logo.svg"} />
            </ActiveButtonInnerWrapper>
          </ActiveButtonOuterWrapper>
        </ActiveButton>
      </InnerWrapper>

      {/* Conditionally display keypad */}
      {openKeyPad && (
        <KeyPadWrapper>
          <InputKeyPad
            handleOnSubmit={handleVirtualKeyboardInput}
            closeKeyPad={handleKeypadClosed}
          />
        </KeyPadWrapper>
      )}
    </Wrapper>
  );
};

export default InstantHeat;

const Wrapper = styled.li`
  ${flexboxCenter}

  width: var(--controller-width);
  height: 38px;
  border-radius: 28px;
  ${layer1};
  /* ${(props) =>
    props.toggler
      ? css`
          ${activeLayer1}
        `
      : css`
          ${layer1}
        `} */

  position: relative;
`;

const InnerWrapper = styled.form`
  ${flexboxCenter}

  width: 276px;
  height: 36px;
  border-radius: 27px;

  justify-content: space-between;
  align-items: center;

  ${(props) =>
    props.isActivated
      ? css`
          ${activeLayer1}
        `
      : css`
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
        `}
`;

const LabelAndInputOuterWrapper = styled.div`
  ${flexboxCenter}

  width: 224px;
  height: 32px;
  border-radius: 23px;

  margin-left: 2.715px;
  border-radius: 30px;
  cursor: pointer;

  ${(props) =>
    props.isActivated
      ? css`
          ${activeInput}
        `
      : css`
          ${layer1}
        `}
`;

const LabelAndInputInnerWrapper = styled.div`
  background-color: #233a54;
  width: 220px;
  height: 28px;
  border-radius: 25px;

  ${flexboxCenter}

  ${(props) =>
    props.isActivated
      ? css`
          ${activeLayer1}
        `
      : css`
          ${layer90Deg}
        `}

  position: relative;
`;

const Label = styled.label`
  font-size: 10px;
  color: #ffffff;
  text-transform: uppercase;
  height: 12px;
  width: 96px;
  margin-right: 60px;
  cursor: pointer;
`;

const InputDegree = styled.input`
  position: absolute;
  right: -2px;
  height: 20px;
  width: 58px;
  border-radius: 20px;
  font-family: "Orbitron", sans-serif;
  box-shadow: 0 0 3px black;
  margin-right: 5.06px;
  font-size: 10px;

  ::placeholder {
    color: white;
    text-align: center;
    font-size: 10px;
  }

  ${layer1}
  ${(p) =>
    p.isActivated &&
    css`
      ${activeInput}
    `}
`;

const ActiveButton = styled.button`
  border: 0;
  outline: 0;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  margin-right: 2.38px;
  cursor: pointer;
  padding: 0;

  ${flexboxCenter}
  ${(props) =>
    props.isActivated
      ? css`
          ${activeInput}
        `
      : css`
          ${layer1}
        `}
`;

const ActiveButtonOuterWrapper = styled.div`
  height: 28px;
  width: 28px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.isActivated
      ? css`
          ${activeLayer1}
        `
      : css`
          ${layer90Deg}
        `}
`;
const ActiveButtonInnerWrapper = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  cursor: pointer;
  border-radius: 30px;

  ${flexboxCenter}

  ${(props) =>
    props.isActivated
      ? css`
          ${activeInput}
        `
      : css`
          ${layer1}
        `}
`;

const ButtonImage = styled.img`
  width: 70%;
  height: auto;
  display: block;
`;

const KeyPadWrapper = styled.div`
  position: absolute;
  top: -0.5rem;
  right: -13rem;

  z-index: 1000;
`;
