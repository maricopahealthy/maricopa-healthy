import {
  FETCH_EVENTS_LOADING,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_ERROR
} from "../actions/eventsActions";

const initState = {
  byId: {},
  allIds: [],
  isFetching: false
};

const eventsReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_EVENTS_LOADING:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_EVENTS_SUCCESS:
      return {
        ...normalizeData(state, action.payload),
        isFetching: false
      };
    case FETCH_EVENTS_ERROR:
    default:
      return state;
  }
};

export default eventsReducer;

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