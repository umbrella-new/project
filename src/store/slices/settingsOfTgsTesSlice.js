import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  buttonsOfSettings: {
    settingsEditButton: false,
    settingsCancelButton: false,
    settingsApplyButton: false,
  },
};

export const settingsOfTgsTesSlice = createSlice({
  name: 'settingsOfTgsTes',
  initialState,
  reducers: {
    setTgsTesSettingsEditButton: (state) => {
      state.buttonsOfSettings.settingsEditButton = true;
      // state.buttonsOfSettings.settingsCancelButton = false;
      // state.buttonsOfSettings.settingsApplyButton = false;
    },
    setTgsTesSettingsCancelButton: (state) => {
      state.buttonsOfSettings.settingsCancelButton = true;
      state.buttonsOfSettings.settingsApplyButton = false;
      state.buttonsOfSettings.settingsEditButton = false;
    },
    setTgsTesSettingsApplyButton: (state) => {
      state.buttonsOfSettings.settingsApplyButton = true;
      state.buttonsOfSettings.settingsEditButton = false;
      state.buttonsOfSettings.settingsCancelButton = false;
    },
    setTgsTesResetAllSettingsButtons: (state) => {
      state.buttonsOfSettings.settingsApplyButton = false;
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
} = settingsOfTgsTesSlice.actions;
export const selectSettingsOfTgsTes = (state) => state.settingsOfTgsTes;
export default settingsOfTgsTesSlice;
