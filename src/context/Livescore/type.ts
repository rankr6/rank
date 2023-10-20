export interface MatchScoreState {
    matchScores: MatchScore[];
    matchDetails: MatchDetails | null
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
}

export interface MatchDetails {
    id: string;
    isRunning: boolean;
    name: string;
    location: string;
    startsAt: Date;
    endsAt: Date;
    score: Score;
    teams: Team[];
    sportName: string;
    playingTeam: string;
    story: string;
}

export interface MatchScore {
    id: string;
    isRunning: boolean;
    name: string;
    location: string;
    startsAt: Date;
    endsAt: Date;
    score: Score;
    teams: Team[];
    sportName: string;
    playingTeam: string;
    story: string;
}

export interface Team {
    id: string;
    name: string;
}

export interface Score {
    [teamName: string]: string;
}


export enum MatchScoreAvailableAction {
    FETCH_MATCHS_REQUEST = "FETCH_MATCHS_REQUEST",
    FETCH_MATCHS_SUCCESS = "FETCH_MATCHS_SUCCESS",
    FETCH_MATCHS_FAILURE = "FETCH_MATCHS_FAILURE",
    FETCH_MATCHSCORES_REQUEST = "FETCH_MATCHSCORES_REQUEST",
    FETCH_MATCHSCORES_SUCCESS = "FETCH_MATCHSCORES_SUCCESS",
    FETCH_MATCHSCORES_FAILURE = "FETCH_MATCHSCORES_FAILURE",
}

export type MatchActions =
    | { type: MatchScoreAvailableAction.FETCH_MATCHS_REQUEST }
    | { type: MatchScoreAvailableAction.FETCH_MATCHS_SUCCESS; payload: MatchScore[] }
    | { type: MatchScoreAvailableAction.FETCH_MATCHS_FAILURE; payload: string }
    | { type: MatchScoreAvailableAction.FETCH_MATCHSCORES_REQUEST }
    | { type: MatchScoreAvailableAction.FETCH_MATCHSCORES_SUCCESS; payload: MatchDetails }
    | { type: MatchScoreAvailableAction.FETCH_MATCHSCORES_FAILURE; payload: string }

export type MatchScoreDispatch = React.Dispatch<MatchActions>;