import { createSlice } from '@reduxjs/toolkit';

const specsStr = [
  'TRSC-7L-2S-A24-P1-5.9/1400/240/2.1',
  'TRSC-7L-2S-A48-P1-2.95/1400/480/2.1',
  'TRSC-8L-2S-A24-P1-6.8/1600/240/2.44',
  'TRSC-8L-2S-A48-P1-3.4/1600/480/2.44',
  'TRSC-10L-2S-A24-P1-8.4/2000/240/3',
  'TRSC-10L-2S-A48-P1-4.2/2000/480/3',
  'TRSC-11L-2S-A24-P1-9.2/2200/240/3.3',
  'TRSC-11L-2S-A48-P1-4.6/2200/480/3.3',
  'TRSC-12L-2S-A24-P1-10/2400/240/3.7',
  'TRSC-12L-2S-A48-P1-5/2400/480/3.7',
  'TRS-16L-2S-A48-P1-13.4/3200/240/4.9',
  'TRS-16L-2S-A48-P1-6.7/3200/480/4.9',
  'TRS-20L-2S-A24-P1-16.8/4000/480/6',
  'TRS-20L-2S-A48-P1-8.4/4000/480/6',
  'T-FLEX-16L-2S-A24-P1-13.4/3200/240/4.9',
  'T-FLEX-16L-2S-A48-P1-6.7/3200/480/4.9',
  'T-FLEX-20L-2S-A24-P1-16.6/4000/240/6.1',
  'T-FLEX-20L-2S-A48-P1-8.3/4000/480/6.1',
  'T-FLEX-24L-2S-A24-P1-20/4800/240/7.3',
  'T-FLEX-24L-2S-A48-P1-10/4800/480/7.3',
  'T-FLEX-26L-2S-A24-P1-22/5200/240/8.0',
  'T-FLEX-26L-2S-A48-P1-11/5200/480/8.0',
];

const partNumberSuggestions = [
  'TRSC-7L-2S-A24-P1',
  'TRSC-7L-2S-A48-P1',
  'TRSC-8L-2S-A24-P1',
  'TRSC-8L-2S-A48-P1',
  'TRSC-10L-2S-A24-P1',
  'TRSC-10L-2S-A48-P1',
  'TRSC-11L-2S-A24-P1',
  'TRSC-11L-2S-A48-P1',
  'TRSC-12L-2S-A24-P1',
  'TRSC-12L-2S-A48-P1',
  'TRS-16L-2S-A48-P1',
  'TRS-16L-2S-A48-P1',
  'TRS-20L-2S-A24-P1',
  'TRS-20L-2S-A48-P1',
  'T-FLEX-16L-2S-A24-P1',
  'T-FLEX-16L-2S-A48-P1',
  'T-FLEX-20L-2S-A24-P1',
  'T-FLEX-20L-2S-A48-P1',
  'T-FLEX-24L-2S-A24-P1',
  'T-FLEX-24L-2S-A48-P1',
  'T-FLEX-26L-2S-A24-P1',
  'T-FLEX-26L-2S-A48-P1',
];

const descriptionOptions = [
  'RS-CRIB RAIL HEATER - TRSC-7L-2S-A24-P1',
  'RS-CRIB RAIL HEATER - TRSC-7L-2S-A48-P1',
  'RS-CRIB RAIL HEATER - TRSC-8L-2S-A24-P1',
  'RS-CRIB RAIL HEATER - TRSC-8L-2S-A48-P1',
  'RS-CRIB RAIL HEATER - TRSC-10L-2S-A24-P1',
  'RS-CRIB RAIL HEATER - TRSC-10L-2S-A48-P1',
  'RS-CRIB RAIL HEATER - TRSC-11L-2S-A24-P1',
  'RS-CRIB RAIL HEATER - TRSC-11L-2S-A48-P1',
  'RS-CRIB RAIL HEATER - TRSC-12L-2S-A24-P1',
  'RS-CRIB RAIL HEATER - TRSC-12L-2S-A48-P1',
  'RS-SWITCH HEATER - TRS-16L-2S-A48-P1',
  'RS-SWITCH HEATER - TRS-16L-2S-A48-P1',
  'RS-SWITCH HEATER - TRS-20L-2S-A24-P1',
  'RS-SWITCH HEATER - TRS-20L-2S-A48-P1',
  'FLEXIBLE RAIL HEATER - T-FLEX-16L-2S-A24-P1',
  'FLEXIBLE RAIL HEATER - T-FLEX-16L-2S-A48-P1',
  'FLEXIBLE RAIL HEATER - T-FLEX-20L-2S-A24-P1',
  'FLEXIBLE RAIL HEATER - T-FLEX-20L-2S-A48-P1',
  'FLEXIBLE RAIL HEATER - T-FLEX-24L-2S-A24-P1',
  'FLEXIBLE RAIL HEATER - T-FLEX-24L-2S-A48-P1',
  'FLEXIBLE RAIL HEATER - T-FLEX-26L-2S-A24-P1',
  'FLEXIBLE RAIL HEATER - T-FLEX-26L-2S-A48-P1',
];

// This is for admin  TES/ESS-add element to bank
const ssrDescriptionSlice = createSlice({
  name: 'ssrDescription',
  initialState: { descriptionOptions, specsStr, partNumberSuggestions },
  reducers: {
    handleAddNewElement: (state, action) => {
      state.descriptionOptions = [
        ...state.descriptionOptions,
        `${action.payload.name} - ${action.payload.partNumber}`,
      ];
      state.specsStr = [
        ...state.specsStr,
        `${action.payload.partNumber}-${action.payload.current}/${action.payload.wattage}/${action.payload.voltage}/${action.payload.lengths}`,
      ];
      state.partNumberSuggestions = [
        ...state.partNumberSuggestions,
        action.payload.partNumber,
      ];
    },
  },
});

export default ssrDescriptionSlice;
export const selectDescription = (state) => state.ssrDescription;
export const { handleAddNewElement } = ssrDescriptionSlice.actions;
