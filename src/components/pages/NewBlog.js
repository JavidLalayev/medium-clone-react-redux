import React, {Component} from 'react';
import axios from 'axios'
import {Link} from "react-router-dom";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import 'semantic-ui-css/semantic.min.css'
import {Button, Form, Select} from 'semantic-ui-react'
import { Message } from 'semantic-ui-react'
import { Redirect } from "react-router-dom";


class NewBlog extends Component {

    state = {
        categories: [
            {
                key: "",
                text: "",
                value: ""
            }
        ],
        categoryFetching: true,
        blog:{
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
        errors: {},
        axiosError: false,
        isNewMovie: false,
        url: ""
    };

    componentDidMount() {
        this.getCategory()
    }

    getCategory(){
        axios.get(`https://pacific-falls-87694.herokuapp.com/categories`)
            .then(result => result.data)
            .then(result => {

                let categoryArray = [];

                result.forEach(category => {
                    categoryArray.push({
                        key: category.id,
                        text: category.name,
                        value: category.name
                    })
                });

                this.setState({
                    categories: categoryArray,
                    categoryFetching: false
                });
            });

    }

    handleChange = (e) => {

        if (typeof e.target.name === "undefined"){
            console.log(e.target.textContent);

            this.setState({
                blog:{
                    ...this.state.blog,
                    category: e.target.textContent
                },
                errors: {
                    ...this.state.errors,
                    category: ""
                }
            });
        }else{
            this.setState({
                blog:{
                    ...this.state.blog,
                    [e.target.name]: e.target.value
                },
                errors: {
                    ...this.state.errors,
                    [e.target.name]: ""
                }
            });
        }

    };

    submit(){

        const errors = this.validate();
        this.setState({
            ...this.state.errors,
            errors: errors,
        }, () => {


            if (Object.keys(errors).length === 0){

                this.setState({
                    categoryFetching: true,
                });

                var today = new Date();
                var dd = String(today.getDate()).padStart(2, '0');
                var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                var yyyy = today.getFullYear();
                today = mm + '/' + dd + '/' + yyyy;
                this.setState({
                    blog: {
                        ...this.state.blog,
                        writingDate: today,
                        likes: 0
                    }
                }, () => {

                    axios.post("https://pacific-falls-87694.herokuapp.com/blogs", {
                        ...this.state.blog
                    }).then(result => {

                        this.setState({
                            categoryFetching: false,
                            isNewMovie: true,
                            url: `/single/${result.data.id}`
                        });

                    }).catch(error => this.setState({
                        axiosError: error,
                        categoryFetching: false,
                    }))

                });

            }

        });






    }

    validate = () => {
      const errors = {};
      if (!this.state.blog.writerName) errors.writerName = "Can't be blank";
      if (!this.state.blog.description) errors.description = "Can't be blank";
      if (!this.state.blog.content) errors.content = "Can't be blank";
      if (!this.state.blog.title) errors.title = "Can't be blank";
      if (!this.state.blog.category) errors.category = "Can't be blank";
      if (!this.state.blog.pictureUrl) errors.pictureUrl = "Can't be blank";
      if (!this.state.blog.writerPicture) errors.writerPicture = "Can't be blank";

      return errors
    };

    addDefaultSrc(e){
        e.target.src = 'https://argauto.lv/application/modules/themes/views/default/assets/images/image-placeholder.png';
    }


    render() {
        return (
            <main id="content">

                {
                    this.state.isNewMovie ? <Redirect to={this.state.url} /> : ""
                }

                <div className="container">

                    <article className="mb-5">
                        <div className="row">
                            <div className="col-md-12">
                                <h4 className="spanborder">
                                    <span>Write New Blog</span>
                                </h4>

                                <div className="form-contact">

                                    {
                                        !this.state.axiosError ?
                                            <Form loading={this.state.categoryFetching}>

                                                {
                                                    (!!this.state.errors.writerName) ?
                                                        <small style={{color: "red"}}>{this.state.errors.writerName}</small> : ""
                                                }
                                                <Form.Field error={(!!this.state.errors.writerName)}>
                                                    <input name={"writerName"}
                                                           onChange={this.handleChange}
                                                           value={this.state.blog.writerName}
                                                           placeholder='First Name and Last Name' />
                                                </Form.Field>
                                                <br/>


                                                {
                                                    (!!this.state.errors.writerPicture) ?
                                                        <small style={{color: "red"}}>{this.state.errors.writerPicture}</small> : ""
                                                }
                                                <Form.Field error={(!!this.state.errors.writerPicture)}>
                                                    <input name={"writerPicture"}
                                                           value={this.state.blog.writerPicture}
                                                           onChange={this.handleChange}
                                                           placeholder='Your Picture Url' />
                                                </Form.Field>

                                                {
                                                    !!this.state.blog.writerPicture ?
                                                        <img onError={this.addDefaultSrc.bind(this)}
                                                             style={{objectFit: "cover", marginBottom:"15px", marginLeft: "auto", marginRight: "auto", display: "block"}}
                                                             width="200"
                                                             height="200"
                                                             src={this.state.blog.writerPicture} alt=""/>
                                                             : ""
                                                }

                                                <br/>


                                                {
                                                    (!!this.state.errors.category) ?
                                                        <small style={{color: "red"}}>{this.state.errors.category}</small> : ""
                                                }
                                                <Form.Select
                                                    error={(!!this.state.errors.category)}
                                                    fluid
                                                    id="category"
                                                    options={this.state.categories}
                                                    placeholder='Category'
                                                    onChange={this.handleChange}
                                                />
                                                <br/>

                                                {
                                                    (!!this.state.errors.title) ?
                                                        <small style={{color: "red"}}>{this.state.errors.title}</small> : ""
                                                }
                                                <Form.Field error={(!!this.state.errors.title)}>
                                                    <input placeholder='Blog Title'
                                                           value={this.state.blog.title}
                                                           name={"title"}
                                                           onChange={this.handleChange}/>
                                                </Form.Field>
                                                <br/>


                                                {
                                                    (!!this.state.errors.description) ?
                                                        <small style={{color: "red"}}>{this.state.errors.description}</small> : ""
                                                }
                                                <Form.Field error={(!!this.state.errors.description)}>
                                                    <input placeholder='Blog Description'
                                                           name={"description"}
                                                           onChange={this.handleChange}/>
                                                </Form.Field>
                                                <br/>


                                                {
                                                    (!!this.state.errors.pictureUrl) ?
                                                        <small style={{color: "red"}}>{this.state.errors.pictureUrl}</small> : ""
                                                }
                                                <Form.Field error={(!!this.state.errors.pictureUrl)}>
                                                    <input placeholder='Blog Picture'
                                                           name={"pictureUrl"}
                                                           onChange={this.handleChange}/>
                                                </Form.Field>
                                                <br/>
                                                {
                                                    !!this.state.blog.pictureUrl ?
                                                        <img onError={this.addDefaultSrc.bind(this)}
                                                             style={{objectFit: "cover", marginBottom:"15px", marginLeft: "auto", marginRight: "auto", display: "block"}}
                                                             width="200"
                                                             height="200"
                                                             src={this.state.blog.pictureUrl} alt=""/>
                                                        : ""
                                                }


                                                <CKEditor
                                                    editor={ ClassicEditor }
                                                    data="<p>Write your blog content here</p>"
                                                    onInit={ editor => {
                                                        this.setState({
                                                            blog:{
                                                                ...this.state.blog,
                                                                content : editor.getData()
                                                            }
                                                        });
                                                    } }
                                                    onChange={ ( event, editor ) => {
                                                        this.setState({
                                                            blog:{
                                                                ...this.state.blog,
                                                                content : editor.getData()
                                                            }
                                                        });
                                                    } }/>

                                            </Form> :
                                            <Message negative>
                                                <Message.Header>Sorry, something went wrong</Message.Header>
                                            </Message>
                                    }

                                    <p><input type="submit" defaultValue="send message" onClick={this.submit.bind(this)}/></p>
                                </div>
                            </div>
                        </div>
                    </article>

                </div>
            </main>

        );
    }
}

export default NewBlog;
