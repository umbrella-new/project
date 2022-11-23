import { createSlice } from '@reduxjs/toolkit';

const selectInitialState = { select: 'tc-01' };

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
    unitsMeasurement: true,
  },
  unitsMeasurement: false,
  selectTelemetry: {
    essHeaterTemp: null,
    essEncloseTemp: null,
    essOutSideTemp: null,
  },
  snowSensorTemp: {
    essTemp: null,
    isFEss: null,
  },
  selectAtsState: null,
  telemetry: {
    essHeaterTemp: selectInitialState,
    essEncloseTemp: selectInitialState,
    essOutSideTemp: null,
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
      state.buttonsOfSettings.settingsApplyButton = true;
    },
    setSettingsCancelButton: (state) => {
      state.buttonsOfSettings.settingsCancelButton = true;
      state.buttonsOfSettings.settingsEditButton = false;
      state.buttonsOfSettings.settingsApplyButton = false;
    },

    setApplyButtonToTrue: (state) => {
      state.buttonsOfSettings.settingsApplyButton = true;
    },

    setApplyButtonToFalse: (state) => {
      state.buttonsOfSettings.settingsApplyButton = false;
    },

    // Buttons of Select options
    setSettingsApplyUnitsButton: (state, action) => {
      state.buttonsOfSettings.settingsEditButton = false;
      state.buttonsOfSettings.settingsCancelButton = false;
      state.buttonsOfSettings.settingsApplyButton = false;
      state.buttonsOfSettings.unitsMeasurement = action.payload;
    },

    setSettingsApplySnowSensorTriggerButton: (state, action) => {
      state.buttonsOfSettings.settingsEditButton = false;
      state.buttonsOfSettings.settingsCancelButton = false;
      state.buttonsOfSettings.settingsApplyButton = true;
      state.snowSensorTemp.essTemp = action.payload.essSnowSensor;
      state.snowSensorTemp.isFEss = action.payload.isF;
    },
    setSettingsApplyForceCommandButton: (state, action) => {
      // todo ess select arts
      state.buttonsOfSettings.settingsEditButton = false;
      state.buttonsOfSettings.settingsCancelButton = false;
      state.buttonsOfSettings.settingsApplyButton = false;
      state.selectTelemetry.essHeaterTemp = action.payload.essHeaterTemp;
      state.selectTelemetry.essEncloseTemp = action.payload.essEncloseTemp;
      state.selectTelemetry.essOutSideTemp = action.payload.essOutsideTemp;
    },

    setResetAllSettingsButtons: (state) => {
      state.buttonsOfSettings.settingsEditButton = false;
      state.buttonsOfSettings.settingsCancelButton = false;
      state.buttonsOfSettings.settingsApplyButton = false;
    },

    setAts: (state, action) => {
      state.selectAtsState = action.payload;
    },
    setTelemetry: (state, action) => {
      state.telemetry.essHeaterTemp = action.payload.essHeater;
      state.telemetry.essEncloseTemp = action.payload.essEnclose;
      state.telemetry.essOutSideTemp = action.payload.essOutside;
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
  setResetAllSettingsButtons,
  setEssButtonExpandAndClose,
  setSysButtonExpandAndClose,
  setSettingsEditButton,
  setSettingsCancelButton,
  setSettingsApplyUnitsButton,
  setSettingsApplyWindFactorTriggerButton,
  setSettingsApplySnowSensorTriggerButton,
  setSettingsApplyForceCommandButton,
  setEditButtonToFalse,
  setCancelButtonToFalse,
  setApplyButtonToFalse,
  setSettingsClearButton,
  setApplyAndClearButtonToFalse,
  setApplyButtonToTrue,
  setAts,
  setTelemetry,
} = settingsOfEssSlice.actions;

export const selectSettingsOfEss = (state) => state.settingsOfEss;

export default settingsOfEssSlice;
