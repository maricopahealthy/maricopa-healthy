import {
  FETCH_FAVORITES_LOADING,
  FETCH_FAVORITES_SUCCESS,
  FETCH_FAVORITES_ERROR,
} from "../actions/favoritesActions";

const initState = {
  byId: {},
  allIds: [],
  isFetching: false,
  isError: false
};

const favoritesReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_FAVORITES_LOADING:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_FAVORITES_SUCCESS:
      return {
        ...normalizeData(state, action.payload),
        isFetching: false,
        isError: false
      };
    case FETCH_FAVORITES_ERROR:
      return {
        ...state,
        isFetching: false,
        isError: true
      };
    default:
      return state;
  }
};

export default favoritesReducer

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