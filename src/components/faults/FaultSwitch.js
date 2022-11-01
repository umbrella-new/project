import { useState } from 'react';

import styled, { css } from 'styled-components';
import { flexboxCenter } from '../../styles/commonStyles';

import ExpandButton from './ExpandButton';
import FaultsComments from './FaultsComments';
import FaultsDetails from './FaultsDetails';
import FaultsView from './FaultsView';

const FaultSwitch = ({
  title,
  number,
  isFaults,
  name,
  message,
  comments,
  isTesSwitch,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [displayCommentBox, setDisplayCommentBox] = useState(false);
  const [indexNumber, setIndexNumber] = useState(null);
  const [displayViewBox, setDisplayViewBox] = useState(false);

  const imgSrcNormal = isTesSwitch
    ? name === 'ess'
      ? '/images/fault-ess-normal.svg'
      : name === 'tgs'
      ? '/images/fault-tgs-normal.svg'
      : '/images/fault-tes-normal.svg'
    : '/images/fault-without-tes.svg';

  const imgSrcActivated =
    name === 'ess'
      ? '/images/fault-ess-activated.svg'
      : name === 'tgs'
      ? '/images/fault-tgs-activated.svg'
      : '/images/fault-tes-activated.svg';

  const handleDisplayFaults = () => {
    if (isFaults) {
      if (isExpanded) {
        setIsExpanded(false);
      } else {
        setIsExpanded(true);
      }
    }
  };

  const handleButtonClick = (name, column) => {
    console.log(name, column);
    if (name === 'comment') {
      // display comment box
      setDisplayCommentBox(true);
      setIndexNumber(column);
    } else if (name === 'view') {
      // display history box
      setDisplayViewBox(true);
    } else {
      // not decided
    }
  };

  return (
    <Wrapper isExpanded={isExpanded}>
      <ItemInnerHole isFaults={isFaults} isExpanded={isExpanded}>
        <MainWrapper>
          <ItemTop>
            <LogoAndTitleWrapper>
              <SwitchLogo isFaults={isFaults}>
                <img src={isExpanded ? imgSrcActivated : imgSrcNormal} />
              </SwitchLogo>
              <Title isFaults={isFaults}>{title}</Title>
              <Divider isFaults={isFaults} name={name}></Divider>
            </LogoAndTitleWrapper>
            <DisplayAndButtonWrapper>
              <DisplayFaults>
                <FaultsDetailsNumber>{number ? number : 0}</FaultsDetailsNumber>
                <FaultsDetailsTitle isFaults={isFaults}>
                  faults
                </FaultsDetailsTitle>
                <FaultsLogo isFaults={isFaults}>
                  <img
                    src={
                      isFaults
                        ? '/images/fault-alarm-fault.svg'
                        : '/images/fault-alarm-normal.svg'
                    }
                  />
                </FaultsLogo>
              </DisplayFaults>

              <ExpandButton
                handleOnClick={handleDisplayFaults}
                isExpanded={isExpanded}
                name={isExpanded ? 'close' : 'expand'}
              />
            </DisplayAndButtonWrapper>
          </ItemTop>
        </MainWrapper>
        {isExpanded && (
          <DetailWrapper>
            <DetailInnerWrapper>
              <DetailInnerTop>
                {message.map((msg, index) => (
                  <FaultsDetails
                    key={index}
                    column={index}
                    handleButtonClick={handleButtonClick}
                    faultContents={msg}
                  />
                ))}
              </DetailInnerTop>
            </DetailInnerWrapper>
          </DetailWrapper>
        )}
      </ItemInnerHole>
      {displayCommentBox && (
        <FaultsComments
          indexNumber={indexNumber}
          handleClose={setDisplayCommentBox}
        />
      )}
      {displayViewBox && (
        <FaultsView
          handleClose={() => setDisplayViewBox(false)}
          comments={comments}
        />
      )}
    </Wrapper>
  );
};

export default FaultSwitch;

const Wrapper = styled.div`
  width: 901px;
  ${(p) =>
    p.isExpanded
      ? css`
          height: none;
        `
      : css`
          height: 80px;
        `}
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 4px #000000;
  border: 1px solid #1b2b44;
  border-radius: 41px;

  ${flexboxCenter}
  margin-top: 0.5rem;

  ${(p) =>
    p.isExpanded &&
    css`
      padding-top: 0.25rem;
    `}
`;
const ItemInnerHole = styled.div`
  width: 895px;
  ${(p) =>
    p.isExpanded
      ? css`
          height: none;
        `
      : css`
          height: 76px;
        `}

  background: #142033 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 38px;

  ${flexboxCenter}
  flex-direction:column;

  ${(p) =>
    p.isFaults &&
    css`
      border: 1px solid red;
    `}
`;
const ItemTop = styled.div`
  width: 887px;
  height: 70px;
  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 1px 2px #ffffff29, 0px 0px 2px #000000;
  border: 1px solid #142033;
  border-radius: 36px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 0.8rem 0rem 0.3rem;
`;

const LogoAndTitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 59%;
`;

const SwitchLogo = styled.div`
  width: 61px;
  height: 61px;
  background: #142033 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border: 2px solid #1b2b44;

  border-radius: 50%;
  ${flexboxCenter}
  margin-right: 1.75rem;
  ${(p) =>
    p.isFaults &&
    css`
      border: 1px solid red;
    `}
`;

const Title = styled.span`
  font-size: 12px;
  text-transform: uppercase;

  margin-right: 6px;
  letter-spacing: 1.2px;

  ${(p) =>
    p.isFaults &&
    css`
      color: red;
    `}
`;
const Divider = styled.div`
  border: 1px solid #ffffff;

  ${(p) =>
    p.name === 'ess'
      ? css`
          width: 149px;
        `
      : p.name === 'tgs'
      ? css`
          width: 200px;
        `
      : css`
          width: 154px;
        `}
  ${(p) =>
    p.isFaults &&
    css`
      border: 1px solid red;
    `}
`;

const DisplayAndButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 45%;
`;

const DisplayFaults = styled.div`
  width: 282px;
  height: 62px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border: 1px solid #142033;
  border-radius: 31px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 0.2rem;
  padding-left: 2rem;
`;

const FaultsDetailsNumber = styled.span`
  font-size: 48px;
  color: #fe0000;
`;
const FaultsDetailsTitle = styled.span`
  text-align: center;
  width: 80%;
  text-transform: uppercase;
  font-size: 12px;

  ${(p) =>
    p.isFaults &&
    css`
      color: red;
    `}
`;
const FaultsLogo = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #18253a 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border: 2px solid #1b2b44;
  opacity: 1;

  ${flexboxCenter}

  ${(p) =>
    p.isFaults &&
    css`
      border: 1px solid red;
    `}
`;

const MainWrapper = styled.div``;
const DetailWrapper = styled.div`
  margin-top: 0.5rem;
  padding: 0.3rem 0;
  width: 882px;
  margin-bottom: 0.4rem;
  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  border: 1px solid #142033;
  border-radius: 14px 14px 32px 32px;

  ${flexboxCenter}
`;
const DetailInnerWrapper = styled.div`
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border: 0.5px solid #142033;
  border-radius: 16px 16px 34px 34px;

  ${flexboxCenter}
  margin-bottom: 1.2rem;
`;

const DetailInnerTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 0.5rem;

  width: 869px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 9px;
`;
