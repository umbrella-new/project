import { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../../context/Context';

const Scheduler = () => {
  const { dispatch, state } = useContext(Context);
  // console.log(state.heatingSchedule.isActivated);
  return (
    <Wrapper>
      <DateWrapper>
        <StartDate></StartDate>
        <EndDate></EndDate>
      </DateWrapper>
      <CalendarButton
        onClick={() => dispatch({ type: 'heatingSchedule-scheduler' })}
      >
        <Img src={'/images/calendar-button.svg'} />
      </CalendarButton>
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

const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

const StartDate = styled.div`
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
`;
const EndDate = styled.div`
  /* Layout Properties */

  width: 192px;
  height: 18px;
  /* UI Properties */
  background: var(--unnamed-color-233a54) 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px var(--unnamed-color-000000);
  background: #233a54 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 3px #000000;
  border-radius: 14px;
  opacity: 1;
`;

const CalendarButton = styled.button`
  width: 22px;
  height: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Img = styled.img``;
