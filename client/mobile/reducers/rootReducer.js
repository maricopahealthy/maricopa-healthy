import { combineReducers } from "redux";
import activeReducer from "./activeReducer";
import eventsReducer from "./eventsReducer";
import favoritesReducer from "./favoritesReducer";
import marketsReducer from "./marketsReducer";
import parksReducer from "./parksReducer";
import recipesReducer from "./recipesReducer";
import resourcesReducer from "./resourcesReducer";
import subscriptionsReducer from "./subscriptionsReducer";
import searchReducer from "./searchReducer";
import filterReducer from "./filterReducer";


const rootReducer = combineReducers({
  active: activeReducer,
  events: eventsReducer,
  favorites: favoritesReducer,
  markets: marketsReducer,
  parks: parksReducer,
  recipes: recipesReducer,
  resources: resourcesReducer,
  subscriptions: subscriptionsReducer,
  search: searchReducer,
  filter: filterReducer
});

export default rootReducer;
