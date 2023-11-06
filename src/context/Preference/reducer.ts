import { UserPreferenceActions, UserPreferenceAvailableAction, UserPreferenceState } from "./type";

export const initialState: UserPreferenceState = {
    preferences: [],
    isLoading: false,
    isError: false,
    errorMessage: "",
    sports: [],
    teams: [],
};
export const UserPreferenceReducer = (
    state: UserPreferenceState = initialState,
    action: UserPreferenceActions
): UserPreferenceState => {
    switch (action.type) {
        case UserPreferenceAvailableAction.FETCH_PREFERENCE_REQUEST:
            return { ...state, isLoading: true };
        case UserPreferenceAvailableAction.FETCH_PREFERENCE_SUCCESS:
            return { ...state, isLoading: false, preferences: action.payload };
        case UserPreferenceAvailableAction.FETCH_PREFERENCE_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMessage: action.payload,
            };

        case UserPreferenceAvailableAction.FETCH_SPORTS_REQUEST:
            return { ...state, isLoading: true };
        case UserPreferenceAvailableAction.FETCH_SPORTS_SUCCESS:
            return { ...state, isLoading: false, sports: action.payload };
        case UserPreferenceAvailableAction.FETCH_SPORTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMessage: action.payload,
            };

        case UserPreferenceAvailableAction.FETCH_TEAMS_REQUEST:
            return { ...state, isLoading: true };
        case UserPreferenceAvailableAction.FETCH_TEAMS_SUCCESS:
            return { ...state, isLoading: false, teams: action.payload };
        case UserPreferenceAvailableAction.FETCH_TEAMS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMessage: action.payload,
            };

        case UserPreferenceAvailableAction.PATCH_USERPREFERENCES_REQUEST:
            return { ...state, isLoading: true };
        case UserPreferenceAvailableAction.PATCH_USERPREFERENCES_SUCCESS:
            return { ...state, isLoading: false };
        case UserPreferenceAvailableAction.PATCH_USERPREFERENCES_FAILURE:
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