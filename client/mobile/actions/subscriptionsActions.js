import axios from 'axios'

// ACTION TYPES and ACTION CREATORS
export const FETCH_SUBSCRIPTIONS_LOADING = "FETCH_SUBSCRIPTIONS_LOADING";
const fetchSubscriptionsLoading = () => ({
  type: FETCH_SUBSCRIPTIONS_LOADING
});

export const FETCH_SUBSCRIPTIONS_SUCCESS = "FETCH_SUBSCRIPTIONS_SUCCESS";
const fetchSubscriptionsSuccess = subscriptions => ({
  type: FETCH_SUBSCRIPTIONS_SUCCESS,
  payload: subscriptions
});

export const FETCH_SUBSCRIPTIONS_ERROR = "FETCH_SUBSCRIPTIONS_ERROR";
const fetchSubscriptionsError = err => ({
  type: FETCH_SUBSCRIPTIONS_ERROR,
  payload: err
});

// ASYNC ACTION CREATORS

export const fetchSubsriptions = (id) => dispatch => {
  dispatch(
    fetchSubsriptionsLoading()
  )
  return axios.get(`${apiUrl}/subsriptions/user/${id}`)
    .then(response => {
      dispatch(
        fetchSubsriptionsSuccess(response.data)
      )
    })
    .catch(err => {
      dispatch(
        fetchSubsriptionsError(err)
      )
    })
}
