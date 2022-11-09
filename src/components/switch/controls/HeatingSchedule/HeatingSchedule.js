import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  heatingScheduleBeReady,
  selectEssSwitch,
  heatingScheduleOpen,
  heatingScheduleCancel,
  heatingScheduleClear,
  heatingScheduleDate,
  activateEsConflictMessage,
  addHeatingSchedule,
} from '../../../../store/slices/essSwitchSlice';
import { selectTgsSwitch } from '../../../../store/slices/tgsSwitchSlice';

import { flexboxCenter } from '../../../../styles/commonStyles';

import AddScheduleButton from '../AddScheduleButton';
import ControllerName from '../ControllerName';
import Scheduler from '../Scheduler';
import TempAndButton from '../TempAndButton';
import ScheduleCalendar from './ScheduleCalendar';

const HeatingSchedule = () => {
  const CONTROLLER_NAME = 'heating schedule program';
  const IMG_SRC = '/images/heating-Schedule-Program-Logo.svg';

  const state = useSelector(selectEssSwitch);
  const { isReady, inputTemp, activated } = state.heatingSchedule;
  const { heatingScheduleCalendar, heatingScheduleList } = state;

  const firstHeatingSchedule = heatingScheduleList[0];
  const { start, end } = firstHeatingSchedule;

  const tgsState = useSelector(selectTgsSwitch);
  const { isTgsSwitchActivated } = tgsState;

  const dispatch = useDispatch();

  const handleDispatch = (temp) => {
    if (!isTgsSwitchActivated) {
      dispatch(heatingScheduleBeReady(temp));
    } else {
      // Activate Conflict Message Box
      dispatch(activateEsConflictMessage());
    }
  };

  // Schedule calendar handlers
  const handleOpenScheduler = (id) => {
    dispatch(heatingScheduleOpen(id));
  };

  const handleClear = () => {
    dispatch(heatingScheduleClear());
  };
  const handleCancel = () => {
    dispatch(heatingScheduleCancel());
  };

  const handleDispatchSchedulerDate = (data, id) => {
    // Check is it the first schedule or not
    if (id === 1) {
      dispatch(
        heatingScheduleDate({
          start: data.start,
          end: data.end,
        })
      );
    } else {
      dispatch(
        addHeatingSchedule({
          start: data.start,
          end: data.end,
        })
      );
    }

    dispatch(heatingScheduleCancel());
  };

  return (
    <Wrapper>
      <ControllerName isEnable={true} name={CONTROLLER_NAME} imgSrc={IMG_SRC} />

      <SchedulerWrapper>
        <ScheduleSetTitleAndButton>
          <ScheduleSetTitle>start date - end date</ScheduleSetTitle>
          <AddScheduleButton
            handleOpenScheduler={handleOpenScheduler}
            isVisible={start.date}
          />
        </ScheduleSetTitleAndButton>
        <SchedulerCenter>
          <Scheduler
            handleOpenScheduler={handleOpenScheduler}
            start={heatingScheduleList[0].start}
            end={heatingScheduleList[0].end}
          />
        </SchedulerCenter>
      </SchedulerWrapper>

      <TempAndButton
        isEnable={true}
        buttonHandler={handleDispatch}
        isActivated={activated}
        isReady={isReady}
        title='scheduler'
        currTemp={inputTemp}
        isAble={start}
      />

      {heatingScheduleCalendar.isDisplayed && (
        <ScheduleCalendarWrapper>
          <ScheduleCalendar
            handleScheduler={handleDispatchSchedulerDate}
            handleCancel={handleCancel}
            handleClear={handleClear}
            start={start}
            end={end}
            unit={heatingScheduleCalendar.id}
          />
        </ScheduleCalendarWrapper>
      )}
    </Wrapper>
  );
};

export default HeatingSchedule;

const Wrapper = styled.li`
  width: var(--controller-width);
  height: 142px;

  background: transparent linear-gradient(90deg, #233a54 0%, #060d19 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 4px;

  ${flexboxCenter}

  flex-direction: column;
  justify-content: space-evenly;
`;

const SchedulerWrapper = styled.div`
  width: 272px;
  height: 74px;
  /* UI Properties */

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 10px 10px 26px 26px;

  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const SchedulerCenter = styled.div`
  ${flexboxCenter}
`;

const ScheduleSetTitleAndButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 2px;
  /* border: 1px solid red; */
`;

const ScheduleSetTitle = styled.span`
  height: 12px;
  font-size: 8px;
  margin-right: 55px;
`;

const ScheduleCalendarWrapper = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  z-index: 10000;
`;
