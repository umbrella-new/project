import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { handleTimerOff, selectFaults } from '../../store/slices/faultsSlice';
import { handleSaveTimer, selectTimer } from '../../store/slices/timerSlice';
import moment from 'moment';

import { flexboxCenter } from '../../styles/commonStyles';

const DisplayForceSelectionBox = () => {
  const faultsState = useSelector(selectFaults);
  const { selectedForce, timerDescriptions } = faultsState.ess;
  const timerState = useSelector(selectTimer);
  const { setMinuites, setTime, pauseTime } = timerState;
  const dispatch = useDispatch();

  const initialState =
    selectedForce === 'change and replace t/c' ? true : false;

  const [selectedOption, setSelectedOption] = useState(initialState);

  // **************************
  const [countdown, setCountdown] = useState(null);
  const [durationMinuites, setDurationMinutes] = useState(null);

  useEffect(() => {
    dispatch(handleSaveTimer(durationMinuites));
  }, [durationMinuites]);

  useEffect(() => {
    const currentTime = moment();
    const targetTime = moment().add(setMinuites, 'minutes');
    const currentUnix = currentTime.unix();
    const targetUnix = targetTime.unix();
    const leftTime = targetUnix - currentUnix;
    let duration = moment.duration(leftTime, 'seconds');

    let setTimer;
    clearInterval(setTimer);
    const timer = () => {
      clearInterval(setTimer);
      setTimer = setInterval(() => {
        if (duration.asSeconds <= 0) {
          clearInterval(setTimer);
          return false;
        } else {
          duration = moment.duration(duration.asSeconds() + 1, 'seconds');

          const durationM = duration._milliseconds / (1000 * 60);
          setDurationMinutes(durationM);

          setCountdown({
            hours:
              duration._data.hours + duration._data.days * 24 < 10
                ? '0' + duration.hours()
                : duration._data.hours + duration._data.days * 24,
            minutes:
              duration.minutes() < 10
                ? '0' + duration.minutes()
                : duration.minutes(),
            seconds:
              duration.seconds() < 10
                ? '0' + duration.seconds()
                : duration.seconds(),
          });
        }
      }, 1000);
    };

    timer();

    // // return current time, 남은시간!
    // return () => {
    //   clearInterval(setTimer);
    //   console.log("here", durationMinuites);
    // };
  }, []);

  // ******************************

  return (
    <WrapperHole>
      <Wrapper>
        <InnerHole>
          <Tophole>
            <Top>
              {selectedOption ? (
                <>
                  <MainContent option={true}>system off</MainContent>
                  <SubContent>
                    change & <br></br> repace t/c
                  </SubContent>
                </>
              ) : (
                <>
                  <MainContent>
                    {countdown &&
                      `${countdown.hours} : ${countdown.minutes} : ${countdown.seconds}`}
                  </MainContent>
                  {timerDescriptions ? (
                    <SubContent>
                      max <br></br> heat <br></br> 3 days
                    </SubContent>
                  ) : (
                    <SubContent>
                      max <br></br> heat <br></br> {setTime} hrs
                    </SubContent>
                  )}
                </>
              )}
            </Top>
          </Tophole>
        </InnerHole>
      </Wrapper>
    </WrapperHole>
  );
};
export default DisplayForceSelectionBox;

const WrapperHole = styled.div`
  width: 149px;
  height: 44px;
  border-radius: 10px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border: 0.5px solid #1b2b44;

  ${flexboxCenter};
`;

const Wrapper = styled.div`
  width: 147px;
  height: 42px;

  background: transparent linear-gradient(90deg, #233a54 0%, #060d19 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 9px;

  ${flexboxCenter}
`;
const InnerHole = styled.div`
  width: 141px;
  height: 36px;
  border-radius: 7px;

  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;

  ${flexboxCenter}
`;
const Tophole = styled.div`
  width: 138px;
  height: 33px;
  border-radius: 6px;

  background: transparent linear-gradient(180deg, #50412e 0%, #ff920c 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 0px 2px #000000;

  ${flexboxCenter}
`;
const Top = styled.div`
  width: 132px;
  height: 27px;

  background: transparent linear-gradient(180deg, #50412e 0%, #ff920c 100%) 0%
    0% no-repeat padding-box;
  border: 1px solid #ff920c;
  border-radius: 4px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.1rem;
`;

const MainContent = styled.div`
  display: inline;
  white-space: nowrap;
  margin-left: 0.3rem;
  text-align: center;
  font-size: 12px;
  color: #233a54;
  width: 60%;
  ${(p) =>
    p.option &&
    css`
      font-size: 9px;
    `}
  ${flexboxCenter}
`;
const SubContent = styled.div`
  color: #233a54;
  font-size: 7px;
  text-align: right;
  line-height: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
`;
const Divider = styled.div`
  width: 0px;
  height: 14px;
  border: 0.5px solid #fcff01;
`;
