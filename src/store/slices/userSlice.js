import { createSlice } from '@reduxjs/toolkit';

// this slice is for the user information

// const date = new Date();

const initialState = {
  isEssSwitch: false,
  isTesSwitch: true,
  isExpanded: false,
  isPasswordOpen: false,
  isAdministrator: false,
  adminPassword: 'ATEF61',
  dateAndWeather: {
    date: null,
    weather: null,
    iconSrc: '/images/weather-sunny.svg',
  },
  userId: null,
  currentTemp: null,
  outSideTemp: null,
  enclosureTemp: null,
  hoursOfUsage: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAdminAccess: (state, action) => {
      state.isAdministrator = action.payload;
    },
    handlePasswordPropagation: (state, action) => {
      state.isPasswordOpen = action.payload;
    },
    handleDisplaySSRDetails: (state) => {
      state.isExpanded = !state.isExpanded;
    },
    handleTesSwitch: (state, action) => {
      state.isTesSwitch = action.payload;
    },
  },
});

export default userSlice;
export const selectUserState = (state) => state.user;
export const {
  setAdminAccess,
  handlePasswordPropagation,
  handleDisplaySSRDetails,
  handleTesSwitch,
} = userSlice.actions;
