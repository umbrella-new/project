import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const ssrInitialState = {
  select: "tc-01",
  buttonStatus: true,
  switchName: null,
  description: [null, null, null],
  index: 1,
};

const heaterStatusSlice = createSlice({
  name: "ssrState",
  initialState: {
    ssr1: {
      ...ssrInitialState,
      currentCurrent: 2.95,
      specs: [
        {
          partNumber: "TRSC-7L-2S-A48-P1",
          current: 2.95,
          wattage: 1.4,
          voltage: 480,
          lengths: 2.1,
          currentCurrent: 2.2,
          description: null,
        },
      ],
    },
    ssr2: {
      ...ssrInitialState,
      currentCurrent: 0,
      specs: [
        {
          partNumber: "TRSC-10L-2S-A48-P1",
          current: 4.2,
          wattage: 2.0,
          voltage: 480,
          lengths: 3,
          currentCurrent: 4.1,
          description: null,
        },
      ],

      buttonStatus: "flt",
    },
    ssr3: {
      ...ssrInitialState,
      specs: [
        {
          partNumber: "TRSC-11L-2S-A48-P1",
          current: 4.6,
          wattage: 2.2,
          voltage: 480,
          lengths: 3.3,
          currentCurrent: 8,
          description: null,
        },
      ],
    },
    ssr4: {
      ...ssrInitialState,
      specs: [
        {
          partNumber: "TRS-16L-2S-A48-P1",
          current: 6.7,
          wattage: 3.2,
          voltage: 480,
          lengths: 4.9,
          currentCurrent: 6.1,
          description: null,
        },
      ],
      currentCurrent: [10.65],
    },
    ssr5: {
      ...ssrInitialState,
      specs: [
        {
          partNumber: "TRS-20L-2S-A48-P1",
          current: 8.4,
          wattage: 4.0,
          voltage: 480,
          lengths: 6,
          currentCurrent: 8,
          description: null,
        },
      ],
    },
    ssr6: {
      ...ssrInitialState,
      specs: [
        {
          partNumber: "T-FLEX-24L-2S-A48-P1",
          current: 10,
          wattage: 4.8,
          voltage: 480,
          lengths: 7.3,
          currentCurrent: 9,
          description: null,
        },
      ],
    },
    ssr7: {
      ...ssrInitialState,
      specs: [
        {
          partNumber: "TRS-16L-2S-A48-P1",
          current: 13.4,
          wattage: 3.2,
          voltage: 240,
          lengths: 4.9,
          currentCurrent: 13,
          description: null,
        },
      ],
    },
    ssr8: {
      ...ssrInitialState,
      specs: [
        {
          partNumber: "TRSC-8L-2S-A48-P1",
          current: 3.4,
          wattage: 1.6,
          voltage: 480,
          lengths: 2.44,
          currentCurrent: 3,
          description: null,
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
