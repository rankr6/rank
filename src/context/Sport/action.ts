import { API_ENDPOINT } from "../../config/constants";
import { SportAvailableAction, SportDispatch } from "./type";

export const fetchSports = async (dispatch: SportDispatch) => {
    try {
        dispatch({ type: SportAvailableAction.FETCH_SPORTS_REQUEST });
        const response = await fetch(`${API_ENDPOINT}/sports`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        dispatch({
            type: SportAvailableAction.FETCH_SPORTS_SUCCESS,
            payload: data.sports,
        });
    } catch (error) {
        console.log("Error fetching sports:", error);
        dispatch({
            type: SportAvailableAction.FETCH_SPORTS_FAILURE,
            payload: "Unable to load sports",
        });
    }
};
