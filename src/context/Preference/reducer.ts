import { UserPreferenceActions, UserPreferenceAvailableAction, UserPreferenceState } from "./type";

export const initialState: UserPreferenceState = {
    preferences: [],
    isLoading: false,
    isError: false,
    errorMessage: "",

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