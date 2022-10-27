import { createContext, useReducer } from 'react';

export const SettingsContext = createContext(null);

const SettingsProvider = ({ children }) => {
  const initialState = { essSelectUnits: false };
  // Declaration of useReducer

  const settingsReducer = (state, action) => {
    switch (action.type) {
      case 'units':
        return (
          console.log('hello'),
          { ...state, essSelectUnits: !state.essSelectUnits }
        );
      case 'windFactor':
        return;
      case 'snowFactor':
        return;
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
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
