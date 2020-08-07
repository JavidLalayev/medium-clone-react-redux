import { combineReducers } from 'redux'
import section1Reducer from './section1Reducer.js';
import section2Reducer from './section2Reducer.js';
import section3Reducer from './section3Reducer.js';
import section4Reducer from "./section4Reducer";
import categoryReducer from "./categoryReducer.js";

export default combineReducers({
    section1Reducer,
    section2Reducer,
    section3Reducer,
    section4Reducer,
    categoryReducer
})