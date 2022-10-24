import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // isHeaterActivated: false,
  isTgsSwitchActivated: false,
  displayConflictMessage: false,
  heatingScheduleCalendar: { isDisplayed: false, id: null },
  instantHeat: {
    instantHeatTemp: 0,
    instantButtonToggler: false,
  },
  fanOnly: false,
  snowSensor: { isReady: false, activated: false, defaultTemp: 350 },
  optionalConstantTemp: { inputTemp: 0, apply: false },
  heatingScheduleList: [
    {
      start: { date: null, time: null },
      end: { date: null, time: null },
    },
  ],
  heatingSchedule: {
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
      state.heatingScheduleList = [
        {
          start: action.payload.start,
          end: action.payload.end,
        },
      ];
    },
    addTgsHeatingSchedule: (state, action) => {
      state.heatingScheduleList.push({
        start: action.payload.start,
        end: action.payload.end,
      });
    },
    tgsHeatingScheduleBeReady: (state, action) => {
      state.heatingSchedule.inputTemp = action.payload;
      state.heatingSchedule.isReady = !state.heatingSchedule.isReady;
    },
    tgsHeatingScheduleOpen: (state, action) => {
      state.heatingScheduleCalendar.isDisplayed = true;
      state.heatingScheduleCalendar.id = action.payload;
    },
    tgsHeatingScheduleCancel: (state) => {
      state.heatingScheduleCalendar.isDisplayed = false;
    },

    tgsHeatingScheduleClear: (state) => {
      state.heatingScheduleList[0] = {
        start: { date: null, time: null },
        end: { date: null, time: null },
      };
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
    activateTgsConflictMessage: (state) => {
      state.displayConflictMessage = true;
    },
    deactivateTgsConflictMessage: (state) => {
      state.displayConflictMessage = false;
    },
    handleTgsSnowSensorDefaultTemp: (state, action) => {
      state.snowSensor.defaultTemp = action.payload;
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
  activateTgsConflictMessage,
  deactivateTgsConflictMessage,
  addTgsHeatingSchedule,
  handleTgsSnowSensorDefaultTemp,
} = tgsSwitchSlice.actions;
