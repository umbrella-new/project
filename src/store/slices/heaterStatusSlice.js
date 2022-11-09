import { createSlice } from '@reduxjs/toolkit';

const ssrInitialState = {
  select: 'tc-01',
  buttonStatus: true,
  switchName: null,
  description: [null, null, null],
  index: 1,
};

const heaterStatusSlice = createSlice({
  name: 'ssrState',
  initialState: {
    ssr1: {
      ...ssrInitialState,
      specs: [
        {
          elementName: 'RS-CRIB RAIL HEATER',
          partNumber: 'TRSC-7L-2S-A48-P1',
          current: 2.95,
          wattage: 1400,
          voltage: 480,
          lengths: 7,
          currentCurrent: 2.2,
        },
      ],
    },
    ssr2: {
      ...ssrInitialState,
      currentCurrent: 0,
      specs: [
        {
          elementName: 'RS-CRIB RAIL HEATER',
          partNumber: 'TRSC-10L-2S-A48-P1',
          current: 4.2,
          wattage: 2000,
          voltage: 480,
          lengths: 10,
          currentCurrent: 4.1,
        },
      ],

      buttonStatus: 'flt',
    },
    ssr3: {
      ...ssrInitialState,
      specs: [
        {
          elementName: 'RS-CRIB RAIL HEATER',
          partNumber: 'TRSC-11L-2S-A48-P1',
          current: 4.6,
          wattage: 2200,
          voltage: 480,
          lengths: 11,
          currentCurrent: 8,
        },
      ],
    },
    ssr4: {
      ...ssrInitialState,
      specs: [
        {
          elementName: 'RS-Switch HEATER',
          partNumber: 'TRS-16L-2S-A48-P1',
          current: 6.7,
          wattage: 3200,
          voltage: 480,
          lengths: 16,
          currentCurrent: 6.1,
        },
      ],
      currentCurrent: [10.65],
    },
    ssr5: {
      ...ssrInitialState,
      specs: [
        {
          elementName: 'RS-Switch HEATER',
          partNumber: 'TRS-20L-2S-A48-P1',
          current: 8.4,
          wattage: 4000,
          voltage: 480,
          lengths: 20,
          currentCurrent: 8,
          description: null,
        },
      ],
    },
    ssr6: {
      ...ssrInitialState,
      specs: [
        {
          elementName: 'FLEXIBLE RAIL HEATER',
          partNumber: 'T-FLEX-24L-2S-A48-P1',
          current: 10,
          wattage: 4800,
          voltage: 480,
          lengths: 24,
          currentCurrent: 9,
          description: null,
        },
      ],
    },
    ssr7: {
      ...ssrInitialState,
      specs: [
        {
          elementName: 'RS-Switch HEATER',
          partNumber: 'TRS-16L-2S-A48-P1',
          current: 13.4,
          wattage: 3200,
          voltage: 240,
          lengths: 16,
          currentCurrent: 13,
        },
      ],
    },
    ssr8: {
      ...ssrInitialState,
      specs: [
        {
          elementName: 'RS-CRIB RAIL HEATER',
          partNumber: 'TRSC-8L-2S-A48-P1',
          current: 3.4,
          wattage: 1600,
          voltage: 480,
          lengths: 8,
          currentCurrent: 3,
        },
      ],
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
      state[action.payload.id].specs = action.payload.data;
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
