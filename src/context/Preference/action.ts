import { API_ENDPOINT } from "../../config/constants";
import { UserPreferenceAvailableAction, UserPreferenceDispatch } from "./type";

export const fetchUserPreferences = async (
    dispatch: UserPreferenceDispatch,
) => {
    try {
        dispatch({ type: UserPreferenceAvailableAction.FETCH_PREFERENCE_REQUEST });

        // Retrieve the authentication token from localStorage or your preferred source
        const authToken = localStorage.getItem("authToken") ?? "";
        const response = await fetch(
            `${API_ENDPOINT}/user/preferences`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    // Include the authentication token in the Authorization header
                    "Authorization": `Bearer ${authToken}`, // Assuming it's a Bearer token
                },
            }
        );


        const data = await response.json();

        dispatch({
            type: UserPreferenceAvailableAction.FETCH_PREFERENCE_SUCCESS,
            payload: data.matches,
        });
    } catch (error) {
        console.log("Error fetching matches:", error);
        dispatch({
            type: UserPreferenceAvailableAction.FETCH_PREFERENCE_FAILURE,
            payload: "Unable to load matches",
        });
    }
};


export const fetchSports = async (dispatch: UserPreferenceDispatch) => {
    try {
        dispatch({ type: UserPreferenceAvailableAction.FETCH_SPORTS_REQUEST });
        const response = await fetch(`${API_ENDPOINT}/sports`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        dispatch({
            type: UserPreferenceAvailableAction.FETCH_SPORTS_SUCCESS,
            payload: data.sports,
        });
    } catch (error) {
        console.log("Error fetching sports:", error);
        dispatch({
            type: UserPreferenceAvailableAction.FETCH_SPORTS_FAILURE,
            payload: "Unable to load sports",
        });
    }
};

export const fetchTeams = async (dispatch: UserPreferenceDispatch) => {
    try {
        dispatch({ type: UserPreferenceAvailableAction.FETCH_TEAMS_REQUEST });
        const response = await fetch(`${API_ENDPOINT}/teams`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        dispatch({
            type: UserPreferenceAvailableAction.FETCH_TEAMS_SUCCESS,
            payload: data,
        });
        
    } catch (error) {
        console.log("Error fetching sports:", error);
        dispatch({
            type: UserPreferenceAvailableAction.FETCH_TEAMS_FAILURE,
            payload: "Unable to load sports",
        });
    }
};
