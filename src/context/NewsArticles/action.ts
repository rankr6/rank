import { API_ENDPOINT } from "../../config/constants";
import { NewsArticleDetailAvailableAction, NewsArticleDetailDispatch } from "./type";

export const fetchArticlesDetails = async (
    dispatch: NewsArticleDetailDispatch,
) => {
    try {
        dispatch({ type: NewsArticleDetailAvailableAction.FETCH_ARTICLES_REQUEST });
        const response = await fetch(
            `${API_ENDPOINT}/articles`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await response.json();
        dispatch({
            type: NewsArticleDetailAvailableAction.FETCH_ARTICLES_SUCCESS,
            payload: data,
        });

    } catch (error) {
        console.log("Error fetching matches:", error);
        dispatch({
            type: NewsArticleDetailAvailableAction.FETCH_ARTICLES_FAILURE,
            payload: "Unable to load matches",
        });
    }
};

export const fetchArticleeDetails = async (
    dispatch: NewsArticleDetailDispatch,
    articleID: string
) => {
    try {
        dispatch({ type: NewsArticleDetailAvailableAction.FETCH_ARTICLEDETAILS_REQUEST });
        const response = await fetch(
            `${API_ENDPOINT}/articles/${articleID}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        if (response.ok) {
            const data = await response.json();

            dispatch({
                type: NewsArticleDetailAvailableAction.FETCH_ARTICLEDETAILS_SUCCESS,
                payload: data,
            });
        } else {
            throw new Error("Failed to fetch match details");
        }
    } catch (error) {
        console.log("Error fetching matches:", error);
        dispatch({
            type: NewsArticleDetailAvailableAction.FETCH_ARTICLEDETAILS_FAILURE,
            payload: "Unable to load matches",
        });
    }
};




export const fetchSports = async (dispatch: NewsArticleDetailDispatch) => {
    try {
        dispatch({ type: NewsArticleDetailAvailableAction.FETCH_SPORTS_REQUEST });
        const response = await fetch(`${API_ENDPOINT}/sports`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        dispatch({
            type: NewsArticleDetailAvailableAction.FETCH_SPORTS_SUCCESS,
            payload: data.sports,
        });
    } catch (error) {
        console.log("Error fetching sports:", error);
        dispatch({
            type: NewsArticleDetailAvailableAction.FETCH_SPORTS_FAILURE,
            payload: "Unable to load sports",
        });
    }
};

