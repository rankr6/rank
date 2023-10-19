/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useReducer } from "react";
import { MatchDetailReducer, initialState } from "./reducer";
import { MatchDetailDispatch, MatchDetailState } from "./type";

const MatchDetailStateContext = createContext<MatchDetailState>(initialState);
const MatchDetailDispatchContext = createContext<MatchDetailDispatch>(() => {});

export const CommentProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(MatchDetailReducer, initialState);
  return (
    <MatchDetailStateContext.Provider value={state}>
      <MatchDetailDispatchContext.Provider value={dispatch}>
        {children}
      </MatchDetailDispatchContext.Provider>
    </MatchDetailStateContext.Provider>
  );
};

export const useMatchDetailState = () => useContext(MatchDetailStateContext);
export const useMatchDetailDispatch = () => useContext(MatchDetailDispatchContext);