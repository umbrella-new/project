import { createSlice } from '@reduxjs/toolkit';
import { AiOutlineTransaction } from 'react-icons/ai';

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
    forceOptions: [
      'max heat',
      'max heat for 12 hours',
      'change and replace t/c',
    ],
    maxHeatFor12hrsTimer: false,
    selectedForce: null,
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
  reducers: {
    handleForceSelection: (state, action) => {
      state.ess.selectedForce = action.payload;
    },
    handleTimerOn: (state) => {
      state.ess.maxHeatFor12hrsTimer = true;
    },
    handleTimerOff: (state) => {
      state.ess.maxHeatFor12hrsTimer = false;
    },
  },
});

export default faultsSlice;
export const selectFaults = (state) => state.faultsState;
export const { handleForceSelection, handleTimerOn, handleTimerOff } =
  faultsSlice.actions;
