import axios from 'axios'

export const FETCHED_BLOGS_C_PENDING = "FETCHED_BLOGS_C_PENDING";
export const FETCHED_BLOGS_C_FULFILLED = "FETCHED_BLOGS_C_FULFILLED";
export const FETCHED_BLOGS_C_REJECTED = "FETCHED_BLOGS_C_REJECTED";
export const FETCHED_BLOGS_C_FINISH = "FETCHED_BLOGS_C_FINISH";
export const CLEAR_CATEGORY = "CLEAR_CATEGORY";


export function fetchCategoryFilter(page, limit, oldData, category) {

    return dispatch => {

        dispatch({
            type: FETCHED_BLOGS_C_PENDING,
        });

        axios.get(`https://pacific-falls-87694.herokuapp.com/blogs?_page=${page}&_limit=${limit}&_sort=id&_order=desc&category=${category}`)
            .then(result => result.data)
            .then(result => {

                console.log(result.length);
                if (result.length > 0 ){
                    dispatch({

                        type: FETCHED_BLOGS_C_FULFILLED,
                        payload: [...oldData, ...result]

                    })
                }else{
                    dispatch({

                        type: FETCHED_BLOGS_C_FINISH,
                        payload: true

                    })
                }

            })
            .catch(error =>  dispatch({

                type: FETCHED_BLOGS_C_REJECTED,
                payload: error

            }))


    }
}

export function clearCategoryFilter() {
    return dispatch => {
        dispatch({
            type: CLEAR_CATEGORY,
        });
    }
}
