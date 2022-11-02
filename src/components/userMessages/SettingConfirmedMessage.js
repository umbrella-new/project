import styled, { css } from 'styled-components';
import { flexboxCenter } from '../../styles/commonStyles';
import MessageButton from './MessageButton';

const SettingConfirmedMessage = ({ onClose, title, message, alert, src }) => {
  return (
    <Wrapper>
      <MessageOuter alert={alert}>
        <MessageInner>
          <HeaderWrapper alert={alert}>
            <HeaderTitle alert={alert}>{title}</HeaderTitle>
            <Logo src='/images/messagebox-logo.svg' />
          </HeaderWrapper>
          {alert ? (
            <MessageWrapper>
              <Message alert={alert}>{message}</Message>
              <AlertLogo src={src} />
            </MessageWrapper>
          ) : (
            <MessageWrapper>
              <Message>{message}</Message>
            </MessageWrapper>
          )}

          <ButtonWrapper>
            <MessageButton name='ok' buttonHandler={onClose} />
          </ButtonWrapper>
        </MessageInner>
      </MessageOuter>
    </Wrapper>
  );
};

export default SettingConfirmedMessage;

const Wrapper = styled.div`
  width: 1024px;
  height: 600px;

  position: fixed;
  top: 0px;
  left: 0px;

  background-color: rgba(0, 0, 0, 0.2);
  z-index: 10000;
  ${flexboxCenter};
`;

const MessageOuter = styled.div`
  width: 402px;
  height: 190px;
  background: transparent linear-gradient(180deg, #77777742 0%, #c2c2c224 100%)
    0% 0% no-repeat padding-box;
  box-shadow: inset 0px 1px 1px #ffffff24, 0px 0px 6px #000000;
  border: 0.5px solid #000000;
  opacity: 1;
  border-radius: 14px;
  ${flexboxCenter}
`;
const MessageInner = styled.div`
  width: 384px;
  height: 172px;
  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border: 0.5px solid #000000;
  border-radius: 9px;
  opacity: 1;

  padding: var(--space2);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const HeaderWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15%;

  ${(p) =>
    p.alert &&
    css`
      border-bottom: 1px solid #ff0000;
    `}
`;
const HeaderTitle = styled.span`
  ${(p) =>
    p.alert &&
    css`
      color: #ff0000;
    `}
`;

const Logo = styled.img``;

const MessageWrapper = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(p) => p.alert && css``}
`;

const AlertLogo = styled.img``;

const Message = styled.p`
  font-size: 12px;
  text-align: center;
  ${(p) =>
    p.alert &&
    css`
      width: 50%;
      color: #ff0000;
      text-align: left;
    `}
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
