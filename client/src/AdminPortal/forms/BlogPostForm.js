import React, { Component } from 'react';
import { css } from 'emotion';
import { colors } from '../../constants/colors.js';
import { breakpoints } from '../../constants/breakpoints.js';
import { PatchBlogPost, PatchBlogImg } from '../../utilities/api.js';

export class BlogPostForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            uploadImage : false,
            values : {
                title: this.props.editableObj ? this.props.editableObj.title : '',
                description: this.props.editableObj ? this.props.editableObj.description : '',
                body: this.props.editableObj ? this.props.editableObj.body : '',
                imageUrl: this.props.editableObj ? this.props.editableObj.imageUrl : '',
            }
        };
    }

    onChangeTitle = (event) => {
        const newValues = {
            values: {
                ...this.state.values,
                title: event.target.value
            }
        }
        this.setState(newValues);
    }

    onChangeDesc = (event) => {
        const newValues = {
            values: {
                ...this.state.values,
                description: event.target.value
            }
        }
        this.setState(newValues);
    }

    onChangeBody = (event) => {
        const newValues = {
            values: {
                ...this.state.values,
                body: event.target.value
            }
        }
        this.setState(newValues);
    }

    onChangeImgUrl = (event) => {
        const newValues = {
            values: {
                ...this.state.values,
                imageUrl: event.target.value
            }
        }
        this.setState(newValues);
    }

    onImageClick = () => {
        this.setState({uploadImage: true});
    }

    onSubmit = () => {
        if (this.props.editableObj && this.props.editableObj.title) {
            // let patchImage = await PatchBlogImg(this.props.editableObj.imageUrl, this.state.values.imageUrl)
            const patchResult = PatchBlogPost(this.props.editableObj._id, this.state.values);
            // if (patchResult) {
            //     this.setState(
            //         { values: {
            //             title: '',
            //             description: '',
            //             body: '',
            //             imageUrl: '',
            //         }
            //     });
            // }
        } else {
        //     // run post
        }
        // this.setState({uploadImage: false});
        // this.props.onSubmit();
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
                    name="title" 
                    placeholder="title"
                    value={this.state.values.title} 
                    onChange={this.onChangeTitle} 
                />
                <input 
                    className={css`
                        ${inputStyles}
                    `}
                    type="text" 
                    name="description" 
                    placeholder="description"
                    value={this.state.values.description} 
                    onChange={this.onChangeDesc} 
                />
                <textarea 
                    className={css`
                        ${inputStyles}
                    `}
                    name="body" 
                    placeholder="body"
                    value={this.state.values.body} 
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
                            src={this.props.editableObj.imageUrl} 
                        />
                    : <input 
                        type="file" 
                        name="imageUrl" 
                        value={this.state.values.imageUrl} 
                        onChange={this.onChangeImgUrl} 
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