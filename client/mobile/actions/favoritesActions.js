// ACTION TYPES and ACTION CREATORS
export const FETCH_FAVORITES_LOADING = "FETCH_FAVORITES_LOADING";
export const fetchFavoritesLoading = () => ({
  type: FETCH_FAVORITES_LOADING
});

export const FETCH_FAVORITES_SUCCESS = "FETCH_FAVORITES_SUCCESS";
export export const fetchFavoritesSuccess = favorites => ({
  type: FETCH_FAVORITES_SUCCESS,
  payload: favorites
});

export const FETCH_FAVORITES_ERROR = "FETCH_FAVORITES_ERROR";
export const fetchFavoritesError = err => ({
  type: FETCH_FAVORITES_ERROR,
  payload: err
});

// ASYNC ACTION CREATORS
