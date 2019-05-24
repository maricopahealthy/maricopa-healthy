import {
  FETCH_RESOURCES_LOADING,
  FETCH_RESOURCES_SUCCESS,
  FETCH_RESOURCES_ERROR
} from "../actions/resourcesActions";

const initState = {
  byId: {},
  allIds: [],
  isFetching: false
};

const resourcesReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_RESOURCES_LOADING:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_RESOURCES_SUCCESS:
      return {
        ...normalizeData(state, action.payload),
        isFetching: false
      };
    case FETCH_RESOURCES_ERROR:
    default:
      return state;
  }
};

export default resourcesReducer;

function normalizeData(state, data) {
  let newState = state;
  for (let item of data) {
    newState.byId[item.id] = item;
    newState.allIds.push(item.id);
  }
  return newState;
}