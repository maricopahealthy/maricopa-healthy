import axios from 'axios'
import { AWS_URL } from "../utils/config"

// ACTION TYPES and ACTION CREATORS
export const FETCH_MARKETS_LOADING = "FETCH_MARKETS_LOADING";
const fetchMarketsLoading = () => ({ 
  type: FETCH_MARKETS_LOADING 
});

export const FETCH_MARKETS_SUCCESS = "FETCH_MARKETS_SUCCESS";
const fetchMarketsSuccess = (markets) => ({ 
  type: FETCH_MARKETS_SUCCESS, 
  payload: markets 
});

export const FETCH_MARKETS_ERROR = "FETCH_MARKETS_ERROR";
const fetchMarketsError = (error) => ({ 
  type: FETCH_MARKETS_ERROR, 
  payload: error 
});

// ASYNC ACTION CREATORS

export const fetchMarkets = () => {
  return async dispatch => {
    dispatch(fetchMarketsLoading());
    try {
      const response = await axios.get( AWS_URL +"/markets");
      dispatch(fetchMarketsSuccess(response.data));
    } catch (err) {
      console.log(err)
      dispatch(fetchMarketsError(err));
    }
  };
};
