import { useState } from 'react';
import { useContext } from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { SettingsContext } from '../../../../context/ContextOfSettings';
import { selectSettingsOfEss } from '../../../../store/slices/settingsOfEssSlice';
import { flexboxCenter } from '../../../../styles/commonStyles';
import InputKeyPad from '../../../keyboard/InputKeyPad';

function SnowFactor({
  tgsTes,
  ess,
  tesSwitch,
  essSwitch,
  editState,
  options,
  setOptions,
  metricImperialToggle,
  handleInputs,
}) {
  // useContext
  const {
    setEssSnowSensor,
    setTgsSnowSensor,
    setTesSnowSensor,
    tgsSnowSensor,
    tesSnowSensor,
    essSnowSensor,
  } = useContext(SettingsContext);

  // redux
  const settingsEssState = useSelector(selectSettingsOfEss);
  const mode = settingsEssState.interfaceMode;
  // useState
  const [activateKeypad, setActivateKeypad] = useState(false);
  const [inputFocus, setInputFocus] = useState(null);

  // handles the keypad
  const handleDisplayKeyPad = (index) => {
    options !== index && setOptions(index);
    setActivateKeypad(true);
  };

  // handles the input field to direct each data entered  from keypad gets save at the right place in useState in useContext and it will display in the input field as you type
  // const handleInput = (index, inputNumber) => {
  //   const value = Number(inputNumber);
  //   switch (index) {
  //     case 0:
  //       setEssSnowSensor(value);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // handles the 2 input fields to direct each data entered  from keypad gets save at the right place in useState in useContext and it will display in the input field as you type
  // const handleInputs = (index, inputNumber) => {
  //   switch (index) {
  //     case 0:
  //       setTgsSnowSensor(inputNumber);
  //       break;
  //     case 1:
  //       setTesSnowSensor(inputNumber);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  return (
    <>
      {essSwitch ? (
        <FlexWrapper>
          <WrapperTgsTesSnowSensor interfaceMode={mode}>
            <TitleContainer interfaceMode={mode}>
              <Title interfaceMode={mode}>{ess}</Title>
            </TitleContainer>

            <ValueContainer interfaceMode={mode}>
              <SmallContainer essSwitch={essSwitch} interfaceMode={mode}>
                <Temperature>
                  <Input
                    interfaceMode={mode}
                    type='number'
                    placeholder='enter temperature'
                    value={essSnowSensor}
                    onChange={(e) => {
                      handleInputs(0, e.target.value);
                    }}
                    onClick={() => {
                      handleDisplayKeyPad();
                    }}
                  ></Input>
                  {metricImperialToggle ? '°F' : '°c'}
                </Temperature>
                {activateKeypad && (
                  <KeyboardWrapper>
                    <PositionAbsoluteBox index={true}>
                      <InputKeyPad
                        closeKeyPad={() => setActivateKeypad(false)}
                        handleOnSubmit={handleInputs}
                        setMainInput={handleInputs}
                        name={0}
                      />
                    </PositionAbsoluteBox>
                  </KeyboardWrapper>
                )}
              </SmallContainer>
            </ValueContainer>
          </WrapperTgsTesSnowSensor>
        </FlexWrapper>
      ) : (
        tgsTes?.map((value, index) => {
          return (
            <div key={index}>
              <FlexWrapper>
                <WrapperTgsTesSnowSensor
                  gradient={index === 0 ? true : index === 1 && false}
                  index={index}
                  tesSwitch={tesSwitch}
                  interfaceMode={mode}
                >
                  <TitleContainer
                    index={index}
                    tesSwitch={tesSwitch}
                    interfaceMode={mode}
                  >
                    <Title interfaceMode={mode}>{value}</Title>
                  </TitleContainer>

                  <ValueContainer
                    index={index}
                    tesSwitch={tesSwitch}
                    interfaceMode={mode}
                  >
                    <SmallContainer
                      index={index}
                      tesSwitch={tesSwitch}
                      interfaceMode={mode}
                    >
                      <Temperature interfaceMode={mode}>
                        {index === 0 && !tesSwitch && (
                          <Input
                            interfaceMode={mode}
                            type='number'
                            placeholder='enter temperature'
                            index={index}
                            tesSwitch={tesSwitch}
                            value={tgsSnowSensor}
                            onChange={(e) => {
                              // handleInputs(e.target.value);
                              handleInputs(index, e.target.value);
                            }}
                            onClick={() => {
                              handleDisplayKeyPad(index);
                              setInputFocus(index);
                              setOptions(index);
                            }}
                          ></Input>
                        )}
                        {tesSwitch && (index === 0 || index === 1) && (
                          <Input
                            interfaceMode={mode}
                            type='number'
                            placeholder='enter temperature'
                            index={index}
                            tesSwitch={tesSwitch}
                            value={index === 0 ? tgsSnowSensor : tesSnowSensor}
                            onChange={(e) => {
                              handleInputs(index, e.target.value);
                              // index === 0
                              //   ? handleInput(index, e.target.value);
                              //   :  handleInputs(index, e.target.value);
                            }}
                            onClick={() => {
                              handleDisplayKeyPad(index);
                              setInputFocus(index);
                              setOptions(index);
                            }}
                          ></Input>
                        )}
                        {metricImperialToggle ? '°F' : '°c'}
                      </Temperature>
                      {activateKeypad && options === index && (
                        <KeyboardWrapper>
                          <PositionAbsoluteBox index={options}>
                            <InputKeyPad
                              closeKeyPad={() => setActivateKeypad(false)}
                              name={inputFocus}
                              handleOnSubmit={handleInputs}
                              setMainInput={handleInputs}
                            />
                          </PositionAbsoluteBox>
                        </KeyboardWrapper>
                      )}
                    </SmallContainer>
                  </ValueContainer>
                </WrapperTgsTesSnowSensor>
              </FlexWrapper>
            </div>
          );
        })
      )}
    </>
  );
}

