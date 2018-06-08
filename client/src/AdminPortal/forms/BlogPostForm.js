import React, { Component } from 'react';
import { css } from 'emotion';
import { colors } from '../../constants/colors.js';
import { breakpoints } from '../../constants/breakpoints.js';
import { PatchBlogPost, PatchBlogImg, PostBlogImg, PostBlogPost } from '../../utilities/api.js';

export class BlogPostForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            uploadImage : false,
            title: this.props.editableObj ? this.props.editableObj.title : '',
            description: this.props.editableObj ? this.props.editableObj.description : '',
            body: this.props.editableObj ? this.props.editableObj.body : '',
            imageUrl: this.props.editableObj ? this.props.editableObj.imageUrl : '',
        };
    }

    onChangeTitle = (event) => {
        this.setState({title: event.target.value});
    }

    onChangeDesc = (event) => {
        this.setState({description: event.target.value});
    }

    onChangeBody = (event) => {
        this.setState({body: event.target.value});
    }

    onChangeImgUrl = (files) => {
        this.setState({imageUrl: files[0]});
    }

    onImageClick = () => {
        this.setState({uploadImage: true});
    }

    onSubmit = async (event) => {
        event.preventDefault();
        if (this.props.editableObj && this.props.editableObj.title) {
            PatchBlogImg(this.props.editableObj.imageUrl, this.state.imageUrl).then((res) => {
                if (res.path) {
                    PatchBlogPost(this.props.editableObj._id, {
                        title: this.state.title,
                        description: this.state.description,
                        body: this.state.body,
                        imageUrl: res.path,
                    }).then(() => {
                        this.props.handleClose();
                    });
                }
            });
        } else {
            PostBlogImg(this.state.imageUrl).then((res) => {
                if (res.path) {
                    PostBlogPost({
                        title: this.state.title,
                        description: this.state.description,
                        body: this.state.body,
                        imageUrl: res.path,
                    }).then(() => {
                        this.props.handleClose();
                    });
                }
            });
        }
    }

    render() {
        const title = this.props.editableObj ? this.props.editableObj.title : '';
        return (
            <div 
                className={css`
                    margin-right: 0;
                    max-width: 400px;
                `}
            >
                <input 
                    className={css`
                        ${inputStyles}
                    `}
                    type="text" 
                    placeholder="title"
                    value={this.state.title} 
                    onChange={this.onChangeTitle} 
                />
                <input 
                    className={css`
                        ${inputStyles}
                    `}
                    type="text" 
                    placeholder="description"
                    value={this.state.description} 
                    onChange={this.onChangeDesc} 
                />
                <textarea 
                    className={css`
                        ${inputStyles}
                    `}
                    placeholder="body"
                    value={this.state.body} 
                    onChange={this.onChangeBody} 
                    width="100%"
                    rows="10"

                />
                {
                    this.props.editableObj && this.props.editableObj.imageUrl && !this.state.uploadImage ?
                        <img 
                            className={css`
                                ${imageStyles}
                            `}
                            onClick={this.onImageClick} 
                            src={`https://brookeclontsbooks.s3-us-west-1.amazonaws.com/blog/${this.props.editableObj.imageUrl}`} 
                        />
                    : <input 
                        type="file" 
                        name="imageUrl" 
                        onChange={ (e) => this.onChangeImgUrl(e.target.files) }
                    />
                }
                
                <button 
                    className={css`${buttonStyles}`}
                    onClick={this.onSubmit}
                >
                    Submit
                </button>
            </div>
        )
    }
}

const imageStyles = `
    width: 100%;

    &:hover {
        cursor: pointer;
    }
`;

const inputStyles = `
    border: solid 1px ${colors.trueWhite};
    border-radius: 0;
    box-sizing: border-box;
    outline: none;
    box-shadow: none;
    color: ${colors.trueWhite};
    background-color: transparent;
    width: 100%;
    padding: 10px;
    font-size: 16px;

    &:not(:last-child) {
        margin-bottom: 10px;
    }

    &:placeholder,
    &::-webkit-input-placeholder,
    &:-moz-placeholder {
        color: ${colors.trueWhite};
    }

    &:focus {
        outline: none;
    }
`;

const buttonStyles = `
    background-color: ${colors.pink};
    color: ${colors.blueGray};
    width: 100%;
    margin-top: 10px;
    padding: 10px 50px;
    border: none;
    font-size: 16px;
    box-sizing: border-box;
    text-align: center;
    text-transform: uppercase;
    max-width: 300px;
    margin: auto;

    &:hover {
        background-color: ${colors.trueWhite};
        color: ${colors.blueGray};
        cursor: pointer;
    }
`;