import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleSSRDetails } from '../../../store/slices/heaterStatusSlice';
import { selectSettingsOfEss } from '../../../store/slices/settingsOfEssSlice';
import { selectDescription } from '../../../store/slices/ssrDescriptionSlice';
import { setAdminAccess } from '../../../store/slices/userSlice';

import styled, { css } from 'styled-components';
import {
  flexboxCenter,
  ItemBackground,
  ItemBackgroundDisable,
} from '../../../styles/commonStyles';

import InputKeyboard from '../../keyboard/InputKeyboard';

import SettingConfirmedMessage from '../../userMessages/SettingConfirmedMessage';
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
  const { partNumberSuggestions, elementsOptions } = descriptionState;
  const { specs } = data;

  const initialInputState = [
    {
      partNumber: '',
    },
    {
      partNumber: '',
    },
    {
      partNumber: '',
    },
  ];

  const initialInputId = [null, null];
  const initialKeypadState = false;

  const [inputDetails, setInputDetails] = useState(initialInputState);
  const [elementSpec, setElementSpec] = useState([{}, {}, {}]);
  const [activateKeyboard, setActivateKeyboard] = useState(initialKeypadState);
  const [hiddenNumber, setHiddenNumber] = useState(1);

  const [inputId, setInputId] = useState(initialInputId);
  const [description, setDescription] = useState(['', '', '']);

  // ******************* to deal with input value conditionally *********************
  const [isEditable, setIsEditable] = useState(true);
  // ******************* to deal with input value conditionally *********************

  const [activateMessageBox, setActivateMessageBox] = useState(false);
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const unitsState = useSelector(selectSettingsOfEss);
  const { unitsMeasurement } = unitsState.buttonsOfSettings;

  useEffect(() => {
    if (inputDetails[0].partNumber !== '') {
      // 1. find index with partNumber in ssr
      const elementIdx = partNumberSuggestions.indexOf(
        inputDetails[0].partNumber
      );
      if (elementIdx >= 0) {
        // 2. Save element specs with idx from elementsOptions
        setElementSpec([elementsOptions[elementIdx], {}, {}]);
      } else {
        setElementSpec([{}, {}, {}]);
      }
    } else {
      setElementSpec([{}, {}, {}]);
    }
  }, [inputDetails[0].partNumber]);

  useEffect(() => {
    if (inputDetails[1].partNumber !== '') {
      // 1. find index with partNumber in ssr
      const elementIdx = partNumberSuggestions.indexOf(
        inputDetails[1].partNumber
      );

      if (elementIdx >= 0) {
        // 2. Save element specs with idx from elementsOptions
        setElementSpec([elementSpec[0], elementsOptions[elementIdx], {}]);
      }
    }
  }, [inputDetails[1].partNumber]);

  useEffect(() => {
    if (inputDetails[2].partNumber !== '') {
      // 1. find index with partNumber in ssr
      const elementIdx = partNumberSuggestions.indexOf(
        inputDetails[2].partNumber
      );

      if (elementIdx >= 0) {
        // 2. Save element specs with idx from elementsOptions
        setElementSpec([
          elementSpec[0],
          elementSpec[1],
          elementsOptions[elementIdx],
        ]);
      }
    }
  }, [inputDetails[2].partNumber]);

  // add, clear, apply button handler
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
          setElementSpec([elementSpec[0], elementSpec[1], {}]);
          setInputDetails([
            inputDetails[0],
            inputDetails[1],
            {
              partNumber: '',
            },
          ]);

          break;
        }
        case 2: {
          setHiddenNumber(1);
          setElementSpec([elementSpec[0], {}, {}]);
          setInputDetails([
            inputDetails[0],
            {
              partNumber: '',
            },
            {
              partNumber: '',
            },
          ]);
          setDescription([description[0]]);
          break;
        }
        case 1: {
          setHiddenNumber(1);
          // Reset input state
          setInputDetails(initialInputState);
          setElementSpec([{}, {}, {}]);
          break;
        }
        default: {
          return;
        }
      }
    } else if (name === 'apply') {
      // name === 'apply' do Dispatch
      switch (hiddenNumber) {
        case 1: {
          if (elementSpec[0].current) {
            dispatch(
              handleSSRDetails({
                data: [elementSpec[0]],
                id: `ssr${id}`,
                unit: unitsMeasurement,
              })
            );
          } else {
            setMessage(
              'element not found! please check again the input specifications'
            );
            setActivateMessageBox(true);
          }
          setMessage(null);
          setActivateMessageBox(true);
          break;
        }

        case 2: {
          if (elementSpec[1].current) {
            dispatch(
              handleSSRDetails({
                data: [elementSpec[0], elementSpec[1]],
                id: `ssr${id}`,
                unit: unitsMeasurement,
              })
            );
            setMessage(null);
            setActivateMessageBox(true);
          } else {
            setMessage(
              'element not found! please check again the input specifications'
            );
            setActivateMessageBox(true);
          }

          break;
        }

        default: {
          if (elementSpec[2].current) {
            dispatch(
              handleSSRDetails({
                data: elementSpec,
                id: `ssr${id}`,
                unit: unitsMeasurement,
              })
            );
            setMessage(null);
            setActivateMessageBox(true);
          } else {
            setMessage(
              'element not found! please check again the input specifications'
            );
            setActivateMessageBox(true);
          }
          break;
        }
      }
    }
  };

  // Activate keypad with input ID
  const handleActivateKeypad = (index) => {
    // 1. set index and name
    setInputId([index]);
    // 2. Activate Keyboard
    setActivateKeyboard(true);
  };

  // For keyboard input
  const handleSetInput = (index, input) => {
    // 1. Copy current inputDetails state
    const newInput = [...inputDetails];
    // 2. update new Input into requested index and name
    newInput[index].partNumber = input.toUpperCase();
    setInputDetails(newInput);
    setInputPartNumber(input.toUpperCase());
  };

  // ********************************auto complete*****************************
  const [selectedSuggestionIdx, setSelectedSuggestionIdx] = useState(0);
  const [inputPartNumber, setInputPartNumber] = useState('');
  const [displaySuggestions, setDisplaySuggestions] = useState(false);

  let filteredSuggestions = partNumberSuggestions.filter((suggestion) =>
    suggestion.includes(inputPartNumber)
  );

  useEffect(() => {
    filteredSuggestions.length >= 1 && inputPartNumber.length >= 2
      ? setDisplaySuggestions(true)
      : setDisplaySuggestions(false);
  }, [filteredSuggestions, inputPartNumber]);

  const handleSelect = (index, suggestion) => {
    const newInput = [...inputDetails];
    newInput[index].partNumber = suggestion;
    setInputDetails(newInput);
    setActivateKeyboard(false);
  };

  const handleKeyDown = (event, index) => {
    switch (event.key) {
      case 'Escape': {
        setInputPartNumber('');
        break;
      }
      case 'Enter': {
        handleSelect(index, filteredSuggestions[selectedSuggestionIdx]);
        setInputPartNumber('');
        setSelectedSuggestionIdx(-1);
        setDisplaySuggestions(false);
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

  return (
    <Wrapper>
      <ContentWrapper isEnable={isEnable} isFault={isFault}>
        {elementSpec.map((element, index) => (
          <>
            <ItemWrapper key={index} column={index} hiddenNumber={hiddenNumber}>
              <ItemPartNumber isEnable={isEnable}>
                <ItemPartNumberInput
                  type='text'
                  isEnable={isEnable}
                  placeholder='Input P / N'
                  onClick={() => {
                    handleActivateKeypad(index);
                  }}
                  onChange={(event) => {
                    handleSetInput(index, event.target.value);
                    setSelectedSuggestionIdx(-1);
                  }}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  value={inputDetails[index].partNumber}
                />
              </ItemPartNumber>
              {displaySuggestions && (
                <AutoCompleteWrapper
                  onMouseMove={() => setSelectedSuggestionIdx(-1)}
                >
                  <AutoCompleteInnerWrapper>
                    {filteredSuggestions.map((suggestion, idx) => {
                      let isSelected =
                        filteredSuggestions.indexOf(suggestion) ===
                        selectedSuggestionIdx
                          ? true
                          : false;

                      return (
                        <PartNumberSuggestion
                          key={idx}
                          column={index}
                          matchedSuggestion={suggestion}
                          isSelected={isSelected}
                          handleSelect={handleSelect}
                          handleClose={() => {
                            setDisplaySuggestions(false);
                            setInputPartNumber('');
                          }}
                        />
                      );
                    })}
                  </AutoCompleteInnerWrapper>
                </AutoCompleteWrapper>
              )}

              <ItemOuterWrapper isEnable={isEnable}>
                <ItemData>
                  {element.current ? element.current : '----'}
                </ItemData>
              </ItemOuterWrapper>

              <ItemOuterWrapper isEnable={isEnable}>
                <ItemData>
                  {element.wattage ? element.wattage : '----'}
                </ItemData>
              </ItemOuterWrapper>

              <ItemOuterWrapper isEnable={isEnable}>
                <ItemData>
                  {element.voltage ? element.voltage : '----'}
                </ItemData>
              </ItemOuterWrapper>

              <ItemOuterWrapper isEnable={isEnable}>
                <ItemData>
                  {element.lengths ? element.lengths : '----'}
                </ItemData>
              </ItemOuterWrapper>

              <DescriptionAndButtonWrapper>
                <ItemDescription isEnable={isEnable}>
                  <ItemDataDescription isDescription={true} isEnable={isEnable}>
                    {inputDetails[index].partNumber.length > 5
                      ? `${element.elementName} - ${element.partNumber} / ${element.current}a / ${element.wattage}w / ${element.voltage}v / ${element.lengths}m - ${element.lengths}ft`
                      : 'element not found'}
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

      {activateKeyboard && (
        <KeyboardWrapper positionTop={hiddenNumber}>
          <InputKeyboard
            closeKeyboard={() => setActivateKeyboard(false)}
            handleOnSubmit={handleSetInput}
            column={inputId[0]}
            name={inputId[1]}
          />
        </KeyboardWrapper>
      )}

      <SSRDetailButtonContainer
        handleClick={handleClick}
        isEditable={isEditable}
      />
      {activateMessageBox && (
        <SettingConfirmedMessage
          onClose={() => {
            setActivateMessageBox(false);
            if (!message) {
              setIsSettingOpen(false);
              dispatch(setAdminAccess(false));
            }
          }}
          title='ssr details settings'
          message={message ? message : 'selections confirmed'}
        />
      )}
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

  ${flexboxCenter}

   ${(p) =>
    p.isEnable ||
    css`
      ${ItemBackgroundDisable}
    `}
`;

const ItemOuterWrapper = styled.li`
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
  font-size: 7px;
  text-align: center;

  width: 90px;
  /* letter-spacing: px; */

  background-color: transparent;
  &::placeholder {
    color: #fff;
    color: ${(p) => p.isEnable || `#808080;`};
  }
`;

const ItemData = styled.div`
  font-size: 8px;
  text-align: center;
  width: 90px;

  background-color: transparent;
  &::placeholder {
    color: #fff;
    color: ${(p) => p.isEnable || `#808080;`};
  }
`;

const ItemDataDescription = styled.span`
  font-size: 6px;
  text-align: center;

  width: 90%;
  letter-spacing: -0.2px;

  /* ${(p) =>
    p.isDescription &&
    css`
      font-size: 6px;
    `} */
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

const KeyboardWrapper = styled.div`
  z-index: 100;

  position: absolute;
  ${(p) =>
    p.positionTop === 1
      ? css`
          top: 3rem;
          right: -0.2rem;
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
  left: 0rem;
  z-index: 100;
  display: flex;
  flex-direction: column;

  width: 100px;
  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 12px;
`;

const AutoCompleteInnerWrapper = styled.div`
  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 11px;
`;
