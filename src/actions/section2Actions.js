import axios from 'axios'

export const FETCHED_BLOG_PENDING = "FETCHED_BLOG_PENDING";
export const FETCHED_BLOG_FULFILLED = "FETCHED_BLOG_FULFILLED";
export const FETCHED_BLOG_REJECTED = "FETCHED_BLOG_REJECTED";


export function fetchSection2() {
    return dispatch => {
        dispatch({
            type: "FETCHED_BLOG",
            payload: axios.get("https://pacific-falls-87694.herokuapp.com/blogs/7")
                .then(result => result.data)
        })
    }
}
