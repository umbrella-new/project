import { useState } from 'react';
import styled, { css } from 'styled-components';
import {
  flexboxCenter,
  ItemBackground,
  ItemBackgroundDisable,
} from '../../../styles/commonStyles';

import SettingButton from './SettingButton';

const AdminSSRItemDetails = ({
  isEnable,
  isFault,
  id,
  data,
  isSettingOpen,
  setIsSettingOpen,
  handleButtonClick,
}) => {
  const [emptyArray, setemptyArray] = useState([1, 2, 3]);

  return (
    <Wrapper isEnable={isEnable} isFault={isFault}>
      {emptyArray.map((column) => (
        <ItemWrapper>
          <ItemCurrent isEnable={isEnable}>
            <ItemDataInput
              type='text'
              isEnable={isEnable}
              placeholder='Input Current'
            />
          </ItemCurrent>

          <ItemWattage isEnable={isEnable}>
            <ItemDataInput
              type='text'
              isEnable={isEnable}
              placeholder='Input Wattage'
            />
          </ItemWattage>

          <ItemVoltage isEnable={isEnable}>
            <ItemDataInput
              type='text'
              isEnable={isEnable}
              placeholder='input voltage'
            />
          </ItemVoltage>

          <ItemLength isEnable={isEnable}>
            <ItemDataInput
              type='text'
              isEnable={isEnable}
              placeholder='input length'
            />
          </ItemLength>

          <DescriptionAndButtonWrapper>
            <ItemDescription isEnable={isEnable}>
              <ItemDataDescription isDescription={true} isEnable={isEnable}>
                -----------------
              </ItemDataDescription>
              <RadioButtonWrapper column={column}>
                <RadioButton></RadioButton>
              </RadioButtonWrapper>
            </ItemDescription>

            <SettingButton
              isSettingOpen={isSettingOpen}
              setIsSettingOpen={setIsSettingOpen}
              handleButtonClick={handleButtonClick}
              id={id}
              column={column}
              // when ssr status is fault button will be disable
            />
          </DescriptionAndButtonWrapper>
        </ItemWrapper>
      ))}
    </Wrapper>
  );
};
export default AdminSSRItemDetails;

const Wrapper = styled.ul`
  width: 692px;
  height: 74px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.1rem 0;

  background: transparent linear-gradient(90deg, #233a54 0%, #060d19 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff29, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 12px;
  opacity: 1;

  ${(p) =>
    p.isEnable ||
    css`
      box-shadow: inset 0px 0.5px 1px #ffffff29, 0px 0px 1px #000000;
      border: 0.5px solid #000000;
      border-radius: 12px;
      opacity: 1;
    `}

  border: ${(p) => (p.isFault ? '1px solid red' : '')};
`;

const ItemWrapper = styled.div`
  ${flexboxCenter}
  justify-content: space-between;
  padding: 0 0.1rem;
`;

const ItemCurrent = styled.li`
  ${flexboxCenter}

  width: 90px;
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

  width: 264px;
  height: 20px;
  ${ItemBackground}
  ${(p) =>
    p.isEnable ||
    css`
      ${ItemBackgroundDisable}
    `};
`;
const ItemDataInput = styled.input`
  font-size: 8px;
  text-align: center;
  text-transform: uppercase;
  width: 90px;

  background-color: transparent;
  &::placeholder {
    color: #fff;
  }

  /* color: ${(p) => p.isEnable || `#808080;`}; */
`;

const ItemDataDescription = styled.span`
  font-size: 8px;
  text-align: center;
  text-transform: uppercase;
  width: 90%;

  ${(p) =>
    p.isDescription &&
    css`
      font-size: 6px;
    `}
  color: ${(p) => p.isEnable || `#808080;`};

  /* Layout for radio box with parents box */
  margin-right: 0.4rem;
`;

const DescriptionAndButtonWrapper = styled.div`
  width: 285px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RadioButtonWrapper = styled.button`
  width: 16px;
  height: 16px;

  border: 1px solid #95ff45;
  opacity: 1;
  border-radius: 50%;
  ${flexboxCenter}
`;
const RadioButton = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${(p) => (p.isChecked ? '#95ff45' : 'none')};
  border-radius: 50%;
`;
