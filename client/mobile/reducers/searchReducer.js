import {UPDATE_SEARCH} from "../actions/searchActions";

const initState = {
  search: "",
};

const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH:
      return {
        ...state,
        search: action.payload
      };
    default:
      return state;
  }
};

export default searchReducer;