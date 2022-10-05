import { createSlice } from '@reduxjs/toolkit';

const testSlice = createSlice({
  name: 'test',
  initialState: {
    value: 0,
  },
  reducers: {
    dummy: (state) => {
      state.value += 2;
    },
  },
});

export default testSlice;
export const { dummy } = testSlice.actions;
