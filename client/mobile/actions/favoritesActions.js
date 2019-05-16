// ACTION TYPES and ACTION CREATORS
export const FETCH_FAVORITES_LOADING = "FETCH_FAVORITES_LOADING";
const fetchFavoritesLoading = () => ({
  type: FETCH_FAVORITES_LOADING
});

export const FETCH_FAVORITES_SUCCESS = "FETCH_FAVORITES_SUCCESS";
const fetchFavoritesSuccess = favorites => ({
  type: FETCH_FAVORITES_SUCCESS,
  payload: favorites
});

FETCH_FAVORITES_ERROR = "FETCH_FAVORITES_ERROR";
const fetchFavoritesError = err => ({
  type: FETCH_FAVORITES_ERROR,
  payload: err
});

// ASYNC ACTION CREATORS
