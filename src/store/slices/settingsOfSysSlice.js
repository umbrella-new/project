import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  forceGasElectricState: false,
};

export const settingsOfSysSlice = createSlice({
  name: 'settingsOfSys',
  initialState,
  reducers: {
    setForceGasAndElectric: (state, action) => {
      state.forceGasElectricState = action.payload;
    },
  },
});

export const { setForceGasAndElectric } = settingsOfSysSlice.actions;
export const SelectSettingsOfSys = (state) => state.settingsOfSys;
export default settingsOfSysSlice;
