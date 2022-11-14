import { createSlice } from "@reduxjs/toolkit";

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
};

export const settingsOfTgsTesSlice = createSlice({
  name: "settingsOfTgsTes",
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
      console.log("action.payload", action.payload);
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
      console.log("slice", action.payload);
      state.thermocouple = action.payload;
    },
    setAddElementToBank: (state, action) => {},
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
  setAddElementToBank,
} = settingsOfTgsTesSlice.actions;
export const selectSettingsOfTgsTes = (state) => state.settingsOfTgsTes;
export default settingsOfTgsTesSlice;
