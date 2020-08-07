import {
    FETCHED_BLOG_PENDING,
    FETCHED_BLOG_FULFILLED,
    FETCHED_BLOG_REJECTED,
} from "../actions/section2Actions";

const initialState = {
    blogFetching: false,
    blogFetched: false,
    blogError: "",
    blog: {
        id: "",
        title: "",
        description: "",
        writerName: "",
        writingDate: "",
        writerPicture: "",
        pictureUrl: "",
    },

};

export default (state = initialState, action) => {
    switch (action.type) {

        case FETCHED_BLOG_PENDING:
            return {
                ...state,
                blogFetching: true,
            };
        case FETCHED_BLOG_FULFILLED:
            return {
                ...state,
                blog: action.payload,
                blogFetched: true,
                blogFetching: false,
            };
        case FETCHED_BLOG_REJECTED:
            return {
                ...state,
                blogFetching: false,
                blogError: action.payload
            };

        default:
            return state;
    }
}