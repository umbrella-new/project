import { createContext, useState, useReducer } from 'react';

export const Context = createContext(null);

const ContextProvider = ({ children }) => {
  // Initial states
  const initialState = {
    isEssSwitch: true,
    isExpanded: false,
    isAdministrator: true,
    dateAndWeather: {
      date: null,
      weather: null,
      iconSrc: '/images/weather-sunny.svg',
    },
    ess: {
      instantHeat: { instantHeatTemp: 0, instantButtonToggler: false },
      snowSensor: { apply: false },
      optionalConstantTempL: { inputTemp: 0, apply: false },
      heatingSchedule: {
        start: null,
        end: null,
        inputTemp: 0,
        apply: false,
        isActivated: false,
      },
      windFactor: { apply: false },
    },
    tes: {
      instantHeat: { instantHeatTemp: 0, instantButtonToggler: false },
      snowSensor: { apply: false },
      optionalConstantTempL: { inputTemp: 0, apply: false },
      heatingSchedule: {
        start: null,
        end: null,
        inputTemp: 0,
        apply: false,
        isActivated: false,
      },
      windFactor: { apply: false },
    },
    tgs: {
      instantHeat: { instantHeatTemp: 0, instantButtonToggler: false },
      snowSensor: { apply: false },
      optionalConstantTempL: { inputTemp: 0, apply: false },
      heatingSchedule: {
        start: null,
        end: null,
        inputTemp: 0,
        apply: false,
        isActivated: false,
      },
      windFactor: { apply: false },
    },

    // [basic status structure ] -- temporary using and will migrate into the switch categories
    instantHeat: { instantHeatTemp: 0, instantButtonToggler: false },
    snowSensor: { apply: false },
    optionalConstantTempL: { inputTemp: 0, apply: false },
    heatingSchedule: {
      start: null,
      end: null,
      inputTemp: 0,
      apply: false,
      isActivated: false,
    },
    windFactor: { apply: false },
  };

  // Reducer
  const reducer = (state, action) => {
    switch (action.type) {
      case 'expand':
        return { ...state, isExpanded: !state.isExpanded };
      case 'instantHeat': {
        return {
          ...state,
          instantHeat: {
            ...state.instantHeat,
            instantHeatTemp: action.payload,
            instantButtonToggler: !state.instantHeat.instantButtonToggler,
          },
        };
      }
      case 'snowSensor': {
        return {
          ...state,
          snowSensor: { ...state.snowSensor, apply: !state.snowSensor.apply },
        };
      }
      case 'heatingSchedule-scheduler': {
        return {
          ...state,
          heatingSchedule: {
            ...state.heatingSchedule,
            isActivated: !state.heatingSchedule.isActivated,
          },
        };
      }

      default: {
        return { ...state };
      }
    }
  };

  // Declaration of useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {' '}
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
