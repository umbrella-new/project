import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { selectSSRState } from "../../../store/slices/heaterStatusSlice";
import { selectDescription } from "../../../store/slices/ssrDescriptionSlice";
import {
  flexboxCenter,
  ItemBackground,
  ItemBackgroundDisable,
} from "../../../styles/commonStyles";

import SettingButton from "./SettingButton";

const SSRItemDetails = ({
  isEnable,
  isFault,
  option,
  id,
  data,
  isSettingOpen,
  setIsSettingOpen,
  handleButtonClick,
  openPasswordBox,
}) => {
  const descriptionState = useSelector(selectDescription);
  const { specsStr, descriptionOptions } = descriptionState;
  const [description, setDescription] = useState([]);

  const [isAcceptableAmp, setAcceptableAmp] = useState([]);

  const dispatch = useDispatch();
  // For mapping
  const { specs } = data;

  // To make descriptions
  useEffect(() => {
    // 1. Make the specs as a string
    const specsStrArr = specs.map(
      (spec) =>
        `${spec.partNumber}-${spec.current}/${spec.wattage}/${spec.voltage}/${spec.lengths}`
    );
    // 2. Find Index using indexOF
    const descriptionIndex = specsStrArr.map((spec) => specsStr.indexOf(spec));
    // 3. Set description state
    const stateArr = descriptionIndex.map(
      (dIndex) => descriptionOptions[dIndex]
    );
    setDescription(stateArr);

    // Check the current with currentCurrent
  }, [specs]);

  return (
    <Wrapper>
      <ContentWrapper isEnable={isEnable} isFault={isFault}>
        {specs.map((spec, index) => (
          <ItemWrapper column={index} hiddenNumber={specs.length} key={index}>
            <ItemCurrentWrapper>
              <ItemCurrent isEnable={isEnable}>
                <ItemData isDefault={true} isEnable={isEnable}>
                  {spec.current}
                </ItemData>
              </ItemCurrent>

              <ItemCurrent isEnable={isEnable}>
                <ItemData isEnable={isEnable}>{spec.currentCurrent}</ItemData>
              </ItemCurrent>
            </ItemCurrentWrapper>

            <ItemWattage isEnable={isEnable}>
              <ItemData isEnable={isEnable}>{spec.wattage}</ItemData>
            </ItemWattage>

            <ItemVoltage isEnable={isEnable}>
              <ItemData isEnable={isEnable}>{spec.voltage}</ItemData>
            </ItemVoltage>

            <ItemLength isEnable={isEnable}>
              <ItemData isEnable={isEnable}>{spec.lengths}</ItemData>
            </ItemLength>

            <DescriptionAndButtonWrapper>
              <ItemDescription isEnable={isEnable}>
                <ItemData isDescription={true} isEnable={isEnable}>
                  {description[index] && description[index]}
                  <br></br>
                  {description[index] &&
                    `${spec.current}A / ${spec.wattage}W / ${spec.voltage}v / ${spec.lengths}l`}
                </ItemData>
              </ItemDescription>

              <SettingButton
                isSettingOpen={isSettingOpen}
                setIsSettingOpen={setIsSettingOpen}
                handleButtonClick={handleButtonClick}
                id={option}
                column={index + 1}
                openPasswordBox={openPasswordBox}

                // when ssr status is fault button will be disable
              />
            </DescriptionAndButtonWrapper>
          </ItemWrapper>
        ))}
      </ContentWrapper>
    </Wrapper>
  );
};
export default SSRItemDetails;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const ContentWrapper = styled.ul`
  width: 692px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.1rem 0;

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
          background: transparent
            linear-gradient(180deg, #565656 0%, #1d1d1d 100%) 0% 0% no-repeat
            padding-box;
          box-shadow: inset 0px 0.5px 1px #ffffff29, 0px 0px 1px #000000;
          border: 0.5px solid #000000;
          border-radius: 12px;
          opacity: 1;
        `}

  border: ${(p) => (p.isFault ? "1px solid red" : "")};
`;

const ItemWrapper = styled.div`
  ${flexboxCenter}
  justify-content: space-between;
  padding: 0 0.1rem;

  &:first-child {
    ${(p) =>
      p.hiddenNumber !== 1 &&
      css`
        margin-bottom: 0.2rem;
      `}
  }
  &:nth-child(2) {
    margin-bottom: 0.2rem;
  }
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

  color: ${(p) => p.isDefault && "#95ff45"};
  color: ${(p) => p.isEnable || `#808080;`};
`;

const DescriptionAndButtonWrapper = styled.div`
  width: 285px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
