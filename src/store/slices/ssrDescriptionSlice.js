import { createSlice } from "@reduxjs/toolkit";

const specsStr = [
  "TRSC-7L-2S-A24-P1-5.9/1.4/240/2.1",
  "TRSC-7L-2S-A48-P1-2.95/1.4/480/2.1",
  "TRSC-8L-2S-A24-P1-6.8/1.6/240/2.44",
  "TRSC-8L-2S-A48-P1-3.4/1.6/480/2.44",
  "TRSC-10L-2S-A24-P1-8.4/2/240/3",
  "TRSC-10L-2S-A48-P1-4.2/2/480/3",
  "TRSC-11L-2S-A24-P1-9.2/2.2/240/3.3",
  "TRSC-11L-2S-A48-P1-4.6/2.2/480/3.3",
  "TRSC-12L-2S-A24-P1-10/2.4/240/3.7",
  "TRSC-12L-2S-A48-P1-5/2.4/480/3.7",
  "TRS-16L-2S-A48-P1-13.4/3.2/240/4.9",
  "TRS-16L-2S-A48-P1-6.7/3.2/480/4.9",
  "TRS-20L-2S-A24-P1-16.8/4/480/6",
  "TRS-20L-2S-A48-P1-8.4/4/480/6",
  "T-FLEX-16L-2S-A24-P1-13.4/3.2/240/4.9",
  "T-FLEX-16L-2S-A48-P1-6.7/3.2/480/4.9",
  "T-FLEX-20L-2S-A24-P1-16.6/4/240/6.1",
  "T-FLEX-20L-2S-A48-P1-8.3/4/480/6.1",
  "T-FLEX-24L-2S-A24-P1-20/4.8/240/7.3",
  "T-FLEX-24L-2S-A48-P1-10/4.8/480/7.3",
  "T-FLEX-26L-2S-A24-P1-22/5.2/240/8.0",
  "T-FLEX-26L-2S-A48-P1-11/5.2/480/8.0",
];

const descriptionOptions = [
  "RS-CRIB RAIL HEATER - TRSC-7L-2S-A24-P1",
  "RS-CRIB RAIL HEATER - TRSC-7L-2S-A48-P1",
  "RS-CRIB RAIL HEATER - TRSC-8L-2S-A24-P1",
  "RS-CRIB RAIL HEATER - TRSC-8L-2S-A48-P1",
  "RS-CRIB RAIL HEATER - TRSC-10L-2S-A24-P1",
  "RS-CRIB RAIL HEATER - TRSC-10L-2S-A48-P1",
  "RS-CRIB RAIL HEATER - TRSC-11L-2S-A24-P1",
  "RS-CRIB RAIL HEATER - TRSC-11L-2S-A48-P1",
  "RS-CRIB RAIL HEATER - TRSC-12L-2S-A24-P1",
  "RS-CRIB RAIL HEATER - TRSC-12L-2S-A48-P1",
  "RS-SWITCH HEATER - TRS-16L-2S-A48-P1",
  "RS-SWITCH HEATER - TRS-16L-2S-A48-P1",
  "RS-SWITCH HEATER - TRS-20L-2S-A24-P1",
  "RS-SWITCH HEATER - TRS-20L-2S-A48-P1",
  "FLEXIBLE RAIL HEATER - T-FLEX-16L-2S-A24-P1",
  "FLEXIBLE RAIL HEATER - T-FLEX-16L-2S-A48-P1",
  "FLEXIBLE RAIL HEATER - T-FLEX-20L-2S-A24-P1",
  "FLEXIBLE RAIL HEATER - T-FLEX-20L-2S-A48-P1",
  "FLEXIBLE RAIL HEATER - T-FLEX-24L-2S-A24-P1",
  "FLEXIBLE RAIL HEATER - T-FLEX-24L-2S-A48-P1",
  "FLEXIBLE RAIL HEATER - T-FLEX-26L-2S-A24-P1",
  "FLEXIBLE RAIL HEATER - T-FLEX-26L-2S-A48-P1",
];

const ssrDescriptionSlice = createSlice({
  name: "ssrDescription",
  initialState: { descriptionOptions, specsStr },
  reducers: {},
});

export default ssrDescriptionSlice;
export const selectDescription = (state) => state.ssrDescription;
