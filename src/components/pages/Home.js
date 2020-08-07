import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import Section1 from "../Home/Section1";
import Section2 from "../Home/Section2";
import Section3 from "../Home/Section3";
import Section4 from "../Home/Section4";

class Home extends Component {
    static defaultProps = {};

    static propTypes = {};

    state = {};

    render() {
        return (
            <main id="content">

                <Section1/>

                <Section2/>

                <Section3/>

                <Section4/>

            </main>
        );
    }
}

const mapStateToProps = ({  }) => {
    return{

    }
};

export default connect(mapStateToProps)(Home);
