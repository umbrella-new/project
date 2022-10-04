import { configureStore } from '@reduxjs/toolkit';
import heaterStatusSlice from './slices/heaterStatusSlice';
import testSlice from './slices/testSlice';

const store = configureStore({
  reducer: {
    ssrState: heaterStatusSlice.reducer,
    test: testSlice.reducer,
  },
});

export default store;
