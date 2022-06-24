import { GITHUB_FOLLOWERS_API, ERROR_GITHUB_FOLLOERS_API } from "../constants/type";
let initialState = {
    followers: [],
    error: "",
}
function githubReducers(state = initialState, action) {
    switch (action.type) {
        case GITHUB_FOLLOWERS_API:
            console.log("data in reducers from actions", action.payload);
            // work will / logic will here
            let newState = {
                ...state,
                name: "ali",
                followers: action.payload
            }
            return newState
        case ERROR_GITHUB_FOLLOERS_API:
            console.log("data in reducers from actions", action.payload);
            // work will / logic will her
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}
export default githubReducers;