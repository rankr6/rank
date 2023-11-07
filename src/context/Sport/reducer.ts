import { SportActions, SportAvailableAction, SportState } from "./type";

export const initialState: SportState = {
    sports: [],
    isLoading: false,
    isError: false,
    errorMessage: "",
};
export const SportReducer = (
    state: SportState = initialState,
    action: SportActions
): SportState => {
    switch (action.type) {
       
        case SportAvailableAction.FETCH_SPORTS_REQUEST:
            return { ...state, isLoading: true };
        case SportAvailableAction.FETCH_SPORTS_SUCCESS:
            return { ...state, isLoading: false, sports: action.payload };
        case SportAvailableAction.FETCH_SPORTS_FAILURE:
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