import { current } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import { handleSSRDetails } from '../../../store/slices/heaterStatusSlice';
import { selectDescription } from '../../../store/slices/ssrDescriptionSlice';
import {
  flexboxCenter,
  ItemBackground,
  ItemBackgroundDisable,
} from '../../../styles/commonStyles';
import InputKeyboard from '../../keyboard/InputKeyboard';
import InputKeyPad from '../../keyboard/InputKeyPad';

import SettingButton from './SettingButton';
import SSRDetailButtonContainer from './SSRDetailButtonContainer';

const AdminSSRItemDetails = ({
  isEnable,
  isFault,
  option,
  data,
  isSettingOpen,
  setIsSettingOpen,
  handleButtonClick,
  id,
}) => {
  const descriptionState = useSelector(selectDescription);
  const { specsStr, descriptionOptions } = descriptionState;

  const initialInputState = [
    { partNumber: '', current: '', wattage: '', voltage: '', lengths: '' },
    { partNumber: '', current: '', wattage: '', voltage: '', lengths: '' },
    { partNumber: '', current: '', wattage: '', voltage: '', lengths: '' },
  ];
  const initialInputId = [null, null];
  const initialKeypadState = false;

  const [inputDetails, setInputDetails] = useState(initialInputState);
  const [activateKeypad, setActivateKeypad] = useState(initialKeypadState);
  const [activateKeyboard, setActivateKeyboard] = useState(initialKeypadState);
  const [hiddenNumber, setHiddenNumber] = useState(1);

  const [inputId, setInputId] = useState(initialInputId);
  const [description, setDescription] = useState(['', '', '']);

  const dispatch = useDispatch();

  useEffect(() => {
    if (
      inputDetails[0].current > 0 &&
      inputDetails[0].wattage > 0 &&
      inputDetails[0].voltage > 0 &&
      inputDetails[0].lengths > 0
    ) {
      console.log('index 0');
      // 1. Make the specs as a string
      const specsString = `${inputDetails[0].current}/${inputDetails[0].wattage}/${inputDetails[0].voltage}/${inputDetails[0].lengths}`;
      // 2. Find Index using indexOF
      const descriptionIndex = specsStr.indexOf(specsString);
      // 3. Set description state
      const copyArr = [descriptionOptions[descriptionIndex], '', ''];
      setDescription(copyArr);
    }
  }, [
    inputDetails[0].current,
    inputDetails[0].wattage,
    inputDetails[0].voltage,
    inputDetails[0].lengths,
  ]);

  useEffect(() => {
    if (
      inputDetails[1].current > 0 &&
      inputDetails[1].wattage > 0 &&
      inputDetails[1].voltage > 0 &&
      inputDetails[1].lengths > 0
    ) {
      console.log('index 0');
      // 1. Make the specs as a string
      const specsString = `${inputDetails[1].current}/${inputDetails[1].wattage}/${inputDetails[1].voltage}/${inputDetails[1].lengths}`;
      // 2. Find Index using indexOF
      const descriptionIndex = specsStr.indexOf(specsString);
      // 3. Set description state
      const copyArr = [
        description[0],
        descriptionOptions[descriptionIndex],
        '',
      ];
      setDescription(copyArr);
    }
  }, [
    inputDetails[1].current,
    inputDetails[1].wattage,
    inputDetails[1].voltage,
    inputDetails[1].lengths,
  ]);

  useEffect(() => {
    if (
      inputDetails[2].current > 0 &&
      inputDetails[2].wattage > 0 &&
      inputDetails[2].voltage > 0 &&
      inputDetails[2].lengths > 0
    ) {
      console.log('index 0');
      // 1. Make the specs as a string
      const specsString = `${inputDetails[2].current}/${inputDetails[2].wattage}/${inputDetails[2].voltage}/${inputDetails[2].lengths}`;
      // 2. Find Index using indexOF
      const descriptionIndex = specsStr.indexOf(specsString);
      // 3. Set description state
      const copyArr = [
        description[0],
        description[1],
        descriptionOptions[descriptionIndex],
      ];
      setDescription(copyArr);
    }
  }, [
    inputDetails[2].current,
    inputDetails[2].wattage,
    inputDetails[2].voltage,
    inputDetails[2].lengths,
  ]);

  const handleClick = (name) => {
    if (name === 'add') {
      switch (hiddenNumber) {
        case 1: {
          setHiddenNumber(2);
          break;
        }
        case 2: {
          setHiddenNumber(3);
          break;
        }
        default: {
          return;
        }
      }
    } else if (name === 'clear') {
      // Logic for Delete the column
      switch (hiddenNumber) {
        case 3: {
          // 1. Delete Column
          setHiddenNumber(2);
          // 2. Reset Input States
          setInputDetails([
            inputDetails[0],
            inputDetails[1],
            { current: '', wattage: '', voltage: '', lengths: '' },
          ]);
          setDescription([description[0], description[1]]);
          break;
        }
        case 2: {
          setHiddenNumber(1);
          setInputDetails([
            inputDetails[0],
            { current: '', wattage: '', voltage: '', lengths: '' },
            { current: '', wattage: '', voltage: '', lengths: '' },
          ]);
          setDescription([description[0]]);
          break;
        }
        case 1: {
          // Reset input state
          setInputDetails([...initialInputState]);
          setDescription([]);
          break;
        }
        default: {
          return;
        }
      }
    } else {
      // name === 'apply' do Dispatch
      if (inputDetails[0].current.length > 0) {
        dispatch(
          handleSSRDetails({
            data: inputDetails,
            column: hiddenNumber,
            id: `ssr${id}`,
          })
        );
      }
    }
  };

  // Activate keypad with input ID
  const handleActivateKeypad = (index, name) => {
    if (name === 'partNumber') {
      // 1. set index and name
      setInputId([index, name]);
      // 2. Activate Keyboard
      setActivateKeyboard(true);
      setActivateKeypad(false);
    } else {
      // 1. set index and name
      setInputId([index, name]);
      // 2. Activate Keypad
      setActivateKeypad(true);
      setActivateKeyboard(false);
    }
  };

  // For keyboard input
  const handleSetInput = (index, name, input) => {
    // console.log(index, name, input);
  };

  // For virtual keypad input
  const handleKeypadInput = (index, name, input) => {
    console.log(index, name, input);
    // 1. Copy current inputDetails state
    const newInput = [...inputDetails];
    // 2. update new Input into requested index and name
    newInput[index][name] = input;
    // 3. Set state
    setInputDetails(newInput);
  };

  return (
    <Wrapper>
      <ContentWrapper isEnable={isEnable} isFault={isFault}>
        {inputDetails.map((element, index) => (
          <>
            <ItemWrapper key={index} column={index} hiddenNumber={hiddenNumber}>
              <ItemPartNumber>
                <ItemPartNumberInput
                  type='text'
                  isEnable={isEnable}
                  placeholder='Input part number'
                  onClick={() =>
                    isEnable && handleActivateKeypad(index, 'partNumber')
                  }
                  onChange={() => handleSetInput(index, 'partNumber')}
                  value={element.partNumber}
                />
              </ItemPartNumber>
              <ItemCurrent isEnable={isEnable}>
                <ItemDataInput
                  type='text'
                  isEnable={isEnable}
                  placeholder='Input Current'
                  onClick={() =>
                    isEnable && handleActivateKeypad(index, 'current')
                  }
                  onChange={() => handleSetInput(index, 'current')}
                  value={element.current}
                />
              </ItemCurrent>

              <ItemWattage isEnable={isEnable}>
                <ItemDataInput
                  type='text'
                  isEnable={isEnable}
                  placeholder='Input Wattage'
                  onClick={() =>
                    isEnable && handleActivateKeypad(index, 'wattage')
                  }
                  onChange={() => handleSetInput(index, 'wattage')}
                  value={element.wattage}
                />
              </ItemWattage>

              <ItemVoltage isEnable={isEnable}>
                <ItemDataInput
                  type='text'
                  isEnable={isEnable}
                  placeholder='input voltage'
                  onClick={() => handleActivateKeypad(index, 'voltage')}
                  onChange={() => isEnable && handleSetInput(index, 'voltage')}
                  value={element.voltage}
                />
              </ItemVoltage>

              <ItemLength isEnable={isEnable}>
                <ItemDataInput
                  type='text'
                  isEnable={isEnable}
                  placeholder='input length'
                  onClick={() => handleActivateKeypad(index, 'lengths')}
                  onChange={() => isEnable && handleSetInput(index, 'lengths')}
                  value={element.lengths}
                />
              </ItemLength>

              <DescriptionAndButtonWrapper>
                <ItemDescription isEnable={isEnable}>
                  <ItemDataDescription isDescription={true} isEnable={isEnable}>
                    {description[index] && description[index]}
                    {description[index] &&
                      ` / ${inputDetails[index].current} a / ${inputDetails[index].wattage} w / ${inputDetails[index].voltage} v / ${inputDetails[index].lengths} l`}
                  </ItemDataDescription>
                </ItemDescription>

                <SettingButton
                  isSettingOpen={isSettingOpen}
                  setIsSettingOpen={setIsSettingOpen}
                  handleButtonClick={handleButtonClick}
                  id={option}
                  column={index + 1}
                  // when ssr status is fault button will be disable
                />
              </DescriptionAndButtonWrapper>
            </ItemWrapper>
          </>
        ))}
      </ContentWrapper>

      {activateKeypad && (
        <KeypadWrapper positionTop={hiddenNumber}>
          <InputKeyPad
            closeKeyPad={() => setActivateKeypad(false)}
            handleOnSubmit={handleKeypadInput}
            column={inputId[0]}
            name={inputId[1]}
          />
        </KeypadWrapper>
      )}

      {activateKeyboard && (
        <KeyboardWrapper positionTop={hiddenNumber}>
          <InputKeyboard
            closeKeyboard={() => setActivateKeyboard(false)}
            handleOnSubmit={handleKeypadInput}
            column={inputId[0]}
            name={inputId[1]}
          />
        </KeyboardWrapper>
      )}

      <SSRDetailButtonContainer handleClick={handleClick} />
    </Wrapper>
  );
};
export default AdminSSRItemDetails;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  /* For layout */
  height: 106px;
