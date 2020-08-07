import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import Slider from "react-slick";
import { connect } from 'react-redux';
import StickyBox from "react-sticky-box";
import axios from "axios";
import { fetchCategoryFilter, clearCategoryFilter } from '../../actions/categoryActions';

const settings = {
    dots: false,
    infinite: false,
    speed: 250,
    slidesToScroll: 3,
    slidesToShow: 7,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    swipeToSlide: true,
    swipe: false,
    responsive: [
        {
            breakpoint: 1424,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 1224,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 1124,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 350,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]

};

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <span className={className}
              style={{...style}}
              onClick={onClick}>

            <svg className="svgIcon-use" width="21" height="21">
                <path
                d="M13.402 16.957l-6.478-6.479L13.402 4l.799.71-5.768 5.768 5.768 5.77z"
                fillRule="evenodd"></path>
            </svg>

        </span>

    );
};

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <span className={className}
              style={{...style, display: "block"}}
              onClick={onClick}>
            <svg className="svgIcon-use" width="21" height="21">
                <path d="M8.3 4.2l6.4 6.3-6.4 6.3-.8-.8 5.5-5.5L7.5 5" fillRule="evenodd"></path>
            </svg>
        </span>
    );
}



class SecondHeader extends Component {

    state = {
        category: [
            {
                id: '',
                name: "",
            }
        ]
    };

    componentDidMount() {
        this.getCategory();
    }

    getCategory(){
        axios.get(`https://pacific-falls-87694.herokuapp.com/categories`)
            .then(result => result.data)
            .then(result => {
                this.setState({
                    category: result,
                });
            })
    }

    categoryChange = (categoryName) => {

        this.props.fetchCategoryFilter(1, 6, [], categoryName);
        this.props.clearCategoryFilter();
    };

    render() {
        return (

            <nav id="main-menu" className="stick">

                <div className="container">
                    <div className="menu-primary">
                        <ul>
                            <Slider {...settings} style={{textAlign: "center"}}>
                                {
                                    this.state.category.map(item =>
                                        <li key={item.id}
                                            onClick={() => {this.categoryChange(item.name)}}
                                            className="current-menu-item">
                                            <Link to={`/category/${item.name}`}>{item.name}</Link>
                                        </li>)
                                }
                            </Slider>
                        </ul>
                        <span />
                    </div>
                </div>
            </nav>

        );
    }
}

const mapStateToProps = ({categoryReducer}) => {
    return {
        categoryReducer
    }
};

const mapDispatchToProps = {
    fetchCategoryFilter,
    clearCategoryFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(SecondHeader);



