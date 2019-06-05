// ACTION TYPES and ACTION CREATORS

export const UPDATE = "UPDATE";
const update = (search) => ({
  type: UPDATE,
  payload: search
});

// ASYNC ACTION CREATORS

export const updateSearch = (search) => {
  return dispatch => {
    dispatch(
      update(search)
    )
  }
};