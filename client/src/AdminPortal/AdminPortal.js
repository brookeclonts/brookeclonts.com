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
            showProjectForm: false, 
            showBlogForm: false, 
            showBookForm: false,
            editOptions: {},
            objectToBeEdited: {} 
        };
    }

    handleSubmit(method, body) {
        const { token } = this.props;
        // method 'POST'

        fetch('/api/users', {
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

    goBack() {
        this.setState({
            showProjectForm: false, 
            showBlogForm: false, 
            showBookForm: false, 
        });
    }

    handleShowProjectForm(show, action) {
        this.setState({'showProjectForm': show});
    }

    handleShowBlogForm(show, action) {
        this.setState({'showBlogForm': show});
    }

    handleShowBookForm(show, action) {
        this.setState({'showBookForm': show});
    }

    render() {
        let edit = false;

        const handleEdit = (val, type) => {
            edit = val;
            // run function to grab potential objects to be edited. Then assign to state
        }

        return (
            <div>
                {
                    !this.state.showBlogForm &&
                    !this.state.showBookForm &&
                    !this.state.showProjectForm ? 
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
                                        <a onClick={() => {this.setState({showBlogForm: true})}}>
                                            Upload 
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => handleEdit(true, 'posts')}>
                                            Edit 
                                        </a>
                                    </li>
                                </ul>
                                <h2>Projects</h2>
                                <ul className="admin-projects">
                                    <li>
                                        <a onClick={() => {this.setState({showProjectForm: true})}}>
                                            Upload 
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => handleEdit(true, 'projects')}>
                                            Edit 
                                        </a>
                                    </li>
                                </ul>
                                <h2>Books</h2>
                                <ul className="admin-books">
                                    <li>
                                        <a onClick={() => {this.setState({showBookForm: true})}}>
                                            Upload 
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => handleEdit(true, 'books')}>
                                            Edit 
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ) : ''
                }
                <div>
                    {
                        this.state.editOptions && this.state.editOptions.length ? (
                            <div>   
                                List items here to choose from. Then on select pass grab object and pass it into this.state.objectToBeEdited
                            </div>
                        ) : ''
                    }
                    {
                        this.state.showBlogForm ? (<BlogPostForm onSubmit={() => {}} editableObj={edit ? {} : this.state.objectToBeEdited}/>) : ''
                    }
                    {
                        this.state.showProjectForm ? (<ProjectForm onSubmit={() => {}} editableObj={edit ? {} : this.state.objectToBeEdited}/>) : ''
                    }
                    {
                        this.state.showBookForm ? (<BookForm onSubmit={() => {}} editableObj={edit ? {} : this.state.objectToBeEdited}/>) : ''
                    }
                    {
                        this.state.showBookForm ||
                        this.state.showProjectForm ||
                        this.state.showBlogForm ?
                        (
                            <a 
                                className={css`
                                    &:hover {
                                        pointer: cursor;
                                    }
                                `}
                                onClick={() => {this.goBack()}}>Go Back</a>
                        ) : ''
                    }
                </div>
            </div>
        );
    }
}

export default AdminPortal;
