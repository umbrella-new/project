import { useRef, useContext } from 'react';
import { useDay } from '@datepicker-react/hooks';
import DatepickerContext from './datepickerContext';
import getColor from './getColor';
import styled, { css } from 'styled-components';

const Day = ({ dayLabel, date, startDay, endDay, month, isDisabled }) => {
  const today = `${month}` + Number(dayLabel);
  // console.log('today', today, 'start', startDay);

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
      onClick={() => !isDisabled && onClick()}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      tabIndex={tabIndex}
      type='button'
      ref={dayRef}
      style={btnStyle}
      isStartDay={today === startDay ? true : false}
      isEndDay={today === endDay ? true : false}
      isDisabled={isDisabled}
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
  cursor: ${(p) => p.isDisabled || `pointer`};
  border-radius: ${(p) => p.isStartDay && '50% 0 0 50%'};
  border-radius: ${(p) => p.isEndDay && '0 50% 50% 0 '};
`;
