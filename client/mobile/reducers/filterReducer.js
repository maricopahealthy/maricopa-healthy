import {APPLY, RESET, UPDATE} from "../actions/filterActions";

const initState = {
  city: [],
  day: [],
  timeOfDay:[],
  payment: [],
  sortBy: [],
  zipCode: "",
  rating: [],
  age: [],
  cost: [],
  features: [],
  meal_type: [],
  apply: false
};

const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE:
      const {type, value} = action.payload;
      if(type === "zipCode") {
        return {
          ...state,
          zipCode: value
        }
      } else {
        if(state[type].includes(value)){
          return {
            ...state,
            [type]: state[type].filter(item => item !== value)
          }
        } else {
          return {
            ...state,
            [type]: [
              ...state[type],
              value
            ]
          }
        }
      }
    case RESET:
      return initState;
    case APPLY:
      return {
        ...state,
        apply: action.payload
      };
    default:
      return state;
  }
};

export default filterReducer;