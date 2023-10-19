import { MatchActions, MatchScoreAvailableAction, MatchScoreState } from "./type";

export const initialState: MatchScoreState = {
  matchScores: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const MatchReducer = (
  state: MatchScoreState = initialState,
  action: MatchActions
): MatchScoreState => {
  switch (action.type) {
    case MatchScoreAvailableAction.FETCH_MATCHS_REQUEST:
      return { ...state, isLoading: true };
    case MatchScoreAvailableAction.FETCH_MATCHS_SUCCESS:
      return { ...state, isLoading: false, matchScores: action.payload };
    case MatchScoreAvailableAction.FETCH_MATCHS_FAILURE:
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