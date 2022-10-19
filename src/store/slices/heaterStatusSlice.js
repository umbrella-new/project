import { createSlice } from '@reduxjs/toolkit';

const ssrInitialState = {
  select: 'tc-01',
  buttonStatus: true,
  switchName: null,
  current: [2.95, null, null],
  wattage: [1.4, null, null],
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
      state[action.payload.id].current[action.payload.index] =
        action.payload.data;
    },
    wattage: (state, action) => {
      console.log(action.payload);
      state[action.payload.id].wattage[action.payload.index] =
        action.payload.data;
    },
    voltage: (state, action) => {
      console.log(action.payload);
      state[action.payload.id].voltage[action.payload.index] =
        action.payload.data;
    },
    length: (state, action) => {
      console.log(action.payload);
      state[action.payload.id].length[action.payload.index] =
        action.payload.data;
    },
    changeSwitchName: (state, action) => {
      state[action.payload.id].switchName = action.payload.name;
    },
  },
});

export default heaterStatusSlice;
export const selectSSRState = (state) => state.ssrState;

export const {
  toggle,
  changeSwitch,
  selector,
  current,
  wattage,
  voltage,
  length,
  changeSwitchName,
} = heaterStatusSlice.actions;
