import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  heatingSysOptions: [
    'ess - electric switch system',
    'tgs - typhoon gas system',
    'tes - typhoon electric system',
  ],
  switchSizeOptions: ['# 10', '# 15', '# 20', '# 50', '# 100'],
  ssrRatingOptions: [
    '10 amps',
    '15 amps',
    '20 amps',
    '30 amps',
    '40 amps',
    '50 amps',
    '70 amps',
    '100 amps',
    'add ssr rating',
  ],
  sysIdentification: {
    locationName: '',
    switchName: '',
    heatingSystem: '',
    application: '',
    switchSize: '',
    ssrRating: '',
    sysId: '',
  },
};

const settingsSystemIdentificationSlice = createSlice({
  name: 'systemIdentification',
  initialState,
  reducers: {
    handleAdditionalSSRRating: (state, action) => {
      console.log(state.ssrRatingOptions.length);
      state.ssrRatingOptions.splice(
        state.ssrRatingOptions.length - 1,
        0,
        action.payload
      );
    },
  },
});

export default settingsSystemIdentificationSlice;
export const selectSystemIdentification = (state) => state.systemIdentification;
export const { handleAdditionalSSRRating } =
  settingsSystemIdentificationSlice.actions;
