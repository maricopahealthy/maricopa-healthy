import axios from "axios";

// ACTION TYPES and ACTION CREATORS
export const FETCH_ACTIVE_LOADING = "FETCH_ACTIVE_LOADING";
const fetchActiveLoading = () => ({
  type: FETCH_ACTIVE_LOADING
});

export const FETCH_ACTIVE_SUCCESS = "FETCH_ACTIVE_SUCCESS";
const fetchActiveSuccess = activities => ({
  type: FETCH_ACTIVE_SUCCESS,
  payload: activities
});

export const FETCH_ACTIVE_ERROR = "FETCH_ACTIVE_ERROR";
const fetchActiveError = err => ({
  type: FETCH_ACTIVE_ERROR,
  payload: err
});

// ASYNC ACTION CREATORS

export const fetchActive = () => {
  return async dispatch => {
    dispatch(fetchActiveLoading());
    try {
      const response = await axios.get("http://localhost:9000/active");
      dispatch(fetchActiveSuccess(response.data));
    } catch (err) {
      dispatch(fetchActiveError(err));
    }
  };
}
