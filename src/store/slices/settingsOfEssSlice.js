import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
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
  name: "settingsOfEss",
  initialState,
  reducers: {
    selectUnit: (state) => {
      state.value = !state.value;
    },
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
      state.buttonsOfSettings.settingsEditButton =
        !state.buttonsOfSettings.settingsEditButton;
    },
    setSettingsCancelButton: (state) => {
      state.buttonsOfSettings.settingsCancelButton =
        !state.buttonsOfSettings.settingsCancelButton;
    },
    setSettingsApplyButton: (state) => {
      state.buttonsOfSettings.settingsApplyButton =
        !state.buttonsOfSettings.settingsApplyButton;
    },
  },
});

export const {
  selectUnit,
  setInterfaceMode,
  setSettingsOptionsUnits,
  setSettingsOptionsWindFactor,
  setSettingsOptionsSnowFactor,
  setSettingsOptionsForceAndCommand,
  setSettingsOptionsAdmin,
  setSettingsEditButton,
  setSettingsCancelButton,
  setSettingsApplyButton,
} = settingsOfEssSlice.actions;

export const selectSettingsOfEss = (state) => state.settingsOfEss;

export default settingsOfEssSlice;
