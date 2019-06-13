import {RESET} from "../actions/filterActions";

const initState = {
  isResetting: false
};

const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case RESET:
      return {
        ...state,
        isResetting: action.payload
      };
    default:
      return state;
  }
};

export default filterReducer;