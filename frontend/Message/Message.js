import React, { PropTypes, Component } from 'react';
import { css } from '@emotion/core';
import { colors } from '../constants/colors.js';
import { breakpoints } from '../constants/breakpoints.js';

class Message extends Component {

    state = {
        open: false
    }

    // static propTypes = {
    //     message: PropTypes.string.isRequired,
    //     onClose: PropTypes.function.isRequired,
    // };

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.message !== this.props.message) {
            this.setState({open: true});
        }
    }

    componentDidMount() {
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                this.setState({ open: true });
            });
        });
        
        setTimeout(() => { 
            this.props.onClose();
        }, 3000);
    }

    componentWillUnmount() {
        this.setState({open: false});   
    }

    render() {
        const close = () => {
            this.props.onClose();
        }

        return (
            <div className={css`
                background-color: ${colors.white};
                border: solid 1px ${colors.blueGray};
                position: fixed;
                padding: 20px;
                max-width: 300px;
                top: 50px;
                left: 10px;
                right: 10px;
                z-index: 1;
        
                @media screen and (min-width: ${breakpoints.tab}) {
                    max-width: 500px;
                    width: 500px;
                    margin-left: -250px;
                    max-width: auto;
                    left: 50%;
                    right: auto;
                    top: 25%;
                }
            `}>
                <div 
                    className={css`
                        height: 20px;
                        width: 100%;
                
                        &:hover {
                            cursor: pointer;
                        }
                
                        &:before, &:after {
                            background-color: ${colors.green};
                            border-radius: 13px;
                            content: '';
                            height: 1px;
                            position: absolute;
                            right: 20px;
                            top: 30px;
                            transition: transform 0.5s ease-in-out;
                            width: 25px;
                
                            &:hover {
                                cursor: pointer;
                            }
                        }

                        &:before {
                            transform: ${this.state.open ? 'rotate(40deg)' : 'rotate(0deg)'};
                        }

                        &:after {
                            transform: ${this.state.open ? 'rotate(-40deg)' : 'rotate(0deg)'};
                        }
                    `}
                    onClick={close}
                >
                </div>
                <p>
                    {this.props.message}
                </p>
            </div>
        );
    }
}

export default Message;