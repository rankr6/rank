/* eslint-disable */
import { API_ENDPOINT } from "../../config/constants";
import { MatchScoreAvailableAction, MatchScoreDispatch } from "./type";

export const fetchMatches = async (
    dispatch: MatchScoreDispatch,
) => {
    try {
        dispatch({ type: MatchScoreAvailableAction.FETCH_MATCHS_REQUEST });
        const response = await fetch(
            `${API_ENDPOINT}/matches`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        let data = await response.json();
        dispatch({
            type: MatchScoreAvailableAction.FETCH_MATCHS_SUCCESS,
            payload: data.matches,
        });
    } catch (error) {
        console.log("Error fetching matches:", error);
        dispatch({
            type: MatchScoreAvailableAction.FETCH_MATCHS_FAILURE,
            payload: "Unable to load matches",
        });
    }
};

export const fetchMatcheDetails = async (
    dispatch: MatchScoreDispatch,
    matchID: string
) => {
    try {
        dispatch({ type: MatchScoreAvailableAction.FETCH_MATCHSCORES_REQUEST });
        const response = await fetch(
            `${API_ENDPOINT}/matches/${matchID}`,
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
                type: MatchScoreAvailableAction.FETCH_MATCHSCORES_SUCCESS,
                payload: data , 
            });
        } else {
            throw new Error("Failed to fetch match details");
        }
    } catch (error) {
        console.log("Error fetching matches:", error);
        dispatch({
            type: MatchScoreAvailableAction.FETCH_MATCHSCORES_FAILURE,
            payload: "Unable to load matches",
        });
    }
};
