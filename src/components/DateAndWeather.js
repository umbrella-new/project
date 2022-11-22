import { useSelector } from 'react-redux';
import { selectUserState } from '../store/slices/userSlice';

import styled, { css } from 'styled-components';
import { flexboxCenter } from '../styles/commonStyles';
import { selectSettingsOfEss } from '../store/slices/settingsOfEssSlice';

const DateAndWeather = () => {
  // redux
  const state = useSelector(selectSettingsOfEss);
  const userState = useSelector(selectUserState);
  const mode = state.interfaceMode;
  const { date, weather, iconSrc } = userState.dateAndWeather;

  const imageDash = mode ? 'images/greyLongDash.svg' : '/images/long-dash.svg';

  return (
    <Wrapper>
      <LongDash>
        <Img alt='Long dash' src={imageDash} />
      </LongDash>
      <DateAndWeatherWrapper>
        <Date interfaceMode={mode}>
          {date ? date : 'september wednesday 21, 2022'}
        </Date>
        <WeatherIcon alt='weather icon' src={iconSrc} />
        <Weather interfaceMode={mode}>
          {weather ? weather : `27 °F Montreal`}
        </Weather>
      </DateAndWeatherWrapper>
      <LongDash>
        <Img alt='Long dash' src={imageDash} />
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

const Img = styled.img``;

const Date = styled.span`
  ${({ interfaceMode }) =>
    interfaceMode
      ? css`
          color: #1b2b44;
        `
      : css`
          color: #ffff;
        `}
`;

const WeatherIcon = styled.img``;
const Weather = styled.span`
  ${({ interfaceMode }) =>
    interfaceMode
      ? css`
          color: #1b2b44;
        `
      : css`
          color: #ffff;
        `}
`;
