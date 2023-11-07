/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_ENDPOINT } from "../../config/constants";
import { UserPreferenceAvailableAction, UserPreferenceDispatch } from "./type";

export const fetchUserPreference = async (dispatch: UserPreferenceDispatch) => {
  try {
    dispatch({ type: UserPreferenceAvailableAction.FETCH_PREFERENCE_REQUEST });

    const authToken = localStorage.getItem("authToken") ?? "";
    const response = await fetch(`${API_ENDPOINT}/user/preferences`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authToken}`,
      },
    });

    if (response.ok) {
      const data = await response.json();

      dispatch({
        type: UserPreferenceAvailableAction.FETCH_PREFERENCE_SUCCESS,
        payload: data.preferences // Make sure that your payload matches the userPreferences state
      });

      return data; // Return the entire data object if needed
    } else {
      console.log("Error fetching user preferences:", response.status, response.statusText);
      dispatch({
        type: UserPreferenceAvailableAction.FETCH_PREFERENCE_FAILURE,
        payload: "Unable to load user preferences",
      });
    }
  } catch (error) {
    console.error("Error fetching user preferences:", error);
    dispatch({
      type: UserPreferenceAvailableAction.FETCH_PREFERENCE_FAILURE,
      payload: "Unable to load user preferences",
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