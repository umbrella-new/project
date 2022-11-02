import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';
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

    isForceButtonClicked: false,
    isForceButtonActivated: false,
    displayForceSelectionBox: false,
    displayForceMessageBox: false,
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
      state.ess.isForceButtonActivated = true;
    },
    handleTimerOff: (state) => {
      state.ess.maxHeatFor12hrsTimer = false;
    },
    handleForceButtonClick: (state, action) => {
      state.ess.isForceButtonClicked = action.payload;
    },
    handleDisplayForceMessageBox: (state, action) => {
      state.ess.displayForceMessageBox = action.payload;
    },
    handleDisplayForceSelectionBox: (state, action) => {
      state.ess.displayForceSelectionBox = action.payload;
    },
    handleForceButtonActivated: (state, action) => {
      state.ess.isForceButtonActivated = action.payload;
      state.ess.isForceButtonClicked = false;
    },
  },
});

export default faultsSlice;
export const selectFaults = (state) => state.faultsState;
export const {
  handleForceSelection,
  handleTimerOn,
  handleTimerOff,
  handleDisplayForceSelectionBox,
  handleDisplayForceMessageBox,
  handleForceButtonClick,
  handleForceButtonActivated,
} = faultsSlice.actions;
