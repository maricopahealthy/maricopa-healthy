import {
  FETCH_ACTIVE_LOADING,
  FETCH_ACTIVE_SUCCESS,
  FETCH_ACTIVE_ERROR
} from "../actions/activeActions";

const initState = {
  byId: {},
  allIds: [],
  isFetching: false,
  isError: false
}

const activeReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_ACTIVE_LOADING:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_ACTIVE_SUCCESS:
      return {
        ...normalizeData(state, action.payload),
        isFetching: false,
        isError: false
      };
    case FETCH_ACTIVE_ERROR:
      return {
        ...state,
        isFetching: false,
        isError: true
      }
    default:
      return state;
  }
}

export default activeReducer

function normalizeData(state, data) {
  let newState = state;
  for (let item of data) {
    newState.byId[item.id] = item;
    newState.allIds.push(item.id);
  }
  return newState;
}