import {
    FETCHED_BLOGS_PENDING,
    FETCHED_BLOGS_FULFILLED,
    FETCHED_BLOGS_REJECTED,
    FETCHED_BLOGS_TREND_PENDING,
    FETCHED_BLOGS_TREND_FULFILLED,
    FETCHED_BLOGS_TREND_REJECTED,
} from "../actions/section1Actions";

const initialState = {
    editorschoiceFetching: false,
    editorschoiceFetched: false,
    editorschoiceError: "",
    editorschoice: [{
        id: 0,
        title: "",
        description: "",
        writerName: "",
        writingDate: "",
        writerPicture: "",
        pictureUrl: "",
    }],

    trendinglistFetching: false,
    trendinglistFetched: false,
    trendinglistError: "",
    trendinglist: [{
        id: 0,
        title: "",
        description: "",
        writerName: "",
        writingDate: "",
        writerPicture: "",
        pictureUrl: "",
    }]
};

export default (state = initialState, action) => {
    switch (action.type) {

        // Ilk 4  bloglarin getirilme prosesleri
        case FETCHED_BLOGS_PENDING:
            return {
                ...state,
                editorschoiceFetching: true,
            };
        case FETCHED_BLOGS_FULFILLED:
            return {
                ...state,
                editorschoice: action.payload,
                editorschoiceFetched: true,
                editorschoiceFetching: false,
            };
        case FETCHED_BLOGS_REJECTED:
            return {
                ...state,
                editorschoiceFetching: false,
                editorschoiceError: action.payload
            };


            //Trend olan bloglar prosesleri
        case FETCHED_BLOGS_TREND_PENDING:
            return {
                ...state,
                trendinglistFetching: true,
            };
        case FETCHED_BLOGS_TREND_FULFILLED:
            return {
                ...state,
                trendinglist: action.payload,
                trendinglistFetched: true,
                trendinglistFetching: false,
            };
        case FETCHED_BLOGS_TREND_REJECTED:
            return {
                ...state,
                trendinglistFetching: false,
                trendinglistError: action.payload
            };

        default:
            return state;
    }
}