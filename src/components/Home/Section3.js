import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LeftSideBlogSingle from "./Section3/LeftSideBlogSingle";
import { connect } from 'react-redux';
import section3Reducer from "../../reducers/section3Reducer";
import { fetchSection3 } from '../../actions/section3Actions'
import ScaleLoader from "react-spinners/ScaleLoader";
import {Placeholder, Segment} from "semantic-ui-react";

const demo = [1,2,3, 4];


class Section3 extends Component {

    componentDidMount() {
        this.props.fetchSection3();
    }


    render() {

        console.log(this.props.section3Reducer);

        return (
            <div className="content-widget">
                <div className="container">
                    <div className="row">

                        <div className="col-md-10">
                            <div className="row justify-content-between">

                                {
                                    this.props.section3Reducer.blogFetching
                                        ?
                                        demo.map(item =>
                                            <div className={"col-md-6 mb-3 mt-3"}>
                                                <Segment raised>
                                                    <Placeholder>
                                                        <Placeholder.Header image>
                                                            <Placeholder.Line />
                                                            <Placeholder.Line />
                                                        </Placeholder.Header>
                                                        <Placeholder.Paragraph>
                                                            <Placeholder.Line length='medium' />
                                                            <Placeholder.Line length='short' />
                                                        </Placeholder.Paragraph>
                                                    </Placeholder>
                                                </Segment>
                                            </div>
                                            )
                                        :
                                            this.props.section3Reducer.blogs.map(blog => <LeftSideBlogSingle key={blog.id} blog={blog}/>)
                                }


                            </div>
                        </div>

                        <div className="col-md-2">
                            <div className="sidebar-widget ads">
                                <a href="#"><img src="assets/images/ads/ads-1.png" alt="ads" /></a>
                            </div>
                        </div>

                    </div>
                    <div className="divider-2" />
                </div>
            </div>

        );
    }
}

const mapStateToProps = ({ section3Reducer }) => {
    return{
        section3Reducer
    }
};

const mapDispatchToPropds = {
    fetchSection3
};

export default connect(mapStateToProps, mapDispatchToPropds)(Section3);
