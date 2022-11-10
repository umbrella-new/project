import { createContext, useReducer, useRef, useState } from 'react';

export const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
  const initialState = { essSelectUnits: true };

  const [selectUnitsState, setSelectUnitsState] = useState(true);
  const [metricImperialToggle, setMetricImperialToggle] = useState();
  const [savedSelection, SetSavedSelection] = useState(false);

  // wind factor state
  const [windFactor, setWindFactor] = useState({
    lowWind: '',
    medWind: '',
    highWind: '',
    extremeWind: '',
  });

  // snow sensor state
  const [essSnowSensor, setEssSnowSensor] = useState();
  const [tgsSnowSensor, setTgsSnowSensor] = useState();
  const [tesSnowSensor, setTesSnowSensor] = useState();

  const essSnowSensorInput = useRef(null);
  const tgsSnowSensorInput = useRef(null);
  const tesSnowSensorInput = useRef(null);

  // Declaration of useReducer

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
        savedSelection,
        SetSavedSelection,
        windFactor,
        setWindFactor,
        essSnowSensor,
        setEssSnowSensor,
        tgsSnowSensor,
        setTgsSnowSensor,
        tesSnowSensor,
        setTesSnowSensor,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
