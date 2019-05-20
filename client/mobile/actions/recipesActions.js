import axios from 'axios'

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
const fetchRecipesError = err => ({
  type: FETCH_RECIPES_ERROR,
  payload: err
});

// ASYNC ACTION CREATORS

export const fetchRecipes = () => dispatch => {
  dispatch(
    fetchRecipesLoading()
  )
  return axios.get(`${apiUrl}/recipes`)
    .then(response => {
      dispatch(
        fetchRecipesSuccess(response.data)
      )
    })
    .catch(err => {
      dispatch(
        fetchRecipesError(err)
      )
    })
}
