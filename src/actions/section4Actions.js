import axios from 'axios'

export const FETCHED_BLOGS_P_PENDING = "FETCHED_BLOGS_P_PENDING";
export const FETCHED_BLOGS_P_FULFILLED = "FETCHED_BLOGS_P_FULFILLED";
export const FETCHED_BLOGS_P_REJECTED = "FETCHED_BLOGS_P_REJECTED";
export const FETCHED_BLOGS_P_FINISH = "FETCHED_BLOGS_P_FINISH";


export function fetchBlogsPagination(page, limit, oldData) {


    return dispatch => {


        dispatch({
            type: FETCHED_BLOGS_P_PENDING,
        });

        axios.get(`https://pacific-falls-87694.herokuapp.com/blogs?_page=${page}&_limit=${limit}&_sort=id&_order=desc`)
            .then(result => result.data)
            .then(result => {

                console.log(result.length);
                if (result.length > 0 ){
                    dispatch({

                        type: FETCHED_BLOGS_P_FULFILLED,
                        payload: [...oldData, ...result]

                    })
                }else{
                    dispatch({

                        type: FETCHED_BLOGS_P_FINISH,
                        payload: true

                    })
                }

            })
            .catch(error =>  dispatch({

                type: FETCHED_BLOGS_P_REJECTED,
                payload: error

            }))


    }
}
