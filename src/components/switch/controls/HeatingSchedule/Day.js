import { useRef, useContext } from 'react';
import { useDay } from '@datepicker-react/hooks';
import DatepickerContext from './datepickerContext';
import getColor from './getColor';
import styled from 'styled-components';

const Day = ({ dayLabel, date, startDay, endDay, month }) => {
  console.log(endDay);
  console.log(startDay);
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

  const handleOnClick = () => {
    onClick();
    // console.log(date);
  };

  return (
    <Date
      onClick={handleOnClick}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      tabIndex={tabIndex}
      type='button'
      ref={dayRef}
      style={btnStyle}
      isStartDay={Number(dayLabel) === startDay ? true : false}
      isEndDay={Number(dayLabel) === endDay ? true : false}
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

  border-radius: ${(p) => p.isStartDay && '50% 0 0 50%'};
  border-radius: ${(p) => p.isEndDay && '0 50% 50% 0 '};
`;
