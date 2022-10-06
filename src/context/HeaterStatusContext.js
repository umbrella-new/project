import { createContext, useReducer } from 'react';
import { Context } from './Context';

export const HeaterStatusContext = createContext(null);

const HeaterStatusProvider = ({ children }) => {
  const options = {
    select: [
      'tc-01',
      'tc-02',
      'tc-03',
      'tc-04',
      'tc-05',
      'tc-06',
      'tc-07',
      'tc-08',
      'tc-09',
      'tc-10',
      'tc-11',
    ],
    current: [2.95, 4.2, 4.6, 6.7, 8.4, 10],
    wattage: [1400, 2000, 2200, 3200, 4000, 4800],
    voltage: [240, 460, 480, 600],
    length: [2.1, 3, 3.3, 4.9, 6, 7.3],
  };

  const ssrInitialState = {
    select: 'tc-01',
    buttonStatus: true,
    current: [2.95, 3, 4],
    wattage: [1400, 1400, 1400],
    voltage: [240, 240, 240],
    length: [2.1, 2.1, 2.1],
    description: [
      `RS-CRIB HEATER - TRSC - 7L-2S-A48 - P1 - SS-316 7’ X 1” X 1/2” `,
      `RS-CRIB HEATER - TRSC - 7L-2S-A48 - P1 - SS-316 7’ X 1” X 1/2” `,
      `RS-CRIB HEATER - TRSC - 7L-2S-A48 - P1 - SS-316 7’ X 1” X 1/2” `,
    ],
  };

  const initialState = {
    ssr1: { ...ssrInitialState },
    ssr2: { ...ssrInitialState, buttonStatus: 'flt' },
    ssr3: { ...ssrInitialState },
    ssr4: { ...ssrInitialState },
    ssr5: { ...ssrInitialState },
    ssr6: { ...ssrInitialState },
    ssr7: { ...ssrInitialState },
    ssr8: { ...ssrInitialState },
  };

  // const initialState = {a:{ name: 'enoch', age: 20 }, b:{ name: 'Norman' }};
  const ssrReducer = (state, action) => {
    // console.log(action.type, action.id, action.data);
    switch (action.type) {
      case 'toggle': {
        return {
          ...state,
          [action.id]: {
            ...state[action.id],
            buttonStatus: !state[action.id].buttonStatus,
          },
        };
      }
      case 'change-switch': {
        // console.log(action.id);
        break;
      }
      case 'select': {
        return {
          ...state,
          [action.id]: { ...state[action.id], select: action.data },
        };
      }
      case 'current': {
        return state;
      }
      default: {
        return state;
      }
    }
  };
  const [ssrState, ssrDispatch] = useReducer(ssrReducer, initialState);

  return (
    <HeaterStatusContext.Provider value={{ ssrState, ssrDispatch, options }}>
      {children}
    </HeaterStatusContext.Provider>
  );
};

export default HeaterStatusProvider;
