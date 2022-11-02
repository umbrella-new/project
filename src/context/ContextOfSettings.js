import { createContext, useReducer, useRef, useState } from 'react';

export const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
  const initialState = { essSelectUnits: true };
  const [selectUnitsState, setSelectUnitsState] = useState(true);
  const [metricImperialToggle, setMetricImperialToggle] = useState();
  // Declaration of useReducer
  const essSnowSensorInput = useRef(null);
  const tgsSnowSensorInput = useRef(null);
  const tesSnowSensorInput = useRef(null);

  const settingsReducer = (state, action) => {
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
        selectUnitsState,
        setSelectUnitsState,
        metricImperialToggle,
        setMetricImperialToggle,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
