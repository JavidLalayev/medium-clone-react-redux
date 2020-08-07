import axios from 'axios'

export const FETCHED_BLOGS_S3_PENDING = "FETCHED_BLOGS_S3_PENDING";
export const FETCHED_BLOGS_S3_FULFILLED = "FETCHED_BLOGS_S3_FULFILLED";
export const FETCHED_BLOGS_S3_REJECTED = "FETCHED_BLOGS_S3_REJECTED";


export function fetchSection3() {
    return dispatch => {
        dispatch({
            type: "FETCHED_BLOGS_S3",
            payload: axios.get("https://pacific-falls-87694.herokuapp.com/blogs?_start=12&_end=16")
                .then(result => result.data)
        })
    }
}
