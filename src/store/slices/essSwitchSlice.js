import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isEsSwitchActivated: false,
  displayConflictMessage: false,
  heatingScheduleCalendar: { isDisplayed: false, id: null },
  instantHeat: { instantHeatTemp: 0, instantButtonToggler: false },
  snowSensor: { isReady: false, activated: false, defaultTemp: 350 },
  optionalConstantTemp: { inputTemp: 0, apply: false, activated: false },
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
  isExpanded: false,
  currentTemp: null,
  energyConsumption: null,
  outSideTemp: null,
  hoursOfUsage: null,
  select: [
    'tc-01',
    'tc-02',
    'tc-03',
    'tc-04',
    'tc-05',
    'tc-06',
    'tc-07',
    'tc-08',
    'tc-09',
    'tc-10',
    'tc-11',
  ],
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
      state.heatingScheduleList = [
        {
          start: action.payload.start,
          end: action.payload.end,
        },
      ];
    },
    addHeatingSchedule: (state, action) => {
      state.heatingScheduleList.push({
        start: action.payload.start,
        end: action.payload.end,
      });
    },
    heatingScheduleBeReady: (state, action) => {
      state.heatingSchedule.inputTemp = action.payload;
      state.heatingSchedule.isReady = !state.heatingSchedule.isReady;
    },
    heatingScheduleOpen: (state, action) => {
      state.heatingScheduleCalendar.isDisplayed = true;
      state.heatingScheduleCalendar.id = action.payload;
    },
    heatingScheduleCancel: (state) => {
      state.heatingScheduleCalendar.isDisplayed = false;
    },
    heatingScheduleClear: (state) => {
      state.heatingScheduleList[0] = {
        start: { date: null, time: null },
        end: { date: null, time: null },
      };
    },
    windFactor: (state) => {
      state.windFactor.isReady = !state.windFactor.isReady;
    },
    constantTemp: (state, action) => {
      state.optionalConstantTemp.apply = !state.optionalConstantTemp.apply;
      state.optionalConstantTemp.inputTemp = action.payload;
    },
    activateEsSwitchStatus: (state) => {
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
    handleSnowSensorDefaultTemp: (state, action) => {
      console.log(action.payload);
      state.snowSensor.defaultTemp = action.payload;
    },
    handleTurnOffTheHeater: (state) => {
      state.isEsSwitchActivated = false;
      state.heatingScheduleCalendar = { isDisplayed: false, id: null };
      state.instantHeat = { instantHeatTemp: 0, instantButtonToggler: false };
      state.snowSensor = { isReady: false, activated: false, defaultTemp: 350 };
      state.optionalConstantTemp = { inputTemp: 0, apply: false };
      state.heatingSchedule = {
        inputTemp: 0,
        isReady: false,
        activated: false,
        disable: false,
      };

      state.windFactor = { isReady: false, activated: false };
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
  addHeatingSchedule,
  handleSnowSensorDefaultTemp,
  handleTurnOffTheHeater,
} = essSwitchSlice.actions;
