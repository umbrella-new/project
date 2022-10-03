import { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../context/Context';
import { flexboxCenter } from '../styles/commonStyles';

const DateAndWeather = () => {
  const { state } = useContext(Context);
  const { date, weather, iconSrc } = state.dateAndWeather;

  return (
    <Wrapper>
      <LongDash>
        <img alt='Long dash' src={'/images/long-dash.svg'} />
      </LongDash>
      <DateAndWeatherWrapper>
        <Date>{date ? date : 'september wednesday 21, 2022'}</Date>
        <WeatherIcon alt='weather icon' src={iconSrc} />
        <Weather>{weather ? weather : `15 Montreal`}</Weather>
      </DateAndWeatherWrapper>
      <LongDash>
        <img alt='Long dash' src={'/images/long-dash.svg'} />
      </LongDash>
    </Wrapper>
  );
};

export default DateAndWeather;

const Wrapper = styled.div`
  width: 550px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: var(--space3);
`;

const DateAndWeatherWrapper = styled.span`
  width: 350px;
  font-size: 10px;
  color: white;
  margin: 0 10px;
  ${flexboxCenter}
  justify-content: space-evenly;
`;

const LongDash = styled.div`
  width: 71px;
  ${flexboxCenter}
`;

const Date = styled.span`
  text-transform: uppercase;
`;

const WeatherIcon = styled.img``;
const Weather = styled.span`
  text-transform: uppercase;
`;
