import { ADD_STUDENT } from "../constants/type";

let initialState = {
    name: "naveed",
    age: 20,
    class: "1st",
    students: [],
}
function studentReducers(state = initialState, action) {
    switch (action.type) {
        case ADD_STUDENT:
            console.log("data in reducers");
            // work will / logic will here
            let newState = {
                ...state,
                name: "ali",
                newData: action.payload
            }
            return newState


        default:
            return state;
    }


}
export default studentReducers;