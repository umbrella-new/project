import { current } from '@reduxjs/toolkit';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import { handleSSRDetails } from '../../../store/slices/heaterStatusSlice';
import {
  flexboxCenter,
  ItemBackground,
  ItemBackgroundDisable,
} from '../../../styles/commonStyles';
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
  const initialInputState = [
    { current: '', wattage: '', voltage: '', length: '' },
    { current: '', wattage: '', voltage: '', length: '' },
    { current: '', wattage: '', voltage: '', length: '' },
  ];
  const initialInputId = [null, null];
  const initialKeypadState = false;

  const [inputDetails, setInputDetails] = useState(initialInputState);
  const [activateKeypad, setActivateKeypad] = useState(initialKeypadState);
  const [hiddenNumber, setHiddenNumber] = useState(1);
  const [inputId, setInputId] = useState(initialInputId);

  const dispatch = useDispatch();

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
            { current: '', wattage: '', voltage: '', length: '' },
          ]);
          break;
        }
        case 2: {
          setHiddenNumber(1);
          setInputDetails([
            inputDetails[0],
            { current: '', wattage: '', voltage: '', length: '' },
            { current: '', wattage: '', voltage: '', length: '' },
          ]);
          break;
        }
        case 1: {
          // Reset input state
          setInputDetails([...initialInputState]);
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
    // 1. set index and name
    setInputId([index, name]);
    // 2. Activate Keypad
    setActivateKeypad(true);
  };

  // For keyboard input
  const handleSetInput = (index, name, input) => {
    // console.log(index, name, input);
  };

  // For virtual keypad input
  const handleKeypadInput = (index, name, input) => {
    // console.log(index, name, input);
    // Copy current inputDetails state
    const newInput = [...inputDetails];
    // update new Input into requested index and name
    newInput[index][name] = input;
    // Set state
    setInputDetails(newInput);
  };

  return (
    <Wrapper>
      <ContentWrapper isEnable={isEnable} isFault={isFault}>
        {inputDetails.map((element, index) => (
          <>
            <ItemWrapper key={index} column={index} hiddenNumber={hiddenNumber}>
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
                  onClick={() => handleActivateKeypad(index, 'length')}
                  onChange={() => isEnable && handleSetInput(index, 'length')}
                  value={element.length}
                />
              </ItemLength>

              <DescriptionAndButtonWrapper>
                <ItemDescription isEnable={isEnable}>
                  <ItemDataDescription isDescription={true} isEnable={isEnable}>
                    {data.description[hiddenNumber - 1]} <br></br>
                    {inputDetails[hiddenNumber - 1].current} a /{' '}
                    {inputDetails[hiddenNumber - 1].wattage} w /{' '}
                    {inputDetails[hiddenNumber - 1].voltage} v /{' '}
                    {inputDetails[hiddenNumber - 1].length} l
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
    margin-bottom: 0.2rem;

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

const ItemCurrent = styled.li`
  ${flexboxCenter}

  width: 90px;
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

  width: 264px;
  height: 20px;
  ${ItemBackground}
  ${(p) =>
    p.isEnable ||
    css`
      ${ItemBackgroundDisable}
    `};
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

  /* color: ${(p) => p.isEnable || `#808080;`}; */
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
  width: 285px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RadioButtonWrapper = styled.button`
  width: 16px;
  height: 16px;

  border: 1px solid #95ff45;
  opacity: 1;
  border-radius: 50%;
  ${flexboxCenter}
`;
const RadioButton = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${(p) => (p.isChecked ? '#95ff45' : 'none')};
  border-radius: 50%;
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
