import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  instantHeat: { instantHeatTemp: 0, instantButtonToggler: false },
  fanOnly: false,
  snowSensor: false,
  optionalConstantTempL: { inputTemp: 0, apply: false },
  heatingSchedule: {
    start: null,
    end: null,
    inputTemp: 0,
    apply: false,
    isActivated: false,
  },
  windFactor: false,
  isExpanded: false,
};

const tgsSwitchSlice = createSlice({
  name: 'tgsSwitch',
  initialState,
  reducers: {
    instantHeat: (state, action) => {
      state.instantHeat.instantHeatTemp = action.payload;
      state.instantHeat.instantButtonToggler =
        !state.instantHeat.instantButtonToggler;
    },
    fanOnly: (state) => {
      state.fanOnly = !state.fanOnly;
    },
    snowSensor: (state) => {
      state.snowSensor = !state.snowSensor;
    },
    heatingScheduleApply: (state, action) => {
      state.heatingSchedule.start = action.payload.start;
      state.heatingSchedule.end = action.payload.end;
      state.heatingSchedule.apply = !state.heatingSchedule.apply;
    },
    heatingScheduleOpen: (state) => {
      state.heatingSchedule.isActivated = true;
    },
    heatingScheduleCancel: (state) => {
      state.heatingSchedule.isActivated = false;
    },
    windFactor: (state) => {
      state.windFactor = !state.windFactor;
    },
  },
});

export default tgsSwitchSlice;
export const selectTgsSwitch = (state) => state.tgsSwitch;
export const {
  expand,
  instantHeat,
  snowSensor,
  heatingSchedule,
  heatingScheduleCancel,
  heatingScheduleApply,
  heatingScheduleOpen,
  windFactor,
} = tgsSwitchSlice.actions;
