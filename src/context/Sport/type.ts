export interface SportState {
    sports: Sport[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;

}

export interface Sport {
    id: string;
    name: string;
}

export enum SportAvailableAction {
    FETCH_SPORTS_REQUEST = "FETCH_SPORTS_REQUEST",
    FETCH_SPORTS_SUCCESS = "FETCH_SPORTS_SUCCESS",
    FETCH_SPORTS_FAILURE = "FETCH_SPORTS_FAILURE",
   
}

export type SportActions =
    | { type: SportAvailableAction.FETCH_SPORTS_REQUEST }
    | { type: SportAvailableAction.FETCH_SPORTS_SUCCESS, payload: Sport[] }
    | { type: SportAvailableAction.FETCH_SPORTS_FAILURE, payload: string }
    

export type SportDispatch = React.Dispatch<SportActions>;