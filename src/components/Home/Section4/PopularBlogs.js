import React, {Component} from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";
import $ from 'jquery';
import StickyBox from "react-sticky-box";
import {Link} from "react-router-dom";
import {Placeholder, Segment} from "semantic-ui-react";

const demo = [1,2,3, 4];

class PopularBlogs extends Component {

    render() {

        let index = 0;

        return (

                <div className="col-md-4 pl-md-5 sticky-sidebar c_responsive_sticky">
                    <StickyBox offsetTop={20} offsetBottom={20} className="sidebar-widget latest-tpl-4">
                            <h4 className="spanborder">
                                <span>Popular</span>
                            </h4>

                            {
                                this.props.section1Reducer.trendinglistFetching ?
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
                                    </Segment>)
                                    :

                                    <ol>
                                        {this.props.section1Reducer.trendinglist.map(blog => {
                                            index++;

                                            return <li className="d-flex" key={blog.id}>
                                                <div className="post-count">0{index}</div>
                                                <div className="post-content">
                                                    <h5 className="entry-title mb-3">
                                                        <Link to={`/single/${blog.id}`}>
                                                            {
                                                                blog.title
                                                            }
                                                        </Link>
                                                    </h5>
                                                    <div className="entry-meta align-items-center">
                                                        <a href="author.html">
                                                            {
                                                                blog.writerName
                                                            }
                                                        </a><br/>
                                                        <span>
                                                            {
                                                                blog.writingDate
                                                            }
                                                        </span>
                                                        <span className="middotDivider"/>
                                                        <span className="svgIcon svgIcon--star">
                                                        <svg className="svgIcon-use" width={15}
                                                             height={15}>
                                                          <path
                                                              d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z"/>
                                                        </svg>
                                                      </span>
                                                    </div>
                                                </div>
                                            </li>;
                                        })}


                                    </ol>
                            }
                    </StickyBox>
                </div>
        );
    }
}

export default PopularBlogs;



