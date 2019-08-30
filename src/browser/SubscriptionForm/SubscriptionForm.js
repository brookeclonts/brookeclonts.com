import React, { PropTypes, Component } from 'react';
import { css } from 'emotion';
import { colors } from '../constants/colors.js';
import validator from 'validator';

class SubscriptionForm extends Component {

    // static propTypes = {
    //     openMessage: PropTypes.function.isRequired,
    // };

    constructor(props) {
        super(props);
        this.state={
            name: '', 
            email: ''
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    removeSpecialCharac(value) {
        return value ? value.replace(/[^a-zA-Z ]/g, '') : '';
    }

    handleNameChange(event) {
        this.setState({name: this.removeSpecialCharac(event.target.value)});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        if (!validator.isEmail(this.state.email)) {
            this.props.openMessage(`Error! Your email is not valid.`); 
            return;
        }
        
        if (
            !validator.isEmpty(this.state.name) && 
            validator.isAlpha(this.state.name)
        ) {
            this.props.openMessage(`Error! Your full name is not valid.`); 
            return;
        }
        const name = this.state.name.split(' ');
        const body = {
            fName: name[0],
            lName: name[1], 
            email: this.state.email
        };
        fetch('/api/external/mailchimp', {
                method: 'POST',
                headers : new Headers({
                    'Content-Type': 'application/json'
                  }),
                body: JSON.stringify(body)
            })
            .then((res) => res.json())
            .then((data) =>  {
                if (
                    data.statusCode === 200
                ) {
                    this.setState({name: '', email: ''});
                    this.props.openMessage('Thank You! Your information has been successfully added to my email list.')
                    if (this.props.attachmentUrl) {
                        // window.open(this.props.attachmentUrl);
                    }
                } else {
                    this.props.openMessage(`Error! ${data.body.detail ? data.body.detail : data.body.errors ? data.body.errors[0].message : ''}`); 
                }
            })
            .catch((err)=> {
                this.props.openMessage(`Error! Something went wrong. Please try again.`);
            })
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
                        type="text" 
                        name="name" 
                        placeholder="full name"
                        value={this.state.name} 
                        onChange={this.handleNameChange} 
                    />
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
                        value="Subscribe" 
                    />
                </form>
            </div>
        );
    }
}

export default SubscriptionForm;
