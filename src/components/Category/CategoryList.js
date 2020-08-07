import React, {Component} from 'react';
import {ScaleLoader} from "react-spinners";
import { connect } from 'react-redux';
import {fetchCategoryFilter} from "../../actions/categoryActions";
import {fetchSection1Trends} from "../../actions/section1Actions";
import BlogSingle from "../Home/Section4/BlogSingle";
import {Placeholder, Segment} from "semantic-ui-react";

let pageIndex = 2;
const demo = [1,2,3,4,5,6];

class CategoryList extends Component {

    componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
    }

    trackScrolling = () => {
        const wrappedElement = document.getElementsByClassName('c_scroll')[0];
        if (this.isBottom(wrappedElement)) {

            if (this.props.categoryReducer.isFinish === false){
                this.props.fetchCategoryFilter(pageIndex++, 6, this.props.categoryReducer.blogs);
            }

            document.removeEventListener('scroll', this.trackScrolling);
        }
    };

    isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight + 190;
    }

    componentDidMount() {
        if(this.props.categoryName){
            this.props.fetchCategoryFilter(1, 6, [], this.props.categoryName);
            this.props.fetchSection1Trends();
        }
    }


    render() {

        if(this.props.categoryReducer.blogFetched){
            document.addEventListener('scroll', this.trackScrolling);
        }

        return (

            <div className="col-md-8">
                <h2 className="spanborder h4">
                    <span>Most Recent</span>
                </h2>

                {
                    this.props.categoryReducer.blogFetching && this.props.categoryReducer.blogs.length === 0 ?
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
                    this.props.categoryReducer.blogs.map(blog => <BlogSingle key={blog.id} blog={blog}/>)
                }

                {
                    this.props.categoryReducer.blogFetching && this.props.categoryReducer.blogs.length !== 0
                        ?  <ScaleLoader color={"#000000d6"}
                                     loading={this.props.categoryReducer.blogFetching}/> : ""
                }

            </div>

        );
    }
}

const mapStateToProp = ({ categoryReducer }) => {
    return {
        categoryReducer
    }
};

const mapDispatchToProp = {
    fetchCategoryFilter,
    fetchSection1Trends
};

export default connect(mapStateToProp, mapDispatchToProp)(CategoryList);






