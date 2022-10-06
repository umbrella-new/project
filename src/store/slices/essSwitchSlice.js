import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  instantHeat: { instantHeatTemp: 0, instantButtonToggler: false },
  snowSensor: { isReady: false, activated: false },
  optionalConstantTemp: { inputTemp: 0, apply: false },
  heatingSchedule: {
    start: null,
    end: null,
    inputTemp: 0,
    isReady: false,
    activated: false,
    displayed: false,
  },
  windFactor: { isReady: false, activated: false },
  isExpanded: false,
  currentTemp: null,
  energyConsumption: null,
};

const essSwitchSlice = createSlice({
  name: 'essSwitch',
  initialState,
  reducers: {
    expand: (state) => {
      state.isExpanded = !state.isExpanded;
    },
    instantHeat: (state, action) => {
      state.instantHeat.instantHeatTemp = action.payload;
      state.instantHeat.instantButtonToggler =
        !state.instantHeat.instantButtonToggler;
    },
    snowSensor: (state) => {
      state.snowSensor.isReady = !state.snowSensor.isReady;
    },
    heatingScheduleDate: (state, action) => {
      state.heatingSchedule.start = action.payload.start;
      state.heatingSchedule.end = action.payload.end;
    },
    heatingScheduleBeReady: (state, action) => {
      state.heatingSchedule.temp = action.payload.temp;
      state.heatingSchedule.isReady = !state.heatingSchedule.isReady;
    },
    heatingScheduleOpen: (state) => {
      state.heatingSchedule.displayed = true;
    },
    heatingScheduleCancel: (state) => {
      state.heatingSchedule.displayed = false;
    },
    heatingScheduleClear: (state) => {
      state.optionalConstantTemp.start = null;
      state.optionalConstantTemp.end = null;
    },
    windFactor: (state) => {
      state.windFactor.isReady = !state.windFactor.isReady;
    },
    constantTemp: (state, action) => {
      state.optionalConstantTemp.apply = !state.optionalConstantTemp.apply;
      state.optionalConstantTemp.temp = action.payload;
    },
  },
});

export default essSwitchSlice;
export const selectEssSwitch = (state) => state.essSwitch;
export const {
  expand,
  instantHeat,
  snowSensor,
  heatingSchedule,
  heatingScheduleCancel,
  heatingScheduleBeReady,
  heatingScheduleOpen,
  heatingScheduleDate,
  heatingScheduleClear,
  windFactor,
  constantTemp,
} = essSwitchSlice.actions;