export default SnowFactor;

// ${({interfaceMode})=>(interfaceMode ? css`` : css``)}

const FlexWrapper = styled.div`
  width: 286px;
  height: 94px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const WrapperTgsTesSnowSensor = styled.div`
  width: 286px;
  height: 94px;
  opacity: 1;

  box-sizing: border-box;
  border: 0.5px solid #000000;
  border-radius: 12px;

  ${({ interfaceMode }) =>
    interfaceMode
      ? css`
          background: transparent
            linear-gradient(
              ${({ gradient }) => (gradient ? 90 : 270)}deg,
              #ebebeb 0%,
              #bbbbbb 100%
            );
          box-shadow: inset 0px 1px 2px #ffffff24, 0px 0px 2px #000000;
          border: 0.5px solid #1b2b44;
          ${(p) =>
            p.tesSwitch ||
            (p.index === 1 &&
              css`
                background: -webkit-linear-gradient(
                  180deg,
                  #565656 0%,
                  #1d1d1d 100%
                );
                box-shadow: inset 0 1px 1px rgba(255, 255, 255, 14%);
                box-shadow: 0 0 2px rgba(0, 0, 0, 100%);
              `)}
        `
      : css`
          background: -webkit-linear-gradient(
            ${({ gradient }) => (gradient ? 180 : 360)}deg,
            rgb(0, 0, 0) 0%,
            rgb(35, 58, 84) 100%
          );
          ${(p) =>
            p.tesSwitch ||
            (p.index === 1 &&
              css`
                background: -webkit-linear-gradient(
                  180deg,
                  #565656 0%,
                  #1d1d1d 100%
                );
              `)}

          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 14%);
          box-shadow: 0 0 2px rgba(0, 0, 0, 100%);
        `}
  /* background: -webkit-linear-gradient(
    ${({ gradient }) => (gradient ? 180 : 360)}deg,
    rgb(0, 0, 0) 0%,
    rgb(35, 58, 84) 100%
  );
  ${(p) =>
    p.tesSwitch ||
    (p.index === 1 &&
      css`
        background: -webkit-linear-gradient(180deg, #565656 0%, #1d1d1d 100%);
      `)} */

  opacity: 1;
  ${flexboxCenter}
  flex-direction: column;
  justify-content: space-evenly;
`;

const TitleContainer = styled.div`
  width: 278px;
  height: 32px;

  ${({ interfaceMode }) =>
    interfaceMode
      ? css`
          background: #ffffff;
          border: 1px solid #1b2b44;
        `
      : css`
          background: #233a54;
          ${(p) =>
            p.tesSwitch ||
            (p.index === 1 &&
              css`
                background: #3b3b3b;
              `)};
        `}

  box-shadow: inset 0px 0px 3px #000000;

  border-radius: 16px;
  opacity: 1;
  ${flexboxCenter}
`;

const Title = styled.p`
  font-size: var(--font-size7);
  text-transform: uppercase;

  ${({ interfaceMode }) =>
    interfaceMode
      ? css`
          color: #1b2b44;
        `
      : css`
          color: #ffffff;
        `}
`;

const ValueContainer = styled.div`
  width: 278px;
  height: 42px;

  ${({ interfaceMode }) =>
    interfaceMode
      ? css`
          background: #ffffff;
        `
      : css`
          background: #233a54;
          ${(p) =>
            p.tesSwitch ||
            (p.index === 1 &&
              css`
                background: #3b3b3b;
              `)};
        `}

  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 21px;
  opacity: 1;
  ${flexboxCenter};
`;

const SmallContainer = styled.div`
  width: 269px;
  height: 32px;

  border: ${({ tesSwitch, index }) =>
    tesSwitch
      ? '1px solid #142033'
      : tesSwitch || (index === 1 && '1px solid #808080')};
  ${({ essSwitch }) => essSwitch && 'border: 1px solid #142033'};

  border-radius: 16px;
  opacity: 1;
  ${flexboxCenter}
`;

const Temperature = styled.span`
  font-size: var(--space2);
  margin-right: var(--font-size6);
  text-transform: uppercase;
`;

const KeyboardWrapper = styled.div`
  height: 100px;
`;

const PositionAbsoluteBox = styled.div`
  ${({ index }) =>
    index === 0
      ? css`
          position: absolute;
          top: 10rem;
          right: 21rem;
        `
      : index === 1
      ? css`
          position: absolute;
          top: 10rem;
          right: 3rem;
        `
      : css`
          position: absolute;
          top: 10rem;
          right: 21rem;
        `}
`;

const Input = styled.input`
  width: auto;
  height: auto;

  font-size: var(--space2);

  ${({ interfaceMode }) =>
    interfaceMode
      ? css`
          color: #1b2b44;
          background-color: #ffff;
          &::placeholder {
            color: #1b2b44;
          }
        `
      : css`
          background-color: ${({ tesSwitch, index }) =>
            tesSwitch
              ? '#233a54'
              : (!tesSwitch && index === 1 && '#3b3b3b') || '#233a54'};
        `}

  border-radius: 21px;
  opacity: 1;
  text-transform: uppercase;

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
