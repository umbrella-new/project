import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  instantHeat: {
    instantHeatTemp: 0,
    instantButtonToggler: false,
    fanOnly: false,
  },

  snowSensor: { isReady: false, activated: false },
  optionalConstantTempL: { inputTemp: 0, apply: false },
  heatingSchedule: {
    start: null,
    end: null,
    inputTemp: 0,
    isReady: false,
    activated: false,
    displayed: false,
  },
  windFactor: { isReady: false, activated: false },
  currentTemp: null,
  energyConsumption: null,
  outSideTemp: null,
  hoursOfUsage: null,
};

const tgsSwitchSlice = createSlice({
  name: "tgsSwitch",
  initialState,
  reducers: {
    tgsInstantHeat: (state, action) => {
      state.instantHeat.instantHeatTemp = action.payload;
      state.instantHeat.instantButtonToggler =
        !state.instantHeat.instantButtonToggler;
    },
    fanOnlyToggler: (state) => {
      state.instantHeat.fanOnly = !state.instantHeat.fanOnly;
      state.instantHeat.instantButtonToggler = false;
      state.instantHeat.instantHeatTemp = 0;
    },
    tgsSnowSensor: (state) => {
      state.snowSensor.isReady = !state.snowSensor.isReady;
    },
    tgsHeatingScheduleDate: (state, action) => {
      state.heatingSchedule.start = action.payload.start;
      state.heatingSchedule.end = action.payload.end;
    },
    tgsHeatingScheduleOpen: (state) => {
      state.heatingSchedule.displayed = true;
    },
    tgsHeatingScheduleCancel: (state) => {
      state.heatingSchedule.displayed = false;
    },
    tgsHeatingScheduleBeReady: (state, action) => {
      state.heatingSchedule.temp = action.payload.temp;
      state.heatingSchedule.isReady = !state.heatingSchedule.isReady;
    },
    tgsHeatingScheduleClear: (state) => {
      state.optionalConstantTemp.start = null;
      state.optionalConstantTemp.end = null;
    },
    tgsWindFactor: (state) => {
      state.windFactor.isReady = !state.windFactor.isReady;
    },
  },
});

export default tgsSwitchSlice;
export const selectTgsSwitch = (state) => state.tgsSwitch;
export const {
  fanOnlyToggler,
  expand,
  tgsInstantHeat,
  tgsSnowSensor,
  tgsHeatingSchedule,
  tgsHeatingScheduleCancel,
  tgsHeatingScheduleBeReady,
  tgsHeatingScheduleOpen,
  tgsHeatingScheduleDate,
  tgsHeatingScheduleClear,
  tgsWindFactor,
} = tgsSwitchSlice.actions;
