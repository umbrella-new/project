import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Label } from 'recharts';

import styled, { css } from 'styled-components';
import {
  handleEsAttendButtonClick,
  handleEsRecordActionTaken,
  handleGsAttendButtonClick,
  selectFaults,
} from '../../store/slices/faultsSlice';
import { flexboxCenter } from '../../styles/commonStyles';
import InputKeyboard from '../keyboard/InputKeyboard';
import SettingConfirmedMessage from '../userMessages/SettingConfirmedMessage';

import CommentButton from './CommentButton';

const FaultsComments = ({ handleClose, faultsIndexNumber, name }) => {
  const faultsState = useSelector(selectFaults);
  const { faultsTypes, actionTaken } =
    name === 'tgs' ? faultsState.tgs : faultsState.ess;

  console.log(actionTaken);
  const initialInputState = {
    name: null,
    comments: null,
  };

  const [inputData, setInputData] = useState(initialInputState);
  const [focusedInput, setFocusedInput] = useState(null);
  const [activateKeyboard, setActivateKeyboard] = useState(false);
  const [activateMessageBox, setActivateMessageBox] = useState(false);
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const handleCommentButtonClick = () => {
    if (name === `tgs`) {
      // 1. dispatch remove attend button clicked
      dispatch(handleGsAttendButtonClick(null));
      // 2. dispatch to tgs with faultsIndexNumber
    } else {
      // 1. dispatch remove attend button clicked
      dispatch(handleEsAttendButtonClick(null));
      // 2. dispatch to tes with faultsIndexNumber

      dispatch(handleEsRecordActionTaken({ faultsIndexNumber, inputData }));
    }
    handleClose(false);
  };

  const handleOnChange = (input) => {
    const newInput = { ...inputData };
    newInput[focusedInput] = input;
    setInputData(newInput);
  };

  return (
    <InvisibleWrapper>
      <Wrapper>
        <ContentsWrapper>
          <SectionWrapper>
            <TitleWrapper isLogo={true}>
              <img src={'/images/attend-logo.svg'} />
              <ComponentTitle>attend</ComponentTitle>
            </TitleWrapper>
            <InputBoxWrapper>
              <InputTitle>uos user name :</InputTitle>
              <InputUserName
                type='text'
                placeholder='please input your name'
                onClick={() => {
                  setFocusedInput('name');
                  setActivateKeyboard(true);
                }}
                onChange={(event) => handleOnChange(event.target.value)}
                value={inputData.name}
              />
            </InputBoxWrapper>
          </SectionWrapper>

          <SectionWrapper>
            <TitleWrapper>
              <ComponentTitle>fault</ComponentTitle>
            </TitleWrapper>
            <FaultsTypeWrapper>
              <ComponentTitle>{faultsTypes[faultsIndexNumber]}</ComponentTitle>
            </FaultsTypeWrapper>
          </SectionWrapper>

          <SectionWrapper>
            <TitleWrapper>
              <ComponentTitle>action taken</ComponentTitle>
            </TitleWrapper>
            <CommentInput
              placeholder='please leave your actions here..'
              onClick={() => {
                if (inputData.name) {
                  setFocusedInput('comments');
                  setActivateKeyboard(true);
                } else {
                  setMessage('please input user name first');
                  setActivateMessageBox(true);
                }
              }}
              onChange={(event) => handleOnChange(event.target.value)}
              value={inputData.comments}
            />
          </SectionWrapper>

          <ButtonLayoutWrapper>
            <ButtonWrapper>
              <CommentButton
                name='confirm'
                handleButtonClick={handleCommentButtonClick}
              />
            </ButtonWrapper>
          </ButtonLayoutWrapper>
        </ContentsWrapper>
      </Wrapper>
      {activateKeyboard && (
        <KeyboardWrapper position={focusedInput}>
          <InputKeyboard
            closeKeyboard={() => setActivateKeyboard(false)}
            handleOnSubmit={handleOnChange}
          />
        </KeyboardWrapper>
      )}
      {activateMessageBox && (
        <SettingConfirmedMessage
          title='fault - attend'
          message={message}
          onClose={() => {
            setActivateMessageBox(false);
          }}
        />
      )}
    </InvisibleWrapper>
  );
};
export default FaultsComments;

const InvisibleWrapper = styled.div`
  width: 900px;
  height: 600px;
  ${flexboxCenter}
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 314px;
  height: 312px;

  background: transparent linear-gradient(180deg, #77777742 0%, #c2c2c224 100%)
    0% 0% no-repeat padding-box;
  box-shadow: inset 0px 1px 1px #ffffff29, 0px 0px 4px #000000;
  border: 0.5px solid #000000;
  border-radius: 14px;

  ${flexboxCenter}
`;

const ContentsWrapper = styled.div`
  width: 300px;
  height: 297px;
  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 1px 1px #00000029;
  border: 0.5px solid #000000;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 0.2rem;

  position: relative;
`;

const SectionWrapper = styled.div`
  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem;

  width: 100%;
  &:first-child {
    padding: 0.2rem 0.3rem;
    height: 41px;
  }
  &:nth-child(2) {
    height: 95px;
  }
  &:nth-child(3) {
    height: 95px;
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #ff0000;
  display: flex;
  justify-content: flex-end;

  ${(p) =>
    p.isLogo &&
    css`
      align-items: center;
      justify-content: space-between;
    `}
`;

const ComponentTitle = styled.span`
  font-size: 10px;
  color: #ff0000;
`;

const FaultsTypeWrapper = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  justify-content: center;
  padding-top: 1.5rem;
`;

const InputBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const InputUserName = styled.input`
  width: 183px;
  height: 16px;
  border: 1px solid #ff0000;
  border-radius: 16px;
  background-color: transparent;
  text-align: left;
  font-size: 8px;
  padding: 0 0.3rem;
  color: #ff0000;

  ::placeholder {
    color: #ff0000;
    text-align: left;
    font-size: 8px;
  }
`;
const InputTitle = styled.span`
  color: #ff0000;
  font-size: 8px;
  text-align: left;
`;

const CommentInput = styled.textarea`
  width: 98%;
  height: 80%;
  font-size: 10px;
  color: #ff0000;
  padding: 0.3rem 1rem;
  font-size: 10px;
  text-align: left;

  background: transparent;
  resize: none;
  ::placeholder {
    font-size: 10px;
    color: #ff0000;
    text-align: left;
  }
`;

const ButtonLayoutWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const ButtonWrapper = styled.div`
  width: 74px;
  height: 27px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 18px;

  ${flexboxCenter}
`;

const KeyboardWrapper = styled.div`
  position: absolute;
  bottom: -3.5rem;
  ${(p) =>
    p.position === 'name' &&
    css`
      bottom: 8rem;
    `}
`;
