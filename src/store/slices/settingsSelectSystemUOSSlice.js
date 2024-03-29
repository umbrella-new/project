import { createSlice } from '@reduxjs/toolkit';

const ssrInitialState = {
  thermoCouple: 'tc-02',
  isSelectSwitchListOpen: false,
};

const ssrState = {
  ssr1: {
    ...ssrInitialState,
    specs: [
      {
        elementName: 'RS-CRIB RAIL HEATER',
        partNumber: 'TRSC-7L-2S-A48-P1',
        currentCurrent: 2.2,
        current: 2.95,
        wattage: 1400,
        voltage: 480,
        lengths: 7,
      },
    ],
  },
  ssr2: {
    ...ssrInitialState,

    specs: [
      {
        elementName: 'RS-CRIB RAIL HEATER',
        partNumber: 'TRSC-10L-2S-A48-P1',
        current: 4.2,
        wattage: 2000,
        voltage: 480,
        lengths: 10,
        currentCurrent: 4.1,
      },
    ],

    buttonStatus: 'flt',
  },
  ssr3: {
    ...ssrInitialState,
    specs: [
      {
        elementName: 'RS-CRIB RAIL HEATER',
        partNumber: 'TRSC-11L-2S-A48-P1',
        current: 4.6,
        wattage: 2200,
        voltage: 480,
        lengths: 11,
        currentCurrent: 8,
      },
    ],
  },
  ssr4: {
    ...ssrInitialState,
    specs: [
      {
        elementName: 'RS-Switch HEATER',
        partNumber: 'TRS-16L-2S-A48-P1',
        current: 6.7,
        wattage: 3200,
        voltage: 480,
        lengths: 16,
        currentCurrent: 6.1,
      },
    ],
  },
  ssr5: {
    ...ssrInitialState,
    specs: [
      {
        elementName: 'RS-Switch HEATER',
        partNumber: 'TRS-20L-2S-A48-P1',
        current: 8.4,
        wattage: 4000,
        voltage: 480,
        lengths: 20,
        currentCurrent: 8,
      },
    ],
  },
  ssr6: {
    ...ssrInitialState,
    specs: [
      {
        elementName: 'FLEXIBLE RAIL HEATER',
        partNumber: 'T-FLEX-24L-2S-A48-P1',
        current: 10,
        wattage: 4800,
        voltage: 480,
        lengths: 24,
        currentCurrent: 9,
      },
    ],
  },
  ssr7: {
    ...ssrInitialState,
    specs: [
      {
        elementName: 'RS-Switch HEATER',
        partNumber: 'TRS-16L-2S-A24-P1',
        current: 13.4,
        wattage: 3200,
        voltage: 240,
        lengths: 16,
        currentCurrent: 13,
      },
    ],
  },
  ssr8: {
    ...ssrInitialState,
    specs: [
      {
        elementName: 'RS-CRIB RAIL HEATER',
        partNumber: 'TRSC-8L-2S-A48-P1',
        current: 3.4,
        wattage: 1600,
        voltage: 480,
        lengths: 8,
        currentCurrent: 3,
      },
    ],
  },
};

const ssrState2 = {
  ssr1: {
    ...ssrInitialState,
    specs: [
      {
        elementName: 'RS-CRIB RAIL HEATER',
        partNumber: 'TRSC-17L-2S-A48-P1',
        currentCurrent: 2.2,
        current: 2.95,
        wattage: 1400,
        voltage: 480,
        lengths: 7,
      },
    ],
  },
  ssr2: {
    ...ssrInitialState,

    specs: [
      {
        elementName: 'RS-CRIB RAIL HEATER',
        partNumber: 'TRSC-10L-2S-A48-P1',
        current: 4.2,
        wattage: 2000,
        voltage: 480,
        lengths: 10,
        currentCurrent: 4.1,
      },
    ],

    buttonStatus: 'flt',
  },
  ssr3: {
    ...ssrInitialState,
    specs: [
      {
        elementName: 'RS-CRIB RAIL HEATER',
        partNumber: 'TRSC-11L-2S-A48-P1',
        current: 4.6,
        wattage: 2200,
        voltage: 480,
        lengths: 11,
        currentCurrent: 8,
      },
    ],
  },
  ssr4: {
    ...ssrInitialState,
    specs: [
      {
        elementName: 'RS-Switch HEATER',
        partNumber: 'TRS-16L-2S-A48-P1',
        current: 6.7,
        wattage: 3200,
        voltage: 480,
        lengths: 16,
        currentCurrent: 6.1,
      },
    ],
  },
  ssr5: {
    ...ssrInitialState,
    specs: [
      {
        elementName: 'RS-Switch HEATER',
        partNumber: 'TRS-20L-2S-A48-P1',
        current: 8.4,
        wattage: 4000,
        voltage: 480,
        lengths: 20,
        currentCurrent: 8,
      },
    ],
  },
  ssr6: {
    ...ssrInitialState,
    specs: [
      {
        elementName: 'FLEXIBLE RAIL HEATER',
        partNumber: 'T-FLEX-24L-2S-A48-P1',
        current: 10,
        wattage: 4800,
        voltage: 480,
        lengths: 24,
        currentCurrent: 9,
      },
    ],
  },
  ssr7: {
    ...ssrInitialState,
    specs: [
      {
        elementName: 'RS-Switch HEATER',
        partNumber: 'TRS-16L-2S-A24-P1',
        current: 13.4,
        wattage: 3200,
        voltage: 240,
        lengths: 16,
        currentCurrent: 13,
      },
    ],
  },
  ssr8: {
    ...ssrInitialState,
    specs: [
      {
        elementName: 'RS-CRIB RAIL HEATER',
        partNumber: 'TRSC-8L-2S-A48-P1',
        current: 3.4,
        wattage: 1600,
        voltage: 480,
        lengths: 8,
        currentCurrent: 3,
      },
    ],
  },
};

