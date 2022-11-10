import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleSSRDetails } from "../../../store/slices/heaterStatusSlice";
import { selectSettingsOfEss } from "../../../store/slices/settingsOfEssSlice";
import { selectDescription } from "../../../store/slices/ssrDescriptionSlice";
import { setAdminAccess } from "../../../store/slices/userSlice";

import styled, { css } from "styled-components";
import {
  flexboxCenter,
  ItemBackground,
  ItemBackgroundDisable,
} from "../../../styles/commonStyles";

import InputKeyboard from "../../keyboard/InputKeyboard";

import SettingConfirmedMessage from "../../userMessages/SettingConfirmedMessage";
import PartNumberSuggestion from "./PartNumberSuggestion";
import SettingButton from "./SettingButton";
import SSRDetailButtonContainer from "./SSRDetailButtonContainer";

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
  const {
    specsStr,
    descriptionOptions,
    partNumberSuggestions,
    elementsOptions,
  } = descriptionState;
  const { specs } = data;

  const initialInputState = [
    {
      partNumber: "",
    },
    {
      partNumber: "",
    },
    {
      partNumber: "",
    },
  ];

  const initialInputId = [null, null];
  const initialKeypadState = false;

  const [inputDetails, setInputDetails] = useState(initialInputState);
  const [activateKeyboard, setActivateKeyboard] = useState(initialKeypadState);
  const [hiddenNumber, setHiddenNumber] = useState(1);

  const [inputId, setInputId] = useState(initialInputId);
  const [description, setDescription] = useState(["", "", ""]);

  // ******************* to deal with input value conditionally *********************
  const [isEditable, setIsEditable] = useState(true);
  // ******************* to deal with input value conditionally *********************

  const [activateMessageBox, setActivateMessageBox] = useState(false);
  const [message, setMessage] = useState(null);
  const dispatch = useDispatch();

  const unitsState = useSelector(selectSettingsOfEss);
  const { unitsMeasurement } = unitsState.buttonsOfSettings;

  useEffect(() => {
    if (inputDetails[0].partNumber !== "") {
      // 1. find index with partNumber in ssr

      // 1. Make the specs as a string
      const specsString = !unitsMeasurement
        ? `${inputDetails[0].partNumber}-${inputDetails[0].current}/${
            inputDetails[0].wattage
          }/${inputDetails[0].voltage}/${Math.round(
            Number(inputDetails[0].lengths) * 3.28084
          )}`
        : `${inputDetails[0].partNumber}-${inputDetails[0].current}/${inputDetails[0].wattage}/${inputDetails[0].voltage}/${inputDetails[0].lengths}`;
      // 2. Find Index using indexOF
      console.log(specsString);
      const descriptionIndex = specsStr.indexOf(specsString);
      // 3. Set description state
      const copyArr =
        descriptionIndex === -1
          ? ["", "", ""]
          : [descriptionOptions[descriptionIndex], "", ""];
      setDescription(copyArr);
    } else {
      console.log(typeof inputDetails[0].lengths, inputDetails[0].lengths);
      setDescription(["", "", ""]);
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
      inputDetails[1].partNumber !== "" &&
      inputDetails[1].current > 0 &&
      inputDetails[1].wattage > 0 &&
      inputDetails[1].voltage > 0 &&
      inputDetails[1].lengths > 0
    ) {
      console.log("index 0");
      // 1. Make the specs as a string
      const specsString = !unitsMeasurement
        ? `${inputDetails[1].partNumber}-${inputDetails[1].current}/${
            inputDetails[1].wattage
          }/${inputDetails[1].voltage}/${Math.round(
            Number(inputDetails[1].lengths) * 3.28084
          )}`
        : `${inputDetails[1].partNumber}-${inputDetails[1].current}/${inputDetails[1].wattage}/${inputDetails[1].voltage}/${inputDetails[1].lengths}`;
      // 2. Find Index using indexOF
      const descriptionIndex = specsStr.indexOf(specsString);
      console.log(specsString);
      // 3. Set description state
      const copyArr = [
        description[0],
        descriptionOptions[descriptionIndex],
        "",
      ];
      setDescription(copyArr);
    } else {
      setDescription([description[0], "", ""]);
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
      inputDetails[2].partNumber !== "" &&
      inputDetails[2].current > 0 &&
      inputDetails[2].wattage > 0 &&
      inputDetails[2].voltage > 0 &&
      inputDetails[2].lengths > 0
    ) {
      // 1. Make the specs as a string
      const specsString = !unitsMeasurement
        ? `${inputDetails[2].partNumber}-${inputDetails[2].current}/${
            inputDetails[2].wattage
          }/${inputDetails[2].voltage}/${Math.round(
            Number(inputDetails[2].lengths) * 3.28084
          )}`
        : `${inputDetails[2].partNumber}-${inputDetails[2].current}/${inputDetails[2].wattage}/${inputDetails[2].voltage}/${inputDetails[2].lengths}`;
      // 2. Find Index using indexOF
      const descriptionIndex = specsStr.indexOf(specsString);
      // 3. Set description state
      const copyArr = [
        description[0],
        description[1],
        descriptionOptions[descriptionIndex],
      ];

      setDescription(copyArr);
    } else {
      setDescription([description[0], description[1], ""]);
    }
  }, [
    inputDetails[2].partNumber,
    inputDetails[2].current,
    inputDetails[2].wattage,
    inputDetails[2].voltage,
    inputDetails[2].lengths,
  ]);

  const handleClick = (name) => {
    if (name === "add") {
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
    } else if (name === "clear") {
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
              partNumber: "",
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
              partNumber: "",
            },
            {
              partNumber: "",
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
              partNumber: "",
            },
            {
              partNumber: "",
            },
            {
              partNumber: "",
            },
          ]);
          setDescription([]);
          break;
        }
        default: {
          return;
        }
      }
    } else if (name === "apply") {
      // name === 'apply' do Dispatch
      if (!unitsMeasurement) {
        if (inputDetails[0].current > 0) {
          switch (hiddenNumber) {
            case 1: {
              if (description[0].length > 5) {
                console.log("case 1", description[0].length);
                dispatch(
                  handleSSRDetails({
                    data: [
                      {
                        partNumber: inputDetails[0].partNumber,
                        current: inputDetails[0].current,
                        wattage: inputDetails[0].wattage,
                        voltage: inputDetails[0].voltage,
                        lengths: Math.round(
                          Number(inputDetails[0].lengths) * 3.28084
                        ),
                        currentCurrent: inputDetails[0].currentCurrent,
                      },
                    ],
                    id: `ssr${id}`,
                  })
                );
                setMessage(null);
                setActivateMessageBox(true);
              } else {
                setMessage(
                  "element not found! please check again the input specifications"
                );
                setActivateMessageBox(true);
              }

              break;
            }
            case 2: {
              if (description[1].length > 5) {
                console.log("case 2");
                dispatch(
                  handleSSRDetails({
                    data: [
                      {
                        partNumber: inputDetails[0].partNumber,
                        current: inputDetails[0].current,
                        wattage: inputDetails[0].wattage,
                        voltage: inputDetails[0].voltage,
                        lengths: Math.round(
                          Number(inputDetails[0].lengths) * 3.28084
                        ),
                        currentCurrent: inputDetails[0].currentCurrent,
                      },
                      {
                        partNumber: inputDetails[1].partNumber,
                        current: inputDetails[1].current,
                        wattage: inputDetails[1].wattage,
                        voltage: inputDetails[1].voltage,
                        lengths: Math.round(
                          Number(inputDetails[1].lengths) * 3.28084
                        ),
                        currentCurrent: inputDetails[1].currentCurrent,
                      },
                    ],
                    id: `ssr${id}`,
                  })
                );
                setMessage(null);
                setActivateMessageBox(true);
              } else {
                setMessage(
                  "element not found! please check again the input specifications"
                );
                setActivateMessageBox(true);
              }

              break;
            }
            default: {
              if (description[2].length > 5) {
                console.log("case 3");
                dispatch(
                  handleSSRDetails({
                    data: [
                      {
                        partNumber: inputDetails[0].partNumber,
                        current: inputDetails[0].current,
                        wattage: inputDetails[0].wattage,
                        voltage: inputDetails[0].voltage,
                        lengths: Math.round(
                          Number(inputDetails[0].lengths) * 3.28084
                        ),
                        currentCurrent: inputDetails[0].currentCurrent,
                      },
                      {
                        partNumber: inputDetails[1].partNumber,
                        current: inputDetails[1].current,
                        wattage: inputDetails[1].wattage,
                        voltage: inputDetails[1].voltage,
                        lengths: Math.round(
                          Number(inputDetails[1].lengths) * 3.28084
                        ),
                        currentCurrent: inputDetails[1].currentCurrent,
                      },
                      {
                        partNumber: inputDetails[2].partNumber,
                        current: inputDetails[2].current,
                        wattage: inputDetails[2].wattage,
                        voltage: inputDetails[2].voltage,
                        lengths: Math.round(
                          Number(inputDetails[2].lengths) * 3.28084
                        ),
                        currentCurrent: inputDetails[2].currentCurrent,
                      },
                    ],
                    id: `ssr${id}`,
                  })
                );
                setMessage(null);
                setActivateMessageBox(true);
              } else {
                setMessage(
                  "element not found! please check again the input specifications"
                );
                setActivateMessageBox(true);
              }
              break;
            }
          }
        }
      } else {
        if (inputDetails[0].current > 0) {
          switch (hiddenNumber) {
            case 1: {
              if (description[0].length > 5) {
                dispatch(
                  handleSSRDetails({
                    data: [inputDetails[0]],
                    id: `ssr${id}`,
                  })
                );
              } else {
                setMessage(
                  "element not found! please check again the input specifications"
                );
                setActivateMessageBox(true);
              }
              setMessage(null);
              setActivateMessageBox(true);
              break;
            }
            case 2: {
              if (description[0].length > 5) {
                dispatch(
                  handleSSRDetails({
                    data: [inputDetails[0], inputDetails[1]],
                    id: `ssr${id}`,
                  })
                );
                setMessage(null);
                setActivateMessageBox(true);
              } else {
                setMessage(
                  "element not found! please check again the input specifications"
                );
                setActivateMessageBox(true);
              }

              break;
            }
            default: {
              if (description[0].length > 5) {
                dispatch(
                  handleSSRDetails({
                    data: inputDetails,
                    id: `ssr${id}`,
                  })
                );
                setMessage(null);
                setActivateMessageBox(true);
              } else {
                setMessage(
                  "element not found! please check again the input specifications"
                );
                setActivateMessageBox(true);
              }

              break;
            }
          }
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
  const [inputPartNumber, setInputPartNumber] = useState("");
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

  useEffect(() => {}, [displaySuggestions]);

  const handleKeyDown = (event, index) => {
    switch (event.key) {
      case "Escape": {
        setInputPartNumber("");
        break;
      }
      case "Enter": {
        handleSelect(index, filteredSuggestions[selectedSuggestionIdx]);
        setInputPartNumber("");
        setSelectedSuggestionIdx(-1);
        setDisplaySuggestions(false);
        break;
      }
      case "ArrowUp": {
        selectedSuggestionIdx <= -1
          ? setSelectedSuggestionIdx(-1)
          : setSelectedSuggestionIdx(selectedSuggestionIdx - 1);
        break;
      }
      case "ArrowDown": {
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
              <ItemPartNumber isEnable={isEnable}>
                <ItemPartNumberInput
                  type='text'
                  isEnable={isEnable}
                  placeholder='Input P / N'
                  onClick={() => {
                    isEnable && handleActivateKeypad(index);
                    isEditable && handleSetInput(index, "");
                  }}
                  onChange={(event) => {
                    if (isEditable) {
                      handleSetInput(index, event.target.value);
                      setSelectedSuggestionIdx(-1);
                    }
                  }}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  value={element.partNumber}
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
                            setInputPartNumber("");
                          }}
                        />
                      );
                    })}
                  </AutoCompleteInnerWrapper>
                </AutoCompleteWrapper>
              )}

              <ItemOuterWrapper isEnable={isEnable}>
                <ItemData>----</ItemData>
              </ItemOuterWrapper>

              <ItemOuterWrapper isEnable={isEnable}>
                <ItemData>----</ItemData>
              </ItemOuterWrapper>

              <ItemOuterWrapper isEnable={isEnable}>
                <ItemData>----</ItemData>
              </ItemOuterWrapper>

              <ItemOuterWrapper isEnable={isEnable}>
                <ItemData>----</ItemData>
              </ItemOuterWrapper>

              <DescriptionAndButtonWrapper>
                <ItemDescription isEnable={isEnable}>
                  <ItemDataDescription isDescription={true} isEnable={isEnable}>
                    {description[index]
                      ? description[index]
                      : "element not found"}
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
          message={message ? message : "selections confirmed"}
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

  border: ${(p) => (p.isFault ? "1px solid red" : "")};
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
  font-size: 8px;
  text-align: center;

  width: 90px;
  letter-spacing: -px;

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
  font-size: 8px;
  text-align: center;

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