`;
const ContentWrapper = styled.ul`
  width: 692px;
  /* height: 73px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.1rem 0;

  background: transparent linear-gradient(90deg, #233a54 0%, #060d19 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff29, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 12px 12px 0 12px;
  opacity: 1;

  ${(p) =>
    p.isEnable ||
    css`
      background: transparent linear-gradient(180deg, #565656 0%, #1d1d1d 100%)
        0% 0% no-repeat padding-box;
      box-shadow: inset 0px 0.5px 1px #ffffff29, 0px 0px 1px #000000;
      border: 0.5px solid #000000;
      border-radius: 12px;
      opacity: 1;
    `}

  border: ${(p) => (p.isFault ? '1px solid red' : '')};
`;

const ItemWrapper = styled.div`
  ${flexboxCenter}
  justify-content: space-between;
  padding: 0 0.1rem;

  &:first-child {
    ${(p) =>
      p.hiddenNumber === 1 ||
      css`
        margin-bottom: 0.2rem;
      `}
  }
  &:nth-child(2) {
    ${(p) =>
      p.hiddenNumber === 2 ||
      css`
        margin-bottom: 0.2rem;
      `}

    ${(p) =>
      p.column < p.hiddenNumber ||
      css`
        display: none;
      `}
  }
  &:last-child {
    ${(p) =>
      p.column < p.hiddenNumber ||
      css`
        display: none;
      `}
  }
`;
const ItemPartNumber = styled.li`
  width: 90px;
  height: 20px;
  ${ItemBackground}
`;

const ItemCurrent = styled.li`
  ${flexboxCenter}

  width: 93px;
  height: 20px;
  ${ItemBackground}

  ${(p) =>
    p.isEnable ||
    css`
      ${ItemBackgroundDisable}
    `}
`;
const ItemWattage = styled.li`
  ${flexboxCenter}
  width: 93px;
  height: 20px;
  ${ItemBackground}
  ${(p) =>
    p.isEnable ||
    css`
      ${ItemBackgroundDisable}
    `}
`;
const ItemVoltage = styled.li`
  ${flexboxCenter}

  width: 93px;
  height: 20px;
  ${ItemBackground}
  ${(p) =>
    p.isEnable ||
    css`
      ${ItemBackgroundDisable}
    `}
`;
const ItemLength = styled.li`
  ${flexboxCenter}

  width: 93px;
  height: 20px;
  ${ItemBackground}
  ${(p) =>
    p.isEnable ||
    css`
      ${ItemBackgroundDisable}
    `}
`;
const ItemDescription = styled.li`
  ${flexboxCenter}

  width: 162px;
  height: 20px;
  ${ItemBackground}
  ${(p) =>
    p.isEnable ||
    css`
      ${ItemBackgroundDisable}
    `};
`;

const ItemPartNumberInput = styled.input`
  font-size: 6px;
  text-align: center;
  text-transform: uppercase;
  width: 90px;
  vertical-align: middle;

  background-color: transparent;
  &::placeholder {
    color: #fff;
  }
`;

const ItemDataInput = styled.input`
  font-size: 8px;
  text-align: center;
  text-transform: uppercase;
  width: 90px;

  background-color: transparent;
  &::placeholder {
    color: #fff;
  }
`;

const ItemDataDescription = styled.span`
  font-size: 8px;
  text-align: center;
  text-transform: uppercase;
  width: 90%;

  ${(p) =>
    p.isDescription &&
    css`
      font-size: 6px;
    `}
  color: ${(p) => p.isEnable || `#808080;`};

  /* Layout for radio box with parents box */
  margin-right: 0.4rem;
`;

const DescriptionAndButtonWrapper = styled.div`
  width: 184px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const KeypadWrapper = styled.div`
  z-index: 100;

  position: absolute;
  ${(p) =>
    p.positionTop === 1
      ? css`
          top: 3rem;
        `
      : p.positionTop === 2
      ? css`
          top: 4.5rem;
        `
      : css`
          top: 5.7rem;
        `}

  left: 15%;
`;

const KeyboardWrapper = styled.div`
  z-index: 100;

  position: absolute;
  ${(p) =>
    p.positionTop === 1
      ? css`
          top: 3rem;
          right: 6rem;
        `
      : p.positionTop === 2
      ? css`
          top: 4.5rem;
        `
      : css`
          top: 5.7rem;
        `}
`;
