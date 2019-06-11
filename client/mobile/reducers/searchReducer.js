import {UPDATE} from "../actions/searchActions";

const initState = {
  search: "",
};

const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE:
      return {
        ...state,
        search: action.payload
      };
    default:
      return state;
  }
};

export default searchReducer;