import {
  FETCH_RECIPES_LOADING,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_ERROR
} from "../actions/recipesActions";

const initState = {
  byId: {},
  allIds: [],
  isFetching: false
};

const recipesReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_RECIPES_LOADING:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_RECIPES_SUCCESS:
      return {
        ...normalizeData(state, action.payload),
        isFetching: false
      };
    case FETCH_RECIPES_ERROR:
    default:
      return state;
  }
};

export default recipesReducer;

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
