import React, { PropTypes, Component } from 'react';
import { css } from '@emotion/core';
import SubscriptionForm from '../SubscriptionForm/SubscriptionForm';
import { colors } from '../constants/colors.js';

class SubscriptionPage extends Component {

    // static propTypes = {
    //     openMessage : PropTypes.function.isRequired,
    // };

    render() {

    return (
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
                    Submit your email to get updates!
                </h1>
                <div
                    className={css`
                        background-color: ${colors.blueGray};
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
                    <SubscriptionForm colors={this.props.colors} openMessage={this.props.openMessage} />
                </div>
            </div>
        </div>
    );
    }
}

export default SubscriptionPage;