import { createSlice } from '@reduxjs/toolkit';

// this slice is for the user information

// const date = new Date();

const initialState = {
  isEssSwitch: false,
  isTesSwitch: true,
  isPasswordOpen: false,
  isAdministrator: false,
  adminPassword: 'ATEF61',
  isKeyboardActivated: false,
  dateAndWeather: {
    date: null,
    weather: null,
    iconSrc: '/images/weather-sunny.svg',
  },
  userId: null,
  switchName: null,
  currentTemp: null,
  outSideTemp: null,
  enclosureTemp: null,
  hoursOfUsage: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    activateKeyboard: (state) => {
      console.log('here');
      state.isKeyboardActivated = !state.isKeyboardActivated;
    },
    setAdminAccess: (state, action) => {
      state.isAdministrator = action.payload;
    },
    handlePasswordPropagation: (state, action) => {
      state.isPasswordOpen = action.payload;
    },
  },
});

export default userSlice;
export const selectUserState = (state) => state.user;
export const { activateKeyboard, setAdminAccess, handlePasswordPropagation } =
  userSlice.actions;
