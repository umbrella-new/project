import styled from 'styled-components';
import MessageButton from './MessageButton';

const InputTempMessage = () => {
  const handleCloseMessage = () => {};

  return (
    <Wrapper>
      <MessageOuter>
        <MessageInner>
          <HeaderWrapper>
            <HeaderTitle></HeaderTitle>
            <Logo />
          </HeaderWrapper>

          <MessageWrapper>
            <Message></Message>
          </MessageWrapper>
          <ButtonWrapper>
            <MessageButton name='close' buttonHandler={handleCloseMessage} />
          </ButtonWrapper>
        </MessageInner>
      </MessageOuter>
    </Wrapper>
  );
};

export default InputTempMessage;

const Wrapper = styled.div`
  width: 100vh;
  height: 100vh;
  border: 1px solid red;
  position: fixed;
`;

const MessageOuter = styled.div``;
const MessageInner = styled.div``;
const HeaderWrapper = styled.div``;
const HeaderTitle = styled.span``;

const Logo = styled.img``;

const MessageWrapper = styled.div``;
const Message = styled.p``;

const ButtonWrapper = styled.div``;
