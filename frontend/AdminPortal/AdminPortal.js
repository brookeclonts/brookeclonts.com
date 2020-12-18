import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/core';
import { colors } from '../constants/colors.js';
import { breakpoints } from '../constants/breakpoints.js';
import { GetEditOptions, GetOptionInfo } from '../utilities/api.js';

class AdminPortal extends Component {

    constructor(props) {
        super(props);

        this.state={
            edit: false,
            formType: '', 
            editOptions: {},
        };
    }

    goBack = () => {
        this.setState({
            formType: '',
            edit: false
        });
    }

    handleProjectEdit = () => {
        GetEditOptions('/api/projects/admin').then((data) =>  {
            if (
                data && data.length
            ) {
                this.setState({
                    'editOptions': data,
                    'edit': true,
                    'formType': 'projects',
                })
            } else {
                this.props.openMessage(`Error!`); 
            }
        });
    }

    handleBlogEdit = () => {
        GetEditOptions('/api/blogposts/admin').then((data) =>  {
            if (
                data && data.length
            ) {
                this.setState({
                    'editOptions': data,
                    'edit': true, 
                    'formType': 'blog',
                });
            } else {
                this.props.openMessage(`Error!`); 
            }
        });
    }

    handleBookEdit = () => {
        GetEditOptions('/api/books/admin').then((data) => {
            if (
                data && data.length
            ) {
                this.setState({
                    'edit': true,
                    'editOptions': data,
                    'formType': 'books',
                })
            } else {
                this.props.openMessage(`Error!`); 
            }
        });
    }

    render() {
        const { edit, editOptions } = this.state;
        return (
            <div>
                {
                    !edit ? 
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
                                        <Link to="/admin-portal/blog/upload">
                                            Upload 
                                        </Link>
                                    </li>
                                    <li>
                                    <a onClick={() => this.handleBlogEdit()}>
                                            Edit 
                                        </a>
                                    </li>
                                </ul>
                                <h2>Projects</h2>
                                <ul className="admin-projects">
                                    <li>
                                        <Link to="/admin-portal/projects/upload">
                                            Upload 
                                        </Link>
                                    </li>
                                    <li>
                                        <a onClick={() => this.handleProjectEdit()}>
                                            Edit 
                                        </a>
                                    </li>
                                </ul>
                                <h2>Books</h2>
                                <ul className="admin-books">
                                    <li>
                                        <Link to="/admin-portal/books/upload">
                                            Upload 
                                        </Link>
                                    </li>
                                    <li>
                                        <a onClick={() => this.handleBookEdit()}>
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
                                        editOptions && editOptions.length ? (
                                            <ul className={css`padding: 0;`}>
                                                {
                                                    editOptions.map((option) => (
                                                        <li 
                                                            className={css`
                                                                text-decoration: none;
                                                                text-align: left;
                                                                list-style-type: none;
                                                            `}
                                                            key={option._id} 
                                                        >
                                                            <Link 
                                                                className={css`
                                                                    color: white;
                                                                    text-decoration: none;
                                                                    
                                                                    &:hover {
                                                                        cursor: pointer;
                                                                    }
                                                                `}
                                                                to={`/admin-portal/${this.state.formType}/edit/${option._id}`} 
                                                            >
                                                                {option.title}
                                                            </Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        ) : null
                                    }
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
