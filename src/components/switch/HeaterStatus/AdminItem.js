import { isEditable } from '@testing-library/user-event/dist/utils';
import { useContext } from 'react';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import { HeaterStatusContext } from '../../../context/HeaterStatusContext';
import {
  flexboxCenter,
  DisableApplyButtonBG,
  DisableApplyButtonHole,
} from '../../../styles/commonStyles';
import RadioBox from './RadioBox';
import SelectButton from './SelectButton';

const AdminItem = ({ data, options, unit, title, isFault, isEnable }) => {
  const { ssrDispatch } = useContext(HeaterStatusContext);
  const [checked, setChecked] = useState(options[0]);
  const [isClicked, setIsClicked] = useState(false);

  const status = isEnable ? false : isFault ? false : true;
  const src = !status ? '/images/selector.svg' : '/images/selector-flt.svg';
  const handleChecked = (id) => {
    setChecked(id);
  };
  const displayOptions = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Wrapper isClicked={isClicked} isFault={status}>
      <ItemInnerWrapper isClicked={isClicked} isFault={status}>
        <SelectedOneAndArrowWrapper isClicked={isClicked}>
          <SelectedOne isFault={status}>
            <ItemData isFault={status}>{data}</ItemData>
          </SelectedOne>

          <ArrowWrapper onClick={displayOptions}>
            <Arrow src={src} />
          </ArrowWrapper>
        </SelectedOneAndArrowWrapper>

        {isClicked && (
          <>
            <SelectWrapper>
              {options.map((option, index) => (
                <RadioBox
                  data={`${option}`}
                  checked={checked}
                  onHandler={handleChecked}
                  key={index}
                  unit={unit}
                />
              ))}
            </SelectWrapper>
            <SelectButton
              onSelect={() =>
                ssrDispatch({
                  type: title,
                  id: checked,
                })
              }
            />
          </>
        )}
      </ItemInnerWrapper>
    </Wrapper>
  );
};

export default AdminItem;

const Wrapper = styled.li`
  ${flexboxCenter}
  width: 93px;
  height: 20px;
  background: ${(p) =>
    p.isClicked ? 'transparent' : '#233a54 0% 0% no-repeat padding-box'};
  box-shadow: ${(p) => (p.isClicked ? 'none' : 'inset 0px 0px 2px #000000')};
  border-radius: 12px;
  opacity: 1;

  /* For select box */
  position: relative;

  ${(p) =>
    p.isFault &&
    css`
      ${DisableApplyButtonHole}
    `}
`;

const ItemInnerWrapper = styled.div`
  width: 91px;
  height: ${(p) => (p.isClicked ? 'none' : '19px')};

  background: transparent
    linear-gradient(
      ${(p) => (p.isClicked ? '90deg' : '180deg')},
      #233a54 0%,
      #060d19 100%
    )
    0% 0% no-repeat padding-box;

  box-shadow: inset 0px 0.5px 1px #ffffff29, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 9px;
  opacity: 1;

  ${flexboxCenter}
  flex-direction: column;

  position: ${(p) => (p.isClicked ? 'absolute' : 'none')};
  padding-bottom: ${(p) => (p.isClicked ? '0.1rem' : '0')};
  z-index: ${(p) => (p.isClicked ? '100' : '0')};
  top: ${(p) => (p.isClicked ? '0' : 'none')};

  ${(p) =>
    p.isFault &&
    css`
      ${DisableApplyButtonBG}
    `}
`;
const SelectedOneAndArrowWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${flexboxCenter}
  justify-content: space-between;
  padding: 0 0.1rem;
  margin: ${(p) => (p.isClicked ? '0.1rem ' : '0')};
  margin-left: ${(p) => (p.isClicked ? '0.2rem ' : '0')};
`;

const ArrowWrapper = styled.button`
  ${flexboxCenter}
  margin-right: 0.25rem;
  margin-top: 0.2rem;
`;
const Arrow = styled.img``;
const SelectedOne = styled.div`
  width: 64px;
  height: 15px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 2px #000000;
  border-radius: 12px;
  opacity: 1;

  ${flexboxCenter}

  ${(p) =>
    p.isFault &&
    css`
      ${DisableApplyButtonHole}
    `}
`;
const ItemData = styled.span`
  font-size: ${(p) => (p.isSettingOpen ? '6px' : '8px')};
  text-align: center;
  text-transform: uppercase;
  max-width: 93%;
  line-height: 0.98;
  color: ${(p) => p.isFault && '#808080'};
`;

const SelectWrapper = styled.div`
  width: 82px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 11px;
  opacity: 1;

  ${flexboxCenter}
  flex-direction: column;
  /* space between options and button */
  margin-bottom: 0.2rem;
`;
