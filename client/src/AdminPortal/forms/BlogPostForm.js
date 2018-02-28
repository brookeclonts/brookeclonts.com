import React from 'react';
import { css } from 'emotion';
import { colors } from '../../constants/colors.js';
import { breakpoints } from '../../constants/breakpoints.js';

export const BlogPostForm = ({ onSubmit, editableObj }) => (
    <form 
        className={css`
            margin-right: 0;
            max-width: 400px;
        `}
        onSubmit={onSubmit}
    >
        <input 
            className={css`
                ${inputStyles}
            `}
            type="text" 
            name="title" 
            placeholder="title"
            value={values.title} 
            onChange={(event) => {values.title = event.target.value}} 
        />
        <input 
            className={css`
                ${inputStyles}
            `}
            type="text" 
            name="description" 
            placeholder="description"
            value={values.description} 
            onChange={(event) => {values.description = event.target.value}} 
        />
        <input 
            className={css`
                ${inputStyles}
            `}
            type="textarea" 
            name="body" 
            placeholder="body"
            value={values.body} 
            onChange={(event) => {values.body = event.target.value}} 
        />
        <input 
            type="file" 
            name="imageUrl" 
            value={values.imageUrl} 
            onChange={(event) => {values.body = event.target.value}} 
        />
        <input 
            className={css`
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
            `}
            type="submit" 
            value="submit" 
        />
    </form>
                
);

const values = {
    title: '',
    description: '',
    body: '',
    imageUrl: ''
};

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