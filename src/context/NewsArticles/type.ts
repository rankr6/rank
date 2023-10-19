export interface NewsArticleDetailState {
    newsArticleDetails: NewsArticleDetail[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
}

export interface NewsArticleDetail {
    id: string;
    title: string;
    summary: string;
    thumbnail: string;
    date: Date;
}

export enum NewsArticleDetailAvailableAction {
    FETCH_ARTICLES_REQUEST = "FETCH_ARTICLES_REQUEST",
    FETCH_ARTICLES_FAILURE = "FETCH_ARTICLES_FAILURE",
    FETCH_ARTICLES_SUCCESS = "FETCH_ARTICLES_SUCCESS",
}

export type NewsArticleDetailActions =
    | { type: NewsArticleDetailAvailableAction.FETCH_ARTICLES_REQUEST }
    | { type: NewsArticleDetailAvailableAction.FETCH_ARTICLES_SUCCESS; payload: NewsArticleDetail[] }
    | { type: NewsArticleDetailAvailableAction.FETCH_ARTICLES_FAILURE; payload: string }

export type NewsArticleDetailDispatch = React.Dispatch<NewsArticleDetailActions>;