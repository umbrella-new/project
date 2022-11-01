import styled, { css } from 'styled-components';
import { flexboxCenter } from '../../styles/commonStyles';

const ExpandButton = ({ handleOnClick, isExpanded, name, isTesSwitch }) => {
  return (
    <WrapperHole onClick={() => handleOnClick(name)} isTesSwitch={isTesSwitch}>
      <OuterWrapper isTesSwitch={isTesSwitch}>
        <InnerHole isTesSwitch={isTesSwitch}>
          <Top isTesSwitch={isTesSwitch}>
            <Title isTesSwitch={isTesSwitch}>{name}</Title>
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

  ${(p) =>
    p.isTesSwitch ||
    css`
      background: #3b3b3b 0% 0% no-repeat padding-box;
      box-shadow: inset 0px 0px 1px #000000;
      /* cursor: none; */
    `}
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
  ${(p) =>
    p.isTesSwitch ||
    css`
      background: transparent linear-gradient(180deg, #565656 0%, #1d1d1d 100%)
        0% 0% no-repeat padding-box;
      box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
      border: 0.5px solid #000000;
    `}
`;
const InnerHole = styled.div`
  width: 64px;
  height: 21px;
  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 1px #000000;
  border-radius: 20px;

  ${flexboxCenter}
  ${(p) =>
    p.isTesSwitch ||
    css`
      background: #3b3b3b 0% 0% no-repeat padding-box;
      box-shadow: inset 0px 0px 1px #000000;
    `}
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
  ${(p) =>
    p.isTesSwitch ||
    css`
      background: transparent linear-gradient(180deg, #565656 0%, #1d1d1d 100%)
        0% 0% no-repeat padding-box;
      box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
      border: 0.5px solid #000000;
    `}
`;

const Title = styled.span`
  font-size: 8px;

  ${(p) =>
    p.isTesSwitch ||
    css`
      color: #707070;
    `}
`;
