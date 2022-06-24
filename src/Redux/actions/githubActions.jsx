import { ERROR_GITHUB_FOLLOERS_API, GITHUB_FOLLOWERS_API } from "../constants/type";
export const fetchFollowers = (data) => async (dispatch, previousState) => {
    try {
        let res = await fetch(`https://api.github.com/users/{$data}/followers`);
        console.log("res", res);
        dispatch({
            type: GITHUB_FOLLOWERS_API,
            payLoad: res
        })

        //    api request will be here

    } catch (error) {
        console.log("error", error);
        dispatch({
            type: ERROR_GITHUB_FOLLOERS_API,
            payLoad: error,
        })


    }

}