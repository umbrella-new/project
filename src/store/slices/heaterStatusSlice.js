import { createSlice } from '@reduxjs/toolkit';

const ssrInitialState = {
  select: 'tc-01',
  buttonStatus: true,
  current: [2.95, null, null],
  wattage: [1400, null, null],
  voltage: [240, null, null],
  length: [2.1, null, null],
  description: [
    `RS-CRIB HEATER - TRSC - 7L-2S-A48`,
    `RS-CRIB HEATER - TRSC - 7L-2S-A48`,
    `RS-CRIB HEATER - TRSC - 7L-2S-A48`,
  ],
};

const heaterStatusSlice = createSlice({
  name: 'ssrState',
  initialState: {
    ssr1: { ...ssrInitialState },
    ssr2: { ...ssrInitialState, buttonStatus: 'flt' },
    ssr3: { ...ssrInitialState },
    ssr4: { ...ssrInitialState },
    ssr5: { ...ssrInitialState },
    ssr6: { ...ssrInitialState },
    ssr7: { ...ssrInitialState },
    ssr8: { ...ssrInitialState },
  },
  reducers: {
    toggle: (state, action) => {
      state[action.payload].buttonStatus = !state[action.payload].buttonStatus;
    },
    changeSwitch: (state, action) => {
      console.log(action.payload);
    },
    selector: (state, action) => {
      console.log(action.payload.id);
      state[action.payload.id].select = action.payload.data;
    },
    current: (state, action) => {
      state[action.id].current[action.index] = action.data;
    },
  },
});

export default heaterStatusSlice;
export const selectSSRState = (state) => state.ssrState;
export const { toggle, changeSwitch, selector, current } =
  heaterStatusSlice.actions;
