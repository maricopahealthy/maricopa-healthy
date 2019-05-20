// ACTION TYPES and ACTION CREATORS
export const FETCH_MARKETS_LOADING = "FETCH_MARKETS_LOADING";
export const fetchMarketsLoading = () => ({ type: FETCH_MARKETS_LOADING });

export const FETCH_MARKETS_SUCCESS = "FETCH_MARKETS_SUCCESS";
export const fetchMarketsSuccess = markets => ({
  type: FETCH_MARKETS_SUCCESS,
  payload: markets
});

export const FETCH_MARKETS_ERROR = "FETCH_MARKETS_ERROR";
export const fetchMarketsError = error => ({
  type: FETCH_MARKETS_ERROR,
  payload: error
});

// ASYNC ACTION CREATORS