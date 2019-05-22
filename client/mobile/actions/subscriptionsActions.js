import axios from 'axios'

// ACTION TYPES and ACTION CREATORS
export const FETCH_SUBSCRIPTIONS_LOADING = "FETCH_SUBSCRIPTIONS_LOADING";
export const fetchSubscriptionsLoading = () => ({
  type: FETCH_SUBSCRIPTIONS_LOADING
});

export const FETCH_SUBSCRIPTIONS_SUCCESS = "FETCH_SUBSCRIPTIONS_SUCCESS";
export const fetchSubscriptionsSuccess = subscriptions => ({
  type: FETCH_SUBSCRIPTIONS_SUCCESS,
  payload: subscriptions
});

export const FETCH_SUBSCRIPTIONS_ERROR = "FETCH_SUBSCRIPTIONS_ERROR";
const fetchSubscriptionsError = err => ({
  type: FETCH_SUBSCRIPTIONS_ERROR,
  payload: err
});

// ASYNC ACTION CREATORS

export const fetchSubsriptions = (id) => {
  return async dispatch => {
    dispatch(fetchSubscriptionsLoading());
    try {
      const response = await axios.get(`http://localhost:9000/Subscriptions/user/${id}`);
      dispatch(fetchSubscriptionsSuccess(response.data));
    } catch (err) {
      dispatch(fetchSubscriptionsError(err));
    }
  };
};
