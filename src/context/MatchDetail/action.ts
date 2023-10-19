import { API_ENDPOINT } from "../../config/constants";
import { MatchDetailAvailableAction, MatchDetailDispatch } from "./type";

export const fetchMatchDetails = async (
    dispatch: MatchDetailDispatch,
    matchID: string,
) => {
    const token = localStorage.getItem("authToken") ?? "";
    try {
        dispatch({ type: MatchDetailAvailableAction.FETCH_MATCHDETAILS_REQUEST });
        const response = await fetch(
            `${API_ENDPOINT}/matches/${matchID}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        const matchDetails = await response.json();
        dispatch({
            type: MatchDetailAvailableAction.FETCH_MATCHDETAILS_SUCCESS,
            payload: matchDetails,
        });
    } catch (error) {
        console.log("Error fetching matches:", error);
        dispatch({
            type: MatchDetailAvailableAction.FETCH_MATCHDETAILS_FAILURE,
            payload: "Unable to load matches",
        });
    }
};