import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { fetchSection2 } from '../../actions/section2Actions'
import ScaleLoader from "react-spinners/ScaleLoader";
import EditorsPickSingle from "./Section1/EditorsPickSingle";
import {Link} from "react-router-dom";
import {Placeholder, Segment} from "semantic-ui-react";

class Section2 extends Component {

    componentDidMount() {
        this.props.fetchSection2();
    }


    render() {

        console.log(this.props.section2Reducer);

        return (
            <div className="content-widget">

                {
                    this.props.section2Reducer.blogFetching  ?

                        <div className="container" >
                            <Segment raised style={{height: "250px"}}>
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
                         :
                        <div className="container">
                                <div className="row justify-content-between post-has-bg ml-0 mr-0">
                                    <div className="col-lg-6 col-md-8">
                                        <div className="pt-5 pb-5 pl-md-5 pr-5 align-self-center">
                                            <div className="capsSubtle mb-2">Editors' Pick</div>
                                            <h2 className="entry-title mb-3">
                                                <Link to={`/single/${this.props.section2Reducer.blog.id}`}>
                                                {this.props.section2Reducer.blog.title}
                                                </Link>
                                            </h2>
                                            <div className="entry-excerpt">
                                                <p>
                                                    {
                                                        (this.props.section2Reducer.blog.description) ?
                                                            this.props.section2Reducer.blog.description.substring(0, 100) : ""
                                                    }
                                                </p>
                                            </div>
                                            <div className="entry-meta align-items-center">
                                                <Link to={''}>
                                                    { this.props.section2Reducer.blog.writerName }
                                                </Link>
                                                <br />
                                                <span>{ this.props.section2Reducer.blog.writingDate }</span>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-4 bgcover d-none d-md-block pl-md-0 ml-0" style={{ backgroundImage: `url(${this.props.section2Reducer.blog.pictureUrl}), url(https://argauto.lv/application/modules/themes/views/default/assets/images/image-placeholder.png)` }} />
                                </div>
                                <div className="divider c_divider" />
                            </div>
                }


            </div>

        );
    }
}

const mapStateToProps = ({section2Reducer}) => {
    return {
        section2Reducer
    }
};

const mapDispatchToProps = {
    fetchSection2
};

export default connect(mapStateToProps, mapDispatchToProps)(Section2);
