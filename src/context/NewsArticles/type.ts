export interface NewsArticleDetailState {
    newsArticleDetails: NewsArticleDetail[];
    fullArticleDetails: FullArticleDetail | null;
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
    sports: SportList[];
}

export interface NewsArticleDetail {
    id: string;
    title: string;
    summary: string;
    thumbnail: string;
    date: Date;
    sport: Sport;
    teams: Team[];
}

export interface FullArticleDetail {
    id: string;
    title: string;
    summary: string;
    thumbnail: string;
    sport: SportList;
    teams: Team[];
    date: Date;
    content: string;
}

export interface Team {
    id: string;
    name: string;
}

export interface SportList {
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
    FETCH_SPORTS_REQUEST = "FETCH_SPORTS_REQUEST",
    FETCH_SPORTS_SUCCESS = "FETCH_SPORTS_SUCCESS",
    FETCH_SPORTS_FAILURE = "FETCH_SPORTS_FAILURE",
}

export type NewsArticleDetailActions =
    | { type: NewsArticleDetailAvailableAction.FETCH_ARTICLES_REQUEST }
    | { type: NewsArticleDetailAvailableAction.FETCH_ARTICLES_SUCCESS; payload: NewsArticleDetail[] }
    | { type: NewsArticleDetailAvailableAction.FETCH_ARTICLES_FAILURE; payload: string }
    | { type: NewsArticleDetailAvailableAction.FETCH_ARTICLEDETAILS_REQUEST }
    | { type: NewsArticleDetailAvailableAction.FETCH_ARTICLEDETAILS_SUCCESS; payload: FullArticleDetail }
    | { type: NewsArticleDetailAvailableAction.FETCH_ARTICLEDETAILS_FAILURE; payload: string }
    | { type: NewsArticleDetailAvailableAction.FETCH_SPORTS_REQUEST }
    | { type: NewsArticleDetailAvailableAction.FETCH_SPORTS_SUCCESS, payload: SportList[] }
    | { type: NewsArticleDetailAvailableAction.FETCH_SPORTS_FAILURE, payload: string }


export type NewsArticleDetailDispatch = React.Dispatch<NewsArticleDetailActions>;