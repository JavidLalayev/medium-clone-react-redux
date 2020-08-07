import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TrendinSingle from "./TrendinSingle";
import ScaleLoader from "react-spinners/ScaleLoader";
import {Placeholder, Segment} from "semantic-ui-react";

const demo = [1,2,3, 4];


class TrendingList extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};


    render() {
        let index = 0;
        return (

            <div className="col-sm-12 col-md-3 col-xl-3">
                <div className="sidebar-widget latest-tpl-4">
                    <h4 className="spanborder">
                        <span>Trending</span>
                    </h4>
                    <ol>

                        {
                            this.props.loading ?
                                demo.map(item => <Segment raised>
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
                                </Segment>):

                               this.props.blogs.map(blog =>  {
                                   index++;
                                   return <TrendinSingle viewIndex={index} key={blog.id} blog={blog}/>
                               })


                        }



                    </ol>
                </div>

            </div>


        );
    }
}

export default TrendingList;
