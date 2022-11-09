import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  faults: true,
  ess: {
    // from the backend
    faultsTypes: [
      'GROUND FAULT',
      'SSR FAULT',
      'THERMOCOUPLE FAILURE',
      'SSR LOAD EXCEED',
    ],
    message: [
      'GROUND FAULT - MBTA-BET EAST YARD BOSTON, MASSACHUSETES-TIME & DATE: 4:50am - 02/06/2022',
      'SSR FAULT - MBTA-BET EAST YARD BOSTON, MASSACHUSETES-TIME & DATE: 4:50am - 02/06/2022',
      'THERMOCOUPLE FAILURE - MBTA-BET EAST YARD BOSTON, MASSACHUSETES-TIME & DATE: 4:50am - 02/06/2022',
      'SSR LOAD EXCEED - MBTA-BET EAST YARD BOSTON, MASSACHUSETES-TIME & DATE: 4:50am - 02/06/2022',
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
    resetCounter: 3,
    activatedResetButton: { faultsIdx: null, status: false },
    attendButtonClicked: { faultsIdx: null, status: false },
    actionTaken: [],
  },
  tgs: {
    faultsTypes: ['TIMEOUT FAULT', 'HP/LP FAULT', 'BMS FAULT'],
    message: [
      // 'TIMEOUT FAULT - MBTA-BET EAST YARD BOSTON, MASSACHUSETES-TIME & DATE: 4:50am - 02/06/2022',
      // 'HP/LP FAULT - MBTA-BET EAST YARD BOSTON, MASSACHUSETES-TIME & DATE: 4:50am - 02/06/2022',
      // 'BMS FAULT - MBTA-BET EAST YARD BOSTON, MASSACHUSETES-TIME & DATE: 4:50am - 02/06/2022',
    ],
    actionTaken: [],
    resetCounter: 3,
    activatedResetButton: { faultsIdx: null, status: false },
    attendButtonClicked: { faultsIdx: null, status: false },
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
    handleEsFaultsReset: (state, action) => {
      // 1. send reset to the backend
      if (state.ess.resetCounter > 0) {
        // 2. save the reset button to change its styles

        state.ess.activatedResetButton.faultsIdx = action.payload;
        state.ess.activatedResetButton.status = true;

        // 3. change reset button counter -1

        state.ess.resetCounter = state.ess.resetCounter - 1;
      } else {
        // Need to check the process
      }
    },
    handleGsFaultsReset: (state, action) => {
      // 1. send reset to the backend
      if (state.tgs.resetCounter > 0) {
        // 2. save the reset button to change its styles
        state.tgs.activatedResetButton.faultsIdx = action.payload;
        state.tgs.activatedResetButton.status = true;
        // 3. change reset button counter -1
        state.tgs.resetCounter = state.ess.resetCounter - 1;
      } else {
        // Need to check the process
      }
    },
    handleEsAttendButtonClick: (state, action) => {
      state.ess.attendButtonClicked.faultsIdx = action.payload;
      state.ess.attendButtonClicked.status =
        !state.ess.attendButtonClicked.status;
    },
    handleGsAttendButtonClick: (state, action) => {
      state.tgs.attendButtonClicked.faultsIdx = action.payload;
      state.tgs.attendButtonClicked.status =
        !state.tgs.attendButtonClicked.status;
    },
    handleEsRecordActionTaken: (state, action) => {
      state.ess.actionTaken = [
        {
          faultsIdx: action.payload.faultsIndexNumber,

          userName: action.payload.inputData.name,
          actionTaken: action.payload.inputData.comments,
        },
      ];
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
  handleGsFaultsReset,
  handleEsFaultsReset,
  handleEsAttendButtonClick,
  handleGsAttendButtonClick,
  handleEsRecordActionTaken,
} = faultsSlice.actions;
