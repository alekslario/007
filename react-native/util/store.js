// store.js
import React, { createContext, useContext, useReducer } from "react";
const StoreContext = createContext(null);

const applyMiddleware = (dispatch, getState) => async (action) => {
  switch (action.type) {
    case "LOGIN":
      break;
  }
  if (action) dispatch(action);
};

export const defaultState = {
  data: {},
  selectedDay: null,
  weatherMap: {},
  currentTemperature: null,
  currentTime: null,
  preferences: {
    timeFormat: "24h",
    temperatureUnit: "C",
    precipitationUnit: "mm",
  },
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_PREFERENCES":
      return {
        ...state,
        preferences: action.preferences,
      };
    case "SET_DATA":
      return {
        ...state,
        data: action.data,
        weatherMap: action.weatherMap,
        currentTemperature: action.currentTemperature,
        currentTime: action.currentTime,
      };
    case "SET_SELECTED_DAY":
      return {
        ...state,
        selectedDay: action.date,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    ...defaultState,
  });

  const getState = () => state;

  const enhancedDispatch = applyMiddleware(dispatch, getState);

  return (
    <StoreContext.Provider value={[state, enhancedDispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
