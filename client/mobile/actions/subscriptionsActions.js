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
export const fetchSubscriptionsError = err => ({
  type: FETCH_SUBSCRIPTIONS_ERROR,
  payload: err
});

// ASYNC ACTION CREATORS
