import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSettingsOfEss } from '../../../../store/slices/settingsOfEssSlice';

import styled, { css } from 'styled-components';
import { flexboxCenter } from '../../../../styles/commonStyles';
import { act } from '@testing-library/react';
import InputKeyboard from '../../../keyboard/InputKeyboard';
import InputKeyPad from '../../../keyboard/InputKeyPad';
import {
  handleAddNewElement,
  selectDescription,
} from '../../../../store/slices/ssrDescriptionSlice';

const AddElementToBank = () => {
  const unitsState = useSelector(selectSettingsOfEss);
  const { unitsMeasurement } = unitsState.buttonsOfSettings;

  const initialInputState = {
    name: null,
    partNumber: null,
    current: null,
    wattage: null,
    voltage: null,
    lengths: null,
  };
  const [inputElement, setInputElement] = useState(initialInputState);
  const [activateKeyboard, setActivateKeyboard] = useState(false);
  const [activateKeypad, setActivateKeypad] = useState(false);
  const [inputFocus, setInputFocus] = useState('name');
  const state = useSelector(selectSettingsOfEss);
  const mode = state.interfaceMode;
  const { settingsEditButton } = state.buttonsOfSettings;
  const dispatch = useDispatch();

  useEffect(() => {
    return setActivateKeypad(false), setActivateKeyboard(false);
  }, [settingsEditButton]);

  const handleInput = (name, input) => {
    const copyState = { ...inputElement };
    copyState[name] = input;
    setInputElement(copyState);
  };

  const handleSave = () => {
    console.log('I will dispatch!!!! wait!!!!');
    if (unitsMeasurement) {
      const copyObj = { ...inputElement };
      copyObj.lengths = copyObj.lengths / 3.28084;
      dispatch(handleAddNewElement(copyObj));
    } else {
      dispatch(handleAddNewElement(inputElement));
    }
  };

  return (
    <Wrapper>
      <ContentWrapper>
        <InnerWrapper>
          <TitleWrapper>
            <Title>add element to bank</Title>
          </TitleWrapper>

          <SectionWrapper>
            <ElementGroupWrapper>
              <ElementNameWrapper>
                <ElementNameTop>
                  <Span>
                    element<br></br>Name :
                  </Span>
                  {settingsEditButton ? (
                    <Input
                      type='text'
                      placeholder='---------'
                      value={settingsEditButton && inputElement}
                      onClick={() => {
                        setInputFocus('name');
                        setActivateKeyboard(true);
                        setActivateKeypad(false);
                      }}
                      name='name'
                      onChange={(event) =>
                        handleInput('name', event.target.value)
                      }
                      value={inputElement.name}
                    />
                  ) : (
                    <FakeInput>---------</FakeInput>
                  )}
                </ElementNameTop>
              </ElementNameWrapper>

              <ElementNameWrapper>
                <ElementNameTop>
                  <Span>
                    element<br></br>Part Number :
                  </Span>
                  {settingsEditButton ? (
                    <Input
                      type='text'
                      placeholder='---------'
                      value={inputElement}
                      name='partNumber'
                      onClick={() => {
                        setInputFocus('partNumber');
                        setActivateKeyboard(true);
                        setActivateKeypad(false);
                      }}
                      name='partNumber'
                      onChange={(event) =>
                        handleInput('partNumber', event.target.value)
                      }
                      value={inputElement.partNumber}
                    />
                  ) : (
                    <FakeInput>---------</FakeInput>
                  )}
                </ElementNameTop>
              </ElementNameWrapper>
            </ElementGroupWrapper>
            <DescriptionWrapperHole>
              <DescriptionWrapper>
                <Description>
                  {inputElement.partNumber && `${inputElement.partNumber} - `}
                  {inputElement.name && inputElement.name}
                  <br></br>
                  {inputElement.current && `${inputElement.current}`}
                  {inputElement.wattage && ` / ${inputElement.wattage}`}
                  {inputElement.voltage && ` / ${inputElement.voltage}`}
                  {inputElement.lengths && ` / ${inputElement.lengths}`}
                </Description>
              </DescriptionWrapper>
            </DescriptionWrapperHole>
          </SectionWrapper>

          <SectionWrapper>
            <SpecTitleWrapper>
              <SpecTitle>current (a)</SpecTitle>
              <SpecTitle>wattage (w)</SpecTitle>
              <SpecTitle>voltage (v)</SpecTitle>
              {unitsMeasurement ? (
                <SpecTitle>length (ft)</SpecTitle>
              ) : (
                <SpecTitle>length (m)</SpecTitle>
              )}
            </SpecTitleWrapper>
            <ElementSpecWrapper>
              <ElementSpecInnerWrapper>
                <Span>
                  element <br></br>specification :
                </Span>
                <SpecsGroupWrapper>
                  {settingsEditButton ? (
                    <Input
                      type='number'
                      placeholder='---------'
                      value={inputElement.current}
                      closeKeyboard={() => setActivateKeypad(false)}
                      onChange={(event) =>
                        handleInput('current', Number(event.target.value))
                      }
                      onClick={() => {
                        setInputFocus('current');
                        setActivateKeypad(true);
                        setActivateKeyboard(false);
                      }}
                    />
                  ) : (
                    <FakeInput>---------</FakeInput>
                  )}
                  {settingsEditButton ? (
                    <Input
                      type='number'
                      placeholder='---------'
                      value={inputElement.wattage}
                      closeKeyboard={() => setActivateKeypad(false)}
                      onChange={(event) =>
                        handleInput('wattage', Number(event.target.value))
                      }
                      onClick={() => {
                        setInputFocus('wattage');
                        setActivateKeypad(true);
                        setActivateKeyboard(false);
                      }}
                    />
                  ) : (
                    <FakeInput>---------</FakeInput>
                  )}
                  {settingsEditButton ? (
                    <Input
                      type='number'
                      placeholder='---------'
                      value={inputElement.voltage}
                      closeKeyboard={() => setActivateKeypad(false)}
                      onChange={(event) =>
                        handleInput('voltage', Number(event.target.value))
                      }
                      onClick={() => {
                        setInputFocus('voltage');
                        setActivateKeypad(true);
                        setActivateKeyboard(false);
                      }}
                    />
                  ) : (
                    <FakeInput>---------</FakeInput>
                  )}
                  {settingsEditButton ? (
                    <Input
                      type='number'
                      placeholder='---------'
                      value={inputElement.lengths}
                      closeKeyboard={() => setActivateKeypad(false)}
                      onChange={(event) =>
                        handleInput('lengths', Number(event.target.value))
                      }
                      onClick={() => {
                        setInputFocus('lengths');
                        setActivateKeypad(true);
                        setActivateKeyboard(false);
                      }}
                    />
                  ) : (
                    <FakeInput>---------</FakeInput>
                  )}
                </SpecsGroupWrapper>
              </ElementSpecInnerWrapper>
            </ElementSpecWrapper>
          </SectionWrapper>

          <SectionWrapper>
            <ButtonWrapper onClick={handleSave}>
              <ButtonInnerWrapper>
                <ButtonHole>
                  <ButtonTop>
                    <Span>save</Span>
                  </ButtonTop>
                </ButtonHole>
              </ButtonInnerWrapper>
            </ButtonWrapper>
          </SectionWrapper>
        </InnerWrapper>
      </ContentWrapper>
      {activateKeyboard && (
        <KeyboardWrapper id={1}>
          <PositionAbsoluteBox id={1}>
            <InputKeyboard
              closeKeyboard={() => setActivateKeyboard(false)}
              handleOnSubmit={handleInput}
              name={inputFocus}
            />
          </PositionAbsoluteBox>
        </KeyboardWrapper>
      )}
      {activateKeypad && (
        <KeyboardWrapper id={2}>
          <PositionAbsoluteBox id={2}>
            <InputKeyPad
              name={inputFocus}
              closeKeyPad={() => setActivateKeypad(false)}
              handleOnSubmit={handleInput}
            />
          </PositionAbsoluteBox>
        </KeyboardWrapper>
      )}
    </Wrapper>
  );
};
export default AddElementToBank;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
`;
const ContentWrapper = styled.div`
  ${flexboxCenter}

  width: 548px;
  height: 196px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 10px;
