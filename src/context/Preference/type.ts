export interface UserPreferenceState {
    preferences: UserPreference[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
    sports: Sport[];
    teams: Team[];
}

export interface UserPreference {
    sports: Sport[],
    teams: Team[],
}

export interface Team {
    id: string;
    name: string;
    plays: string;
}

export interface Sport {
    id: string;
    name: string;
}

export enum UserPreferenceAvailableAction {
    FETCH_PREFERENCE_REQUEST = "FETCH_PREFERENCE_REQUEST",
    FETCH_PREFERENCE_SUCCESS = "FETCH_PREFERENCE_SUCCESS",
    FETCH_PREFERENCE_FAILURE = "FETCH_PREFERENCE_FAILURE",
    FETCH_SPORTS_REQUEST = "FETCH_SPORTS_REQUEST",
    FETCH_SPORTS_SUCCESS = "FETCH_SPORTS_SUCCESS",
    FETCH_SPORTS_FAILURE = "FETCH_SPORTS_FAILURE",
    FETCH_TEAMS_REQUEST = "FETCH_TEAMS_REQUEST",
    FETCH_TEAMS_SUCCESS = "FETCH_TEAMS_SUCCESS",
    FETCH_TEAMS_FAILURE = "FETCH_TEAMS_FAILURE",
}

export type UserPreferenceActions =
    | { type: UserPreferenceAvailableAction.FETCH_PREFERENCE_REQUEST }
    | { type: UserPreferenceAvailableAction.FETCH_PREFERENCE_SUCCESS; payload: UserPreference[] }
    | { type: UserPreferenceAvailableAction.FETCH_PREFERENCE_FAILURE; payload: string }
    | { type: UserPreferenceAvailableAction.FETCH_SPORTS_REQUEST }
    | { type: UserPreferenceAvailableAction.FETCH_SPORTS_SUCCESS, payload: Sport[] }
    | { type: UserPreferenceAvailableAction.FETCH_SPORTS_FAILURE, payload: string }
    | { type: UserPreferenceAvailableAction.FETCH_TEAMS_REQUEST }
    | { type: UserPreferenceAvailableAction.FETCH_TEAMS_SUCCESS; payload: Team[] }
    | { type: UserPreferenceAvailableAction.FETCH_TEAMS_FAILURE; payload: string }

export type UserPreferenceDispatch = React.Dispatch<UserPreferenceActions>;