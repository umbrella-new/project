import { useState } from 'react';
import styled from 'styled-components';
import { flexboxCenter } from '../../../../styles/commonStyles';
import TimeOption from './TimeOption';

const TimePicker = ({ time, setTime, id }) => {
  const [openHourSelector, setOpenHourSelector] = useState(false);
  const [openMinuteSelector, setOpenMinuteSelector] = useState(false);

  // const [division, setDivision] = useState('am');
  // const [hour, setHour] = useState('00');
  // const [minute, setMinute] = useState('00');

  const timeOption = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const minuteOptions = [10, 20, 30, 40, 50, 60];

  const handleSetTime = (title, data) => {
    console.log(title, data);
    switch (title) {
      case 'division': {
        setTime({ ...time, division: data }, id);
        return;
      }
      case 'hour': {
        setTime({ ...time, hour: data }, id);
        return;
      }
      case 'minute': {
        setTime({ ...time, minute: data }, id);
        return;
      }
      default:
        return;
    }
  };

  // const handleDivision = (division) => {
  //   setDivision(division);
  //   handleSetTime();
  // };

  const onClose = (title) => {
    if (title === 'hour') {
      setOpenHourSelector(false);
    } else {
      setOpenMinuteSelector(false);
    }
  };

  // const handleSetTime = (id) => {
  //   const time = `${hour}:${minute} ${division}`;
  //   console.log(time);
  // };

  return (
    <>
      <TimeWrapper>
        <TimeOuter>
          <TimeInner>
            <Hour onClick={() => setOpenHourSelector(true)}>{time.hour}</Hour>
            <HourOptionWrapper>
              {openHourSelector &&
                timeOption.map((time) => (
                  <TimeOption
                    key={time}
                    data={time}
                    setSelect={handleSetTime}
                    onClose={onClose}
                    title='hour'
                  />
                ))}
            </HourOptionWrapper>
            <Divider>:</Divider>
            <Minute onClick={() => setOpenMinuteSelector(true)}>
              {time.minute}
            </Minute>
            <MinuteOptionWrapper>
              {openMinuteSelector &&
                minuteOptions.map((minute) => (
                  <TimeOption
                    key={minute}
                    data={minute}
                    setSelect={handleSetTime}
                    onClose={onClose}
                    title='minute'
                  />
                ))}
            </MinuteOptionWrapper>
          </TimeInner>
        </TimeOuter>

        <DivisionWrapper>
          <DivisionOuter>
            <DivisionInner>
              <Division
                isSelected={time.division === 'am' ? true : false}
                onClick={() => handleSetTime('division', 'am')}
              >
                a.m
              </Division>
            </DivisionInner>
          </DivisionOuter>
          <DivisionOuter>
            <DivisionInner>
              <Division
                isSelected={time.division === 'pm' ? true : false}
                onClick={() => handleSetTime('division', 'pm')}
              >
                p.m
              </Division>
            </DivisionInner>
          </DivisionOuter>
        </DivisionWrapper>
      </TimeWrapper>
    </>
  );
};

export default TimePicker;

const TimeWrapper = styled.div`
  width: 100%;
  height: 82px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  /* add padding */
`;
const TimeOuter = styled.div`
  width: 61px;
  height: 83px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 1px 1px #ffffff24, 0px 0px 3px #000000;
  border: 0.5px solid #000000;
  opacity: 1;

  border-radius: 10px;
  ${flexboxCenter}
`;
const TimeInner = styled.div`
  width: 53px;
  height: 77px;

  background: #142033 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 8px;
  opacity: 0.8;
  /* border: 1px solid red; */
  /* ${flexboxCenter} */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
`;
const Hour = styled.button`
  font-size: 14px;
`;
const Divider = styled.span`
  font-size: 12px;
`;
const Minute = styled.button`
  font-size: 14px;
  /* letter-spacing: 1.4px; */
`;

const HourOptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 3rem;
  left: 0rem;
`;

const MinuteOptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 3rem;
  right: 0.3rem;
`;

const DivisionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;
const DivisionOuter = styled.div`
  width: 61px;
  height: 39px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 1px 1px #ffffff24, 0px 0px 3px #000000;
  border: 0.5px solid #000000;
  border-radius: 12px;
  opacity: 1;

  ${flexboxCenter}
`;
const DivisionInner = styled.div`
  width: 53px;
  height: 31px;
  background: var(--unnamed-color-142033) 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px var(--unnamed-color-000000);
  background: #142033 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 8px;
  opacity: 0.8;

  ${flexboxCenter}
`;

const Division = styled.button`
  font-size: 14px;
  letter-spacing: 1.4px;
  color: ${(p) => (p.isSelected ? '#ffff' : '#808080')};
  text-transform: uppercase;
`;

const Watch = styled.div`
  width: 100%;
  height: 190px;
`;
