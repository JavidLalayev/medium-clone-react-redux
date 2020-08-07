import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";


const addDefaultSrc = (e) => {
    e.target.src = 'https://argauto.lv/application/modules/themes/views/default/assets/images/image-placeholder.png';
};

function LeftSideBlogSingle(props) {
    return (
        <article className="col-md-6">
            <div className="mb-3 d-flex row">
                <figure className="col-md-5">
                    <Link to={`/single/${props.blog.id}`}>
                        <img onError={addDefaultSrc.bind(this)}  src={ props.blog.pictureUrl } alt="post-title" />
                    </Link>
                </figure>
                <div className="entry-content col-md-7 pl-md-0">
                    <h5 className="entry-title mb-3">
                        <Link to={`/single/${props.blog.id}`}>
                            { props.blog.title }
                        </Link>
                    </h5>
                    <div className="entry-excerpt">
                        <p>
                            { props.blog.description.substring(0, 80) } {props.blog.description.length > 80 ? "..." : ""}

                        </p>
                    </div>
                    <div className="entry-meta align-items-center">
                        <Link to={''}>
                            { props.blog.writerName }
                        </Link><br />
                        <span>
                            { props.blog.writingDate }
                        </span>

                    </div>
                </div>
            </div>
        </article>
    );
}

LeftSideBlogSingle.propTypes = {};
LeftSideBlogSingle.defaultProps = {};

export default LeftSideBlogSingle;
