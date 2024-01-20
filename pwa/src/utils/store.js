// store.js
import React, { createContext, useContext, useReducer } from "react";
const StoreContext = createContext(null);

///media queries =>
export const queries = {
  max575: "(max-width: 575.98px)",
  min576: "(min-width: 576px)",

  max767: "(max-width: 767.98px)",
  min768: "(min-width: 768px)",

  max991: "(max-width: 991.98px)",
  min992: "(min-width: 992px)",

  max1199: "(max-width: 1199.98px)",
  min1200: "(min-width: 1200px)",

  max1399: "(max-width: 1399.98px)",
  min1400: "(min-width: 1400px)",
};

const getDefaultMediaQueries = () =>
  Object.entries(queries).reduce(
    (acc, [name, query]) => (
      (acc[name] = window.matchMedia(query).matches), acc
    ),
    {}
  );

/// <====

const applyMiddleware = (dispatch, getState) => async (action) => {
  switch (action.type) {
    case "LOGIN":
      break;
  }
  if (action) dispatch(action);
};

export const defaultState = {
  fab: { action_name: "", cb: () => {}, disabled: false },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAB_STATE":
      return {
        ...state,
        fab: action.fab,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    ...defaultState,
    media: getDefaultMediaQueries(),
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
