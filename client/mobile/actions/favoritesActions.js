import axios from 'axios'

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

export const FETCH_FAVORITES_ERROR = "FETCH_FAVORITES_ERROR";
const fetchFavoritesError = err => ({
  type: FETCH_FAVORITES_ERROR,
  payload: err
});

// ASYNC ACTION CREATORS

export const fetchFavorites = (id) => {
  return async dispatch => {
    dispatch(fetchFavoritesLoading());
    try {
      const response = await axios.get(`http://localhost:9000/favorites/user/${id}`);
      dispatch(fetchFavoritesSuccess(response.data));
    } catch (err) {
      dispatch(fetchFavoritesError(err));
    }
  };
}
