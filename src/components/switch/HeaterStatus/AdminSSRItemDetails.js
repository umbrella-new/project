import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styled, { css } from 'styled-components';

import { handleSSRDetails } from '../../../store/slices/heaterStatusSlice';
import { selectSettingsOfEss } from '../../../store/slices/settingsOfEssSlice';
import { selectDescription } from '../../../store/slices/ssrDescriptionSlice';
import { selectUnitsState } from '../../../store/slices/unitsSlice';
import {
  flexboxCenter,
  ItemBackground,
  ItemBackgroundDisable,
} from '../../../styles/commonStyles';

import InputKeyboard from '../../keyboard/InputKeyboard';
import InputKeyPad from '../../keyboard/InputKeyPad';
import PartNumberSuggestion from './PartNumberSuggestion';
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
  const { specsStr, descriptionOptions, partNumberSuggestions } =
    descriptionState;
  const { specs } = data;
  // const initialInputState =
  //   specs.length === 1
  //     ? [
  //         data.specs[0],
  //         {
  //           partNumber: '',
  //           current: '',
  //           wattage: '',
  //           voltage: '',
  //           lengths: '',
  //         },
  //         {
  //           partNumber: '',
  //           current: '',
  //           wattage: '',
  //           voltage: '',
  //           lengths: '',
  //         },
  //       ]
  //     : specs.length === 2
  //     ? [
  //         data.specs[0],
  //         data.specs[1],
  //         {
  //           partNumber: '',
  //           current: '',
  //           wattage: '',
  //           voltage: '',
  //           lengths: '',
  //         },
  //       ]
  //     : data.specs;

  const initialInputState = [
    {
      partNumber: '',
      current: '',
      wattage: '',
      voltage: '',
      lengths: '',
      currentCurrent: 0,
    },
    {
      partNumber: '',
      current: '',
      wattage: '',
      voltage: '',
      lengths: '',
      currentCurrent: 0,
    },
    {
      partNumber: '',
      current: '',
      wattage: '',
      voltage: '',
      lengths: '',
      currentCurrent: 0,
    },
  ];

  const initialInputId = [null, null];
  const initialKeypadState = false;

  const [inputDetails, setInputDetails] = useState(initialInputState);
  const [activateKeypad, setActivateKeypad] = useState(initialKeypadState);
  const [activateKeyboard, setActivateKeyboard] = useState(initialKeypadState);
  const [hiddenNumber, setHiddenNumber] = useState(1);

  const [inputId, setInputId] = useState(initialInputId);
  const [description, setDescription] = useState(['', '', '']);

  // ******************* to deal with input value conditionally *********************
  const [isEditable, setIsEditable] = useState(true);
  // ******************* to deal with input value conditionally *********************

  const dispatch = useDispatch();

  const unitsState = useSelector(selectSettingsOfEss);
  const { unitsMeasurement } = unitsState.buttonsOfSettings;

  useEffect(() => {
    if (
      inputDetails[0].partNumber !== '' &&
      inputDetails[0].voltage > 0 &&
      inputDetails[0].lengths > 0
    ) {
      // 1. Make the specs as a string
      const specsString = !unitsMeasurement
        ? `${inputDetails[0].partNumber}-${inputDetails[0].current}/${inputDetails[0].wattage}/${inputDetails[0].voltage}/${inputDetails[0].lengths}`
        : `${inputDetails[0].partNumber}-${inputDetails[0].current}/${
            inputDetails[0].wattage
          }/${inputDetails[0].voltage}/${(
            Number(inputDetails[0].lengths) / 3.28084
          ).toFixed(1)}`;
      // 2. Find Index using indexOF

      const descriptionIndex = specsStr.indexOf(specsString);
      // 3. Set description state
      const copyArr =
        descriptionIndex === -1
          ? ['', '', '']
          : [descriptionOptions[descriptionIndex], '', ''];
      setDescription(copyArr);
    }
  }, [
    inputDetails[0].partNumber,
    inputDetails[0].current,
    inputDetails[0].wattage,
    inputDetails[0].voltage,
    inputDetails[0].lengths,
  ]);

  useEffect(() => {
    if (
      inputDetails[1].partNumber !== '' &&
      inputDetails[1].current > 0 &&
      inputDetails[1].wattage > 0 &&
      inputDetails[1].voltage > 0 &&
      inputDetails[1].lengths > 0
    ) {
      console.log('index 0');
      // 1. Make the specs as a string
      const specsString = !unitsMeasurement
        ? `${inputDetails[1].partNumber}-${inputDetails[1].current}/${inputDetails[1].wattage}/${inputDetails[1].voltage}/${inputDetails[1].lengths}`
        : `${inputDetails[1].partNumber}-${inputDetails[1].current}/${
            inputDetails[1].wattage
          }/${inputDetails[1].voltage}/${(
            Number(inputDetails[1].lengths) / 3.28084
          ).toFixed(1)}`;
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
    inputDetails[1].partNumber,
    inputDetails[1].current,
    inputDetails[1].wattage,
    inputDetails[1].voltage,
    inputDetails[1].lengths,
  ]);

  useEffect(() => {
    if (
      inputDetails[2].partNumber !== '' &&
      inputDetails[2].current > 0 &&
      inputDetails[2].wattage > 0 &&
      inputDetails[2].voltage > 0 &&
      inputDetails[2].lengths > 0
    ) {
      // 1. Make the specs as a string
      const specsString = !unitsMeasurement
        ? `${inputDetails[2].partNumber}-${inputDetails[2].current}/${inputDetails[2].wattage}/${inputDetails[2].voltage}/${inputDetails[2].lengths}`
        : `${inputDetails[2].partNumber}-${inputDetails[2].current}/${
            inputDetails[2].wattage
          }/${inputDetails[2].voltage}/${(
            Number(inputDetails[2].lengths) / 3.28084
          ).toFixed(1)}`;
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
    inputDetails[2].partNumber,
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
            {
              partNumber: '',
              current: '',
              wattage: '',
              voltage: '',
              lengths: '',
              currentCurrent: '0',
            },
          ]);
          setDescription([description[0], description[1]]);
          break;
        }
        case 2: {
          setHiddenNumber(1);
          setInputDetails([
            inputDetails[0],
            {
              partNumber: '',
              current: '',
              wattage: '',
              voltage: '',
              lengths: '',
              currentCurrent: '0',
            },
            {
              partNumber: '',
              current: '',
              wattage: '',
              voltage: '',
              lengths: '',
              currentCurrent: '0',
            },
          ]);
          setDescription([description[0]]);
          break;
        }
        case 1: {
          setHiddenNumber(1);
          // Reset input state
          setInputDetails([
            {
              partNumber: '',
              current: '',
              wattage: '',
              voltage: '',
              lengths: '',
              currentCurrent: '0',
            },
            {
              partNumber: '',
              current: '',
              wattage: '',
              voltage: '',
              lengths: '',
              currentCurrent: '0',
            },
            {
              partNumber: '',
              current: '',
              wattage: '',
              voltage: '',
              lengths: '',
              currentCurrent: '0',
            },
          ]);
          setDescription([]);
          break;
        }
        default: {
          return;
        }
      }
    } else if (name === 'apply') {
      // name === 'apply' do Dispatch
      if (unitsMeasurement) {
        if (inputDetails[0].current > 0) {
          switch (hiddenNumber) {
            case 1: {
              dispatch(
                handleSSRDetails({
                  data: [
                    {
                      partNumber: inputDetails[0].partNumber,
                      current: inputDetails[0].current,
                      wattage: inputDetails[0].wattage,
                      voltage: inputDetails[0].voltage,
                      lengths: (
                        Number(inputDetails[0].lengths) / 3.28084
                      ).toFixed(1),
                      currentCurrent: inputDetails[0].currentCurrent,
                    },
                  ],
                  id: `ssr${id}`,
                })
              );
              break;
            }
            case 2: {
              dispatch(
                handleSSRDetails({
                  data: [
                    {
                      partNumber: inputDetails[0].partNumber,
                      current: inputDetails[0].current,
                      wattage: inputDetails[0].wattage,
                      voltage: inputDetails[0].voltage,
                      lengths: (
                        Number(inputDetails[0].lengths) / 3.28084
                      ).toFixed(1),
                      currentCurrent: inputDetails[0].currentCurrent,
                    },
                    {
                      partNumber: inputDetails[1].partNumber,
                      current: inputDetails[1].current,
                      wattage: inputDetails[1].wattage,
                      voltage: inputDetails[1].voltage,
                      lengths: (
                        Number(inputDetails[1].lengths) / 3.28084
                      ).toFixed(1),
                      currentCurrent: inputDetails[1].currentCurrent,
                    },
                  ],
                  id: `ssr${id}`,
                })
              );
              break;
            }
            default: {
              dispatch(
                handleSSRDetails({
                  data: [
                    {
                      partNumber: inputDetails[0].partNumber,
                      current: inputDetails[0].current,
                      wattage: inputDetails[0].wattage,
                      voltage: inputDetails[0].voltage,
                      lengths: (
                        Number(inputDetails[0].lengths) / 3.28084
                      ).toFixed(1),
                      currentCurrent: inputDetails[0].currentCurrent,
                    },
                    {
                      partNumber: inputDetails[1].partNumber,
                      current: inputDetails[1].current,
                      wattage: inputDetails[1].wattage,
                      voltage: inputDetails[1].voltage,
                      lengths: (
                        Number(inputDetails[1].lengths) / 3.28084
                      ).toFixed(1),
                      currentCurrent: inputDetails[1].currentCurrent,
                    },
                    {
                      partNumber: inputDetails[2].partNumber,
                      current: inputDetails[2].current,
                      wattage: inputDetails[2].wattage,
                      voltage: inputDetails[2].voltage,
                      lengths: (
                        Number(inputDetails[2].lengths) / 3.28084
                      ).toFixed(1),
                      currentCurrent: inputDetails[2].currentCurrent,
                    },
                  ],
                  id: `ssr${id}`,
                })
              );
            }
          }
        }
      } else {
        if (inputDetails[0].current > 0) {
          switch (hiddenNumber) {
            case 1: {
              dispatch(
                handleSSRDetails({
                  data: [inputDetails[0]],
                  id: `ssr${id}`,
                })
              );
              break;
            }
            case 2: {
              dispatch(
                handleSSRDetails({
                  data: [inputDetails[0], inputDetails[1]],
                  id: `ssr${id}`,
                })
              );
              break;
            }
            default: {
              dispatch(
                handleSSRDetails({
                  data: inputDetails,
                  id: `ssr${id}`,
                })
              );
            }
          }
        }
      }
    } else {
      setIsEditable(true);
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
    // 1. Copy current inputDetails state
    const newInput = [...inputDetails];
    // 2. update new Input into requested index and name
    if (name === 'partNumber') {
      newInput[index][name] = input.toUpperCase();
      setInputDetails(newInput);
      setInputPartNumber(input.toUpperCase());
    } else {
      newInput[index][name] = input;
      setInputDetails(newInput);
    }
  };

  // For virtual keypad input
  const handleKeypadInput = (index, name, input) => {
    // 1. Copy current inputDetails state
    const newInput = [...inputDetails];
    // 2. update new Input into requested index and name
    if (name === 'partNumber') {
      newInput[index][name] = input.toUpperCase();
      setInputPartNumber(input.toUpperCase());
      // 3. Set state
      setInputDetails(newInput);
    } else {
      newInput[index][name] = input;
      // 3. Set state
      setInputDetails(newInput);
    }
  };

  // ********************************auto complete*****************************
  const [selectedSuggestionIdx, setSelectedSuggestionIdx] = useState(0);
  const [inputPartNumber, setInputPartNumber] = useState('');

  let filteredSuggestions = partNumberSuggestions.filter((suggestion) =>
    suggestion.includes(inputPartNumber)
  );

  let displaySuggestions =
    filteredSuggestions.length >= 1 && inputPartNumber.length >= 2;

  const handleSelect = (suggestion) => {
    const newInput = [...inputDetails];
    // newInput[index].partNumber = suggestion;
    setInputDetails(newInput);
  };

  const handleKeyDown = (event) => {
    switch (event.key) {
      case 'Escape': {
        setInputPartNumber('');
        break;
      }
      case 'Enter': {
        handleSelect(filteredSuggestions[selectedSuggestionIdx]);
        setInputPartNumber('');
        setSelectedSuggestionIdx(-1);
        break;
      }
      case 'ArrowUp': {
        selectedSuggestionIdx <= -1
          ? setSelectedSuggestionIdx(-1)
          : setSelectedSuggestionIdx(selectedSuggestionIdx - 1);
        break;
      }
      case 'ArrowDown': {
        selectedSuggestionIdx >= filteredSuggestions.length
          ? setSelectedSuggestionIdx(filteredSuggestions.length - 1)
          : setSelectedSuggestionIdx(selectedSuggestionIdx + 1);
        break;
      }
      default: {
        break;
      }
    }
  };

  // ********************************auto complete*****************************
  // console.log('input partNumber', inputPartNumber);
  // console.log('suggestions', filteredSuggestions);
  // console.log('is ready to render', displaySuggestions);

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
                  placeholder='Input P / N'
                  onClick={() => {
                    isEditable && handleActivateKeypad(index, 'partNumber');
                    // isEditable && handleSetInput(index, 'partNumber', '');
                  }}
                  onChange={(event) => {
                    handleSetInput(index, 'partNumber', event.target.value);
                    setSelectedSuggestionIdx(-1);
                  }}
                  onKeyDown={handleKeyDown}
                  value={element.partNumber}
                />
              </ItemPartNumber>
              {displaySuggestions && (
                <AutoCompleteWrapper
                  column={index}
                  onMouseMove={() => setSelectedSuggestionIdx(-1)}
                >
                  {filteredSuggestions.map((suggestion, index) => {
                    let isSelected =
                      filteredSuggestions.indexOf(suggestion) ===
                      selectedSuggestionIdx
                        ? true
                        : false;

                    return (
                      <PartNumberSuggestion
                        key={index}
                        matchedSuggestion={suggestion}
                        isSelected={isSelected}
                        handleSelect={handleSelect}
                      />
                    );
                  })}
                </AutoCompleteWrapper>
              )}

              <ItemCurrent isEnable={isEnable}>
                <ItemDataInput
                  type='text'
                  isEnable={isEnable}
                  placeholder='Input Current'
                  onClick={() =>
                    isEditable && handleActivateKeypad(index, 'current')
                  }
                  onChange={(event) =>
                    handleSetInput(index, 'current', event.target.value)
                  }
                  value={element.current}
                />
              </ItemCurrent>

              <ItemWattage isEnable={isEnable}>
                <ItemDataInput
                  type='text'
                  isEnable={isEnable}
                  placeholder='Input Wattage'
                  onClick={() =>
                    isEditable && handleActivateKeypad(index, 'wattage')
                  }
                  onChange={(event) =>
                    handleSetInput(index, 'wattage', event.target.value)
                  }
                  value={element.wattage}
                />
              </ItemWattage>

              <ItemVoltage isEnable={isEnable}>
                <ItemDataInput
                  type='text'
                  isEnable={isEnable}
                  placeholder='input voltage'
                  onClick={() =>
                    isEditable && handleActivateKeypad(index, 'voltage')
                  }
                  onChange={(event) =>
                    isEnable &&
                    handleSetInput(index, 'voltage', event.target.value)
                  }
                  value={element.voltage}
                />
              </ItemVoltage>

              <ItemLength isEnable={isEnable}>
                <ItemDataInput
                  type='text'
                  isEnable={isEnable}
                  placeholder='input length'
                  onClick={() =>
                    isEditable && handleActivateKeypad(index, 'lengths')
                  }
                  onChange={() => isEnable && handleSetInput(index, 'lengths')}
                  value={element.lengths}
                />
              </ItemLength>

              <DescriptionAndButtonWrapper>
                <ItemDescription isEnable={isEnable}>
                  <ItemDataDescription isDescription={true} isEnable={isEnable}>
                    {description[index]
                      ? description[index]
                      : 'element not found'}
                    {description[index] &&
                      ` / ${inputDetails[index].current} a / ${inputDetails[index].wattage} w / ${inputDetails[index].voltage} v / ${inputDetails[index].lengths}`}
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

      <SSRDetailButtonContainer
        handleClick={handleClick}
        isEditable={isEditable}
      />
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
  font-size: 8px;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 0.2px;
  padding-left: 0.05rem;
  width: 90px;
  vertical-align: middle;

  background-color: transparent;
  &::placeholder {
    color: #fff;
    text-align: center;
    letter-spacing: 1px;
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
          right: 0rem;
        `
      : p.positionTop === 2
      ? css`
          top: 4.5rem;
          right: 0rem;
        `
      : css`
          top: 5.7rem;
          right: 0rem;
        `}
`;

const AutoCompleteWrapper = styled.ul`
  width: 100px;
  padding: 0.2rem;
  text-align: left;

  position: absolute;
  top: 2.7rem;
  left: -0.2rem;
  z-index: 100;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 1px solid rgb(223, 225, 229);
  box-shadow: 0 4px 6px rgb(23 33 36 / 28%);
`;
