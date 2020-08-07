import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";


const addDefaultSrc = (e) => {
    e.target.src = 'https://argauto.lv/application/modules/themes/views/default/assets/images/image-placeholder.png';
};

function EditorsPickSingle(props) {
    return (

        <article className="post-has-bg">
            <div className="mb-3 d-flex row c_parent">
                <figure className="col-4 col-md-4 c_child">
                    <Link to={`/single/${props.blog.id}`}>
                        <img onError={addDefaultSrc.bind(this)} src={props.blog.pictureUrl} alt="post-title"  className={"c_child"}/>
                    </Link>
                </figure>
                <div className="entry-content col-8 col-md-8 pl-md-0">
                    <h5 className="entry-title mb-3" style={{marginLeft: "19px", marginRight: "6px"}}>
                        <Link to={`/single/${props.blog.id}`}>
                            { props.blog.title }
                        </Link>
                    </h5>
                    <div className="entry-meta align-items-center" style={{marginLeft: "19px", marginRight: "6px"}}>
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

EditorsPickSingle.propTypes = {};
EditorsPickSingle.defaultProps = {};

export default EditorsPickSingle;
