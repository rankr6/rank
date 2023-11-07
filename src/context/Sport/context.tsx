/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useReducer } from "react";
import { SportDispatch, SportState } from "./type";
import { SportReducer, initialState } from "./reducer";

const SportStateContext = createContext<SportState>(initialState);
const SportDispatchContext = createContext<SportDispatch>(() => {});

export const SportProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(SportReducer, initialState);
  return (
    <SportStateContext.Provider value={state}>
      <SportDispatchContext.Provider value={dispatch}>
        {children}
      </SportDispatchContext.Provider>
    </SportStateContext.Provider>
  );
};

export const useSportState = () => useContext(SportStateContext);
export const useSportDispatch = () => useContext(SportDispatchContext);


