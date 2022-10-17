import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isEsSwitchActivated: false,
  displayConflictMessage: false,
  heatingScheduleDisplayed: false,
  instantHeat: { instantHeatTemp: 0, instantButtonToggler: false },
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
  heatingScheduleList: [],
  windFactor: { isReady: false, activated: false },
  isExpanded: false,
  currentTemp: null,
  energyConsumption: null,
  outSideTemp: null,
  hoursOfUsage: null,
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
      // state.heatingScheduleList.push({
      //   start: action.payload.start,
      //   end: action.payload.end,
      // });

      state.heatingSchedule.start = {
        date: action.payload.start.date,
        time: action.payload.start.time,
      };
      state.heatingSchedule.end = {
        date: action.payload.end.date,
        time: action.payload.end.time,
      };
    },
    heatingScheduleBeReady: (state, action) => {
      state.heatingSchedule.inputTemp = action.payload;
      state.heatingSchedule.isReady = !state.heatingSchedule.isReady;
    },
    heatingScheduleOpen: (state) => {
      state.heatingScheduleDisplayed = true;
    },
    heatingScheduleCancel: (state) => {
      state.heatingScheduleDisplayed = false;
    },
    heatingScheduleClear: (state) => {
      state.heatingSchedule.start = { date: null, time: null };
      state.heatingSchedule.end = { date: null, time: null };
    },
    windFactor: (state) => {
      state.windFactor.isReady = !state.windFactor.isReady;
    },
    constantTemp: (state, action) => {
      state.optionalConstantTemp.apply = !state.optionalConstantTemp.apply;
      state.optionalConstantTemp.inputTemp = action.payload;
    },
    activateEsSwitchStatus: (state) => {
      console.log('changed');
      state.isEsSwitchActivated = true;
    },
    deactivateEsSwitchStatus: (state) => {
      state.isEsSwitchActivated = false;
      state.instantHeat = initialState.instantHeat;
      state.fanOnly = false;
      state.snowSensor = initialState.snowSensor;
      state.optionalConstantTemp = initialState.optionalConstantTemp;
      state.heatingSchedule = initialState.heatingSchedule;
      state.windFactor = initialState.windFactor;
    },
    activateEsConflictMessage: (state) => {
      state.displayConflictMessage = true;
    },
    deactivateEsConflictMessage: (state) => {
      state.displayConflictMessage = false;
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
  activateEsSwitchStatus,
  deactivateEsSwitchStatus,
  activateEsConflictMessage,
  deactivateEsConflictMessage,
} = essSwitchSlice.actions;
