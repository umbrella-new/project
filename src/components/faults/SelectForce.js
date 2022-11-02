import { useState } from 'react';
import styled, { css } from 'styled-components';
import { flexboxCenter } from '../../styles/commonStyles';

import MessageButton from '../userMessages/MessageButton';

const SelectForce = ({ title }) => {
  const options = [
    'max heat',
    'max heat for 12 hours',
    'change and replace t/c',
  ];
  const [selectedOne, setSelectedOne] = useState(options[0]);

  const handleClick = (option) => {
    setSelectedOne(option);
  };

  const handleConfirm = () => {
    console.log(selectedOne);
    if (selectedOne === options[1]) {
      // 12 hrs timer start!
    } else if (selectedOne === options[0]) {
      // max heat! keep working the gas switch
    } else {
      // change parts --- ?
    }
  };
  return (
    <Wrapper>
      <MessageOuter>
        <MessageInner>
          <HeaderWrapper>
            <HeaderTitle>{title}</HeaderTitle>
            <Logo src='/images/messagebox-logo.svg' />
          </HeaderWrapper>

          <TitleWrapper>
            <Title>select force</Title>
          </TitleWrapper>

          <SelectionsWrapper>
            {options.map((option, index) => (
              <SelectionItemWrapper onClick={() => handleClick(option)}>
                <SelectRadioButton>
                  <SelectionIndicator
                    isSelected={selectedOne === option}
                  ></SelectionIndicator>
                </SelectRadioButton>
                <Selection>{option}</Selection>
              </SelectionItemWrapper>
            ))}
          </SelectionsWrapper>

          <ButtonWrapper>
            <MessageButton name='confirm' buttonHandler={handleConfirm} />
          </ButtonWrapper>
        </MessageInner>
      </MessageOuter>
    </Wrapper>
  );
};

export default SelectForce;

const Wrapper = styled.div`
  width: 1024px;
  height: 600px;

  position: absolute;
  top: 0px;
  left: 0px;

  background-color: rgba(0, 0, 0, 0.2);
  z-index: 10000;
  ${flexboxCenter};
`;

const MessageOuter = styled.div`
  width: 402px;
  height: 218px;
  background: transparent linear-gradient(180deg, #77777742 0%, #c2c2c224 100%)
    0% 0% no-repeat padding-box;
  box-shadow: inset 0px 1px 1px #ffffff24, 0px 0px 6px #000000;
  border: 0.5px solid #000000;
  border-radius: 16px;

  ${flexboxCenter}
`;
const MessageInner = styled.div`
  width: 384px;
  height: 201px;
  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border: 0.5px solid #000000;
  border-radius: 9px;

  padding: var(--space3);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const HeaderWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 12%;
`;
const HeaderTitle = styled.span``;

const Logo = styled.img``;

const TitleWrapper = styled.div`
  width: 371px;
  height: 32px;
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 16px;

  ${flexboxCenter}
`;
const Title = styled.div`
  width: 365px;
  height: 26px;
  border: 1px solid #142033;
  border-radius: 13px;

  font-size: 8px;
  ${flexboxCenter}
`;

const SelectionsWrapper = styled.div`
  width: 371px;
  height: 92px;
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 0.25rem 0;
`;
const SelectionItemWrapper = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.2rem 0 0.3rem;
`;
const Selection = styled.div`
  font-size: 9px;

  width: 337px;
  height: 26px;
  border: 1px solid #142033;
  border-radius: 13px;

  display: flex;
  align-items: center;
  padding-left: 0.5rem;
`;
const SelectRadioButton = styled.div`
  width: 22px;
  height: 22px;
  border: 1px solid #95ff45;
  border-radius: 50%;

  ${flexboxCenter}
`;
const SelectionIndicator = styled.div`
  width: 14px;
  height: 14px;
  ${(p) =>
    p.isSelected &&
    css`
      background: #95ff45 0% 0% no-repeat padding-box;
    `}

  border-radius: 50%;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
