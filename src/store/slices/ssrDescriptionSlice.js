import { createSlice } from '@reduxjs/toolkit';

const elementsOptions = [
  {
    elementName: 'RS-CRIB RAIL HEATER',
    partNumber: 'TRSC-7L-2S-A24-P1',
    current: 5.9,
    wattage: 1400,
    voltage: 240,
    lengths: 7,
  },

  {
    elementName: 'RS-CRIB RAIL HEATER',
    partNumber: 'TRSC-7L-2S-A48-P1',
    current: 2.95,
    wattage: 1400,
    voltage: 480,
    lengths: 7,
  },
  {
    elementName: 'RS-CRIB RAIL HEATER',
    partNumber: 'TRSC-8L-2S-A24-P1',
    current: 6.8,
    wattage: 1600,
    voltage: 240,
    lengths: 8,
  },
  {
    elementName: 'RS-CRIB RAIL HEATER',
    partNumber: 'TRSC-8L-2S-A48-P1',
    current: 3.4,
    wattage: 1600,
    voltage: 480,
    lengths: 8,
  },

  {
    elementName: 'RS-CRIB RAIL HEATER',
    partNumber: 'TRSC-10L-2S-A24-P1',
    current: 8.4,
    wattage: 2000,
    voltage: 240,
    lengths: 10,
  },
  {
    elementName: 'RS-CRIB RAIL HEATER',
    partNumber: 'TRSC-10L-2S-A48-P1',
    current: 4.2,
    wattage: 2000,
    voltage: 480,
    lengths: 10,
  },
  {
    elementName: 'RS-CRIB RAIL HEATER',
    partNumber: 'TRSC-11L-2S-A24-P1',
    current: 9.2,
    wattage: 2200,
    voltage: 240,
    lengths: 11,
  },
  {
    elementName: 'RS-CRIB RAIL HEATER',
    partNumber: 'TRSC-11L-2S-A48-P1',
    current: 4.6,
    wattage: 2200,
    voltage: 480,
    lengths: 11,
  },
  {
    elementName: 'RS-CRIB RAIL HEATER',
    partNumber: 'TRSC-12L-2S-A24-P1',
    current: 10,
    wattage: 2400,
    voltage: 240,
    lengths: 12,
  },
  {
    elementName: 'RS-CRIB RAIL HEATER',
    partNumber: 'TRSC-12L-2S-A48-P1',
    current: 5,
    wattage: 2400,
    voltage: 480,
    lengths: 12,
  },

  {
    elementName: 'RS-SWITCH HEATER',
    partNumber: 'TRS-16L-2S-A48-P1',
    current: 13.4,
    wattage: 3200,
    voltage: 240,
    lengths: 16,
  },
  {
    elementName: 'RS-SWITCH HEATER',
    partNumber: 'TRS-16L-2S-A48-P1',
    current: 6.7,
    wattage: 3200,
    voltage: 480,
    lengths: 16,
  },
  {
    elementName: 'RS-SWITCH HEATER',
    partNumber: 'TRS-20L-2S-A24-P1',
    current: 16.8,
    wattage: 4000,
    voltage: 480,
    lengths: 20,
  },
  {
    elementName: 'RS-SWITCH HEATER',
    partNumber: 'TRS-20L-2S-A48-P1',
    current: 8.4,
    wattage: 4000,
    voltage: 480,
    lengths: 20,
  },

  {
    elementName: 'FLEXIBLE RAIL HEATER',
    partNumber: 'T-FLEX-16L-2S-A24-P1',
    current: 13.4,
    wattage: 3200,
    voltage: 240,
    lengths: 16,
  },
  {
    elementName: 'FLEXIBLE RAIL HEATER',
    partNumber: 'T-FLEX-16L-2S-A48-P1',
    current: 6.7,
    wattage: 3200,
    voltage: 480,
    lengths: 16,
  },
  {
    elementName: 'FLEXIBLE RAIL HEATER',
    partNumber: 'T-FLEX-20L-2S-A24-P1',
    current: 16.6,
    wattage: 4000,
    voltage: 240,
    lengths: 20,
  },
  {
    elementName: 'FLEXIBLE RAIL HEATER',
    partNumber: 'T-FLEX-20L-2S-A48-P1',
    current: 8.3,
    wattage: 4000,
    voltage: 480,
    lengths: 20,
  },
  {
    elementName: 'FLEXIBLE RAIL HEATER',
    partNumber: 'T-FLEX-24L-2S-A24-P1',
    current: 20,
    wattage: 4800,
    voltage: 240,
    lengths: 24,
  },
  {
    elementName: 'FLEXIBLE RAIL HEATER',
    partNumber: 'T-FLEX-24L-2S-A48-P1',
    current: 10,
    wattage: 4800,
    voltage: 480,
    lengths: 24,
  },
  {
    elementName: 'FLEXIBLE RAIL HEATER',
    partNumber: 'T-FLEX-26L-2S-A24-P1',
    current: 22,
    wattage: 5200,
    voltage: 240,
    lengths: 26,
  },
  {
    elementName: 'FLEXIBLE RAIL HEATER',
    partNumber: 'T-FLEX-26L-2S-A48-P1',
    current: 11,
    wattage: 5200,
    voltage: 480,
    lengths: 26,
  },
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

// This is for admin  TES/ESS-add element to bank
const ssrDescriptionSlice = createSlice({
  name: 'ssrDescription',
  initialState: {
    partNumberSuggestions,
    elementsOptions,
  },
  reducers: {
    handleAddNewElement: (state, action) => {
      console.log('actions', action.payload);
      state.elementsOptions = [...state.elementsOptions, action.payload];
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
