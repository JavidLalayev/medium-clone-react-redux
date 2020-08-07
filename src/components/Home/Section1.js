import React, {Component} from 'react';
import PropTypes from 'prop-types';
import EditorsPicks from "./Section1/EditorsPicks";
import TrendingList from "./Section1/TrendingList";
import {connect} from 'react-redux'
import {fetchSection1, fetchSection1Trends} from '../../actions/section1Actions'


class Section1 extends Component {
    static defaultProps = {};

    static propTypes = {
        editorschoice: PropTypes.array,
        trendinglist: PropTypes.array
    };

    state = {};

    componentDidMount() {
        this.props.fetchSection1();
        this.props.fetchSection1Trends();
    }



    render() {
        return (

            <div className="section-featured featured-style-1">
                <div className="container" >
                    <div className="row">

                        <EditorsPicks loading={this.props.section1Reducer.editorschoiceFetching}
                                      blogs={this.props.section1Reducer.editorschoice}/>

                        <TrendingList loading={this.props.section1Reducer.trendinglistFetching}
                                      blogs={this.props.section1Reducer.trendinglist}/>

                    </div>
                    <div className="divider c_divider" />
                </div>
            </div>

        );
    }
}

const mapStateToProps = ({section1Reducer}) => {
    return {
        section1Reducer
    }
};

const mapDispatchToProps = {
    fetchSection1,
    fetchSection1Trends
};

export default connect(mapStateToProps, mapDispatchToProps)(Section1);
