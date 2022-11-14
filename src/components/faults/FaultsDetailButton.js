import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectFaults } from "../../store/slices/faultsSlice";
import { handleSaveTimer, selectTimer } from "../../store/slices/timerSlice";
import moment from "moment";

import styled, { css } from "styled-components";
import { flexboxCenter } from "../../styles/commonStyles";

const FaultsDetailButton = ({
  name,
  title,
  handleButtonClick,
  column,
  faultsNumber,
  buttonNum,
}) => {
  const faultsState = useSelector(selectFaults);
  const { isForceButtonClicked, isForceButtonActivated, selectedForce } =
    faultsState.ess;
  const { activatedResetButton, resetCounter, attendButtonClicked } =
    name === "tgs" ? faultsState.tgs : faultsState.ess;

  // *********************timer
  const timerState = useSelector(selectTimer);
  const { setMinuites, setTime, pauseTime } = timerState;
  const dispatch = useDispatch();

  const [countdown, setCountdown] = useState(null);
  const [durationMinuites, setDurationMinutes] = useState(null);

  useEffect(() => {
    dispatch(handleSaveTimer(durationMinuites));
  }, [durationMinuites]);

  useEffect(() => {
    const currentTime = moment();
    const targetTime = moment().add(setMinuites, "minutes");
    const currentUnix = currentTime.unix();
    const targetUnix = targetTime.unix();
    const leftTime = targetUnix - currentUnix;
    let duration = moment.duration(leftTime, "seconds");

    let setTimer;
    clearInterval(setTimer);
    const timer = () => {
      clearInterval(setTimer);
      setTimer = setInterval(() => {
        if (duration.asSeconds <= 0) {
          clearInterval(setTimer);
          return false;
        } else {
          duration = moment.duration(duration.asSeconds() - 1, "seconds");

          const durationM = duration._milliseconds / (1000 * 60);
          setDurationMinutes(durationM);

          setCountdown({
            hours:
              duration._data.hours + duration._data.days * 24 < 10
                ? "0" + duration.hours()
                : duration._data.hours + duration._data.days * 24,
            minutes:
              duration.minutes() < 10
                ? "0" + duration.minutes()
                : duration.minutes(),
            seconds:
              duration.seconds() < 10
                ? "0" + duration.seconds()
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

  // *********************

  // Make button disabled depending on tgs fault types
  const tgsDisable =
    name === "tgs" && faultsNumber === 2 && buttonNum === 0 ? true : false;

  // Make button disabled depending on ess and tes fault types (more conditions than tgs)
  const essDisable =
    (name !== "tgs" && faultsNumber == 0) || faultsNumber == 3 ? true : false;
  const essDisableMoreCondition = essDisable && buttonNum === 1;

  const disable = name === "tgs" ? tgsDisable : essDisableMoreCondition;

  // Make some buttons invisible depending on ess, tes fault types
  const inVisible =
    name !== "tgs" && buttonNum == 0 && faultsNumber !== 2 ? true : false;

  // ***************for styling in force button **************
  const forceBtnClicked = isForceButtonClicked && title === "force";
  const forceBtnActivated = isForceButtonActivated && title === "force";
  // ******************************************

  // ***************for styling in reset button **************
  const resetBtnActivated =
    activatedResetButton.faultsIdx === faultsNumber && title === "reset";
  // ******************************************

  // ***************for styling in reset button **************
  const attendBtnClicked =
    attendButtonClicked.faultsIdx === faultsNumber && title === "attend";
  // ******************************************

  const forceTypeTitle =
    selectedForce === "change and replace t/c" ? "system off" : "remaining";
  return (
    <WrapperHole
      onClick={() =>
        forceBtnActivated ||
        handleButtonClick(name, title, column, faultsNumber)
      }
      inVisible={inVisible}
      disable={disable}
      forceBtnClicked={forceBtnClicked}
      attendBtnClicked={attendBtnClicked}
      forceBtnActivated={forceBtnActivated}
    >
      <ButtonInner
        disable={disable}
        forceBtnActivated={forceBtnActivated}
        resetBtnActivated={resetBtnActivated}
      >
        <ButtonInnerHole
          disable={disable}
          forceBtnActivated={forceBtnActivated}
          resetBtnActivated={resetBtnActivated}
        >
          <ButtonTop
            disable={disable}
            forceBtnActivated={forceBtnActivated}
            resetBtnActivated={resetBtnActivated}
          >
            <Title
              forceBtnActivated={forceBtnActivated}
              resetBtnActivated={resetBtnActivated}
            >
              {title}
            </Title>
            {forceBtnActivated && (
              <ForceTop>
                <ForceTitle>
                  {forceTypeTitle}
                  {forceTypeTitle === "remaining" &&
                    countdown &&
                    `      ${countdown.hours} : ${countdown.minutes} : ${countdown.seconds}`}
                </ForceTitle>
              </ForceTop>
            )}
          </ButtonTop>
        </ButtonInnerHole>
      </ButtonInner>
    </WrapperHole>
  );
};

export default FaultsDetailButton;

const WrapperHole = styled.button`
  cursor: pointer;
  ${flexboxCenter};

  width: 88px;
  height: 28px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 1px #000000;
  border-radius: 27px;

  margin-left: 0.2rem;
  ${(p) =>
    p.inVisible &&
    css`
      display: none;
    `}
  ${(p) =>
    p.inVisible &&
    css`
      display: none;
    `}

    ${(p) =>
    p.disable &&
    css`
      pointer-events: none;
    `}

    ${(p) =>
    p.forceBtnClicked &&
    css`
      border: 1px solid #95ff45;
    `}

    ${(p) =>
    p.attendBtnClicked &&
    css`
      border: 1px solid #95ff45;
    `}

    ${(p) =>
    p.forceBtnActivated &&
    css`
      width: 183px;
      height: 28px;
    `}
`;
const ButtonInner = styled.div`
  ${flexboxCenter};

  width: 86px;
  height: 26px;

  border: 0.5px solid var(--unnamed-color-000000);
  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px;
  border-radius: 25px;

  ${(p) =>
    p.disable &&
    css`
      background: transparent linear-gradient(180deg, #565656 0%, #1d1d1d 100%)
        0% 0% no-repeat padding-box;
      box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
      border: 0.5px solid #000000;
    `}

  ${(p) =>
    p.forceBtnActivated &&
    css`
      width: 181px;
      height: 26px;
      background: transparent linear-gradient(180deg, #db9d0c 0%, #946f18 100%)
        0% 0% no-repeat padding-box;
      box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
      border: 0.5px solid #000000;
    `}

    ${(p) =>
    p.resetBtnActivated &&
    css`
      background: transparent linear-gradient(180deg, #db9d0c 0%, #946f18 100%)
        0% 0% no-repeat padding-box;
      box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
      border: 0.5px solid #000000;
    `}
`;
const ButtonInnerHole = styled.div`
  ${flexboxCenter};

  width: 80px;
  height: 20px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 1px #000000;
  border-radius: 20px;
  ${(p) =>
    p.disable &&
    css`
      background: #3b3b3b 0% 0% no-repeat padding-box;
      box-shadow: inset 0px 0px 1px #000000;
    `}

  ${(p) =>
    p.forceBtnActivated &&
    css`
      width: 175px;
      height: 20px;
      background: #946f18 0% 0% no-repeat padding-box;
      box-shadow: inset 0px 0px 1px #000000;
    `}

    ${(p) =>
    p.resetBtnActivated &&
    css`
      background: #946f18 0% 0% no-repeat padding-box;
      box-shadow: inset 0px 0px 1px #000000;
    `}
`;
const ButtonTop = styled.div`
  ${flexboxCenter};

  width: 78px;
  height: 18px;

  background: transparent linear-gradient(180deg, #233a54 0%, #060d19 100%) 0%
    0% no-repeat padding-box;
  box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
  border: 0.5px solid #000000;
  border-radius: 25px;
  ${(p) =>
    p.disable &&
    css`
      background: transparent linear-gradient(180deg, #565656 0%, #1d1d1d 100%)
        0% 0% no-repeat padding-box;
      box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
      border: 0.5px solid #000000;
    `}

  ${(p) =>
    p.forceBtnActivated &&
    css`
      width: 173px;
      height: 18px;
      background: transparent linear-gradient(180deg, #db9d0c 0%, #946f18 100%)
        0% 0% no-repeat padding-box;
      box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
      border: 0.5px solid #000000;
      justify-content: space-between;
      padding: 0 0.05rem 0 0.2rem;
      cursor: default;
    `}

    
    ${(p) =>
    p.resetBtnActivated &&
    css`
      background: transparent linear-gradient(180deg, #db9d0c 0%, #946f18 100%)
        0% 0% no-repeat padding-box;
      box-shadow: inset 0px 0.5px 1px #ffffff24, 0px 0px 1px #000000;
      border: 0.5px solid #000000;
    `}
`;

const Title = styled.span`
  font-size: 8px;
  text-align: center;

  ${(p) =>
    p.forceBtnActivated &&
    css`
      color: #233a54;
    `}

  ${(p) =>
    p.resetBtnActivated &&
    css`
      color: #233a54;
    `}
`;

const ForceTop = styled.div`
  width: 127px;
  height: 14px;
  background: #db9d0c 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 1px #000000;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const ForceTitle = styled.span`
  color: #233a54;
  font-size: 7px;
`;
