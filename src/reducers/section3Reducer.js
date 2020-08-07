import {
    FETCHED_BLOGS_S3_PENDING,
    FETCHED_BLOGS_S3_FULFILLED,
    FETCHED_BLOGS_S3_REJECTED,
} from "../actions/section3Actions";

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

};

export default (state = initialState, action) => {
    switch (action.type) {

        case FETCHED_BLOGS_S3_PENDING:
            return {
                ...state,
                blogFetching: true,
            };
        case FETCHED_BLOGS_S3_FULFILLED:
            return {
                ...state,
                blogs: action.payload,
                blogFetched: true,
                blogFetching: false,
            };
        case FETCHED_BLOGS_S3_REJECTED:
            return {
                ...state,
                blogFetching: false,
                blogError: action.payload
            };

        default:
            return state;
    }
}