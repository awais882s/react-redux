import { combineReducers } from "redux";
import authReducer from "./authReducer";
import studentReducers from "./studentReducers";
const rootReducer = combineReducers({
    authReducer,
    studentReducers 

})
export default rootReducer;