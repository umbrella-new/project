import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  interfaceMode: false,
  allSettingsOptions: {
    settingsOptionsUnits: true,
    settingsOptionsWindFactor: false,
    settingsOptionsSnowFactor: false,
    settingsOptionsForceAndCommand: false,
    settingsOptionsAdmin: false,
  },
  buttonsOfSettings: {
    settingsEditButton: false,
    settingsCancelButton: false,
    settingsApplyButton: false,
  },
};

export const settingsOfEssSlice = createSlice({
  name: 'settingsOfEss',
  initialState,
  reducers: {
    setInterfaceMode: (state, action) => {
      state.interfaceMode = action.payload;
    },
    setSettingsOptionsUnits: (state) => {
      state.allSettingsOptions.settingsOptionsUnits = true;
      state.allSettingsOptions.settingsOptionsWindFactor = false;
      state.allSettingsOptions.settingsOptionsSnowFactor = false;
      state.allSettingsOptions.settingsOptionsForceAndCommand = false;
      state.allSettingsOptions.settingsOptionsAdmin = false;
    },
    setSettingsOptionsWindFactor: (state) => {
      state.allSettingsOptions.settingsOptionsWindFactor = true;
      state.allSettingsOptions.settingsOptionsUnits = false;
      state.allSettingsOptions.settingsOptionsSnowFactor = false;
      state.allSettingsOptions.settingsOptionsForceAndCommand = false;
      state.allSettingsOptions.settingsOptionsAdmin = false;
    },
    setSettingsOptionsSnowFactor: (state) => {
      state.allSettingsOptions.settingsOptionsSnowFactor = true;
      state.allSettingsOptions.settingsOptionsWindFactor = false;
      state.allSettingsOptions.settingsOptionsUnits = false;
      state.allSettingsOptions.settingsOptionsForceAndCommand = false;
      state.allSettingsOptions.settingsOptionsAdmin = false;
    },
    setSettingsOptionsForceAndCommand: (state) => {
      state.allSettingsOptions.settingsOptionsForceAndCommand = true;
      state.allSettingsOptions.settingsOptionsSnowFactor = false;
      state.allSettingsOptions.settingsOptionsWindFactor = false;
      state.allSettingsOptions.settingsOptionsUnits = false;
      state.allSettingsOptions.settingsOptionsAdmin = false;
    },
    setSettingsOptionsAdmin: (state) => {
      state.allSettingsOptions.settingsOptionsAdmin = true;
      state.allSettingsOptions.settingsOptionsForceAndCommand = false;
      state.allSettingsOptions.settingsOptionsSnowFactor = false;
      state.allSettingsOptions.settingsOptionsWindFactor = false;
      state.allSettingsOptions.settingsOptionsUnits = false;
    },
    setSettingsEditButton: (state) => {
      state.buttonsOfSettings.settingsEditButton = true;
      state.buttonsOfSettings.settingsCancelButton = false;
      state.buttonsOfSettings.settingsApplyButton = false;
    },
    setSettingsCancelButton: (state) => {
      state.buttonsOfSettings.settingsCancelButton = true;
      state.buttonsOfSettings.settingsApplyButton = false;
      state.buttonsOfSettings.settingsEditButton = false;
    },
    setSettingsApplyButton: (state) => {
      state.buttonsOfSettings.settingsApplyButton = true;
      state.buttonsOfSettings.settingsEditButton = false;
      state.buttonsOfSettings.settingsCancelButton = false;
    },
    setResetAllSettingsButtons: (state) => {
      state.buttonsOfSettings.settingsApplyButton = false;
      state.buttonsOfSettings.settingsEditButton = false;
      state.buttonsOfSettings.settingsCancelButton = false;
    },
  },
});

export const {
  setInterfaceMode,
  setSettingsOptionsUnits,
  setSettingsOptionsWindFactor,
  setSettingsOptionsSnowFactor,
  setSettingsOptionsForceAndCommand,
  setSettingsOptionsAdmin,
  setSettingsEditButton,
  setSettingsCancelButton,
  setSettingsApplyButton,
  setResetAllSettingsButtons,
} = settingsOfEssSlice.actions;

export const selectSettingsOfEss = (state) => state.settingsOfEss;

export default settingsOfEssSlice;
