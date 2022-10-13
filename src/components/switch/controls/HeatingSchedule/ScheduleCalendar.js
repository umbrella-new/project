import { useState } from 'react';
import styled from 'styled-components';
import { useDatepicker, START_DATE, useMonth } from '@datepicker-react/hooks';

import moment from 'moment/moment';

import { flexboxCenter } from '../../../../styles/commonStyles';

import Month from './Month';

import DatepickerContext from './datepickerContext';
import SchedulerButton from './SchedulerButton';
import TimePicker from './TimePicker';
import { useDispatch, useSelector } from 'react-redux';
import essSwitchSlice, {
  heatingScheduleCancel,
  heatingScheduleDate,
  heatingScheduleClear,
  selectEssSwitch,
} from '../../../../store/slices/essSwitchSlice';
import { useEffect } from 'react';

const ScheduleCalendar = () => {
  // const time = moment();
  // console.log(time._d);
  const state = useSelector(selectEssSwitch);
  const { start, end } = state.heatingSchedule;
  const dispatch = useDispatch();
  // Time Picker states

  const initialStartTimeState = {
    hour: start.time ? start.time.hour : '00',
    minute: start.time ? start.time.minute : '00',
    division: start.time ? start.time.division : 'am',
  };
  const initialEndTimeState = {
    hour: end.time ? end.time.hour : '00',
    minute: end.time ? end.time.minute : '00',
    division: end.time ? end.time.division : 'am',
  };

  const [startTime, setStartTime] = useState(initialStartTimeState);
  const [endTime, setEndTime] = useState(initialEndTimeState);

  const [dateState, setDateState] = useState({
    startDate: start.date ? start.date : null,
    endDate: end.date ? end.date : null,
    focusedInput: START_DATE,
  });
  // console.log(dateState.startDate);

  const startArray =
    dateState.startDate &&
    dateState.startDate
      .toLocaleString('en-ca', {
        year: 'numeric',
        month: 'long',
        weekday: 'short',
        day: 'numeric',
      })
      .replace(/\,/g, '')
      .split(' ');

  const endArray =
    dateState.endDate &&
    dateState.endDate
      .toLocaleString('en-ca', {
        year: 'numeric',
        month: 'long',
        weekday: 'short',
        day: 'numeric',
      })
      .replace(/\,/g, '')
      .split(' ');

  const startDate =
    dateState.startDate &&
    `${startArray[3]}/${startArray[1]}/${startArray[0]} ${startArray[2]}`;

  const endDate =
    dateState.endDate &&
    `${endArray[3]}/${endArray[1]}/${endArray[0]} ${endArray[2]}`;

  const handleDateChange = (data) => {
    if (!data.focusedInput) {
      setDateState({ ...data, focusedInput: START_DATE });
    } else {
      setDateState(data);
    }
  };

  // Time picker
  const handleSetTime = (time, id) => {
    if (id === 'start') {
      setStartTime(time);
    } else {
      setEndTime(time);
    }
  };

  const startTimeSet = `${startTime.hour}:${startTime.minute} ${startTime.division}`;
  const endTimeSet = `${endTime.hour}:${endTime.minute} ${endTime.division}`;

  const {
    firstDayOfWeek,
    activeMonths,
    isDateSelected,
    isDateHovered,
    isFirstOrLastSelectedDate,
    isDateBlocked,
    isDateFocused,
    focusedDate,
    onDateHover,
    onDateSelect,
    onDateFocus,
    goToPreviousMonths,
    goToNextMonths,
    goToPreviousYear,
    goToNextYear,
    onResetDates,
    isStartDate,
  } = useDatepicker({
    startDate: dateState.startDate,
    endDate: dateState.endDate,
    focusedInput: dateState.focusedInput,
    onDatesChange: handleDateChange,
  });

  const months = [
    'January',
    'Feburary',
    'March',
    'April',
    'may',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const currMonth = months[activeMonths[0].month];
  const nextMonth = months[activeMonths[1].month];

  // Pass them as props to Day component For styling(border-radious)
  const startDay =
    dateState.startDate &&
    `${dateState.startDate.getMonth()}${dateState.startDate.getDate()}`;
  const endDay =
    dateState.endDate &&
    `${dateState.endDate.getMonth()}${dateState.endDate.getDate()}`;

  console.log('startdat', startDay);
  const handleOnClick = (id) => {
    switch (id) {
      case '1': {
        onResetDates();
        dispatch(heatingScheduleClear());
        setStartTime({
          hour: '00',
          minute: '00',
          division: 'am',
        });
        setEndTime({
          hour: '00',
          minute: '00',
          division: 'am',
        });
        return;
      }
      case '2': {
        dispatch(heatingScheduleCancel());
        return;
      }
      case '3': {
        dispatch(
          heatingScheduleDate({
            start: { date: dateState.startDate, time: startTime },
            end: { date: dateState.endDate, time: endTime },
          })
        );
        dispatch(heatingScheduleCancel());
        return;
      }
      default:
        return;
    }
  };

  console.log(endTime);

  return (
    <DatepickerContext.Provider
      value={{
        focusedDate,
        isDateFocused,
        isDateSelected,
        isDateHovered,
        isDateBlocked,
        isFirstOrLastSelectedDate,
        onDateSelect,
        onDateFocus,
        onDateHover,
      }}
    >
      <Wrapper>
        <BackgroundSvg src={'/images/calender-background.svg'} />

        <PositionAbsolute>
          <TitleWrapper>
            <IconAndTitleWrapper>
              <TitleIcon src={'/images/scheduler-icon.svg'} />
              <Title>start date - end date</Title>
            </IconAndTitleWrapper>
          </TitleWrapper>

          <CalendarWrapper>
            <Calendar>
              <YearAndMonthWrapper>
                <YearOuter>
                  <YearInner>
                    <YearTop>
                      <GoButton
                        src='/images/go-previous.svg'
                        onClick={() => goToPreviousYear(`1`)}
                      />
                      <YearTitle>{activeMonths[0].year}</YearTitle>
                      <GoButton
                        src='/images/go-next.svg'
                        onClick={() => goToNextYear('1')}
                      />
                    </YearTop>
                  </YearInner>
                </YearOuter>

                <MonthOuter>
                  <MonthInner>
                    <MonthTop>
                      <GoButton
                        src='/images/go-previous.svg'
                        onClick={goToPreviousMonths}
                      />
                      <MonthTitle>{currMonth}</MonthTitle>
                      <GoButton
                        src='/images/go-next.svg'
                        onClick={goToNextMonths}
                      />
                    </MonthTop>
                  </MonthInner>
                </MonthOuter>
              </YearAndMonthWrapper>
              <Month
                key={`${activeMonths[0].year}-${activeMonths[0].month}`}
                year={activeMonths[0].year}
                month={activeMonths[0].month}
                firstDayOfWeek={firstDayOfWeek}
                startDay={dateState.startDate && startDay}
                endDay={dateState.endDate && endDay}
              />
            </Calendar>

            <WatchWrapper>
              <TimePicker id='start' time={startTime} setTime={handleSetTime} />
            </WatchWrapper>

            <Calendar>
              <YearAndMonthWrapper>
                <YearOuter>
                  <YearInner>
                    <YearTop>
                      <GoButton />
                      <YearTitle>{activeMonths[1].year}</YearTitle>
                      <GoButton />
                    </YearTop>
                  </YearInner>
                </YearOuter>

                <MonthOuter>
                  <MonthInner>
                    <MonthTop>
                      <GoButton />
                      <MonthTitle>{nextMonth}</MonthTitle>
                      <GoButton />
                    </MonthTop>
                  </MonthInner>
                </MonthOuter>
              </YearAndMonthWrapper>

              <Month
                key={`${activeMonths[1].year}-${activeMonths[1].month}`}
                year={activeMonths[1].year}
                month={activeMonths[1].month}
                firstDayOfWeek={firstDayOfWeek}
                startDay={dateState.startDate && startDay}
                endDay={dateState.endDate && endDay}
              />
            </Calendar>

            <WatchWrapper>
              <TimePicker id='end' time={endTime} setTime={handleSetTime} />
            </WatchWrapper>
          </CalendarWrapper>

          <DisplayAndButtonWrapper>
            <DisplayDateWrapper>
              <DisplayDateOuter>
                <DisplayDateInner>
                  <DateTitleWrapper>
                    <DateTitle>start date</DateTitle>
                  </DateTitleWrapper>

                  <DisplayTop>
                    <Date>
                      {dateState.startDate
                        ? startDate
                        : 'Choose the start date'}
                      {dateState.startDate && ` - ${startTimeSet}`}
                    </Date>
                  </DisplayTop>
                </DisplayDateInner>
              </DisplayDateOuter>

              <DisplayDateOuter>
                <DisplayDateInner>
                  <DateTitleWrapper>
                    <DateTitle>end date</DateTitle>
                  </DateTitleWrapper>

                  <DisplayTop>
                    <Date>
                      {dateState.endDate ? endDate : 'Choose the end date'}

                      {dateState.endDate && ` -  ${endTimeSet}`}
                    </Date>
                  </DisplayTop>
                </DisplayDateInner>
              </DisplayDateOuter>
            </DisplayDateWrapper>

            <ButtonWrapper>
              <ButtonGroupWrapperInvisible></ButtonGroupWrapperInvisible>
              <ButtonGroupWrapper>
                <SchedulerButton
                  name='clear'
                  id='1'
                  onClickHandler={handleOnClick}
                />
                <SchedulerButton
                  name='cancel'
                  id='2'
                  onClickHandler={handleOnClick}
                />
                <SchedulerButton
                  name='apply'
                  id='3'
                  onClickHandler={handleOnClick}
                />
              </ButtonGroupWrapper>
            </ButtonWrapper>
          </DisplayAndButtonWrapper>
        </PositionAbsolute>
      </Wrapper>
    </DatepickerContext.Provider>
  );
};

export default ScheduleCalendar;

const Wrapper = styled.div`
  width: 825px;
  height: 445px;
  position: relative;

  /* background: transparent linear-gradient(180deg, #233A54 0%, #060D19 100%) 0% 0% no-repeat padding-box;
box-shadow: inset 0px 1px 1px #FFFFFF24, 0px 0px 3px #000000;
border: 0.5px solid #000000;
opacity: 1; */
`;
const BackgroundSvg = styled.img``;

const PositionAbsolute = styled.div`
  position: absolute;
  /* 825px/16rem */
  width: 51.5625rem;
  /* 445px/16rem */
  height: 27.8125rem;
  top: 0.3rem;
  left: 0.3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 11px 6px 8px 6px;
  /* padding-top: 11px;
  padding-bottom: 8px; */
`;

const TitleWrapper = styled.div`
  width: 100%;
`;
const IconAndTitleWrapper = styled.div`
  /* width: 302px; */
  width: 18.875rem;
  display: flex;
  justify-content: space-between;
`;
const TitleIcon = styled.img``;
const Title = styled.span`
  font-size: 16px;
  letter-spacing: 1.6px;
  text-transform: uppercase;
`;
const CalendarWrapper = styled.div`
  height: 273px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Calendar = styled.div`
  width: 266px;
  height: 273px;

  background: #142033 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 20px 20px 12px 12px;
  opacity: 1;

  padding: 0.1rem 0.1rem;

  /* display: flex;
  flex-direction: column; */
`;

const YearAndMonthWrapper = styled.div`
  height: 38px;
  width: 100%;

  ${flexboxCenter}
  justify-content: space-between;
  margin-bottom: 22px;
`;

const YearOuter = styled.div`
  width: 119px;
  height: 38px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 1px 1px #ffffff24, 0px 0px 3px #000000;
  border: 0.5px solid #000000;
  border-radius: 18px;
  opacity: 1;

  ${flexboxCenter}
`;
const YearInner = styled.div`
  width: 104px;
  height: 24px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 12px;
  opacity: 1;

  ${flexboxCenter}
`;
const YearTop = styled.div`
  width: 102px;
  height: 22px;

  border: 1px solid #233a54;
  border-radius: 16px;
  opacity: 1;

  ${flexboxCenter}
  &:first-child {
    justify-content: space-between;
  }
`;

const GoButton = styled.img`
  cursor: pointer;
`;

const YearTitle = styled.span`
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1.2px;
`;

const MonthOuter = styled.div`
  width: 140px;
  height: 38px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 1px 1px #ffffff24, 0px 0px 3px #000000;
  border: 0.5px solid #000000;
  border-radius: 18px;
  opacity: 1;

  ${flexboxCenter}
`;
const MonthInner = styled.div`
  width: 124px;
  height: 24px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 12px;
  opacity: 1;

  ${flexboxCenter}
`;
const MonthTop = styled.div`
  width: 122px;
  height: 22px;

  border: 1px solid #233a54;
  border-radius: 16px;
  opacity: 1;

  ${flexboxCenter}
  justify-content: space-between;
`;

const MonthTitle = styled.span`
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.1px;
`;

const WatchWrapper = styled.div`
  width: 130px;
  height: 273px;

  background: #142033 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 12px;
  opacity: 1;

  padding: 0.1rem;
`;

const DisplayAndButtonWrapper = styled.div`
  ${flexboxCenter}

  /* border: 1px solid blue; */
  width: 100%;
  height: 112px;
`;
const DisplayDateWrapper = styled.div`
  width: 50%;
  height: 112px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const DisplayDateOuter = styled.div`
  width: 406px;
  height: 54px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 27px;

  ${flexboxCenter}
`;

const DisplayDateInner = styled.div`
  width: 402px;
  height: 50px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 1px 1px #ffffff24, 0px 0px 3px #000000;
  border: 0.5px solid #000000;
  opacity: 1;

  border-radius: 27px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
`;

const DateTitleWrapper = styled.div`
  ${flexboxCenter}
  /* border: 1px solid red; */
  width: 31%;
`;
const DateTitle = styled.span`
  color: var(--unnamed-color-fcff01);
  font-size: 12px;
  letter-spacing: 1.2px;
  color: #fcff01;
  opacity: 1;
  text-transform: uppercase;
`;

const DisplayTop = styled.div`
  width: 259px;
  height: 36px;

  background: #142033 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 20px;
  opacity: 0.8;

  ${flexboxCenter}
`;

const Date = styled.span`
  /* text-align: left; */
  font-size: 10px;
  letter-spacing: 0.9px;
  color: #fcff01;
  opacity: 1;
  text-transform: uppercase;
`;

const ButtonWrapper = styled.div`
  width: 50%;
  height: 112px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;
const ButtonGroupWrapper = styled.div`
  width: 406px;
  height: 54px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 27px;
  opacity: 1;

  ${flexboxCenter}
  justify-content: space-between;
  padding: 0 0.15rem;
`;

const ButtonGroupWrapperInvisible = styled.div`
  width: 406px;
  height: 54px;
`;
