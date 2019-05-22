import { combineReducers } from "redux";
import activeReducer from "./activeReducer";
import eventsReducer from "./eventsReducer";
import favoritesReducer from "./favoritesReducer";
import marketsReducer from "./marketsReducer";
import parksReducer from "./parksReducer";
import recipesReducer from "./recipesReducer";
import resourcesReducer from "./resourcesReducer";
import subscriptionsReducer from "./subscriptionsReducer";

const rootReducer = combineReducers({
  active: activeReducer,
  events: eventsReducer,
  favorites: favoritesReducer,
  markets: marketsReducer,
  parks: parksReducer,
  recipes: recipesReducer,
  resources: resourcesReducer,
  subscriptions: subscriptionsReducer
});

export default rootReducer;
