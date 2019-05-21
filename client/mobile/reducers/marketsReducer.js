import { 
  FETCH_MARKETS_LOADING, 
  FETCH_MARKETS_SUCCESS,
  FETCH_MARKETS_ERROR,
} from "../actions/marketsActions";

const initState = {
  byId: {},
  allIds: [],
  isFetching: false,
  isError: false
}

const marketsReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_MARKETS_LOADING:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_MARKETS_SUCCESS:
      return {
        ...normalizeData(state, action.payload),
        isFetching: false,
        isError: false
      };
    case FETCH_MARKETS_ERROR:
      return {
        ...state,
        isFetching: false,
        isError: true
      }
    default:
      return state;
  }
}

export default marketsReducer

function normalizeData(state, data) {
  let newState = state;
  for (let item of data) {
    newState.byId[item.id] = item;
    newState.allIds.push(item.id);
  }
  return newState;
}