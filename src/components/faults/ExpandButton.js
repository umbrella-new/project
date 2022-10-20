import { useState } from 'react';
import styled from 'styled-components';
import { flexboxCenter } from '../../styles/commonStyles';

const ExpandButton = ({ handleOnClick, isExpanded, name }) => {
  return (
    <WrapperHole onClick={() => handleOnClick(name)}>
      <OuterWrapper>
        <InnerHole>
          <Top>
            <Title>{name}</Title>
          </Top>
        </InnerHole>
      </OuterWrapper>
    </WrapperHole>
  );
};

export default ExpandButton;

const WrapperHole = styled.button`
  width: 72px;
  height: 29px;
  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 1px #000000;
  border-radius: 27px;
  opacity: 1;

  ${flexboxCenter}
`;
const OuterWrapper = styled.div`
  width: 70px;
  height: 27px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 25px;
  opacity: 1;

  ${flexboxCenter}
`;
const InnerHole = styled.div`
  width: 64px;
  height: 21px;
  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 1px #000000;
  border-radius: 20px;

  ${flexboxCenter}
`;
const Top = styled.div`
  width: 62px;
  height: 19px;
  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 25px;
  opacity: 1;

  ${flexboxCenter}
`;

const Title = styled.span`
  font-size: 8px;
  text-transform: uppercase;
`;
