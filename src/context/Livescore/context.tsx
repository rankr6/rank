/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useReducer } from "react";
import { initialState, MatchReducer } from "./reducer";
import { MatchScoreDispatch, MatchScoreState } from "./type";

const MatchStateContext = createContext<MatchScoreState>(initialState);
const MatchDispatchContext = createContext<MatchScoreDispatch>(() => {});

export const CommentProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(MatchReducer, initialState);
  return (
    <MatchStateContext.Provider value={state}>
      <MatchDispatchContext.Provider value={dispatch}>
        {children}
      </MatchDispatchContext.Provider>
    </MatchStateContext.Provider>
  );
};

export const useMatchState = () => useContext(MatchStateContext);
export const useMatchDispatch = () => useContext(MatchDispatchContext);