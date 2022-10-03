import { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../../../context/Context';
import { flexboxCenter } from '../../../../styles/commonStyles';
import SchedulerButton from './SchedulerButton';

const ScheduleCalendar = () => {
  const { dispatch, state } = useContext(Context);

  const handleOnClick = (id) => {
    switch (id) {
      case '1': {
        return;
      }
      case '2': {
        return;
      }
      case '3': {
        dispatch({ type: 'heatingSchedule-scheduler' });
        return;
      }
    }
  };

  return (
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
              <YearAndMonthOuter>
                <YearAndMonthInner>
                  <YearAndMonthTop>
                    <YearAndMonthTitle>2021</YearAndMonthTitle>
                  </YearAndMonthTop>
                </YearAndMonthInner>
              </YearAndMonthOuter>

              <YearAndMonthOuter>
                <YearAndMonthInner>
                  <YearAndMonthTop>
                    <YearAndMonthTitle>december</YearAndMonthTitle>
                  </YearAndMonthTop>
                </YearAndMonthInner>
              </YearAndMonthOuter>
            </YearAndMonthWrapper>
          </Calendar>
          <WatchWrapper>
            <TimeWrapper>
              <TimeOuter>
                <TimeInner>
                  <TimeAndDivision>3:50</TimeAndDivision>
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
            <Watch></Watch>
          </WatchWrapper>

          <Calendar>
            <YearAndMonthWrapper>
              <YearAndMonthOuter>
                <YearAndMonthInner>
                  <YearAndMonthTop>
                    <YearAndMonthTitle>2022</YearAndMonthTitle>
                  </YearAndMonthTop>
                </YearAndMonthInner>
              </YearAndMonthOuter>

              <YearAndMonthOuter>
                <YearAndMonthInner>
                  <YearAndMonthTop>
                    <YearAndMonthTitle>January</YearAndMonthTitle>
                  </YearAndMonthTop>
                </YearAndMonthInner>
              </YearAndMonthOuter>
            </YearAndMonthWrapper>
          </Calendar>

          <WatchWrapper>
            <TimeWrapper>
              <TimeOuter>
                <TimeInner>
                  <TimeAndDivision>4:50</TimeAndDivision>
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
            <Watch></Watch>
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
                  <Date>2021/december/sat 25-3:50a.m.</Date>
                </DisplayTop>
              </DisplayDateInner>
            </DisplayDateOuter>

            <DisplayDateOuter>
              <DisplayDateInner>
                <DateTitleWrapper>
                  <DateTitle>end date</DateTitle>
                </DateTitleWrapper>

                <DisplayTop>
                  <Date>2022/february/sun 06-4:50a.m.</Date>
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
`;

const YearAndMonthWrapper = styled.div`
  height: 38px;
  width: 100%;

  ${flexboxCenter}
  justify-content: space-between;
`;

const YearAndMonthOuter = styled.div`
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
const YearAndMonthInner = styled.div`
  width: 104px;
  height: 24px;

  background: #1b2b44 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 12px;
  opacity: 1;

  ${flexboxCenter}
`;
const YearAndMonthTop = styled.div`
  width: 102px;
  height: 22px;

  border: 1px solid #233a54;
  border-radius: 16px;
  opacity: 1;

  ${flexboxCenter}
`;
const YearAndMonthTitle = styled.span`
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1.2px;
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
  color: var(--unnamed-color-fcff01);
  text-align: left;
  font-size: 10px;
  letter-spacing: 1px;
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
