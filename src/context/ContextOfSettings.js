import { createContext, useReducer, useRef, useState } from 'react';

export const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
  const initialState = { essSelectUnits: true };

  // units
  const [selectUnitsState, setSelectUnitsState] = useState(true);
  const [metricImperialToggle, setMetricImperialToggle] = useState();

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

  // admin: sys: system configuration save button state

  const [sysConfiguration, setSysConfiguration] = useState(false);
  const [savedSelection, SetSavedSelection] = useState(null);

  // admin: tgs: valve settings
  const valveStates = { first: '', second: '', third: '' };
  const [inputValue, setInputValue] = useState(valveStates);

  //admin: tgs: select gas type
  const [activeSelect, setActiveSelect] = useState(null);
  const [gasSelection, setGasSelection] = useState(0);

  // admin: tes: add element to bank
  const initialInputState = {
    elementName: null,
    partNumber: null,
    current: null,
    wattage: null,
    voltage: null,
    lengths: null,
  };
  const [inputElement, setInputElement] = useState(initialInputState);

  // admin: sys : system Identification
  const initialSysInputState = {
    locationName: '',
    switchName: '',
    heatingSystem: '',
    application: '',
    switchSize: '',
    ssrRating: '',
    sysId: '',
    additionalRating: '',
  };
  const [sysIdentification, setSysIdentification] = useState(false);
  const [inputData, setInputData] = useState(initialSysInputState);

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
        selectUnitsState,
        setSelectUnitsState,
        metricImperialToggle,
        setMetricImperialToggle,
        sysConfiguration,
        setSysConfiguration,
        windFactor,
        setWindFactor,
        essSnowSensor,
        setEssSnowSensor,
        tgsSnowSensor,
        setTgsSnowSensor,
        tesSnowSensor,
        setTesSnowSensor,
        activeSelect,
        setActiveSelect,
        gasSelection,
        setGasSelection,
        inputValue,
        setInputValue,
        inputElement,
        setInputElement,
        sysIdentification,
        setSysIdentification,
        inputData,
        setInputData,
        savedSelection,
        SetSavedSelection,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
