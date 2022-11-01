import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  faults: true,
  ess: {
    isFaults: true,
    // from the backend
    faultsTypes: [
      'GROUND FAULT',
      'SSR FAULT',
      'THERMOCOUPLE FAILURE',
      'SSR LOAD EXCEED',
    ],
    message: [
      'SSR FAULT - MBTA-BET EAST YARD BOSTON, MASSACHUSETES-TIME & DATE: 4:50am - 02/06/2022',
      'THERMOCOUPLE FAILURE - MBTA-BET EAST YARD BOSTON, MASSACHUSETES-TIME & DATE: 4:50am - 02/06/2022',
      'SSR LOAD EXCEED - MBTA-BET EAST YARD BOSTON, MASSACHUSETES-TIME & DATE: 4:50am - 02/06/2022',
      'GROUND FAULT - MBTA-BET EAST YARD BOSTON, MASSACHUSETES-TIME & DATE: 4:50am - 02/06/2022',
    ],
    comments: [],
  },
  tgs: {
    isFaults: true,
    faultsTypes: ['TIMEOUT FAULT', 'HP/LP FAULT', 'BMS FAULT'],
    message: [
      'TIMEOUT FAULT - MBTA-BET EAST YARD BOSTON, MASSACHUSETES-TIME & DATE: 4:50am - 02/06/2022',
      'HP/LP FAULT - MBTA-BET EAST YARD BOSTON, MASSACHUSETES-TIME & DATE: 4:50am - 02/06/2022',
      'BMS FAULT - MBTA-BET EAST YARD BOSTON, MASSACHUSETES-TIME & DATE: 4:50am - 02/06/2022',
    ],
    comments: [],
  },
};

const faultsSlice = createSlice({
  name: 'faultsState',
  initialState,
  reducers: {},
});

export default faultsSlice;
export const selectFaults = (state) => state.faultsState;
