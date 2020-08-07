import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

function Footer(props) {
    return (
        <footer className="mt-5">
            <div className="container">
                <div className="divider" />
                <div className="row">
                    <div className="col-md-6 copyright text-xs-center">
                        <p>Copyright 2020 Designed by <Link to={""} >Javid Lalayev</Link></p>
                    </div>
                    <div className="col-md-6">
                        <ul className="social-network inline text-md-right text-sm-center">

                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
