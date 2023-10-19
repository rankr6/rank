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
        const newsArticleDetails = await response.json();
        dispatch({
            type: NewsArticleDetailAvailableAction.FETCH_ARTICLES_SUCCESS,
            payload: newsArticleDetails,
        });
    } catch (error) {
        console.log("Error fetching matches:", error);
        dispatch({
            type: NewsArticleDetailAvailableAction.FETCH_ARTICLES_FAILURE,
            payload: "Unable to load matches",
        });
    }
};