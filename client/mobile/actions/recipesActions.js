// ACTION TYPES and ACTION CREATORS
export const FETCH_RECIPES_LOADING = "FETCH_RECIPES_LOADING";
export const fetchRecipesLoading = () => ({
  type: FETCH_RECIPES_LOADING
});

export const FETCH_RECIPES_SUCCESS = "FETCH_RECIPES_SUCCESS";
export const fetchRecipesSuccess = recipes => ({
  type: FETCH_RECIPES_SUCCESS,
  payload: recipes
});

export const FETCH_RECIPES_ERROR = "FETCH_RECIPES_ERROR";
export const fetchRecipesError = err => ({
  type: FETCH_RECIPES_ERROR,
  payload: err
});

// ASYNC ACTION CREATORS
