import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  changeSwitchName,
  selectSSRState,
} from '../../../store/slices/heaterStatusSlice';
import { flexboxCenter } from '../../../styles/commonStyles';
import InputKeyboard from '../../keyboard/InputKeyboard';
import SwitchNameButton from './SwitchNameButton';
import SwitchNameRadioBox from './SwitchNameRadioBox';
import { switchNameSelect } from '../../../store/slices/constantData';

const SwitchNameSelector = ({ id }) => {
  // id is the column number to identify the column e.g 1 === first column
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false);
  const [checked, setChecked] = useState(null);
  const [activateKeyboard, setActivateKeyboard] = useState(false);
  const [switchNameInput, setSwitchNameInput] = useState('');

  // Handler to change Checked state
  const handleChecker = (elem) => {
    setChecked(elem);
  };

  // Display select box
  const displaySelectOptions = () => {
    setIsClicked(!isClicked);
  };

  // Select box button handler
  const handleSelectOptionClick = (name) => {
    if (name === 'clear') {
      setChecked(null);
    } else {
      setIsClicked(!isClicked);
    }
  };

  // Onchange handler for later
  const handleInputOnChange = () => {};

  // Switch name input handler
  const handleKeyboardInput = () => {
    setActivateKeyboard(false);
  };
  const handleInput = () => {
    // Activate Keyboard
    setActivateKeyboard(true);
    // Clear Input
    setSwitchNameInput('');
  };

  // Apply Button handler(dispatch)
  const handleDispatchSwitchName = () => {
    if (switchNameInput.length !== 0) {
      // dispatch with switchInputName and checked states WITH ID
      const name = `${switchNameInput} ${checked}`;
      dispatch(changeSwitchName({ id: `ssr${id}`, name }));
    } else {
      return;
    }
  };

  return (
    <Wrapper>
      <TitleOuterHole>
        <TitleTop>switch nomenclature</TitleTop>
      </TitleOuterHole>

      <ContentsWrapper>
        <InputSwitchName
          type='text'
          placeholder='switch name'
          onClick={handleInput}
          value={switchNameInput}
          onChange={handleInputOnChange}
        />

        <SelectBoxWrapperHole isClicked={isClicked}>
          <SelectBoxInnerWrapper isClicked={isClicked}>
            <SelectedTitleAndArrowWrapper isClicked={isClicked}>
              <SelectedTitle>
                <Title>{checked ? checked : 's.t size'}</Title>
              </SelectedTitle>

              <ArrowWrapper onClick={displaySelectOptions}>
                <Arrow src='/images/switch-name-select-button.svg' />
              </ArrowWrapper>
            </SelectedTitleAndArrowWrapper>

            {isClicked && (
              <>
                <SelectWrapper>
                  {switchNameSelect.map((option, index) => (
                    <SwitchNameRadioBox
                      data={option}
                      checked={checked}
                      handleClick={handleChecker}
                      key={index}
                    />
                  ))}
                </SelectWrapper>
                <SwitchNameButton
                  name='clear'
                  handleClick={handleSelectOptionClick}
                />
                <SwitchNameButton
                  name='apply'
                  handleClick={handleSelectOptionClick}
                />
              </>
            )}
          </SelectBoxInnerWrapper>
        </SelectBoxWrapperHole>
        <ButtonOuterHole onClick={handleDispatchSwitchName}>
          <ButtonOuter>
            <ButtonHole>
              <ButtonTop>apply</ButtonTop>
            </ButtonHole>
          </ButtonOuter>
        </ButtonOuterHole>
      </ContentsWrapper>
      {activateKeyboard && (
        <KeyboardWrapper>
          <InputKeyboard
            input={switchNameInput}
            setInput={setSwitchNameInput}
            handleSubmit={handleKeyboardInput}
          />
        </KeyboardWrapper>
      )}
    </Wrapper>
  );
};

export default SwitchNameSelector;

const Wrapper = styled.div`
  width: 187px;
  height: 44px;
  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 10px;
  opacity: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.08rem 0;
  position: relative;
`;
const TitleOuterHole = styled.div`
  width: 183px;
  height: 18px;
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 9px;
  opacity: 1;

  ${flexboxCenter}
`;
const TitleTop = styled.div`
  width: 179px;
  height: 14px;
  border: 1px solid #142033;
  border-radius: 7px;
  opacity: 1;
  font-size: 8px;
  text-align: center;
  text-transform: uppercase;
`;
const ContentsWrapper = styled.div`
  width: 183px;
  display: flex;
  justify-content: space-between;
`;

const InputSwitchName = styled.input`
  width: 66px;
  height: 18px;
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 9px;
  opacity: 1;
  font-size: 6px;
  &::placeholder {
    font-size: 6px;
    vertical-align: middle;
    color: #fff;
    text-transform: uppercase;
  }
`;
const SelectBoxWrapperHole = styled.div`
  width: 66px;
  height: 18px;
  background: #233a54 0% 0% no-repeat padding-box;

  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 12px;
  opacity: 1;
  ${flexboxCenter}
  position: relative;
`;
const SelectBoxInnerWrapper = styled.div`
  width: 64px;
  height: ${(p) => (p.isClicked ? 'none' : '16px')};

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff29, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 8px;
  opacity: 1;

  ${flexboxCenter}
  flex-direction: column;

  position: ${(p) => (p.isClicked ? 'absolute' : 'none')};
  padding-bottom: ${(p) => (p.isClicked ? '0.1rem' : '0')};
  z-index: ${(p) => (p.isClicked ? '100' : '0')};
  top: ${(p) => (p.isClicked ? '0.06rem' : 'none')};
  left: ${(p) => (p.isClicked ? '0.02rem' : 'none')};
`;

const SelectedTitleAndArrowWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${flexboxCenter}
  justify-content: space-between;

  padding: 0 0.1rem;

  margin: ${(p) => (p.isClicked ? '0.1rem ' : '0')};
  margin-left: ${(p) => (p.isClicked ? '0.2rem ' : '0')};
`;

const SelectedTitle = styled.div`
  width: 51px;
  height: 12px;
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 12px;
  opacity: 1;
  ${flexboxCenter}
`;
const Title = styled.span`
  font-size: 6px;
  text-transform: uppercase;
`;

const ArrowWrapper = styled.button`
  height: 12px;
  ${flexboxCenter}
  padding-top: 0.1rem;
  cursor: pointer;
`;
const Arrow = styled.img``;

const ButtonOuterHole = styled.button`
  ${flexboxCenter}

  width: 47px;
  height: 18px;
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 12px;
  opacity: 1;
`;
const ButtonOuter = styled.div`
  ${flexboxCenter}

  width: 44px;
  height: 16px;
  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 25px;
  opacity: 1;
`;
const ButtonHole = styled.div`
  ${flexboxCenter}

  width: 40px;
  height: 12px;
  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 1px #000000;
  border-radius: 18px;
  opacity: 1;
`;
const ButtonTop = styled.div`
  ${flexboxCenter}
  font-size: 7px;
  text-transform: uppercase;

  width: 38px;
  height: 10px;
  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 25px;
  opacity: 1;
`;

const SelectWrapper = styled.div`
  width: 60px;
  height: 130px;
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 8px;
  opacity: 1;

  ${flexboxCenter}
  flex-direction: column;
  justify-content: space-between;
  /* space between options and button */
`;

const KeyboardWrapper = styled.div`
  position: absolute;
  z-index: 1000;
  top: 3rem;
  left: 0rem;
`;
