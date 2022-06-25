import { combineReducers } from "redux";
import authReducers from "./reducers/authReducers";
import githubReducers from "./reducers/githubReducers";
import studentReducers from "./reducers/studentReducers";
const rootReducers = combineReducers({
    authReducers,
    studentReducers,
    githubReducers
})
export default rootReducers;