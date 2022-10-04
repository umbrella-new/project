import { createSlice } from '@reduxjs/toolkit';

const ssrInitialState = {
  select: 'tc-01',
  buttonStatus: true,
  current: [2.95, 3, 4],
  wattage: [1400, 1400, 1400],
  voltage: [240, 240, 240],
  length: [2.1, 2.1, 2.1],
  description: [
    `RS-CRIB HEATER - TRSC - 7L-2S-A48 - P1 - SS-316 7’ X 1” X 1/2” `,
    `RS-CRIB HEATER - TRSC - 7L-2S-A48 - P1 - SS-316 7’ X 1” X 1/2” `,
    `RS-CRIB HEATER - TRSC - 7L-2S-A48 - P1 - SS-316 7’ X 1” X 1/2” `,
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
      console.log(action.payload);
      console.log(state[action.payload].buttonStatus);
      return (state[action.payload].buttonStatus = true);
    },
    changeSwitch: (state, action) => {
      console.log(action.payload);
      return state;
    },
    select: (state, action) => {
      return (state[action.id].select = action.data);
    },
    current: (state, action) => {
      return (state[action.id].current[action.index] = action.data);
    },
  },
});

export default heaterStatusSlice;
export const { toggle, changeSwitch, select, current } =
  heaterStatusSlice.actions;
