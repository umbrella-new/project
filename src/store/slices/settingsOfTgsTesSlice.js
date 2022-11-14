import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // buttonsOfSettings: {
  //   settingsEditButton: false,
  //   settingsCancelButton: false,
  //   settingsApplyButton: false,
  // },
  unitsMeasurement: false,
  windFactorTemp: {
    low: null,
    med: null,
    high: null,
    extreme: null,
  },
  snowSensorTemp: {
    tgsTemp: null,
    tesTemp: null,
  },
  tgsTesSelectTelemetry: {
    tgsHeaterTemp: null,
    tesHeaterTemp: null,
    tgsTesEncloseTemp: null,
    tgsTesOutSideTemp: null,
    tgsTesBurningChamberTemp: null,
  },
  valveInputs: { start: null, min: null, max: null },
  gasType: null,
  thermocouple: null,
  allSelects: {
    selectAtsTgsState: null,
    selectAtsTesState: null,
    selectTcSysState: null,
  },
};

export const settingsOfTgsTesSlice = createSlice({
  name: 'settingsOfTgsTes',
  initialState,
  reducers: {
    // setTgsTesSettingsApplyUnitsButton: (state, action) => {
    //   state.buttonsOfSettings.unitsMeasurement = action.payload;
    //   state.buttonsOfSettings.settingsEditButton = false;
    //   state.buttonsOfSettings.settingsCancelButton = false;
    // },

    setTgsTesSettingsApplyWindFactor: (state, action) => {
      state.windFactorTemp.low = action.payload.lowWind;
      state.windFactorTemp.med = action.payload.medWind;
      state.windFactorTemp.high = action.payload.highWind;
      state.windFactorTemp.extreme = action.payload.extremeWind;
    },
    setTgsTesSettingsApplySnowSensorButton: (state, action) => {
      state.snowSensorTemp.tgsTemp = action.payload.tgsSnowSensor;
      state.snowSensorTemp.tesTemp = action.payload.tesSnowSensor;
    },
    setTgsTesSettingsApplyForceAndCommandButton: (state, action) => {
      // state.buttonsOfSettings.settingsEditButton = false;
      // state.buttonsOfSettings.settingsCancelButton = false;
      state.tgsTesSelectTelemetry.tgsTesOutSideTemp =
        action.payload.tgsTesOutsideTemp;
      state.tgsTesSelectTelemetry.tgsTesBurningChamberTemp =
        action.payload.burningChamberTemp;
      state.tgsTesSelectTelemetry.tgsHeaterTemp = action.payload.tgsHeaterTemp;
      state.tgsTesSelectTelemetry.tesHeaterTemp = action.payload.tesHeaterTemp;
      state.tgsTesSelectTelemetry.tgsTesEncloseTemp =
        action.payload.tgsTesEncloseTemp;
    },
    setTgsTesSettingsApplyAdminButton: (state) => {
      state.buttonsOfSettings.settingsEditButton = false;
      state.buttonsOfSettings.settingsCancelButton = false;
    },
    // setTgsTesResetAllSettingsButtons: (state) => {
    //   state.buttonsOfSettings.settingsEditButton = false;
    //   state.buttonsOfSettings.settingsCancelButton = false;
    // },
    setValveInputs: (state, action) => {
      state.valveInputs.start = action.payload.first;
      state.valveInputs.min = action.payload.second;
      state.valveInputs.max = action.payload.third;
    },
    setGasType: (state, action) => {
      state.gasType = action.payload;
    },
    //admin: this is used for ess and tes
    setThermocouple: (state, action) => {
      state.thermocouple = action.payload;
    },
    setTgsAts: (state, action) => {
      console.log('tgs ats', action.payload);
      state.allSelects.selectAtsTgsState = action.payload;
    },
    setTesAts: (state, action) => {
      state.allSelects.selectAtsTesState = action.payload;
    },
  },
});

export const {
  setTgsTesSettingsEditButton,
  setTgsTesSettingsCancelButton,
  setTgsTesSettingsApplyButton,
  setTgsTesResetAllSettingsButtons,
  setTgsTesSettingsApplyUnitsButton,
  setTgsTesSettingsApplySnowSensorButton,
  setTgsTesSettingsApplyForceAndCommandButton,
  setTgsTesSettingsApplyAdminButton,
  setValveInputs,
  setTgsTesSettingsApplyWindFactor,
  setGasType,
  setThermocouple,
  setTgsAts,
  setTesAts,
} = settingsOfTgsTesSlice.actions;
export const selectSettingsOfTgsTes = (state) => state.settingsOfTgsTes;
export default settingsOfTgsTesSlice;
