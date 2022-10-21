import { createSlice } from '@reduxjs/toolkit';

const ssrInitialState = {
  select: 'tc-01',
  buttonStatus: true,
  switchName: null,
  description: [null, null, null],
  currentCurrent: [2.65, null, null],
  index: 1,
};

const descriptionOptions = [
  {
    1: `RS-CRIB HEATER - TRSC - 7L-2S - A48`,
    2: `RS-CRIB HEATER - trsc - 10L -2S - A48`,
    3: `RS-CRIB HEATER - TRS - 11L - 2S - A48`,
    4: `RS-CRIB HEATER - TRS - 16L - 2S - A48`,
    5: `RS-CRIB HEATER - TRS - 16L - 2S - A48`,
    6: 'RS-switch HEATER - t - flex - 24l -2s - a48 - p1 - monel 400',
  },
];

const heaterStatusSlice = createSlice({
  name: 'ssrState',
  initialState: {
    ssr1: {
      ...ssrInitialState,
      specs: [
        { current: [2.95], wattage: [1.4], voltage: [240], length: [2.1] },
        { current: [2.95], wattage: [1.4], voltage: [240], length: [2.1] },
        { current: [2.95], wattage: [1.4], voltage: [240], length: [2.1] },
      ],
    },
    ssr2: {
      ...ssrInitialState,
      specs: [{ current: [4.2], wattage: [2.9], voltage: [480], length: [3] }],

      buttonStatus: 'flt',
    },
    ssr3: {
      ...ssrInitialState,
      specs: [
        { current: [4.6], wattage: [2.0], voltage: [280], length: [3.3] },
      ],
    },
    ssr4: {
      ...ssrInitialState,
      specs: [
        { current: [6.7], wattage: [3.2], voltage: [480], length: [4.9] },
      ],
      currentCurrent: [10.65],
    },
    ssr5: {
      ...ssrInitialState,
      specs: [{ current: [8.4], wattage: [4.0], voltage: [480], length: [6] }],
    },
    ssr6: {
      ...ssrInitialState,
      specs: [{ current: [10], wattage: [4.8], voltage: [480], length: [7.3] }],
    },
    ssr7: {
      ...ssrInitialState,
      specs: [{ current: [10], wattage: [4.8], voltage: [480], length: [7.3] }],
    },
    ssr8: {
      ...ssrInitialState,
      specs: [{ current: [10], wattage: [4.8], voltage: [480], length: [7.3] }],
    },
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
    handleSSRDetails: (state, action) => {
      console.log('here');
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
  handleSSRDetails,
} = heaterStatusSlice.actions;
