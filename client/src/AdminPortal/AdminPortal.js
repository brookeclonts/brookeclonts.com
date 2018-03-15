import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import { css } from 'emotion';
import { colors } from '../constants/colors.js';
import { breakpoints } from '../constants/breakpoints.js';

import { BlogPostForm } from './forms/BlogPostForm';
import { ProjectForm } from './forms/ProjectForm';
import { BookForm } from './forms/BookForm';

class AdminPortal extends Component {

    constructor(props) {
        super(props);

        this.state={
            edit: '',
            formType: '', 
            editOptions: {},
            objectToBeEdited: {},
            editableItemID: null,
        };
    }

    handleSubmit(url, method, body) {
        const { token } = this.props;

        fetch(url, {
            method: method,
            headers : new Headers({
                'Content-Type': 'application/json'
              }),
            body: JSON.stringify(body)
        })
        .then((res) => res.json())
        .then((data) =>  {
            if (
                data.success
            ) {
                this.goBack();
            } else {
                this.props.openMessage(`Error! ${data.message ? data.message : ''}`); 
            }
        });
    }

    handleEditOptionSelection(id) {
        fetch(`/api/${this.state.formType}/${id}`, {
            method: 'GET',
            headers : new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then((res) => res.json())
        .then((data) =>  {
            this.setState(
                {
                    'editableItemID': id,
                    objectToBeEdited: data
                }
            );
        });
    }

    handleEdit() {
        this.handleSubmit(`/api/${this.state.formType}/${this.state.editableItemID}`, this.state.edit ? 'PATCH' : 'POST', this.state.objectToBeEdited);
    }

    getEditOptions(url) {
        fetch(url, {
            method: 'GET',
            headers : new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then((res) => res.json())
        .then((data) =>  {
            if (
                data && data.length
            ) {
                this.setState({'editOptions': data})
            } else {
                this.props.openMessage(`Error! ${data.message ? data.message : ''}`); 
            }
        });
    }

    goBack() {
        this.setState({
            formType: '',
            edit: ''
        });
    }

    handleProjectUpload(action) {
        this.setState({
            'edit': action,
            'formType': 'projects'
        });

        if (action === 'edit') {
            this.getEditOptions('/api/projects/admin');
        }
    }

    handleBlogUpload(action) {
        this.setState({
            'edit': action,
            'formType': 'blogposts'
        });

        if (action === 'edit') {
            this.getEditOptions('/api/blogposts/admin');
        }
    }

    handleBookUpload(action) {
        this.setState({
            'edit': action,
            'formType': 'books'
        });

        if (action === 'edit') {
            this.getEditOptions('/api/books/admin');
        }
    }

    render() {
        const { edit, editOptions, editableItemID } = this.state;

        return (
            <div>
                {
                    edit === '' ? 
                    (
                        <div
                            className={css`
                                background-color: ${colors.white};
                                display: block;
                                padding: 50px 0px 50px;
                                text-align: center;
                                height: 100%;
                            
                                @media screen and (min-width: ${breakpoints.tab}) {
                                    padding: 0px 0px 100px;
                                }

                                & h1 {
                                    font-size: 20px;
                                    padding-bottom: 20px;
                                    letter-spacing: 2px;
                                    padding-top: 50px;
                                    margin: 0;
                                    font-family: 'Medula One', 'Times New Roman', serif;
                                    color: ${colors.medGray};
                            
                                    @media screen and (min-width: ${breakpoints.tab}) {
                                        font-size: 38px;
                                        padding-top: 160px;
                                    }
                                }

                                & p, & a {
                                    font-family: 'Open Sans', Helvetica, arial, sans-serif;
                                }
                            
                                & p, h2 {
                                    font-size: 14px;
                                    line-height: 1.5;
                                    margin: 0;
                                    margin-bottom: 10px;
                                    text-align: left;
                                }

                                & a {
                                    color: ${colors.darkPink};
                                    text-decoration: none;
                        
                                    &:hover {
                                        cursor: pointer;
                                        color: ${colors.green};
                                    }
                                }
                            
                                & ul {
                                    margin-bottom: 50px;
                            
                                    & li {
                                        text-align: left;
                                        text-decoration: none;
                                        list-style-type: none;
                                    }
                                }
                            `}
                        >
                            <h1>Admin Portal</h1>
                            <div 
                                className={css`
                                    padding: 0 50px;
                                `}
                            >
                                <h2>Blog Posts</h2>
                                <ul className="admin-blog-posts">
                                    <li>
                                        <a onClick={() => this.handleBlogUpload('upload')}>
                                            Upload 
                                        </a>
                                    </li>
                                    <li>
                                    <a onClick={() => this.handleBlogUpload('edit')}>
                                            Edit 
                                        </a>
                                    </li>
                                </ul>
                                <h2>Projects</h2>
                                <ul className="admin-projects">
                                    <li>
                                        <a onClick={() => this.handleProjectUpload('upload')}>
                                            Upload 
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => this.handleProjectUpload('edit')}>
                                            Edit 
                                        </a>
                                    </li>
                                </ul>
                                <h2>Books</h2>
                                <ul className="admin-books">
                                    <li>
                                        <a onClick={() => this.handleBookUpload('upload')}>
                                            Upload 
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => this.handleBookUpload('edit')}>
                                            Edit 
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ) :  (
                    <div>
                        <div
                            className={css`
                                height: 100vh;
                                width: 100vw;
                                text-align: center;
                            `}
                        >
                            <div
                                className={css`
                                    margin-top: 100px;
                                `}
                            >
                                <h1
                                    className={css`
                                        font-family: Medula One,Times New Roman,serif;
                                        color: ${colors.medGray};
                                        font-weight: 300;
                                    `}
                                >
                                { edit === 'edit' ? 'Edit Blog Post' : 'Upload Blog Post' }
                                </h1>
                                <div
                                    className={css`
                                        background-color: ${colors.blueGray}
                                        display: inline-block;
                                        margin: 0px auto 100px;
                                        padding: 50px;
                                        text-align: center;
    
                                        & form {
                                            margin: auto;
    
                                            & input {
                                                width: 100%;
                                                max-width: none;
    
                                                &:last-child {
                                                    margin-top: 20px;
                                                }
                                            }
                                        }
    
                                    `}
                                >
                                    {
                                        editOptions && editOptions.length && !editableItemID ? (
                                            <ul className={css`padding: 0;`}>
                                                {
                                                    editOptions.map((option) => (
                                                        <li
                                                            key={option._id}
                                                            className={css`
                                                                color: white;
                                                                text-decoration: none;
                                                                text-align: left;
                                                                list-style-type: none;

                                                                &:hover {
                                                                    cursor: pointer;
                                                                }
                                                            `}
                                                            onClick={() => {this.handleEditOptionSelection(option._id)}}
                                                        >
                                                            {option.title}
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        ) : (
                                            <div>
                                                {
                                                    this.state.formType === 'blogposts' ? (<BlogPostForm onSubmit={() => {}} editableObj={this.state.objectToBeEdited}/>) : ''
                                                }
                                                {
                                                    this.state.formType === 'projects' ? (<ProjectForm onSubmit={() => {}} editableObj={this.state.objectToBeEdited}/>) : ''
                                                }
                                                {
                                                    this.state.formType === 'books' ? (<BookForm onSubmit={() => {}} editableObj={this.state.objectToBeEdited}/>) : ''
                                                }
                                            </div>
                                        )
                                    }
                                    {
                                        edit !== '' ?
                                        (
                                            <div
                                                className={css`
                                                    padding-top: 50px;
                                                `}
                                            >
                                                <a 
                                                    className={css`
                                                        color: white;

                                                        &:hover {
                                                            color: white;
                                                            cursor: pointer;
                                                        }
                                                    `}
                                                    onClick={() => {this.goBack()}}
                                                >
                                                    &#8592; Go Back
                                                </a>
                                            </div>
                                        ) : ''
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                
            </div>
        );
    }
}

export default AdminPortal;
