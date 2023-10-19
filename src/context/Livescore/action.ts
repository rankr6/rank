/* eslint-disable */
import { API_ENDPOINT } from "../../config/constants";
import { MatchScoreAvailableAction, MatchScoreDispatch } from "./type";

export const fetchMatches = async (
    dispatch: MatchScoreDispatch,
) => {
    const token = localStorage.getItem("authToken") ?? "";
    try {
        dispatch({ type: MatchScoreAvailableAction.FETCH_MATCHS_REQUEST });
        const response = await fetch(
            `${API_ENDPOINT}/matches`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        let matchScores = await response.json();
        dispatch({
            type: MatchScoreAvailableAction.FETCH_MATCHS_SUCCESS,
            payload: matchScores,
        });
    } catch (error) {
        console.log("Error fetching matches:", error);
        dispatch({
            type: MatchScoreAvailableAction.FETCH_MATCHS_FAILURE,
            payload: "Unable to load matches",
        });
    }
};

// export const fetchMatcheDetails = async (
//     dispatch: MatchScoreDispatch,
//     matchID:string
// ) => {
//     const token = localStorage.getItem("authToken") ?? "";
//     try {
//         dispatch({ type: MatchScoreAvailableAction.FETCH_MATCHS_REQUEST });
//         const response = await fetch(
//             `${API_ENDPOINT}/matches/${matchID}`,
//             {
//                 method: "GET",
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: `Bearer ${token}`,
//                 },
//             }
//         );
//         let matchScores = await response.json();
//         dispatch({
//             type: MatchScoreAvailableAction.FETCH_MATCHS_SUCCESS,
//             payload: matchScores,
//         });
//     } catch (error) {
//         console.log("Error fetching matches:", error);
//         dispatch({
//             type: MatchScoreAvailableAction.FETCH_MATCHS_FAILURE,
//             payload: "Unable to load matches",
//         });
//     }
// };
