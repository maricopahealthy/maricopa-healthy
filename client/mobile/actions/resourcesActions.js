import axios from 'axios'

// ACTION TYPES and ACTION CREATORS
export const FETCH_RESOURCES_LOADING = "FETCH_RESOURCES_LOADING";
const fetchResourcesLoading = () => ({
  type: FETCH_RESOURCES_LOADING
});

const FETCH_RESOURCES_SUCCESS = "FETCH_RESOURCES_SUCCESS";
const fetchResourcesSuccess = resources => ({
  type: FETCH_RESOURCES_SUCCESS,
  payload: resources
});

const FETCH_RESOURCES_ERROR = "FETCH_RESOURCES_ERROR";
const fetchResourcesError = err => ({
  type: FETCH_RESOURCES_ERROR,
  payload: err
});

// ASYNC ACTION CREATORS
export const fetchResources = () => {
  return async dispatch => {
    dispatch(fetchResourcesLoading());
    try {
      const response = await axios.get("http://localhost:9000/resources");
      dispatch(fetchResourcesSuccess(response.data));
    } catch (err) {
      dispatch(fetchResourcesError(err));
    }
  };
};