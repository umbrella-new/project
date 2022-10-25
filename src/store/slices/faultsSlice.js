import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  faults: true,
  faultsTypes: [
    'ground fault',
    'ssr fault',
    'thermocouple failure',
    'bms fault',
    'flame failure',
    'high pressure-low pressure fault',
  ],

  ess: {
    isFaults: true,
    message: [
      'SSR2 FAULT - MBTA-BET EAST YARD BOSTON, MASSACHUSETES-TIME & DATE: 4:50am - 02/03/2022',
      'NETWORK FAILURE - MBTA-BET EAST YARD BOSTON, MASSACHUSETES-TIME & DATE: 4:50am - 02/06/2022',
      'FAULT GROUND - MBTA-BET EAST YARD BOSTON, MASSACHUSETES-TIME & DATE: 4:50am - 02/05/2022',
      'SSR1 FAULT - MBTA-BET EAST YARD BOSTON, MASSACHUSETES-TIME & DATE: 4:50am - 02/03/2022',
    ],
    comments: [],
  },
  tgs: { isFaults: false, message: [], comments: [] },
};

const faultsSlice = createSlice({
  name: 'faultsState',
  initialState,
  reducers: {},
});

export default faultsSlice;
export const selectFaults = (state) => state.faultsState;
