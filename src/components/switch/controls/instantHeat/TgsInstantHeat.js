import { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTgsSwitch,
  tgsInstantHeat,
  fanOnlyToggler,
  activateTgsConflictMessage,
} from "../../../../store/slices/tgsSwitchSlice";
import { selectEssSwitch } from "../../../../store/slices/essSwitchSlice";
import { selectSettingsOfEss } from "../../../../store/slices/settingsOfEssSlice";

import {
  activeInput,
  activeLayer1,
  flexboxCenter,
  layer1,
  layer90Deg,
} from "../../../../styles/commonStyles";
import styled, { css } from "styled-components";

import InputKeyPad from "../../../keyboard/InputKeyPad";
import InputTempMessage from "../../../userMessages/InputTempMessage";

const TgsInstantHeat = () => {
  const state = useSelector(selectTgsSwitch);
  const dispatch = useDispatch();
  const { instantButtonToggler, instantHeatTemp, isF } = state.instantHeat;
  const { fanOnly } = state;
  const inputRef = useRef();

  const unitsState = useSelector(selectSettingsOfEss);
  const { unitsMeasurement } = unitsState.buttonsOfSettings;
  // Check es switch
  const esState = useSelector(selectEssSwitch);
  const { isEsSwitchActivated } = esState;

  const [openKeyPad, setOpenKeyPad] = useState(false);
  const [activateMessageBox, setActivateMessageBox] = useState(false);

  useEffect(() => {
    setOpenKeyPad(false);
  }, [instantButtonToggler]);

  useEffect(() => {
    if (instantHeatTemp > 0) {
      if (unitsMeasurement == isF) {
        unitsMeasurement
          ? (inputRef.current.value = `${instantHeatTemp}°F`)
          : (inputRef.current.value = `${instantHeatTemp}°C`);
      } else {
        if (isF) {
          // saved unit is F but current unit is C -> formula c = (f-32) * 5/9
          inputRef.current.value = `${Math.round(
            ((instantHeatTemp - 32) * 5) / 9
          )}°C`;
        } else {
          // saved unit is C but current unit is F -> formula f = c * 1.8 + 32
          inputRef.current.value = `${Math.round(
            instantHeatTemp * 1.8 + 32
          )}°F`;
        }
      }
    }
  }, [instantHeatTemp]);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (!isEsSwitchActivated) {
      const temp = Number(inputRef.current.value);
      setOpenKeyPad(false);
      if (temp !== 0) {
        if (!instantButtonToggler) {
          dispatch(tgsInstantHeat({ temp, unitsMeasurement }));
          unitsMeasurement
            ? (inputRef.current.value = `${temp}°F`)
            : (inputRef.current.value = `${temp}°C`);
        } else {
          dispatch(tgsInstantHeat(0));
          inputRef.current.value = ``;
        }
      } else {
        setActivateMessageBox(true);
      }
    } else {
      inputRef.current.value = "";
      // Activate Conflict Message Box
      dispatch(activateTgsConflictMessage());
    }
  };

  // Virtual keyboard input handler
  const handleVirtualKeyboardInput = (input) => {
    if (!isEsSwitchActivated) {
      const temp = Number(input);

      if (temp !== 0) {
        if (!instantButtonToggler) {
          dispatch(tgsInstantHeat({ temp, unitsMeasurement }));
          unitsMeasurement
            ? (inputRef.current.value = `${temp}°F`)
            : (inputRef.current.value = `${temp}°C`);
        } else {
          dispatch(tgsInstantHeat(0));
          inputRef.current.value = ``;
        }
      } else {
        return;
      }
    } else {
      setOpenKeyPad(false);
      inputRef.current.value = "";
      // Activate Conflict Message Box
      dispatch(activateTgsConflictMessage());
    }
  };

  const onInputHandler = () => {
    if (instantButtonToggler) {
      dispatch(tgsInstantHeat(0));
      inputRef.current.value = ``;
    } else {
      inputRef.current.focus();
      setOpenKeyPad(true);
    }
  };

  const handleKeypadClosed = () => {
    setOpenKeyPad(false);
  };

  const handleFanToggler = () => {
    instantButtonToggler || dispatch(fanOnlyToggler());
  };

  const unit = unitsMeasurement ? `°F` : `°C`;

  return (
    <Wrapper toggler={instantButtonToggler}>
      <ContentWrapper toggler={instantButtonToggler} onSubmit={handleOnSubmit}>
        <ActiveButtonWrapper>
          <ActiveButton toggler={instantButtonToggler}>
            <ActiveButtonOuterWrapper toggler={instantButtonToggler}>
              <ActiveButtonInnerWrapper toggler={instantButtonToggler}>
                <ButtonImage src={"/images/instant-Heat-Program -Logo.svg"} />
              </ActiveButtonInnerWrapper>
            </ActiveButtonOuterWrapper>
          </ActiveButton>
        </ActiveButtonWrapper>

        <LabelAndInputOuterWrapper
          toggler={instantButtonToggler}
          onClick={onInputHandler}
        >
          <LabelOuterHole>
            <LabelInnerWrapper toggler={instantButtonToggler}>
              <Label>
                instant <br></br> heat
              </Label>
            </LabelInnerWrapper>
          </LabelOuterHole>

          <InputDegree
            isActivated={instantButtonToggler}
            placeholder={unit}
            type='text'
            ref={inputRef}
            disabled={instantButtonToggler}
          />
        </LabelAndInputOuterWrapper>
      </ContentWrapper>

      <ContentWrapperNotForm toggler={fanOnly} onClick={handleFanToggler}>
        <ActiveButtonWrapper>
          <ActiveButton toggler={fanOnly}>
            <ActiveButtonOuterWrapper toggler={fanOnly}>
              <ActiveButtonInnerWrapper toggler={fanOnly}>
                <ButtonImage src={"/images/fan-only-icon.svg"} />
              </ActiveButtonInnerWrapper>
            </ActiveButtonOuterWrapper>
          </ActiveButton>
        </ActiveButtonWrapper>

        <LabelWrapper>
          <FanLabel>fan Only</FanLabel>
        </LabelWrapper>
      </ContentWrapperNotForm>

      {/* Conditionally display keypad */}
      {openKeyPad && (
        <KeyPadWrapper>
          <InputKeyPad
            handleOnSubmit={handleVirtualKeyboardInput}
            closeKeyPad={handleKeypadClosed}
            setMainInput={(input) => (inputRef.current.value = input)}
          />
        </KeyPadWrapper>
      )}
      {activateMessageBox && (
        <InputTempMessage
          onClose={() => setActivateMessageBox(false)}
          message='in order to finalize your instant heat'
          title='instant heat'
        />
      )}
    </Wrapper>
  );
};

