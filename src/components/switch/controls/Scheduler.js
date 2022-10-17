import styled from 'styled-components';
import { flexboxCenter } from '../../../styles/commonStyles';
import ScheduleCalendar from './HeatingSchedule/ScheduleCalendar';

const Scheduler = ({ handleOpenScheduler, start, end }) => {
  const displayStart =
    start.date !== null
      ? `${start.time.hour} : ${start.time.minute} ${
          start.time.division
        } - ${start.date.getDate()} / ${
          start.date.getMonth() + 1
        } / ${start.date.getFullYear()} `
      : ' -----------------';

  const displayEnd =
    end.date !== null
      ? `${end.time.hour} : ${end.time.minute} ${
          end.time.division
        } - ${end.date.getDate()} / ${
          end.date.getMonth() + 1
        } / ${end.date.getFullYear()} `
      : ' -----------------';

  return (
    <Wrapper>
      <ScheduleDisplayWrapper>
        <DateAndTimeWrapper>{displayStart} </DateAndTimeWrapper>
        <DateAndTimeWrapper>{displayEnd}</DateAndTimeWrapper>
      </ScheduleDisplayWrapper>
      <CalendarButton onClick={() => handleOpenScheduler(1)}>
        <Img src={'/images/calendar-button.svg'} />
      </CalendarButton>

      {/* {state.heatingScheduleDisplayed && (
        <SchedulerWrapper>
          <ScheduleCalendar
            state={state}
            handleScheduler={handleSchedulerDate}
            handleCancel={handleCancel}
            handleClear={handleClear}
          />
        </SchedulerWrapper>
      )} */}
    </Wrapper>
  );
};

export default Scheduler;

const Wrapper = styled.div`
  width: 270px;
  height: 50px;
  border-radius: 30px;
  background: transparent
    linear-gradient(180deg, var(--unnamed-color-233a54) 0%, #060d19 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 0px 0px 1px var(--unnamed-color-000000);
  border: 0.5px solid var(--unnamed-color-000000);
  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  opacity: 1;

  display: flex;
  align-items: center;
  padding-left: 10px;

  box-sizing: border-box;
`;

const ScheduleDisplayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  /* border: 1px solid red; */
`;

const DateAndTimeWrapper = styled.div`
  margin-bottom: 3px;
  width: 192px;
  height: 18px;
  /* UI Properties */
  background: var(--unnamed-color-233a54) 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px var(--unnamed-color-000000);
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 14px;
  opacity: 1;
  font-size: 8px;
  ${flexboxCenter}
`;

const CalendarButton = styled.button`
  width: 22px;
  height: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Img = styled.img``;

const SchedulerWrapper = styled.div`
  position: absolute;
  top: 1rem;
  z-index: 10000;
`;
