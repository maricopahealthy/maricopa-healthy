import axios from 'axios'
import { AWS_URL } from "../utils/config"

// ACTION TYPES and ACTION CREATORS
export const FETCH_RESOURCES_LOADING = "FETCH_RESOURCES_LOADING";
const fetchResourcesLoading = () => ({
  type: FETCH_RESOURCES_LOADING
});

export const FETCH_RESOURCES_SUCCESS = "FETCH_RESOURCES_SUCCESS";
const fetchResourcesSuccess = resources => ({
  type: FETCH_RESOURCES_SUCCESS,
  payload: resources
});

export const FETCH_RESOURCES_ERROR = "FETCH_RESOURCES_ERROR";
const fetchResourcesError = err => ({
  type: FETCH_RESOURCES_ERROR,
  payload: err
});

// ASYNC ACTION CREATORS
export const fetchResources = () => {
  return async dispatch => {
    dispatch(fetchResourcesLoading());
    try {
      const response = await axios.get(AWS_URL + "/resources");
      dispatch(fetchResourcesSuccess(response.data));
    } catch (err) {
      dispatch(fetchResourcesError(err));
    }
  };
};