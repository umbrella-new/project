import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  buttonsOfSettings: {
    settingsEditButton: false,
    settingsCancelButton: false,
    settingsApplyButton: false,
  },
  unitsMeasurement: false,
  tgsTesSelectTelemetry: {
    tgsHeaterTemp: null,
    tesHeaterTemp: null,
    tgsTesEncloseTemp: null,
    tgsTesOutSideTemp: null,
    tgsTesBurningChamberTemp: null,
  },
};

export const settingsOfTgsTesSlice = createSlice({
  name: 'settingsOfTgsTes',
  initialState,
  reducers: {
    // setTgsTesSettingsEditButton: (state) => {
    //   state.buttonsOfSettings.settingsEditButton = true;
    // },
    setTgsTesSettingsCancelButton: (state) => {
      state.buttonsOfSettings.settingsCancelButton = true;
      state.buttonsOfSettings.settingsEditButton = false;
    },
    setTgsTesSettingsApplyUnitsButton: (state, action) => {
      state.buttonsOfSettings.unitsMeasurement = action.payload;
      state.buttonsOfSettings.settingsEditButton = false;
      state.buttonsOfSettings.settingsCancelButton = false;
    },
    setTgsTesSettingsApplySnowSensorButton: (state, action) => {
      state.buttonsOfSettings.settingsEditButton = false;
      state.buttonsOfSettings.settingsCancelButton = false;
    },
    setTgsTesSettingsApplyForceAndCommandButton: (state, action) => {
      state.buttonsOfSettings.settingsEditButton = false;
      state.buttonsOfSettings.settingsCancelButton = false;
    },
    setTgsTesSettingsApplyAdminButton: (state, action) => {
      state.buttonsOfSettings.settingsEditButton = false;
      state.buttonsOfSettings.settingsCancelButton = false;
    },
    setTgsTesResetAllSettingsButtons: (state) => {
      state.buttonsOfSettings.settingsEditButton = false;
      state.buttonsOfSettings.settingsCancelButton = false;
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
} = settingsOfTgsTesSlice.actions;
export const selectSettingsOfTgsTes = (state) => state.settingsOfTgsTes;
export default settingsOfTgsTesSlice;
