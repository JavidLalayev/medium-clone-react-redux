import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";


const addDefaultSrc = (e) => {
    e.target.src = 'https://argauto.lv/application/modules/themes/views/default/assets/images/image-placeholder.png';
};

function BlogSingle(props) {
    return (
        <div>
            {
                props.blog.id !== "" ?
                    <article className="row justify-content-between mb-5 mr-0">
                        <div className="col-md-9 ">
                            <div className="align-self-center">
                                <h3 className="entry-title mb-3">
                                    <Link to={`/single/${props.blog.id}`}>
                                        {
                                            props.blog.title
                                        }
                                    </Link>
                                </h3>
                                <div className="entry-excerpt">
                                    <p>
                                        {
                                            props.blog.description
                                        }
                                    </p>
                                </div>
                                <div className="entry-meta align-items-center">
                                    <Link to={''}>
                                        {
                                            props.blog.writerName
                                        }
                                    </Link>
                                    <br />
                                    <span>
                             {
                                 props.blog.writingDate
                             }
                        </span>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 bgcover" style={{backgroundImage: `url(${ props.blog.pictureUrl}), url(https://argauto.lv/application/modules/themes/views/default/assets/images/image-placeholder.png)`}} />
                    </article>
                    : ""
            }
        </div>
    );
}

BlogSingle.propTypes = {};
BlogSingle.defaultProps = {};

export default BlogSingle;


/*




 */