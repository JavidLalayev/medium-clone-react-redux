import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BlogSingle from "./BlogSingle";
import ScaleLoader from "react-spinners/ScaleLoader";
import {fetchBlogsPagination} from "../../../actions/section4Actions";
import { connect } from 'react-redux';
import InfiniteLoading from "react-simple-infinite-loading";
import {Placeholder, Segment} from "semantic-ui-react";

let pageIndex = 2;
const demo = [1,2,3,4,5,6];

class BlogList extends Component {

    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
    }

    trackScrolling = () => {
        const wrappedElement = document.getElementById('c_scroll');
        if (this.isBottom(wrappedElement)) {

            if (this.props.section4Reducer.isFinish === false){
                this.props.fetchBlogsPagination(pageIndex++, 6, this.props.section4Reducer.blogs);
            }

            document.removeEventListener('scroll', this.trackScrolling);
        }
    };

    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight + 190;
    }


    render() {

        if(this.props.section4Reducer.blogFetched){
            document.addEventListener('scroll', this.trackScrolling);
        }

        return (

            <div className="col-md-8">
                <h2 className="spanborder h4">
                    <span>Most Recent</span>
                </h2>


                {
                    this.props.section4Reducer.blogFetching && this.props.section4Reducer.blogs.length === 1 ?
                        demo.map(item =>
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
                            </Segment>) : ""
                }

                    {
                        this.props.section4Reducer.blogs.map(blog => <BlogSingle key={blog.id} blog={blog}/>)
                    }

                    {
                        this.props.section4Reducer.blogFetching && this.props.section4Reducer.blogs.length !== 1
                            ?
                            <ScaleLoader color={"#000000d6"}
                                         loading={this.props.section4Reducer.blogFetching}/>
                            : ""
                    }

            </div>

        );
    }
}

const mapStateToProps = ({ section1Reducer, section4Reducer }) => {
    return{
        section4Reducer
    }
};

const mapDispatchToPropds = {
    fetchBlogsPagination
};

export default connect(mapStateToProps, mapDispatchToPropds)(BlogList);





