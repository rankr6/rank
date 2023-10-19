import { MatchDetailActions, MatchDetailAvailableAction, MatchDetailState } from "./type";

export const initialState: MatchDetailState = {
  matchDetails: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const MatchDetailReducer = (
  state: MatchDetailState = initialState,
  action: MatchDetailActions
): MatchDetailState => {
  switch (action.type) {
    case MatchDetailAvailableAction.FETCH_MATCHDETAILS_REQUEST:
      return { ...state, isLoading: true };
    case MatchDetailAvailableAction.FETCH_MATCHDETAILS_SUCCESS:
      return { ...state, isLoading: false, matchDetails: action.payload };
    case MatchDetailAvailableAction.FETCH_MATCHDETAILS_FAILURE:
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