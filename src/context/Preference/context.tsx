/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useReducer } from "react";
import { UserPreferenceReducer, initialState } from "./reducer";
import { UserPreferenceDispatch, UserPreferenceState } from "./type";

const UserPreferenceStateContext = createContext<UserPreferenceState>(initialState);
const UserPreferenceDispatchContext = createContext<UserPreferenceDispatch>(() => {});

export const PreferenceProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(UserPreferenceReducer, initialState);
  return (
    <UserPreferenceStateContext.Provider value={state}>
      <UserPreferenceDispatchContext.Provider value={dispatch}>
        {children}
      </UserPreferenceDispatchContext.Provider>
    </UserPreferenceStateContext.Provider>
  );
};

export const useUserPreferenceState = () => useContext(UserPreferenceStateContext);
export const useUserPreferenceDispatch = () => useContext(UserPreferenceDispatchContext);


