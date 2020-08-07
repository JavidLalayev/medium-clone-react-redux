import {
    FETCHED_BLOGS_C_PENDING,
    FETCHED_BLOGS_C_FULFILLED,
    FETCHED_BLOGS_C_REJECTED,
    FETCHED_BLOGS_C_FINISH,
    CLEAR_CATEGORY
} from "../actions/categoryActions";

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
    isFinish: false,
};

export default (state = initialState, action) => {

    switch (action.type) {

        case FETCHED_BLOGS_C_PENDING:
            return {
                ...state,
                blogFetching: true,
                blogFetched: false,
            };
        case FETCHED_BLOGS_C_FULFILLED:
            return {
                ...state,
                blogs: action.payload,
                blogFetched: true,
                blogFetching: false,
                isFirst: false
            };
        case FETCHED_BLOGS_C_REJECTED:
            return {
                ...state,
                blogFetching: false,
                blogFetched: false,
                blogError: action.payload
            };

        case FETCHED_BLOGS_C_FINISH:
            return {
                ...state,
                blogFetching: false,
                blogFetched: false,
                isFinish: action.payload
            };
        case CLEAR_CATEGORY:
            return {
                ...state,
                blogs: []
            };

        default:
            return state;
    }
}