import axios from 'axios'
import { AWS_URL } from "../utils/config"

// ACTION TYPES and ACTION CREATORS
export const FETCH_EVENTS_LOADING = "FETCH_EVENTS_LOADING";
const fetchEventsLoading = () => ({
  type: FETCH_EVENTS_LOADING
});

export const FETCH_EVENTS_SUCCESS = "FETCH_EVENTS_SUCCESS";
const fetchEventsSuccess = events => ({
  type: FETCH_EVENTS_SUCCESS,
  payload: events
});

export const FETCH_EVENTS_ERROR = "FETCH_EVENTS_ERROR";
const fetchEventsError = (err) => ({
  type: FETCH_EVENTS_ERROR,
  payload: err
});

// ASYNC ACTION CREATORS
export const fetchEvents = () => {
  return async dispatch => {
    dispatch(fetchEventsLoading());
    try {
      const response = await axios.get(AWS_URL + "/events");
      dispatch(fetchEventsSuccess(response.data));
    } catch(err) {
      dispatch(fetchEventsError(err));
    }
  };
};