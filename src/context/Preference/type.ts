export interface UserPreferenceState {
    preferences: UserPreference[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
}

export interface UserPreference {
    sports: number[]; 
    teams: number[];  
  }



export enum UserPreferenceAvailableAction {
    FETCH_PREFERENCE_REQUEST = "FETCH_PREFERENCE_REQUEST",
    FETCH_PREFERENCE_SUCCESS = "FETCH_PREFERENCE_SUCCESS",
    FETCH_PREFERENCE_FAILURE = "FETCH_PREFERENCE_FAILURE",
    PATCH_USERPREFERENCES_REQUEST = "PATCH_USERPREFERENCES_REQUEST",
    PATCH_USERPREFERENCES_SUCCESS = "PATCH_USERPREFERENCES_SUCCESS",
    PATCH_USERPREFERENCES_FAILURE = "PATCH_USERPREFERENCES_FAILURE",
}

export type UserPreferenceActions =
    | { type: UserPreferenceAvailableAction.FETCH_PREFERENCE_REQUEST }
    | { type: UserPreferenceAvailableAction.FETCH_PREFERENCE_SUCCESS; payload: UserPreference[] }
    | { type: UserPreferenceAvailableAction.FETCH_PREFERENCE_FAILURE; payload: string }
    | { type: UserPreferenceAvailableAction.PATCH_USERPREFERENCES_REQUEST }
    | { type: UserPreferenceAvailableAction.PATCH_USERPREFERENCES_SUCCESS }
    | { type: UserPreferenceAvailableAction.PATCH_USERPREFERENCES_FAILURE; payload: string }

export type UserPreferenceDispatch = React.Dispatch<UserPreferenceActions>;