const sysIdentificationState = {
  locations: [
    {
      location: 'gp6',
      address: '123 ny',
      numOfUOS: 3,
      numOfSSR: 8,
      switchesNum: 4,
      switchInfo: [
        {
          UOS: '01',
          switchName: 'bet-east01',
          heatingSys: 'ess',
          gasType: '',
          selectedSSR: [
            { ssr1: { ...ssrState.ssr1 } },
            { ssr2: { ...ssrState.ssr2 } },
            { ssr3: { ...ssrState.ssr3 } },
            { ssr4: { ...ssrState.ssr4 } },
          ],
          application: 'st',
          switchSize: '#10',
          ssrRating: 'dsfd',
          sysId: '',
          displaySelectBox: [false, false, false, false, false],
          // ...ssrState,
        },
        {
          UOS: '01',
          switchName: 'bet-east02',
          heatingSys: 'ess',
          gasType: '',
          selectedSSR: [{ ssr1: { ...ssrState2.ssr1 } }],
          application: 'st',
          switchSize: '#10',
          ssrRating: 'dsfd',
          sysId: '',
          displaySelectBox: [false, false, false, false, false],
          // ...ssrState2,
        },
        {
          UOS: '02',
          switchName: 'bet-east04',
          heatingSys: 'tgs',
          gasType: 'lp',
          selectedSSR: [{ ssr1: { ...ssrState.ssr1 } }],
          application: 'st',
          switchSize: '#20',
          ssrRating: 'ghjk',
          sysId: '',
          displaySelectBox: [false, false, false, false, false],
          // ...ssrState,
        },
        {
          UOS: '03',
          switchName: 'bet-east03',
          heatingSys: 'tes',
          gasType: '',
          selectedSSR: [{ ssr7: { ...ssrState.ssr7 } }],
          application: 'st',
          switchSize: '#40',
          ssrRating: 'dfgh',
          sysId: '',
          displaySelectBox: [false, false, false, false, false],
          // ...ssrState,
        },
      ],
    },
    {
      location: 'campbell st',
      address: '234 boston',
      numOfUOS: 3,
      numOfSSR: 8,
      switchesNum: 3,
      switchInfo: [
        {
          UOS: '01',
          switchName: 'bet-east01',
          heatingSys: 'ess',
          gasType: '',
          selectedSSR: [
            { ssr1: { ...ssrState2.ssr1 } },
            { ssr2: { ...ssrState2.ssr2 } },
            { ssr3: { ...ssrState2.ssr3 } },
            { ssr4: { ...ssrState2.ssr4 } },
            { ssr5: { ...ssrState2.ssr5 } },
            { ssr6: { ...ssrState2.ssr6 } },
            { ssr7: { ...ssrState2.ssr7 } },
            { ssr8: { ...ssrState2.ssr8 } },
          ],
          application: 'st',
          switchSize: '#10',
          ssrRating: 'dsfd',
          sysId: '',
          displaySelectBox: [false, false, false, false, false],
        },
        {
          UOS: '02',
          switchName: 'bet-east02',
          heatingSys: 'tgs',
          gasType: 'lpg',
          selectedSSR: [
            { ssr1: { ...ssrState.ssr1 } },
            { ssr2: { ...ssrState.ssr2 } },
            { ssr3: { ...ssrState.ssr3 } },
            { ssr4: { ...ssrState.ssr4 } },
            { ssr5: { ...ssrState.ssr5 } },
            { ssr6: { ...ssrState.ssr6 } },
            { ssr7: { ...ssrState.ssr7 } },
            { ssr8: { ...ssrState.ssr8 } },
          ],
          application: 'st',
          switchSize: '#20',
          ssrRating: 'ghjk',
          sysId: '',
          displaySelectBox: [false, false, false, false, false],
        },
        {
          UOS: '03',
          switchName: 'bet-east03',
          heatingSys: 'tes',
          gasType: '',
          selectedSSR: [
            { ssr1: { ...ssrState2.ssr1 } },
            { ssr2: { ...ssrState2.ssr2 } },
            { ssr7: { ...ssrState2.ssr7 } },
            { ssr8: { ...ssrState2.ssr8 } },
          ],
          application: 'st',
          switchSize: '#40',
          ssrRating: 'dfgh',
          sysId: '',
          displaySelectBox: [false, false, false, false, false],
        },
      ],
    },
    {
      location: 'swift interlocking # 15',
      address: '345 mtl',
      numOfUOS: 3,
      numOfSSR: 8,
      switchesNum: 3,
      switchInfo: [
        {
          UOS: '01',
          switchName: 'bet-east01',
          heatingSys: 'ess',
          gasType: '',
          selectedSSR: [
            { ssr1: { ...ssrState.ssr1 } },
            { ssr2: { ...ssrState.ssr2 } },
            { ssr3: { ...ssrState.ssr3 } },
            { ssr4: { ...ssrState.ssr4 } },
            { ssr8: { ...ssrState.ssr8 } },
          ],
          application: 'st',
          switchSize: '#10',
          ssrRating: 'dsfd',
          sysId: '',
          displaySelectBox: [false, false, false, false, false],
        },
        {
          UOS: '02',
          switchName: 'bet-east02',
          heatingSys: 'tgs',
          gasType: 'lpg',
          selectedSSR: [
            { ssr4: { ...ssrState.ssr4 } },
            { ssr5: { ...ssrState.ssr5 } },
            { ssr6: { ...ssrState.ssr6 } },
            { ssr7: { ...ssrState.ssr7 } },
            { ssr8: { ...ssrState.ssr8 } },
          ],
          application: 'st',
          switchSize: '#20',
          ssrRating: 'ghjk',
          sysId: '',
          displaySelectBox: [false, false, false, false, false],
        },
        {
          UOS: '03',
          switchName: 'bet-east03',
          heatingSys: 'tes',
          gasType: '',
          selectedSSR: [
            { ssr1: { ...ssrState2.ssr1 } },
            { ssr2: { ...ssrState2.ssr2 } },
            { ssr7: { ...ssrState2.ssr7 } },
            { ssr8: { ...ssrState2.ssr8 } },
          ],
          application: 'st',
          switchSize: '#40',
          ssrRating: 'dfgh',
          sysId: '',
          displaySelectBox: [false, false, false, false, false],
        },
      ],
    },
    {
      location: 'swift interlocking # 10',
      address: '2323 las vegas',
      numOfUOS: 3,
      numOfSSR: 8,
      switchesNum: 3,
      switchInfo: [
        {
          UOS: '01',
          switchName: 'bet-east01',
          heatingSys: 'ess',
          gasType: '',
          selectedSSR: [
            { ssr1: { ...ssrState2.ssr1 } },
            { ssr2: { ...ssrState2.ssr2 } },
            { ssr5: { ...ssrState2.ssr5 } },
            { ssr6: { ...ssrState2.ssr6 } },
            { ssr7: { ...ssrState2.ssr7 } },
            { ssr8: { ...ssrState2.ssr8 } },
          ],
          application: 'st',
          switchSize: '#10',
          ssrRating: 'dsfd',
          sysId: '',
          displaySelectBox: [false, false, false, false, false],
        },
        {
          UOS: '01',
          switchName: 'bet-east02',
          heatingSys: 'tgs',
          gasType: 'lpg',
          selectedSSR: [
            { ssr3: { ...ssrState.ssr3 } },
            { ssr4: { ...ssrState.ssr4 } },
            { ssr5: { ...ssrState.ssr5 } },
            { ssr6: { ...ssrState.ssr6 } },
            { ssr7: { ...ssrState.ssr7 } },
            { ssr8: { ...ssrState.ssr8 } },
          ],
          application: 'st',
          switchSize: '#20',
          ssrRating: 'ghjk',
          sysId: '',
          displaySelectBox: [false, false, false, false, false],
        },
        {
          UOS: '01',
          switchName: 'bet-east03',
          heatingSys: 'tes',
          gasType: '',
          selectedSSR: [
            { ssr1: { ...ssrState2.ssr1 } },
            { ssr2: { ...ssrState2.ssr2 } },
            { ssr3: { ...ssrState2.ssr3 } },
          ],
          application: 'st',
          switchSize: '#40',
          ssrRating: 'dfgh',
          sysId: '',
          displaySelectBox: [false, false, false, false, false],
        },
      ],
    },
    {
      location: 'swift interlocking dia cr',
      address: '985 st-hubert',
      numOfUOS: 3,
      numOfSSR: 8,
      switchesNum: 3,
      switchInfo: [
        {
          UOS: '01',
          switchName: 'bet-east01',
          heatingSys: 'ess',
          gasType: '',
          selectedSSR: [
            { ssr1: { ...ssrState.ssr1 } },
            { ssr2: { ...ssrState.ssr2 } },
            { ssr3: { ...ssrState.ssr3 } },
            { ssr4: { ...ssrState.ssr4 } },
            { ssr5: { ...ssrState.ssr5 } },
          ],
          application: 'st',
          switchSize: '#10',
          ssrRating: 'dsfd',
          sysId: '',
          displaySelectBox: [false, false, false, false, false],
        },
        {
          UOS: '01',
          switchName: 'bet-east02',
          heatingSys: 'tgs',
          gasType: 'lpg',
          selectedSSR: [
            { ssr1: { ...ssrState2.ssr1 } },
            { ssr8: { ...ssrState2.ssr8 } },
          ],
          application: 'st',
          switchSize: '#20',
          ssrRating: 'ghjk',
          sysId: '',
          displaySelectBox: [false, false, false, false, false],
        },
        {
          UOS: '01',
          switchName: 'bet-east03',
          heatingSys: 'tes',
          gasType: '',
          selectedSSR: [
            { ssr7: { ...ssrState2.ssr7 } },
            { ssr8: { ...ssrState2.ssr8 } },
          ],
          application: 'st',
          switchSize: '#40',
          ssrRating: 'dfgh',
          sysId: '',
          displaySelectBox: [false, false, false, false, false],
        },
      ],
    },
    {
      location: 'foxbord',
      address: '8989 henry',
      numOfUOS: 3,
      numOfSSR: 8,
      switchesNum: 3,
      switchInfo: [
        {
          UOS: '01',
          switchName: 'bet-east01',
          heatingSys: 'ess',
          gasType: '',
          selectedSSR: [
            { ssr1: { ...ssrState2.ssr1 } },
            { ssr2: { ...ssrState2.ssr2 } },
            { ssr3: { ...ssrState2.ssr3 } },
          ],
          application: 'st',
          switchSize: '#10',
          ssrRating: 'dsfd',
          sysId: '',
          displaySelectBox: [false, false, false, false, false],
        },
        {
          UOS: '02',
          switchName: 'bet-east02',
          heatingSys: 'tgs',
          gasType: 'lpg',
          selectedSSR: [
            { ssr1: { ...ssrState2.ssr1 } },
            { ssr2: { ...ssrState2.ssr2 } },
            { ssr3: { ...ssrState2.ssr3 } },
            { ssr4: { ...ssrState2.ssr4 } },
            { ssr5: { ...ssrState2.ssr5 } },
            { ssr6: { ...ssrState2.ssr6 } },
            { ssr7: { ...ssrState2.ssr7 } },
            { ssr8: { ...ssrState2.ssr8 } },
          ],
          application: 'st',
          switchSize: '#20',
          ssrRating: 'ghjk',
          sysId: '',
          displaySelectBox: [false, false, false, false, false],
        },
        {
          UOS: '02',
          switchName: 'bet-east03',
          heatingSys: 'tes',
          gasType: '',
          selectedSSR: [
            { ssr7: { ...ssrState.ssr7 } },
            { ssr8: { ...ssrState.ssr8 } },
          ],
          application: 'st',
          switchSize: '#40',
          ssrRating: 'dfgh',
          sysId: '',
          displaySelectBox: [false, false, false, false, false],
        },
      ],
    },
    {
      location: 'tufts interlocking',
      address: '3636 love',
      numOfUOS: 3,
      numOfSSR: 8,
      switchesNum: 3,
      switchInfo: [
        {
          UOS: '01',
          switchName: 'bet-east01',
          heatingSys: 'ess',
          gasType: '',
          selectedSSR: [
            { ssr1: { ...ssrState.ssr1 } },
            { ssr2: { ...ssrState.ssr2 } },
            { ssr3: { ...ssrState.ssr3 } },
            { ssr4: { ...ssrState.ssr4 } },
            { ssr5: { ...ssrState.ssr5 } },
            { ssr6: { ...ssrState.ssr6 } },
            { ssr7: { ...ssrState.ssr7 } },
            { ssr8: { ...ssrState.ssr8 } },
          ],
          application: 'st',
          switchSize: '#10',
          ssrRating: 'dsfd',
          sysId: '',
          displaySelectBox: [false, false, false, false, false],
        },
        {
          UOS: '02',
          switchName: 'bet-east02',
          heatingSys: 'tgs',
          gasType: 'lpg',
          selectedSSR: [
            { ssr1: { ...ssrState2.ssr1 } },
            { ssr2: { ...ssrState2.ssr2 } },
            { ssr7: { ...ssrState2.ssr7 } },
            { ssr8: { ...ssrState2.ssr8 } },
          ],
          application: 'st',
          switchSize: '#20',
          ssrRating: 'ghjk',
          sysId: '',
          displaySelectBox: [false, false, false, false, false],
        },
        {
          UOS: '03',
          switchName: 'bet-east03',
          heatingSys: 'tes',
          gasType: '',
          selectedSSR: [
            { ssr1: { ...ssrState2.ssr1 } },
            { ssr2: { ...ssrState2.ssr2 } },
            { ssr3: { ...ssrState2.ssr3 } },
            { ssr5: { ...ssrState2.ssr5 } },
            { ssr6: { ...ssrState2.ssr6 } },
            { ssr8: { ...ssrState2.ssr8 } },
          ],
          application: 'st',
          switchSize: '#40',
          ssrRating: 'dfgh',
          sysId: '',
          displaySelectBox: [false, false, false, false, false],
        },
      ],
    },
    {
      location: 'ti movable frog points',
      address: '458 steven',
      numOfUOS: 3,
      numOfSSR: 8,
      switchesNum: 3,
      switchInfo: [
        {
          UOS: '01',
          switchName: 'bet-east01',
          heatingSys: 'ess',
          gasType: '',
          selectedSSR: [
            { ssr1: { ...ssrState2.ssr1 } },
            { ssr2: { ...ssrState2.ssr2 } },
            { ssr3: { ...ssrState.ssr3 } },
            { ssr4: { ...ssrState2.ssr4 } },
            { ssr6: { ...ssrState.ssr6 } },
            { ssr7: { ...ssrState.ssr7 } },
            { ssr8: { ...ssrState.ssr8 } },
          ],
          application: 'st',
          switchSize: '#10',
          ssrRating: 'dsfd',
          sysId: '',
          displaySelectBox: [false, false, false, false, false],
        },
        {
          UOS: '01',
          switchName: 'bet-east02',
          heatingSys: 'tgs',
          gasType: 'lpg',
          selectedSSR: [
            { ssr1: { ...ssrState2.ssr1 } },
            { ssr2: { ...ssrState2.ssr2 } },
            { ssr5: { ...ssrState2.ssr5 } },
            { ssr6: { ...ssrState2.ssr6 } },
          ],
          application: 'st',
          switchSize: '#20',
          ssrRating: 'ghjk',
          sysId: '',
          displaySelectBox: [false, false, false, false, false],
        },
        {
          UOS: '01',
          switchName: 'bet-east03',
          heatingSys: 'tes',
          gasType: '',
          selectedSSR: [
            { ssr1: { ...ssrState.ssr1 } },
            { ssr2: { ...ssrState.ssr2 } },
            { ssr3: { ...ssrState.ssr3 } },
            { ssr4: { ...ssrState.ssr4 } },
            { ssr5: { ...ssrState.ssr5 } },
            { ssr6: { ...ssrState.ssr6 } },
            { ssr7: { ...ssrState.ssr7 } },
            { ssr8: { ...ssrState.ssr8 } },
          ],
          application: 'st',
          switchSize: '#40',
          ssrRating: 'dfgh',
          sysId: '',
          displaySelectBox: [false, false, false, false, false],
        },
      ],
    },
  ],
};

const settingsSelectSystemUOSSlice = createSlice({
  name: 'selectSystemUOS',
  initialState: sysIdentificationState,
  reducers: {
    // handleSaveUOSIdentification: (state, action) => {},
  },
});

export default settingsSelectSystemUOSSlice;
export const selectSelectSystemUOS = (state) => state.selectSystemUOS;
export const { handleSaveUOSIdentification } =
  settingsSelectSystemUOSSlice.actions;
