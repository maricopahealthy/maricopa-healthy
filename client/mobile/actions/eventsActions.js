import axios from 'axios'

// ACTION TYPES and ACTION CREATORS
export const FETCH_EVENTS_LOADING = "FETCH_EVENTS_LOADING";
export const fetchEventsLoading = () => ({
  type: FETCH_EVENTS_LOADING
});

export const FETCH_EVENTS_SUCCESS = "FETCH_EVENTS_SUCCESS";
export const fetchEventsSuccess = events => ({
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
      const response = await axios.get("http://localhost:9000/events");
      dispatch(fetchEventsSuccess(response.data));
    } catch(err) {
      dispatch(fetchEventsError(err));
    }
  };
};

export const fetchEvents = () => dispatch => {
  dispatch(
    fetchEventsLoading()
  )
  return axios.get(`${apiUrl}/events`)
    .then(response => {
      dispatch(
        fetchEventsSuccess(response.data)
      )
    })
    .catch(err => {
      dispatch(
        fetchEventsError(err)
      )
    })
}