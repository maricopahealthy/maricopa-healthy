import {
  FETCH_EVENTS_LOADING,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_ERROR
} from "../actions/eventsActions";

const initState = {
  events: [],
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
        events: action.payload,
        isFetching: false
      };
    case FETCH_EVENTS_ERROR:
    default:
      return state;
  }
};

export default eventsReducer;