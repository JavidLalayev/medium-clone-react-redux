import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {logger}  from "redux-logger";
import reduxPromise from 'redux-promise-middleware'



//css imports
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './assets/css/fontello.css';
import './assets/css/popup.css';
import './assets/css/bootstrap.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/owl.theme.default.min.css'
import './assets/css/style.css'
import './assets/css/widgets.css'
import './assets/css/color-default.css'
import './assets/css/responsive.css'
//css imports


const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(reduxPromise, thunk, logger)
    )
);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
                <App />
        </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
