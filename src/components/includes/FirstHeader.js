import React, {Component} from 'react';
import {Link} from "react-router-dom";
import $ from 'jquery'

const myRef = React.createRef();

class FirstHeader extends Component {

    state = {
        facebookShare: `https://www.facebook.com/sharer/sharer.php?u=${document.location.href}`,
    };

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        const node = this.myRef.current;

        if(this.props.cond){
            node.style.paddingBottom = "20px"
        }else{
            node.style.paddingBottom = "0px"
        }

    }

    componentDidUpdate(prevProps, prevState) {
        const node = this.myRef.current;

        if(this.props.cond){
            node.style.paddingBottom = "20px"
        }else{
            node.style.paddingBottom = "0px"
        }
    }

    searchToggle(){
        $('header .search-form').toggleClass('open-search');
    }

    render() {
        return (
            <div className="container" ref={this.myRef}>
                <div className="align-items-center w-100">
                    <h1 className="logo float-left navbar-brand"><Link to={""} className="logo">Medium</Link></h1>
                    <div className="header-right float-right w-50">
                        <div className="d-inline-flex float-right text-right align-items-center">
                            <ul className="social-network heading navbar-nav d-lg-flex align-items-center">
                                <li><a  href={this.state.facebookShare} ><i className="icon-facebook" /></a></li>
                            </ul>
                            <ul className="top-menu heading navbar-nav w-100 d-lg-flex align-items-center">
                                <li><Link   to={"/blog/new"} className="btn">Write New Blog</Link></li>
                            </ul>
                        </div>

                        {/*<form action="" method="get" className="search-form d-lg-flex float-right">*/}
                        {/*    <Link  onClick={this.searchToggle.bind(this)} className="searh-toggle">*/}
                        {/*        <i className="icon-search" />*/}
                        {/*    </Link>*/}
                        {/*    <input type="text" className="search_field" placeholder="Search..." defaultValue name="s" />*/}
                        {/*</form>*/}

                    </div>
                </div>
                <div className="clearfix" />
            </div>
        );
    }
}

export default FirstHeader;
