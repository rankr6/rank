import { NewsArticleDetailActions, NewsArticleDetailAvailableAction, NewsArticleDetailState } from "./type";

export const initialState: NewsArticleDetailState = {
    newsArticleDetails: [],
    fullArticleDetails: null,
    isLoading: false,
    isError: false,
    errorMessage: "",
};

export const NewsArticleDetailReducer = (
    state: NewsArticleDetailState = initialState,
    action: NewsArticleDetailActions
): NewsArticleDetailState => {
    switch (action.type) {
        case NewsArticleDetailAvailableAction.FETCH_ARTICLES_REQUEST:
            return { ...state, isLoading: true };
        case NewsArticleDetailAvailableAction.FETCH_ARTICLES_SUCCESS:
            return { ...state, isLoading: false, newsArticleDetails: action.payload };
        case NewsArticleDetailAvailableAction.FETCH_ARTICLES_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMessage: action.payload,
            };

        case NewsArticleDetailAvailableAction.FETCH_ARTICLEDETAILS_REQUEST:
            return { ...state, isLoading: true };
        case NewsArticleDetailAvailableAction.FETCH_ARTICLEDETAILS_SUCCESS:
            return { ...state, isLoading: false, fullArticleDetails: action.payload };
        case NewsArticleDetailAvailableAction.FETCH_ARTICLEDETAILS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMessage: action.payload,
            };

        default:
            return state;
    }
};