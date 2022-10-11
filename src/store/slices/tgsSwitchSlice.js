import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isHeaterActivated: false,
  heatingScheduleDisplayed: false,
  instantHeat: {
    instantHeatTemp: 0,
    instantButtonToggler: false,
  },
  fanOnly: false,
  snowSensor: { isReady: false, activated: false },
  optionalConstantTempL: { inputTemp: 0, apply: false },
  heatingSchedule: {
    start: null,
    end: null,
    inputTemp: 0,
    isReady: false,
    activated: false,
  },
  windFactor: { isReady: false, activated: false },
  currentTemp: null,
  energyConsumption: null,
  outSideTemp: null,
  hoursOfUsage: null,
};

const tgsSwitchSlice = createSlice({
  name: 'tgsSwitch',
  initialState,
  reducers: {
    tgsInstantHeat: (state, action) => {
      state.instantHeat.instantHeatTemp = action.payload;
      state.instantHeat.instantButtonToggler =
        !state.instantHeat.instantButtonToggler;
      state.fanOnly = !state.fanOnly;
    },
    fanOnlyToggler: (state) => {
      state.fanOnly = !state.fanOnly;
    },
    tgsSnowSensor: (state) => {
      state.snowSensor.isReady = !state.snowSensor.isReady;
    },
    tgsHeatingScheduleDate: (state, action) => {
      state.heatingSchedule.start = action.payload.start;
      state.heatingSchedule.end = action.payload.end;
    },
    tgsHeatingScheduleOpen: (state) => {
      state.heatingScheduleDisplayed = true;
    },
    tgsHeatingScheduleCancel: (state) => {
      state.heatingScheduleDisplayed = false;
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
