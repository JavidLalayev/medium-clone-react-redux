import React, {Component} from 'react';
import './App.css';
import {Route} from "react-router-dom";
import Header from "./components/includes/Header";
import Footer from "./components/includes/Footer";
import Home from "./components/pages/Home";
import SingleBlog from "./components/pages/SingleBlog";
import CategoryFilter from "./components/pages/CategoryFilter";
import NewBlog from "./components/pages/NewBlog";

class App extends Component {



    render() {
        return (
            <div id="wrapper" style={{paddingTop: "0px"}}>

                <Header/>

                <Route path={'/'} component={Home} exact/>

                <Route path={'/single/:id'} component={SingleBlog} exact/>

                <Route path={'/category/:categoryName'} component={CategoryFilter} exact/>

                <Route path={'/blog/new'} component={NewBlog} exact/>

                <Footer/>

            </div>
        );
    }
}

export default App;
