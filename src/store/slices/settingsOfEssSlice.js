import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
  interfaceMode: false,
  settingsOptionsUnits: true,
  settingsOptionsWindFactor: false,
  settingsOptionsSnowFactor: false,
  settingsOptionsForceAndCommand: false,
  settingsOptionsAdmin: false,
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
    setSettingsOptionsUnits: (state, action) => {
      state.settingsOptionsUnits = action.payload;
    },
    setSettingsOptionsWindFactor: (state, action) => {
      state.settingsOptionsWindFactor = action.payload;
    },
    setSettingsOptionsSnowFactor: (state, action) => {
      state.settingsOptionsSnowFactor = action.payload;
    },
    setSettingsOptionsForceAndCommand: (state, action) => {
      state.settingsOptionsForceAndCommand = action.payload;
    },
    setSettingsOptionsAdmin: (state, action) => {
      state.settingsOptionsAdmin = action.payload;
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
} = settingsOfEssSlice.actions;

export const selectSettingsOfEss = (state) => state.settingsOfEss;

export default settingsOfEssSlice;
