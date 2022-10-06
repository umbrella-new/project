import { useState } from 'react';
import styled from 'styled-components';
import { flexboxCenter } from '../../../../styles/commonStyles';

const TimePicker = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [time, setTime] = useState(null);
  const [minute, setMinute] = useState(null);

  const timeOption = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const minuteOptions = [10, 20, 30, 40, 50, 60];
  return (
    <>
      <TimeWrapper>
        <TimeOuter>
          <TimeInner>
            <TimeAndDivision></TimeAndDivision>
          </TimeInner>
        </TimeOuter>

        <DivisionWrapper>
          <DivisionOuter>
            <DivisionInner>
              <TimeAndDivision>a.m</TimeAndDivision>
            </DivisionInner>
          </DivisionOuter>
          <DivisionOuter>
            <DivisionInner>
              <TimeAndDivision>p.m</TimeAndDivision>
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

  ${flexboxCenter}
`;
const TimeAndDivision = styled.span`
  font-size: 14px;
  letter-spacing: 1.4px;
`;

const InputTime = styled.input``;

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

const Watch = styled.div`
  width: 100%;
  height: 190px;
`;