`;
const InnerWrapper = styled.div`
  width: 544px;
  height: 192px;

  background: transparent linear-gradient(90deg, #233a54 0%, #060d19 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: inset 0px 1px 1px #ffffff24, 0px 0px 2px #000000;
  border: 0.5px solid #000000;
  border-radius: 9px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.15rem 0;
`;
const TitleWrapper = styled.div`
  ${flexboxCenter}
  width: 539px;
  height: 32px;
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 16px;
`;
const Title = styled.div`
  ${flexboxCenter}

  width: 533px;
  height: 26px;
  border: 1px solid #142033;
  border-radius: 13px;
  text-transform: uppercase;
  font-size: 10px;
`;
const SectionWrapper = styled.div`
  width: 539px;
  display: flex;
  &:nth-child(2) {
    height: 60px;
    justify-content: space-between;
    align-items: center;
  }
  &:nth-child(3) {
    flex-direction: column;
  }
  &:nth-child(4) {
    justify-content: flex-end;
  }
`;
const ElementGroupWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ElementNameWrapper = styled.div`
  width: 214px;
  height: 26px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 13px;

  ${flexboxCenter}
`;
const ElementNameTop = styled.div`
  width: 212px;
  height: 24px;
  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff29, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-left: 0.5rem;
`;

const Span = styled.span`
  font-size: 8px;
  text-transform: uppercase;
`;
const Input = styled.input`
  width: 99px;
  height: 20px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 12px;
  font-size: 8px;
  text-transform: uppercase;

  &::placeholder {
    text-transform: uppercase;
    color: #999;
  }
`;

const FakeInput = styled.div`
  width: 99px;
  height: 20px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 12px;
  font-size: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #999;
`;
const DescriptionWrapperHole = styled.div`
  ${flexboxCenter};
  width: 317px;
  height: 60px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 13px;
`;
const DescriptionWrapper = styled.div`
  ${flexboxCenter};
  width: 315px;
  height: 58px;
  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff29, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 12px;
`;
const Description = styled.div`
  width: 311px;
  height: 54px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 10px;

  font-size: 10px;
  text-transform: uppercase;
  ${flexboxCenter};
  text-align: center;
`;
const SpecTitleWrapper = styled.div`
  margin-left: 2rem;
  width: 100%;
`;
const SpecTitle = styled.span`
  font-size: 8px;
  text-transform: uppercase;

  &:first-child {
    margin-left: 6.3rem;
  }
  &:nth-child(2) {
    margin-left: 2.8rem;
  }
  &:nth-child(3) {
    margin-left: 2.8rem;
  }
  &:nth-child(4) {
    margin-left: 3.2rem;
  }
`;
const ElementSpecWrapper = styled.div`
  ${flexboxCenter}

  width: 537px;
  height: 26px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 20px;
`;
const ElementSpecInnerWrapper = styled.div`
  width: 535px;
  height: 24px;
  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff29, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 13px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 0.5rem;
  padding-right: 0.1rem;
`;

const SpecsGroupWrapper = styled.div`
  height: 100%;
  width: 422px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonWrapper = styled.button`
  ${flexboxCenter}
  width: 102px;
  height: 26px;
  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 19px;
`;
const ButtonInnerWrapper = styled.div`
  ${flexboxCenter}

  width: 100px;
  height: 24px;
  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 25px;
`;
const ButtonHole = styled.div`
  ${flexboxCenter}

  width: 92px;
  height: 16px;
  background: #142033 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 18px;
`;
const ButtonTop = styled.div`
  ${flexboxCenter}

  width: 90px;
  height: 14px;
  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 25px;
`;

const KeyboardWrapper = styled.div`
  ${(p) =>
    p.id == 1
      ? css`
          height: 100px;
        `
      : css`
          height: 0px;
        `}
`;

const PositionAbsoluteBox = styled.div`
  ${(p) =>
    p.id == 1
      ? css`
          position: absolute;
          top: 7rem;
          right: 0rem;
        `
      : css`
          position: absolute;
          top: -10rem;
          left: 40%;
        `}
`;
