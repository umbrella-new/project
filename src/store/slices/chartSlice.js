import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gpState: true,
  ebpState: false,
  isEbpAvailbe: false,
  wifiState: true,
  alarmState: false,
};

const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {},
});

export default chartSlice;
export const selectChart = (state) => state.chart;
