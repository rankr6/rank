export interface NewsArticleDetailState {
    newsArticleDetails: NewsArticleDetail[];
    fullArticleDetails: FullArticleDetail | null ;
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

export interface FullArticleDetail {
    id: string;
    title: string;
    summary: string;
    thumbnail: string;
    sport: Sport;
    teams: Team[];
    date: Date;
    content: string;
}

export interface Team {
    id: string;
    name: string;
}

export interface Sport {
    [id: number]: string;
    [name: string]: string;
}

export enum NewsArticleDetailAvailableAction {
    FETCH_ARTICLES_REQUEST = "FETCH_ARTICLES_REQUEST",
    FETCH_ARTICLES_FAILURE = "FETCH_ARTICLES_FAILURE",
    FETCH_ARTICLES_SUCCESS = "FETCH_ARTICLES_SUCCESS",
    FETCH_ARTICLEDETAILS_REQUEST = "FETCH_ARTICLEDETAILS_REQUEST",
    FETCH_ARTICLEDETAILS_FAILURE = "FETCH_ARTICLEDETAILS_FAILURE",
    FETCH_ARTICLEDETAILS_SUCCESS = "FETCH_ARTICLEDETAILS_SUCCESS",
}

export type NewsArticleDetailActions =
    | { type: NewsArticleDetailAvailableAction.FETCH_ARTICLES_REQUEST }
    | { type: NewsArticleDetailAvailableAction.FETCH_ARTICLES_SUCCESS; payload: NewsArticleDetail[] }
    | { type: NewsArticleDetailAvailableAction.FETCH_ARTICLES_FAILURE; payload: string }
    | { type: NewsArticleDetailAvailableAction.FETCH_ARTICLEDETAILS_REQUEST }
    | { type: NewsArticleDetailAvailableAction.FETCH_ARTICLEDETAILS_SUCCESS; payload: FullArticleDetail }
    | { type: NewsArticleDetailAvailableAction.FETCH_ARTICLEDETAILS_FAILURE; payload: string }

export type NewsArticleDetailDispatch = React.Dispatch<NewsArticleDetailActions>;