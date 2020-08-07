import React, {Component} from 'react';
import {Route, withRouter} from "react-router-dom";
import FirstHeader from './FirstHeader'
import SecondHeader from './SecondHeader'

class Header extends Component {

    state = {
      cond: false
    };

    componentWillMount() {
        this.unlisten = this.props.history.listen((location, action) => {
            if (window.location.href.includes("/single/")){
                this.setState({
                    cond: true
                })
            }else{
                this.setState({
                    cond: false
                })
            }
        });
    }
    componentWillUnmount() {
        this.unlisten();
    }

    componentDidMount() {
        if (window.location.href.includes("/single/")){
            this.setState({
                cond: true
            })
        }else{
            this.setState({
                cond: false
            })
        }
    }


    render() {

        return (
            <header id="header">
                <FirstHeader cond={this.state.cond}/>

                {
                    !this.state.cond ? <SecondHeader/> : ""
                }

            </header>
        );
    }
}

export default withRouter(Header);

