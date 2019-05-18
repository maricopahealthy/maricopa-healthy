// ACTION TYPES and ACTION CREATORS
export const FETCH_PARKS_LOADING = "FETCH_PARKS_LOADING";
const fetchParksLoading = () => ({
  type: FETCH_PARKS_LOADING
});

export const FETCH_PARKS_SUCCESS = "FETCH_PARKS_SUCCESS";
const fetchParksSuccess = parks => ({
  type: FETCH_PARKS_SUCCESS,
  payload: parks
});

export const FETCH_PARKS_ERROR = "FETCH_PARKS_ERROR";
const fetchParksError = err => ({
  type: FETCH_PARKS_ERROR,
  payload: err
});

// ASYNC ACTION CREATORS
