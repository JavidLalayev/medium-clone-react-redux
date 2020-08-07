import React, {Component} from 'react';
import CategoryList from "../Category/CategoryList";
import { connect } from 'react-redux';
import { fetchCategoryFilter } from '../../actions/categoryActions'
import PopularBlogs from "../Home/Section4/PopularBlogs";

class CategoryFilter extends Component {


    render() {
        return (
            <main id="content" className={"c_scroll"}>

                <div className="content-widget" id="c_scroll">
                    <div className="container">
                        <div className="row">

                            <CategoryList categoryName={this.props.match.params.categoryName} categoryReducer={this.props.categoryReducer}/>

                            <PopularBlogs section1Reducer = { this.props.section1Reducer}/>

                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

const mapStateToProp = ({ categoryReducer, section1Reducer }) => {
    return {
        categoryReducer,
        section1Reducer
    }
};

const mapDispatchToProp = {
    fetchCategoryFilter
};


export default connect(mapStateToProp, mapDispatchToProp)(CategoryFilter);
