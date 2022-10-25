import { createSlice } from '@reduxjs/toolkit';

const selectInitialState = { select: 'tc-01' };

const initialState = {
  essHeaterTemp: selectInitialState,
  essEncloseTemp: selectInitialState,
  essOutSideTemp: selectInitialState,
};

const forceAndCommandStatusSlice = createSlice({
  name: 'forceAndCommandStatus',
  initialState,
  reducers: {
    setEssTcTemp: (state, action) => {
      state[action.payload.id].select = action.payload.data;
    },
  },
});

export const { setEssTcTemp } = forceAndCommandStatusSlice.actions;
export const selectForceAndCommand = (state) => state.forceAndCommandStatus;
export default forceAndCommandStatusSlice;
