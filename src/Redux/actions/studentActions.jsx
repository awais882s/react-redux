

// action will recieve data from react component and pass it to reducer
const addStudent = (data) => {
    return {
        type: "ADD_STUDENT",
        payLoad: data
    }
}