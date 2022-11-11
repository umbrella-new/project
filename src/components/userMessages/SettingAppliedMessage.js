import styled, { css } from 'styled-components';
import { flexboxCenter } from '../../styles/commonStyles';
import MessageButton from './MessageButton';

const SettingAppliedMessage = ({ onClose, title, message }) => {
  return (
    <Wrapper>
      <MessageOuter>
        <MessageInner>
          <HeaderWrapper>
            <HeaderTitle>{title}</HeaderTitle>
            <Logo src='/images/messagebox-logo.svg' />
          </HeaderWrapper>

          <MessageWrapper>
            {message.title?.map((value) => {
              return (
                <>
                  <MessageTitle>{value}</MessageTitle>
                  <MessageDescription>{message.content}</MessageDescription>
                </>
              );
            })}
          </MessageWrapper>

          <ButtonWrapper>
            <MessageButton name='ok' buttonHandler={onClose} />
          </ButtonWrapper>
        </MessageInner>
      </MessageOuter>
    </Wrapper>
  );
};

export default SettingAppliedMessage;

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
  height: auto;
  padding-top: 11px;
  padding-bottom: 11px;
  background: transparent linear-gradient(180deg, #77777742 0%, #c2c2c224 100%)
    0% 0% no-repeat padding-box;
  box-shadow: inset 0px 1px 1px #ffffff24, 0px 0px 6px #000000;
  border: 0.5px solid #000000;

  border-radius: 14px;
  ${flexboxCenter}
`;
const MessageInner = styled.div`
  width: 384px;
  height: auto;

  /* padding-top: 11px;
  padding-bottom: 11px; */
  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border: 0.5px solid #000000;
  border-radius: 9px;

  padding: var(--space2);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const HeaderWrapper = styled.div`
  width: 100%;
  margin-top: -4px;
  border-bottom: 1px solid #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 15%;
`;
const HeaderTitle = styled.span``;

const Logo = styled.img``;

const MessageWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 14px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AlertLogo = styled.img``;

const MessageTitle = styled.p`
  font-size: 12px;
  margin-top: 6px;
  text-align: center;
  color: #95ff45;
`;

const MessageDescription = styled.p`
  font-size: 12px;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
