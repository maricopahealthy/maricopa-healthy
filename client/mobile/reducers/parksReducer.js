import {
  FETCH_PARKS_LOADING,
  FETCH_PARKS_SUCCESS,
  FETCH_PARKS_ERROR
} from "../actions/parksActions";

const initState = {
  byId: {},
  allIds: [],
  isFetching: false,
  isError: false
}

const parksReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_PARKS_LOADING:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_PARKS_SUCCESS:
      return {
        ...normalizeData(state, action.payload),
        isFetching: false,
        isError: false
      };
    case FETCH_PARKS_ERROR:
      return {
        ...state,
        isFetching: false,
        isError: true
      }
    default:
      return state;
  }
}

export default parksReducer