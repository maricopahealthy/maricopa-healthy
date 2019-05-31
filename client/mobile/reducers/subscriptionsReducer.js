import {
  FETCH_SUBSCRIPTIONS_LOADING,
  FETCH_SUBSCRIPTIONS_SUCCESS,
  FETCH_SUBSCRIPTIONS_ERROR
} from "../actions/subscriptionsActions";

const initState = {
  byId: {},
  allIds: [],
  isFetching: false,
  isError: false
};

const subscriptionsReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_SUBSCRIPTIONS_LOADING:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_SUBSCRIPTIONS_SUCCESS:
      return {
        ...normalizeData(state, action.payload),
        isFetching: false,
        isError: false
      };
    case FETCH_SUBSCRIPTIONS_ERROR:
      return {
        ...state,
        isFetching: false,
        isError: true
      };
    default:
      return state;
  }
};

export default subscriptionsReducer

function normalizeData(state, data) {
  let newState = state;
  for (let item of data) {
    newState.byId[item.id] = item;
    if (!newState.allIds.includes(item.id)) {
      newState.allIds.push(item.id);
    }
  }
  return newState;
}