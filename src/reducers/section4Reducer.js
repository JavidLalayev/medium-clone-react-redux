import {
    FETCHED_BLOGS_P_PENDING,
    FETCHED_BLOGS_P_FULFILLED,
    FETCHED_BLOGS_P_REJECTED,
    FETCHED_BLOGS_P_FINISH
} from "../actions/section4Actions";

const initialState = {
    blogFetching: false,
    blogFetched: false,
    blogError: "",
    blogs: [ {
            id: "",
            title: "",
            description: "",
            writerName: "",
            writingDate: "",
            writerPicture: "",
            pictureUrl: "",
        }],
    isFinish: false
};



export default (state = initialState, action) => {

    switch (action.type) {

        case FETCHED_BLOGS_P_PENDING:
            return {
                ...state,
                blogFetching: true,
                blogFetched: false,
            };
        case FETCHED_BLOGS_P_FULFILLED:
            return {
                ...state,
                blogs: action.payload,
                blogFetched: true,
                blogFetching: false,
            };
        case FETCHED_BLOGS_P_REJECTED:
            return {
                ...state,
                blogFetching: false,
                blogFetched: false,
                blogError: action.payload
            };

        case FETCHED_BLOGS_P_FINISH:
            return {
                ...state,
                blogFetching: false,
                blogFetched: false,
                isFinish: action.payload
            };

        default:
            return state;
    }
}