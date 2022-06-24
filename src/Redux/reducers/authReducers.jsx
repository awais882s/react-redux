let intialState = {
    isLogin: true,
    user: { name: "Awais", email: "some@gmail.com" }
}
function authReducers(state = intialState, action) {
    switch (action.type) {
        case "USER_LOGIN":
            // work will / logic will here
            let newState = {
                ...state,
                isLogin: true,
                newData: action.payload
            }

            return newState

        default:
            return state;
    }
}
export default authReducers;