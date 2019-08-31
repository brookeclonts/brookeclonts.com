import React, { Component } from 'react';
import { css } from 'emotion';
import { colors } from '../constants/colors.js';
import validator from 'validator';
import { RequestLogin } from './../utilities/api.js';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state={
            email: '', 
            password: '',
        };
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (!validator.isEmail(this.state.email)) {
            this.props.openMessage(`Error! Your email is not valid.`); 
            return;
        }
        
        const body = {
            email: this.state.email,
            password: this.state.password
        };

        RequestLogin().then((data) =>  {
            if (
                data.success
            ) {
                this.setState({name: '', password: ''});
                if (data.token) {
                    this.props.updateToken(data.token);
                    this.props.history.push('/admin-portal');
                } else {
                    this.props.openMessage(`Error! No token received.`); 
                }
            } else {
                this.props.openMessage(`Error! ${data.message ? data.message : ''}`); 
            }
        });
    }

    render() {
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

        const inputInvalidStyles = `
            margin-bottom: 5px;
            font-style: italic;
            color: ${colors.trueWhite};
        `;

        return (
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
                            Login Here!
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
                            <form 
                                className={css`
                                    margin-right: 0;
                                    max-width: 400px;
                                `}
                                onSubmit={this.handleSubmit}
                            >
                                <input 
                                    className={css`
                                        ${inputStyles}
                                    `}
                                    type="email" 
                                    name="email" 
                                    placeholder="email address"
                                    value={this.state.email} 
                                    onChange={this.handleEmailChange} 
                                />
                                <input 
                                    className={css`
                                        ${inputStyles}
                                    `}
                                    type="password" 
                                    name="password" 
                                    placeholder="password"
                                    value={this.state.password} 
                                    onChange={this.handlePasswordChange}
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
                                    value="login" 
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
