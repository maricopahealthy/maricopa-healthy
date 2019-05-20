import axios from 'axios'

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
const fetchFavoritesError = err => ({
  type: FETCH_FAVORITES_ERROR,
  payload: err
});

// ASYNC ACTION CREATORS

export const fetchFavorites = (id) => dispatch => {
  dispatch(
    fetchFavoritesLoading()
  )
  return axios.get(`${apiUrl}/favorites/user/${id}`)
    .then(response => {
      dispatch(
        fetchFavoritesSuccess(response.data)
      )
    })
    .catch(err => {
      dispatch(
        fetchFavoritesError(err)
      )
    })
}
