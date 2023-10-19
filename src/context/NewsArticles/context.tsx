/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useReducer } from "react";
import { NewsArticleDetailDispatch, NewsArticleDetailState } from "./type";
import { NewsArticleDetailReducer, initialState } from "./reducer";

const NewsArticleDetailStateContext = createContext<NewsArticleDetailState>(initialState);
const NewsArticleDetailDispatchContext = createContext<NewsArticleDetailDispatch>(() => {});

export const CommentProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(NewsArticleDetailReducer, initialState);
  return (
    <NewsArticleDetailStateContext.Provider value={state}>
      <NewsArticleDetailDispatchContext.Provider value={dispatch}>
        {children}
      </NewsArticleDetailDispatchContext.Provider>
    </NewsArticleDetailStateContext.Provider>
  );
};

export const useNewsArticleState = () => useContext(NewsArticleDetailStateContext);
export const useNewsArticleDetailDispatch = () => useContext(NewsArticleDetailDispatchContext);

