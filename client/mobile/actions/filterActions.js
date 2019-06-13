// ACTION TYPES and ACTION CREATORS

export const RESET = "RESET";
const reset = (val) => ({
  type: RESET,
  payload: val
});

// ASYNC ACTION CREATORS

export const resetFilter = (val) => {
  return dispatch => {
    dispatch(
      reset(val)
    )
  }
};