import { useState } from 'react';

import styled from 'styled-components';
import { flexboxCenter } from '../../styles/commonStyles';

import CommentButton from './CommentButton';

const FaultsComments = ({
  setDisplayCommentBox,
  indexNumber,
  handleComments,
}) => {
  const buttonNames = ['clear', 'save'];

  const [commentsInput, setCommentsInput] = useState({
    name: null,
    type: null,
    comments: null,
  });

  const handleCommentButtonClick = (name) => {
    if (name === 'clear') {
      // reset input state if it is not null
      if (commentsInput.comments) {
        setCommentsInput({
          name: null,
          type: null,
          comments: null,
        });
      } else {
        // close the comment box
        setDisplayCommentBox(false);
      }
    } else {
      // name === save -> send input state to the parents element with index
      handleComments(indexNumber, commentsInput);
    }
  };

  return (
    <Wrapper>
      <ContentsWrapper>
        <TitleWrapper>
          <ComponentTitle>faults comments</ComponentTitle>
        </TitleWrapper>

        <Title>select fault type</Title>
        <SelectBoxWrapper>
          <SelectBoxInner>
            <SelectedOne>select fault type</SelectedOne>
          </SelectBoxInner>
          <SelectButton>
            <img src={'/images/faults-comment-selector.svg'} />
          </SelectButton>
        </SelectBoxWrapper>

        <Title>comment</Title>
        <CommentInput></CommentInput>

        <ButtonLayoutWrapper>
          <ButtonWrapper>
            {buttonNames.map((name) => (
              <CommentButton
                name={name}
                handleButtonClick={handleCommentButtonClick}
              />
            ))}
          </ButtonWrapper>
        </ButtonLayoutWrapper>
      </ContentsWrapper>
    </Wrapper>
  );
};
export default FaultsComments;

const Wrapper = styled.div`
  position: absolute;

  width: 402px;
  height: 305px;

  background: transparent linear-gradient(180deg, #77777742 0%, #c2c2c224 100%)
    0% 0% no-repeat padding-box;
  box-shadow: inset 0px 1px 1px #ffffff29, 0px 0px 4px #000000;
  border: 0.5px solid #000000;
  border-radius: 16px;

  ${flexboxCenter}
`;

const ContentsWrapper = styled.div`
  width: 384px;
  height: 288px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0px 4px #000000;
  border: 0.5px solid #000000;
  border-radius: 9px;
  padding: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const TitleWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #fff;
`;

const ComponentTitle = styled.span`
  font-size: 12px;
  text-transform: uppercase;
`;

const Title = styled.span`
  font-size: 10px;
  text-transform: uppercase;
`;

const SelectBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 0.35rem;
  padding-right: 0.9rem;
  width: 370px;
  height: 54px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 33px;
`;
const SelectBoxInner = styled.div`
  width: 310px;
  height: 44px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 22px;

  display: flex;
  align-items: center;
  padding-left: 1rem;
`;
const SelectedOne = styled.span`
  font-size: 10px;
  text-transform: uppercase;
`;
const SelectButton = styled.button`
  ${flexboxCenter}
  margin-top: 0.3rem;
`;

const CommentInput = styled.textarea`
  width: 373px;
  height: 110px;
  color: #fff;
  padding: 0.5rem;
  font-size: 10px;
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 8px;
  border: none;
`;

const ButtonLayoutWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const ButtonWrapper = styled.div`
  width: 159px;
  height: 27px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 18px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.1rem;
`;
