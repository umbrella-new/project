import styled, { css } from 'styled-components';
import {
  flexboxCenter,
  ItemBackground,
  ItemBackgroundDisable,
} from '../../../styles/commonStyles';

import SettingButton from './SettingButton';

const SSRItemDetails = ({
  isEnable,
  isFault,
  id,
  data,
  isSettingOpen,
  setIsSettingOpen,
  handleButtonClick,
  openPasswordBox,
}) => {
  return (
    <Wrapper isEnable={isEnable} isFault={isFault}>
      <ItemCurrentWrapper>
        <ItemCurrent isEnable={isEnable}>
          <ItemData isDefault={true} isEnable={isEnable}>
            {data.current}
          </ItemData>
        </ItemCurrent>

        <ItemCurrent isEnable={isEnable}>
          <ItemData isEnable={isEnable}>{data.current}</ItemData>
        </ItemCurrent>
      </ItemCurrentWrapper>

      <ItemWattage isEnable={isEnable}>
        <ItemData isEnable={isEnable}>{data.wattage}</ItemData>
      </ItemWattage>

      <ItemVoltage isEnable={isEnable}>
        <ItemData isEnable={isEnable}>{data.voltage}</ItemData>
      </ItemVoltage>

      <ItemLength isEnable={isEnable}>
        <ItemData isEnable={isEnable}>{data.length}</ItemData>
      </ItemLength>

      <DescriptionAndButtonWrapper>
        <ItemDescription isEnable={isEnable}>
          <ItemData isDescription={true} isEnable={isEnable}>
            {data.description}
          </ItemData>
        </ItemDescription>

        <SettingButton
          isSettingOpen={isSettingOpen}
          setIsSettingOpen={setIsSettingOpen}
          handleButtonClick={handleButtonClick}
          id={id}
          openPasswordBox={openPasswordBox}
          // when ssr status is fault button will be disable
        />
      </DescriptionAndButtonWrapper>
    </Wrapper>
  );
};
export default SSRItemDetails;

const Wrapper = styled.ul`
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

const ItemCurrentWrapper = styled.div`
  display: flex;
  width: 91px;
  justify-content: space-between;
`;

const ItemCurrent = styled.li`
  ${flexboxCenter}

  width: 44px;
  height: 20px;
  ${ItemBackground}

  ${(p) =>
    p.isEnable ||
    css`
      ${ItemBackgroundDisable}
    `}
`;
const ItemWattage = styled.li`
  ${flexboxCenter}
  width: 93px;
  height: 20px;
  ${ItemBackground}
  ${(p) =>
    p.isEnable ||
    css`
      ${ItemBackgroundDisable}
    `}
`;
const ItemVoltage = styled.li`
  ${flexboxCenter}

  width: 93px;
  height: 20px;
  ${ItemBackground}
  ${(p) =>
    p.isEnable ||
    css`
      ${ItemBackgroundDisable}
    `}
`;
const ItemLength = styled.li`
  ${flexboxCenter}

  width: 93px;
  height: 20px;
  ${ItemBackground}
  ${(p) =>
    p.isEnable ||
    css`
      ${ItemBackgroundDisable}
    `}
`;
const ItemDescription = styled.li`
  ${flexboxCenter}

  width: 265px;
  height: 20px;
  ${ItemBackground}
  ${(p) =>
    p.isEnable ||
    css`
      ${ItemBackgroundDisable}
    `}

  padding: 0 0.1rem;
`;
const ItemData = styled.span`
  font-size: 8px;
  text-align: center;
  text-transform: uppercase;

  ${(p) =>
    p.isDescription &&
    css`
      font-size: 6px;
    `}

  color: ${(p) => p.isDefault && '#95ff45'};
  color: ${(p) => p.isEnable || `#808080;`};
`;

const DescriptionAndButtonWrapper = styled.div`
  width: 285px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
