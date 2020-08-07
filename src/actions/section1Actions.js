import axios from 'axios'

export const FETCHED_BLOGS_PENDING = "FETCHED_BLOGS_PENDING";
export const FETCHED_BLOGS_FULFILLED = "FETCHED_BLOGS_FULFILLED";
export const FETCHED_BLOGS_REJECTED = "FETCHED_BLOGS_REJECTED";

export const FETCHED_BLOGS_TREND_PENDING = "FETCHED_BLOGS_TREND_PENDING";
export const FETCHED_BLOGS_TREND_FULFILLED = "FETCHED_BLOGS_TREND_FULFILLED";
export const FETCHED_BLOGS_TREND_REJECTED = "FETCHED_BLOGS_TREND_REJECTED";


export function fetchSection1() {
    return dispatch => {
        dispatch({
            type: "FETCHED_BLOGS",
            payload: axios.get("https://pacific-falls-87694.herokuapp.com/blogs?_limit=4&_sort=id&_order=desc").then(result => result.data)
        })
    }
}

export function fetchSection1Trends() {
    return dispatch => {
        dispatch({
            type: "FETCHED_BLOGS_TREND",
            payload: axios.get("https://pacific-falls-87694.herokuapp.com/blogs?_limit=4&_sort=likes&_order=desc").then(result => result.data)
        })
    }
}