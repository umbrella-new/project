import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  faults: true,

  ess: { isFaults: true, number: 4 },
  tgs: { isFaults: false, number: null },
};

const faultsSlice = createSlice({
  name: 'faultsState',
  initialState,
  reducers: {},
});

export default faultsSlice;
export const selectFaults = (state) => state.faultsState;
