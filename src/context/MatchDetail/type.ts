export interface MatchDetailState {
    matchDetails: MatchDetail[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
}

export interface MatchDetail {
    matchID: string;
    teamAPlayerList: string;
    teamBPlayerList: string;
}

export enum MatchDetailAvailableAction {
    FETCH_MATCHDETAILS_REQUEST = "FETCH_MATCHDETAILS_REQUEST",
    FETCH_MATCHDETAILS_FAILURE = "FETCH_MATCHDETAILS_FAILURE",
    FETCH_MATCHDETAILS_SUCCESS = "FETCH_MATCHDETAILS_SUCCESS",
}

export type MatchDetailActions =
    | { type: MatchDetailAvailableAction.FETCH_MATCHDETAILS_REQUEST }
    | { type: MatchDetailAvailableAction.FETCH_MATCHDETAILS_SUCCESS; payload: MatchDetail[] }
    | { type: MatchDetailAvailableAction.FETCH_MATCHDETAILS_FAILURE; payload: string }

export type MatchDetailDispatch = React.Dispatch<MatchDetailActions>;