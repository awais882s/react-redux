import { combineReducers } from "redux";
import authReducers from "./reducers/authReducers";
import studentReducers from "./reducers/studentReducers";
const rootReducers = combineReducers({
    authReducers,
    studentReducers

})
export default rootReducers;