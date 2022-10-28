import { createContext, useReducer, useRef } from 'react';

export const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
  const initialState = { essSelectUnits: false };
  // Declaration of useReducer
  const essSnowSensorInput = useRef(null);
  const tgsSnowSensorInput = useRef(null);
  const tesSnowSensorInput = useRef(null);

  const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'units':
        return { ...state, essSelectUnits: !state.essSelectUnits };
      case 'forceAndCommand':
        return;
      case 'admin':
        return;
      default: {
        return state;
      }
    }
  };

  const [settingState, settingDispatch] = useReducer(
    settingsReducer,
    initialState
  );

  return (
    <SettingsContext.Provider
      value={{
        settingState,
        settingDispatch,
        essSnowSensorInput,
        tgsSnowSensorInput,
        tesSnowSensorInput,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
