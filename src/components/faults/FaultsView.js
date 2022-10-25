import styled from 'styled-components';
import { flexboxCenter } from '../../styles/commonStyles';

const FaultsView = ({ comments, handleClose }) => {
  return (
    <InvisibleWrapper>
      <Wrapper>
        <InnerWrapper>
          <ButtonWrapper onClick={handleClose}>
            <ButtonOuterHole>
              <ButtonOuter>
                <ButtonInnerHole>
                  <ButtonTop>
                    <img src={'/images/view-close-button.svg'} />
                  </ButtonTop>
                </ButtonInnerHole>
              </ButtonOuter>
            </ButtonOuterHole>
          </ButtonWrapper>
          <DisplayCommentsWrapper>
            <DisplayComments>
              {comments ? comments : 'No comments yet..'}
            </DisplayComments>
          </DisplayCommentsWrapper>
        </InnerWrapper>
      </Wrapper>
    </InvisibleWrapper>
  );
};
export default FaultsView;

const InvisibleWrapper = styled.div`
  width: 800px;
  height: 600px;
  ${flexboxCenter}
  position: absolute;
`;

const Wrapper = styled.div`
  width: 402px;
  height: 176px;

  background: transparent linear-gradient(180deg, #77777742 0%, #c2c2c224 100%)
    0% 0% no-repeat padding-box;
  box-shadow: inset 0px 1px 1px #ffffff24, 0px 0px 6px #000000;
  border: 0.5px solid #000000;

  ${flexboxCenter}
`;
const InnerWrapper = styled.div`
  width: 384px;
  height: 158px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border: 0.5px solid #000000;
  border-radius: 9px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 0;
`;
const ButtonWrapper = styled.button`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const ButtonOuterHole = styled.div`
  ${flexboxCenter}

  width: 26px;
  height: 26px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 18px;
  margin-right: 0.25rem;
`;
const ButtonOuter = styled.div`
  ${flexboxCenter}
  width: 24px;
  height: 24px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 25px;
`;
const ButtonInnerHole = styled.div`
  ${flexboxCenter}

  width: 20px;
  height: 20px;

  background: #142033 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 1px #000000;
  border-radius: 18px;
`;
const ButtonTop = styled.div`
  width: 18px;
  height: 18px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 9px;

  ${flexboxCenter}
`;

const DisplayCommentsWrapper = styled.div`
  width: 373px;
  height: 117px;

  background: transparent linear-gradient(90deg, #233a54 0%, #060d19 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: inset 0px 1px 1px #00000029, 0px 0px 2px #000000;
  border: 0.5px solid #000000;
  border-radius: 12px;

  ${flexboxCenter}
`;
const DisplayComments = styled.div`
  width: 365px;
  height: 109px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 8px;

  font-size: 10px;
  color: #fe0000;

  padding: 0.5rem;
`;
