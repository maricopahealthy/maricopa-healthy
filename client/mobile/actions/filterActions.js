// ACTION TYPES and ACTION CREATORS

export const RESET = "RESET";
const reset = () => ({
  type: RESET
});

export const UPDATE = "UPDATE";
const update = (filter) => ({
  type: UPDATE,
  payload: filter
});

export const APPLY = "APPLY";
const apply = (boolean) => ({
  type: APPLY,
  payload: boolean
});

// ASYNC ACTION CREATORS

export const resetFilter = () => {
  return dispatch => {
    dispatch(
      reset()
    )
  }
};

export const updateFilter = (filter) => {
  return dispatch => {
    dispatch(
      update(filter)
    )
  }
};

export const applyFilter = (boolean, navigation, route) => {
  navigation.navigate(route)
  return dispatch => {
    dispatch(
      apply(boolean)
    )
  }
};