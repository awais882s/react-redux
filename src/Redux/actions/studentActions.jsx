
import { ADD_STUDENT } from "../constants/type";
// action will recieve data from react component and pass it to reducer
export const addStudent = (data) => {
    console.log(" action , data from react component", data);
    return {
        type: ADD_STUDENT,
        payLoad: data,
    }
}