export default TgsInstantHeat;

const Wrapper = styled.li`
  ${flexboxCenter}
  justify-content: space-between;
  align-items: center;
  padding: 0 0.1rem;
  width: var(--controller-width);
  height: 38px;
  border-radius: 28px;

  ${layer1};
`;

const ContentWrapper = styled.form`
  ${flexboxCenter}
  justify-content: space-between;

  padding: 0.1rem;
  padding-right: 0.8rem;

  width: 136px;
  height: 36px;
  border-radius: 27px;

  ${(props) =>
    props.toggler
      ? css`
          ${activeLayer1}
        `
      : css`
          ${layer90Deg};
        `}
`;

const ContentWrapperNotForm = styled.div`
  ${flexboxCenter}
  justify-content: space-between;

  padding: 0.1rem;
  padding-right: 0.8rem;

  width: 136px;
  height: 36px;
  border-radius: 27px;
  cursor: pointer;
  ${(props) =>
    props.toggler
      ? css`
          ${activeLayer1}
        `
      : css`
          ${layer90Deg};
        `}
`;

const LabelAndInputOuterWrapper = styled.div`
  ${flexboxCenter}
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  width: 70%;
  border-radius: 23px;

  margin-left: 2.715px;
  border-radius: 30px;
  cursor: pointer;
`;

const LabelOuterHole = styled.div`
  width: 84px;
  height: 18px;

  ${flexboxCenter}

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 1px #000000;
  border-radius: 20px;
  opacity: 1;
`;
const LabelInnerWrapper = styled.div`
  width: 82px;
  height: 16px;
  border-radius: 25px;

  ${flexboxCenter}

  ${(props) =>
    props.toggler
      ? css`
          ${activeLayer1}
        `
      : css`
          ${layer90Deg}
        `}

  position: relative;
`;

const Label = styled.span`
  font-size: 7px;
  text-align: center;
  line-height: 0.9;

  cursor: pointer;
`;

const InputDegree = styled.input`
  height: 12px;
  width: 84px;
  border-radius: 20px;

  font-family: "Orbitron", sans-serif;
  box-shadow: 0 0 3px black;
  font-size: 7px;

  ::placeholder {
    color: white;
    text-align: center;
    font-size: 7px;
  }

  ${layer1}
  ${(p) =>
    p.isActivated &&
    css`
      ${activeInput}
    `}
`;

const ActiveButtonWrapper = styled.div`
  ${flexboxCenter}
  justify-content: flex-start;
  width: 30%;
  height: 100%;
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
    props.toggler
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
    props.toggler
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
    props.toggler
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

const LabelWrapper = styled.div`
  width: 70%;
  height: 100%;
  ${flexboxCenter}
`;

const FanLabel = styled.span`
  font-size: 8px;
`;

const KeyPadWrapper = styled.div`
  position: absolute;
  top: 1.1rem;
  right: -12rem;

  z-index: 1000;
`;
