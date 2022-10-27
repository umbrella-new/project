import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  buttonsOfSettings: {
    settingsEditButton: false,
    settingsCancelButton: false,
    settingsApplyButton: false,
  },
};

export const settingsOfTgsSlice = createSlice({
  name: 'settingsOfTgs',
  initialState,
  reducers: {
    setTgsSettingsEditButton: (state) => {
      state.buttonsOfSettings.settingsEditButton = true;
      // state.buttonsOfSettings.settingsCancelButton = false;
      // state.buttonsOfSettings.settingsApplyButton = false;
    },
    setTgsSettingsCancelButton: (state) => {
      state.buttonsOfSettings.settingsCancelButton = true;
      state.buttonsOfSettings.settingsApplyButton = false;
      state.buttonsOfSettings.settingsEditButton = false;
    },
    setTgsSettingsApplyButton: (state) => {
      state.buttonsOfSettings.settingsApplyButton = true;
      state.buttonsOfSettings.settingsEditButton = false;
      state.buttonsOfSettings.settingsCancelButton = false;
    },
    setResetAllTgsSettingsButtons: (state) => {
      state.buttonsOfSettings.settingsApplyButton = false;
      state.buttonsOfSettings.settingsEditButton = false;
      state.buttonsOfSettings.settingsCancelButton = false;
    },
  },
});

export const {
  setTgsSettingsEditButton,
  setTgsSettingsCancelButton,
  setTgsSettingsApplyButton,
  setResetAllTgsSettingsButtons,
} = settingsOfTgsSlice.actions;
export const SelectSettingsOfTgs = (state) => state.settingsOfTgs;
export default settingsOfTgsSlice;
