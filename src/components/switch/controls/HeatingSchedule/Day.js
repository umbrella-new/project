import { useRef, useContext } from 'react';
import { useDay } from '@datepicker-react/hooks';
import DatepickerContext from './datepickerContext';
import getColor from './getColor';
import styled from 'styled-components';
import DisplayTemperatureStates from '../displayState/DisplayTemperatureStates';

const Day = ({ dayLabel, date, startDay, endDay }) => {
  const dayRef = useRef(null);
  const {
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateSelect,
    onDateFocus,
    onDateHover,
  } = useContext(DatepickerContext);
  const {
    isSelected,
    isSelectedStartOrEnd,
    isWithinHoverRange,
    disabledDate,
    onClick,
    onKeyDown,
    onMouseEnter,
    tabIndex,
  } = useDay({
    date,
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateFocus,
    onDateSelect,
    onDateHover,
    dayRef,
  });

  if (!dayLabel) {
    return <div />;
  }

  const getColorFn = getColor(
    isSelected,
    isSelectedStartOrEnd,
    isWithinHoverRange,
    disabledDate
  );

  const btnStyle = {
    padding: '0.4rem 0.38rem',
    // border: '1px solid red',

    color: getColorFn({
      selectedFirstOrLastColor: '#1B2B44',
      normalColor: '#FFFFFF',
      selectedColor: '#FFFFFF',
      rangeHoverColor: '#FFFFFF',
      disabledColor: '#FFFFFF',
    }),
    background: getColorFn({
      selectedFirstOrLastColor: '#95FF45',
      normalColor: 'none',
      selectedColor: '#95FF4566',
      rangeHoverColor: '#95FF4566',
      disabledColor: '#FFFFFF',
    }),
  };

  return (
    <Date
      onClick={onClick}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      tabIndex={tabIndex}
      type='button'
      ref={dayRef}
      style={btnStyle}
      isStartDay={dayLabel === startDay ? true : false}
      isEndDay={dayLabel === endDay ? true : false}
    >
      {dayLabel}
    </Date>
  );
};

export default Day;

const Date = styled.div`
  font-size: 14px;
  text-align: center;
  /* border: 1px solid red; */

  border-radius: ${(p) => p.isStarDay && '50% 0 0 50%'};
  border-radius: ${(p) => p.isEndday && '50% 0 0 50%'};
`;
