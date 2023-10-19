export interface MatchScoreState {
    matchScores: MatchScore[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
}

export interface MatchScore {
    matchID: string;
    teamA: string;
    teamB: string;
    scoreA: string;
    scoreB: string;
    tournamentName: string;
    tournamentLocation: string;
    sportName: string;
}

export enum MatchScoreAvailableAction {
    FETCH_MATCHS_REQUEST = "FETCH_MATCHS_REQUEST",
    FETCH_MATCHS_SUCCESS = "FETCH_MATCHS_SUCCESS",
    FETCH_MATCHS_FAILURE = "FETCH_MATCHS_FAILURE",
}

export type MatchActions =
    | { type: MatchScoreAvailableAction.FETCH_MATCHS_REQUEST }
    | { type: MatchScoreAvailableAction.FETCH_MATCHS_SUCCESS; payload: MatchScore[] }
    | { type: MatchScoreAvailableAction.FETCH_MATCHS_FAILURE; payload: string }

export type MatchScoreDispatch = React.Dispatch<MatchActions>;