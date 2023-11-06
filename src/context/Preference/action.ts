/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_ENDPOINT } from "../../config/constants";
import { UserPreferenceAvailableAction, UserPreferenceDispatch } from "./type";

export const fetchUserPreferences = async (
    dispatch: UserPreferenceDispatch,
) => {
    try {
        dispatch({ type: UserPreferenceAvailableAction.FETCH_PREFERENCE_REQUEST });

        const authToken = localStorage.getItem("authToken") ?? "";
        const response = await fetch(
            `${API_ENDPOINT}/user/preferences`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${authToken}`,
                },
            }
        );


        const data = await response.json();

        dispatch({
            type: UserPreferenceAvailableAction.FETCH_PREFERENCE_SUCCESS,
            payload: data,
        });
        console.log(data);
        return data;

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


export const patchUserPreference = async (
    dispatch: UserPreferenceDispatch,
    sports: any,
    teams: any,
) => {

    const authToken = localStorage.getItem("authToken") ?? "";

    try {
        dispatch({ type: UserPreferenceAvailableAction.PATCH_USERPREFERENCES_REQUEST });
        const response = await fetch(
            `${API_ENDPOINT}/user/preferences`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authToken}`,
                },
                body: JSON.stringify({
                    preferences: {
                        teams: teams,
                        sports: sports,
                    },
                }),
            }
        );

        if (!response.ok) {
            throw new Error("Failed to create ");
        }
        dispatch({ type: UserPreferenceAvailableAction.PATCH_USERPREFERENCES_SUCCESS });
    } catch (error) {
        console.error("Operation failed:", error);
        dispatch({
            type: UserPreferenceAvailableAction.PATCH_USERPREFERENCES_FAILURE,
            payload: "Unable to create ",
        });
    }
};