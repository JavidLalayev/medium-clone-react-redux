import React, {Component} from 'react';
import axios from 'axios'
import ScaleLoader from "react-spinners/ScaleLoader";
import {Link} from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'


class SingleBlog extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();

    }

    state = {
        fetching: false,
        fetched: false,
        error: false,
        blog:{
            id: '',
            likes: "",
            category: "",
            title:"",
            writerName:"",
            writingDate:"",
            writerPicture:"",
            pictureUrl:"",
            description:"",
            content:""
        },
        relatedPosts: [],
        facebookShare: `https://www.facebook.com/sharer/sharer.php?u=${document.location.href}`,
        twitterShare: `https://twitter.com/intent/tweet?url=${document.location.href}`,
        pinterestShare: `http://pinterest.com/pin/create/button/?url=${document.location.href}`,
        isClicked: false
    };


    componentDidMount() {
        this.getSingle();

    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            this.getSingle();
        }
    }

    getSingle(){

        this.setState({
            fetching: true
        });

        axios.get(`https://pacific-falls-87694.herokuapp.com/blogs/${this.props.match.params.id}`)
            .then(result => result.data)
            .then(result => {
                this.setState({
                    blog: {...result},
                    fetching: false,
                    fetched: true,
                });

                const node = this.myRef.current;
                if (!localStorage.getItem(`${this.state.blog.id}`)){

                    this.setState({
                        isClicked: false,
                    });
                    node.style.color = "#000000d6";

                }else{
                    this.setState({
                        isClicked: true,
                    });
                    node.style.color = "#03a87c";
                }


                this.getRelated(result.category);

            })
            .catch(error => this.setState({
                error: true,
                fetched: false,
                fetching: false
            }));
    }

    getRelated(categoryName){
        axios.get(`https://pacific-falls-87694.herokuapp.com/blogs?category=${categoryName}&_limit=3&_sort=likes&_order=desc&id_ne=${this.state.blog.id}`)
            .then(result => result.data)
            .then(result => this.setState({
                relatedPosts: result,
            }))

    }

    addLikeList =  (e) => {

        let target = e.target;

        if(!this.state.isClicked){
            axios.put(`https://pacific-falls-87694.herokuapp.com/blogs/${this.state.blog.id}`, {...this.state.blog, likes: this.state.blog.likes+1})
                .then(result => result.data)
                .then(result => {
                    this.setState({
                        blog: result,
                        isClicked: true
                    });
                    target.style.color = "#03a87c";

                    localStorage.setItem(`${this.state.blog.id}`, true);

                })
        }else{
            axios.put(`https://pacific-falls-87694.herokuapp.com/blogs/${this.state.blog.id}`, {...this.state.blog, likes: this.state.blog.likes-1})
                .then(result => result.data)
                .then(result => {
                    this.setState({
                        blog: result,
                        isClicked: false
                    });
                    target.style.color = "#000000d6";

                    localStorage.removeItem(`${this.state.blog.id}`);
                })
        }
    };

    createMarkup(){
        return {__html: this.state.blog.content};
    }

    addDefaultSrc(e){
        e.target.src = 'https://argauto.lv/application/modules/themes/views/default/assets/images/image-placeholder.png';
    }

    render() {
        return (

            <main id="content">

                {
                    this.state.fetching
                        ?
                            <div style={{textAlign: "center", margin: "0 auto"}}>
                                <Loader
                                    type="TailSpin"
                                    color="#03a87c"
                                    height={100}
                                    width={100}
                                    timeout={3000} //3 secs

                                />
                            </div>
                        :

                            !this.state.error
                                ?
                                    <div className="container">

                                        <div className="entry-header">

                                            <div className="mb-5">

                                                <h1 className="entry-title m_b_2rem">
                                                    {
                                                        this.state.blog.title
                                                    }
                                                </h1>

                                                <div className="entry-meta align-items-center">



                                                    <a className="author-avatar" href="#"><img onError={this.addDefaultSrc.bind(this)} style={{objectFit:"cover"}} src={this.state.blog.writerPicture} alt="" /></a>
                                                    <a >
                                                        {
                                                            this.state.blog.writerName
                                                        }
                                                    </a>
                                                    <br/>
                                                    <Link to={`/category/${this.state.blog.category}`}>
                                                        {
                                                            this.state.blog.category
                                                        }
                                                    </Link>
                                                    <br />
                                                    <span>
                                                        {
                                                            this.state.blog.writingDate
                                                        }
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <figure className="image zoom mb-5">
                                            <img onError={this.addDefaultSrc.bind(this)} style={{width: "100%",maxHeight: "600px",objectFit: "cover"}} src={this.state.blog.pictureUrl} alt="post-title" />
                                        </figure>



                                        {/*entry-content*/}
                                        <article className="entry-wraper mb-5" style={{minHeight: "400px"}}>

                                            <div className="entry-left-col">
                                                <div className="social-sticky">
                                                    <a onClick={this.addLikeList}
                                                       ref={this.myRef}
                                                       className={"social-sticky-heart"}>
                                                        <i className="icon-heart">
                                                            { this.state.blog.likes }
                                                        </i>
                                                    </a>

                                                    <a href={this.state.facebookShare} target="_blank" rel="noopener noreferrer nofollow">
                                                        <i className="icon-facebook"></i>
                                                    </a>

                                                    <a href={this.state.twitterShare} target="_blank" rel="noopener noreferrer nofollow">
                                                        <i className="icon-twitter"></i>
                                                    </a>

                                                    <a href={this.state.pinterestShare} target="_blank" rel="noopener noreferrer nofollow">
                                                        <i className="icon-pinterest"></i>
                                                    </a>

                                                </div>
                                            </div>

                                            <div dangerouslySetInnerHTML={this.createMarkup()}>

                                            </div>

                                        </article>
                                        {/*entry-content*/}


                                        {/*Begin post related*/}
                                        <div className="related-posts mb-5">
                                            <h4 className="spanborder text-center">
                                                <span>Related Posts</span>
                                            </h4>

                                            <div className="row justify-content-between">
                                                <div className="divider-2" />

                                                {
                                                    this.state.relatedPosts.map(blog =>
                                                        <article className="col-md-4" key={blog.id}>
                                                            <div className="mb-3 d-flex row">
                                                                <figure className="col-md-5">
                                                                    <Link to={`/single/${blog.id}`}><img style={{height: "123px", objectFit: "cover"}} onError={this.addDefaultSrc.bind(this)} src={blog.pictureUrl} alt="post-title" />
                                                                    </Link>
                                                                </figure>
                                                                <div className="entry-content col-md-7 pl-md-0">
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
                                                                        </a><br />
                                                                        <span>
                                                                             {
                                                                                 blog.writingDate
                                                                             }
                                                                        </span>
                                                                        <span className="middotDivider" />
                                                                        <span className="svgIcon svgIcon--star">
                                                                        <svg className="svgIcon-use" width={15} height={15}>
                                                                          <path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z" />
                                                                        </svg>
                                                                      </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </article>)
                                                }



                                            </div>
                                        </div>
                                        {/*End post related*/}


                                    </div>
                                : ""
                }

                {
                    this.state.error?
                        <div style={{textAlign: "center", margin: "0 auto"}}>
                            Page Not Found
                        </div>
                        : ""
                }


            </main>

        );
    }
}

export default SingleBlog;
