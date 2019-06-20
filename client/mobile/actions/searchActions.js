// ACTION TYPES and ACTION CREATORS

export const UPDATE_SEARCH = "UPDATE_SEARCH";
const update = (search) => ({
  type: UPDATE_SEARCH,
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