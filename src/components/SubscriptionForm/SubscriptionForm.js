import React, { PropTypes, Component } from 'react';
import { css } from 'emotion';

class SubscriptionForm extends Component {
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
        this.setState({name: removeSpecialCharac(event.target.value)});
    }

    handleEmailChange(event) {
        this.setState({email: removeSpecialCharac(event.target.value)});
    }

    handleSubmit(event) {
        alert('submitted');
        event.preventDefault();
        // test on the backend
        const name = this.state.name.split(' ');
        fetch('/api/mailchimp', {
                method: 'POST',
                headers : new Headers(),
                body:`fName=${name[0]}&lName=${name[1]}&email=${this.state.email}`
            })
            // .then((res) => res.json())
            .then((data) =>  {
                console.log(data)
                this.setState({name: '', email: ''});
            })
            .catch((err)=>console.log(err))
    }

    render() {
        // const emailPattern = [a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9]);
        // const namePattern = [a-zA-Z ]*;
        const { colors } = this.props;

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
                        value={this.state.name} 
                        onChange={this.handleNameChange} 
                    />
                    <input 
                        className={css`
                            ${inputStyles}
                        `}
                        type="email" 
                        name="email" 
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
