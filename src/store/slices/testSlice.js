import { createSlice } from '@reduxjs/toolkit';

const testSlice = createSlice({
  name: 'test',
  initialState: {
    value: 0,
  },
  reducers: {
    dummy: (state, action) => {
      state.value += action.payload;
      console.log(state);
      return state;
    },
  },
});

export default testSlice;
export const { dummy } = testSlice.actions;
