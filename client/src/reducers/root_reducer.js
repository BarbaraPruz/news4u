import { combineReducers } from "redux";
import userReducer from "./user_reducer";
import newsReducer from "./news_reducer";

const rootReducer = combineReducers({
  user: userReducer,
  news: newsReducer
});
 
export default rootReducer;