import { configureStore } from '@reduxjs/toolkit';
import heaterStatusSlice from './slices/heaterStatusSlice';
import essSwitchSlice from './slices/essSwitchSlice';
import userSlice from './slices/userSlice';
import tgsSwitchSlice from './slices/tgsSwitchSlice';
import settingsOfEssSlice from './slices/settingsOfEssSlice';
import chartSlice from './slices/chartSlice';
import faultsSlice from './slices/faultsSlice';

import ssrDescriptionSlice from './slices/ssrDescriptionSlice';


const store = configureStore({
  reducer: {
    ssrState: heaterStatusSlice.reducer,
    essSwitch: essSwitchSlice.reducer,
    user: userSlice.reducer,
    tgsSwitch: tgsSwitchSlice.reducer,
    settingsOfEss: settingsOfEssSlice.reducer,
    chart: chartSlice.reducer,
    faultsState: faultsSlice.reducer,

    ssrDescription: ssrDescriptionSlice.reducer,

  },
});

export default store;
