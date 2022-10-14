import styled, { css } from 'styled-components';
import {
  flexboxCenter,
  ItemBackground,
  ItemBackgroundDisable,
} from '../../../styles/commonStyles';
import SettingButton from './SettingButton';

const SSRInfoContainer = ({ data }) => {
  const titles = Object.keys(data).slice(2);

  // this two variables will be merged as one with 3 conditions
  // isEnable is for styling  [false:color gray-deActivated color]
  const isEnable =
    data.buttonStatus === 'flt' ? false : data.buttonStatus ? true : false;

  // isEnable is for styling  [true:red border]
  const isFault = data.buttonStatus === 'flt' ? true : false;

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{titles[0]} (a)</Title>
        <Title>{titles[1]} (kw)</Title>
        <Title>{titles[2]} (v)</Title>
        <Title>{titles[3]} (m)</Title>
        <Title>{titles[4]}</Title>
      </TitleWrapper>

      <ItemWrapper isEnable={isEnable} isFault={isFault}>
        <ItemCurrent isEnable={isEnable}>
          <ItemData isEnable={isEnable}>{data.current}</ItemData>
        </ItemCurrent>

        <ItemWattage isEnable={isEnable}>
          <ItemData isEnable={isEnable}>{data.wattage}</ItemData>
        </ItemWattage>

        <ItemVlotage isEnable={isEnable}>
          <ItemData isEnable={isEnable}>{data.voltage}</ItemData>
        </ItemVlotage>

        <ItemLength isEnable={isEnable}>
          <ItemData isEnable={isEnable}>{data.length}</ItemData>
        </ItemLength>

        <ItemDescription isEnable={isEnable}>
          <ItemData isEnable={isEnable}>{data.description}</ItemData>
        </ItemDescription>

        <SettingButton />
      </ItemWrapper>
    </Wrapper>
  );
};

export default SSRInfoContainer;
const Wrapper = styled.div`
  margin-top: 0.7rem;
`;

const TitleWrapper = styled.div`
  ${flexboxCenter}
  justify-content: flex-start;
  margin-bottom: 0.5rem;
  padding: 0 1.3rem;
`;
const Title = styled.span`
  text-transform: uppercase;
  font-size: 8px;
  &:first-child {
    margin-right: 2rem;
  }
  &:nth-child(2) {
    margin-right: 2.2rem;
  }
  &:nth-child(3) {
    margin-right: 2.6rem;
  }
  &:nth-child(4) {
    margin-right: 8rem;
  }
`;

const ItemWrapper = styled.ul`
  width: 692px;
  height: 24px;

  ${(p) =>
    p.isEnable
      ? css`
          background: transparent
            linear-gradient(180deg, #233a54 0%, #060d19 100%) 0% 0% no-repeat
            padding-box;
          box-shadow: inset 0px 0.5px 1px #ffffff29, 0px 0px 1px #000000;
          border: 0.5px solid #000000;
          border-radius: 12px;
          opacity: 1;
        `
      : css`
          box-shadow: 0px 0px 1px var(--unnamed-color-000000);
          border: 0.5px solid var(--unnamed-color-000000);
          background: transparent
            linear-gradient(180deg, #565656 0%, #1d1d1d 100%) 0% 0% no-repeat
            padding-box;
          box-shadow: inset 0px 0.5px 1px #ffffff29, 0px 0px 1px #000000;
          border: 0.5px solid #000000;
          border-radius: 12px;
          opacity: 1;
        `}

  ${flexboxCenter}
  justify-content: space-between;
  padding: 0 0.1rem;

  border: ${(p) => (p.isFault ? '1px solid red' : '')};
`;

// const ItemBackground = css`
//   background: #233a54 0% 0% no-repeat padding-box;
//   box-shadow: inset 0px 0px 2px #000000;
//   border-radius: 12px;
//   opacity: 1;
// `;

// const ItemBackgroundDisable = css`
//   background: var(--unnamed-color-3b3b3b) 0% 0% no-repeat padding-box;
//   box-shadow: inset 0px 0px 2px var(--unnamed-color-000000);
//   background: #3b3b3b 0% 0% no-repeat padding-box;
//   box-shadow: inset 0px 0px 2px #000000;
//   opacity: 1;
//   border-radius: 12px;
// `;

const ItemCurrent = styled.li`
  ${flexboxCenter}

  width: 90px;
  height: 20px;

  ${(p) =>
    p.isEnable
      ? css`
          ${ItemBackground}
        `
      : css`
          ${ItemBackgroundDisable}
        `}
`;
const ItemWattage = styled.li`
  ${flexboxCenter}
  width: 93px;
  height: 20px;

  ${(p) =>
    p.isEnable
      ? css`
          ${ItemBackground}
        `
      : css`
          ${ItemBackgroundDisable}
        `}
`;
const ItemVlotage = styled.li`
  ${flexboxCenter}

  width: 93px;
  height: 20px;

  ${(p) =>
    p.isEnable
      ? css`
          ${ItemBackground}
        `
      : css`
          ${ItemBackgroundDisable}
        `}
`;
const ItemLength = styled.li`
  ${flexboxCenter}

  width: 93px;
  height: 20px;

  ${(p) =>
    p.isEnable
      ? css`
          ${ItemBackground}
        `
      : css`
          ${ItemBackgroundDisable}
        `}
`;
const ItemDescription = styled.li`
  ${flexboxCenter}

  width: 264px;
  height: 20px;

  ${(p) =>
    p.isEnable
      ? css`
          ${ItemBackground}
        `
      : css`
          ${ItemBackgroundDisable}
        `}

  padding: 0 0.1rem;
`;
const ItemData = styled.span`
  font-size: 8px;
  text-align: center;
  text-transform: uppercase;
  color: ${(p) => (p.isEnable ? '#ffff' : `#808080;`)};
`;
