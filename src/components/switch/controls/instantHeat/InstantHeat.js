import { useContext, useRef } from 'react';
import {
  activeInput,
  activeLayer1,
  flexboxCenter,
  layer1,
  layer90Deg,
} from '../../../../styles/commonStyles';

import styled, { css } from 'styled-components';
import { Context } from '../../../../context/Context';

const InstantHeat = () => {
  const { state, dispatch } = useContext(Context);
  const { instantButtonToggler } = state.instantHeat;

  const inputRef = useRef();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const temp = Number(inputRef.current.value);

    if (temp !== 0) {
      if (!instantButtonToggler) {
        dispatch({ type: 'instantHeat', payload: temp });
        inputRef.current.value = `${temp}\u00b0C`;
      } else {
        dispatch({ type: 'instantHeat', payload: 0 });
        inputRef.current.value = `0\u00b0C`;
      }
    } else {
      return;
    }
  };

  const onInputHandelr = () => {
    inputRef.current.focus();
  };

  return (
    <Wrapper toggler={instantButtonToggler}>
      <InnerWrapper toggler={instantButtonToggler} onSubmit={handleOnSubmit}>
        <LabelAndInputOuterWrapper
          toggler={instantButtonToggler}
          onClick={onInputHandelr}
        >
          <LabelAndInputInnerWrapper toggler={instantButtonToggler}>
            <Label>instant heat</Label>
            <InputDegree
              toggler={instantButtonToggler}
              placeholder='0&deg;C'
              type='text'
              ref={inputRef}
            />
          </LabelAndInputInnerWrapper>
        </LabelAndInputOuterWrapper>

        <ActiveButton toggler={instantButtonToggler}>
          <ActiveButtonOuterWrapper toggler={instantButtonToggler}>
            <ActiveButtonInnerWrapper toggler={instantButtonToggler}>
              <ButtonImage src={'/images/instant-Heat-Program -Logo.svg'} />
            </ActiveButtonInnerWrapper>
          </ActiveButtonOuterWrapper>
        </ActiveButton>
      </InnerWrapper>
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
`;

const InnerWrapper = styled.form`
  ${flexboxCenter}

  width: 276px;
  height: 36px;
  border-radius: 27px;

  justify-content: space-between;
  align-items: center;

  ${(props) =>
    props.toggler
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
    props.toggler
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
    props.toggler
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
  font-family: 'Orbitron', sans-serif;
  box-shadow: 0 0 3px black;
  margin-right: 5.06px;
  font-size: 10px;

  ::placeholder {
    color: white;
    text-align: center;
    font-size: 10px;
  }

  ${(props) =>
    props.toggler
      ? css`
          ${activeInput}
        `
      : css`
          ${layer1}
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
