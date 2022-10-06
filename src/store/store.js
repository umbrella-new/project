import { configureStore } from '@reduxjs/toolkit';
import heaterStatusSlice from './slices/heaterStatusSlice';
import essSwitchSlice from './slices/essSwitchSlice';
import userSlice from './slices/userSlice';

const store = configureStore({
  reducer: {
    ssrState: heaterStatusSlice.reducer,
    essSwitch: essSwitchSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
