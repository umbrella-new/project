import { createSlice } from '@reduxjs/toolkit';

// this slice is for the user information

// const date = new Date();

const initialState = {
  isEssSwitch: true,
  isAdministrator: true,
  dateAndWeather: {
    date: null,
    weather: null,
    iconSrc: '/images/weather-sunny.svg',
  },
  userId: null,
  switchName: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default userSlice;
export const selectUserState = (state) => state.user;
