import React from 'react';
import PropTypes from 'prop-types';
import EditorsPickSingle from "./EditorsPickSingle";
import { Dimmer, Loader } from "semantic-ui-react";
import ScaleLoader from "react-spinners/ScaleLoader";
import {Link} from "react-router-dom";
import { Grid, Placeholder, Segment } from 'semantic-ui-react'

const demo = [1,2,3];

const addDefaultSrc = (e) => {
    e.target.src = 'https://argauto.lv/application/modules/themes/views/default/assets/images/image-placeholder.png';
};

function EditorsPicks(props) {
    let cond = false;

    return (
        <div className="col-sm-12 col-md-9 col-xl-9">
            <h2 className="spanborder h4">
                <span>Editor's Picks</span>
            </h2>
            <div className="row">

                <div className="col-sm-12 col-md-6">



                    <article className="first mb-3">

                        {props.loading
                            ?  <Segment raised style={{height: "400px"}}>
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

                            : <div>
                                    <figure>
                                        <Link to={`/single/${props.blogs[0].id}`} ><img onError={addDefaultSrc.bind(this)} src={props.blogs[0].pictureUrl} alt="post-title" /></Link>
                                    </figure>
                                    <h3 className="entry-title mb-3">
                                        <Link to={`/single/${props.blogs[0].id}`} >
                                            { props.blogs[0].title }
                                        </Link>
                                    </h3>
                                    <div className="entry-excerpt">
                                        <p>
                                            { props.blogs[0].description.substring(0, 100) }
                                        </p>
                                    </div>
                                    <div className="entry-meta align-items-center">
                                        <Link to={''}> {props.blogs[0].writerName} </Link><br />
                                        <span> {props.blogs[0].writingDate} </span>

                                    </div>
                                </div>}






                    </article>

                </div>

                <div className="col-sm-12 col-md-6">

                    {
                        props.loading ?

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
                                                </Segment>) :

                            props.blogs.map(blog => {
                               if (cond){
                                   return (<EditorsPickSingle  key={blog.id} blog={blog}/>)
                               }
                               cond = true;
                            })
                    }

                </div>

            </div>
        </div>
    );
}

EditorsPicks.propTypes = {
    blogs: PropTypes.array.isRequired
};
EditorsPicks.defaultProps = {};

export default EditorsPicks;
