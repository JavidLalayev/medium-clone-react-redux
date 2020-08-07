import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BlogList from "./Section4/BlogList";
import PopularBlogs from "./Section4/PopularBlogs";
import {connect} from "react-redux";
import {fetchSection1Trends} from "../../actions/section1Actions";
import { fetchBlogsPagination } from "../../actions/section4Actions";
import {compose} from "redux";
import ScaleLoader from "react-spinners/ScaleLoader";

class Section4 extends Component {

    componentDidMount() {
        this.props.fetchBlogsPagination(1, 6, []);
    }


    render() {

        return (
            <div className="content-widget" id="c_scroll">
                <div className="container">
                    <div className="row">

                      <BlogList section4Reducer = { this.props.section4Reducer}/>

                      <PopularBlogs section1Reducer = { this.props.section1Reducer}/>

                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = ({ section1Reducer, section4Reducer }) => {
    return{
        section1Reducer,
        section4Reducer
    }
};

const mapDispatchToProps = {
    fetchSection1Trends,
    fetchBlogsPagination
};

export default connect(mapStateToProps, mapDispatchToProps)(Section4);
