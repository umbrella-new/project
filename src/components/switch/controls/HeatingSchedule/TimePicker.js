import { useState } from 'react';
import styled from 'styled-components';
import { flexboxCenter } from '../../../../styles/commonStyles';
import Clock from './Clock';
import TimeOption from './TimeOption';

const TimePicker = ({ time, setTime, id }) => {
  const [openHourSelector, setOpenHourSelector] = useState(false);
  const [openMinuteSelector, setOpenMinuteSelector] = useState(false);

  const timeOption = [
    `01`,
    `02`,
    `03`,
    `04`,
    `05`,
    `06`,
    `07`,
    `08`,
    `09`,
    10,
    11,
    12,
  ];
  const minuteOptions = ['00', 10, 20, 30, 40, 50, 60];

  const handleSetTime = (title, data) => {
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
      <Wrapper>
        <TimeAndDivisionWrapper>
          <TimeOuter>
            <TimeInner>
              <Hour onClick={() => setOpenHourSelector(true)}>{time.hour}</Hour>
              {openHourSelector && (
                <OptionAndTitleWrapper>
                  <Title>hour</Title>
                  <OptionWrapper>
                    {timeOption.map((time) => (
                      <TimeOption
                        key={time}
                        data={time}
                        setSelect={handleSetTime}
                        onClose={onClose}
                        title='hour'
                      />
                    ))}
                  </OptionWrapper>
                </OptionAndTitleWrapper>
              )}
              <Divider>:</Divider>
              <Minute onClick={() => setOpenMinuteSelector(true)}>
                {time.minute}
              </Minute>

              {openMinuteSelector && (
                <OptionAndTitleWrapper>
                  <Title>Minute</Title>
                  <OptionWrapper>
                    {minuteOptions.map((minute) => (
                      <TimeOption
                        key={minute}
                        data={minute}
                        setSelect={handleSetTime}
                        onClose={onClose}
                        title='minute'
                      />
                    ))}
                  </OptionWrapper>
                </OptionAndTitleWrapper>
              )}
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
        </TimeAndDivisionWrapper>
        <WatchWrapper>
          <Clock time={time} />
        </WatchWrapper>
      </Wrapper>
    </>
  );
};

export default TimePicker;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* add padding */
`;

const TimeAndDivisionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  position: relative;
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

const OptionAndTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 0rem;
  left: 0rem;
  z-index: 1000;
  overflow: hidden;

  width: 61px;
  height: 83px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 1px 1px #ffffff24, 0px 0px 3px #000000;
  border: 0.5px solid #000000;
  border-radius: 12px;
  opacity: 1;
`;
const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  overflow: auto;
  scroll-behavior: smooth;

  width: 53px;
  height: 60px;
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 8px;
  opacity: 1;
`;

const Title = styled.div`
  font-size: 8px;
  text-align: center;
  color: #fff;

  width: 53px;
  height: 14px;
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 6px #000000;
  border-radius: 8px;
  opacity: 1;

  ${flexboxCenter}
`;

const DivisionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
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
`;

const WatchWrapper = styled.div`
  width: 100%;
  height: 180px;
`;
