import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // isHeaterActivated: false,
  isTgsSwitchActivated: false,
  displayConflictMessage: false,
  heatingScheduleDisplayed: false,
  instantHeat: {
    instantHeatTemp: 0,
    instantButtonToggler: false,
  },
  fanOnly: false,
  snowSensor: { isReady: false, activated: false },
  optionalConstantTemp: { inputTemp: 0, apply: false },

  heatingSchedule: {
    start: { date: null, time: null },
    end: { date: null, time: null },
    inputTemp: 0,
    isReady: false,
    activated: false,
    disable: false,
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
    FanOnlyActivator: (state) => {
      state.fanOnly = true;
    },
    tgsSnowSensor: (state) => {
      state.snowSensor.isReady = !state.snowSensor.isReady;
    },
    tgsHeatingScheduleDate: (state, action) => {
      state.heatingSchedule.start = {
        date: action.payload.start.date,
        time: action.payload.start.time,
      };
      state.heatingSchedule.end = {
        date: action.payload.end.date,
        time: action.payload.end.time,
      };
    },
    tgsHeatingScheduleOpen: (state) => {
      state.heatingScheduleDisplayed = true;
    },
    tgsHeatingScheduleCancel: (state) => {
      state.heatingScheduleDisplayed = false;
    },
    heatingScheduleClear: (state) => {
      state.optionalConstantTemp.start = null;
      state.optionalConstantTemp.end = null;
    },
    tgsHeatingScheduleBeReady: (state, action) => {
      state.heatingSchedule.inputTemp = action.payload;
      state.heatingSchedule.isReady = !state.heatingSchedule.isReady;
    },
    tgsHeatingScheduleClear: (state) => {
      state.heatingSchedule.start = { date: null, time: null };
      state.heatingSchedule.end = { date: null, time: null };
    },
    tgsWindFactor: (state) => {
      state.windFactor.isReady = !state.windFactor.isReady;
    },
    activateTgsSwitchStatus: (state) => {
      state.isTgsSwitchActivated = true;
    },
    deactivateTgsSwitchStatus: (state) => {
      state.isTgsSwitchActivated = false;
      state.instantHeat = initialState.instantHeat;
      state.fanOnly = false;
      state.snowSensor = initialState.snowSensor;
      state.optionalConstantTemp = initialState.optionalConstantTemp;
      state.heatingSchedule = initialState.heatingSchedule;
      state.windFactor = initialState.windFactor;
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
  FanOnlyActivator,
  activateTgsSwitchStatus,
  deactivateTgsSwitchStatus,
} = tgsSwitchSlice.actions;
