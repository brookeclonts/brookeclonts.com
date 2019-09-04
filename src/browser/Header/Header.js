import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { 
    Link
  } from 'react-router-dom';
import { css } from 'emotion';
import Twitter from '../Icons/Twitter';
import Facebook from '../Icons/Facebook';
import Instagram from '../Icons/Instagram';
import { colors } from '../constants/colors.js';
import { breakpoints } from '../constants/breakpoints.js';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fixed: false,
            mobileMenuOpen: false,
        };
    }

    render() {
        const toggleMenu = () => {
            this.setState({mobileMenuOpen: !this.state.mobileMenuOpen})
        }

        const menuIcon = `                
            background: ${colors.blueGray};
            display: block;
            margin: 3px;
            height: 3px;
            width: 30px;
            border-radius: 12px;
            opacity: 1;
            transform: rotate(0deg);
            transform-origin: left center;
            transition: .25s ease-in-out;

            &:nth-of-type(1) {
                transform: ${this.state.mobileMenuOpen ? 'rotate(39deg)' : 'rotate(0deg)'};
            }
            &:nth-of-type(2) {
                width: ${this.state.mobileMenuOpen ? '0%' : '30px'};
                opacity: ${this.state.mobileMenuOpen ? 0 : 1};
            }
            &:nth-of-type(3) {
                transform: ${this.state.mobileMenuOpen ? 'rotate(-39deg)' : 'rotate(0deg)'};
            }
        `;

        const link = `
            color: $blue-gray;
            font-size: 20px;
            padding: 5px 20px;
        `;

        const mobileLinks = `
            background-color: $pink;
            color: $blue-gray;
            display: block;
            text-align: center;
            font-size: 16px;
            padding-top: 20px;
            padding-bottom: 30px;
            position: absolute;
            width: 100%;
            transition: all 0.5s ease;
            top: ${this.state.mobileMenuOpen ? '48px' : '-280px'};
            z-index: ${this.state.mobileMenuOpen ? 1 : 0};
        `;

        const mobileLink = `
            ${link}
            color: ${colors.blueGray};
            font-family: 'Open Sans',Helvetica,arial,sans-serif;
            text-decoration: none;
        `;

        const mobileLinkDiv = `
            padding: 10px 0;
        `;

        const desktopLink = `
            font-family: 'Open Sans', Helvetica, arial, sans-serif;
            color: ${colors.blueGray};
            font-size: 20px;
            padding: 5px 20px;
            text-decoration: none;
            ${link}
        `;

        return (
            <div
                className={css`
                    top: 0;
                    left: 0;
                    right: 0;
                    vertical-align: middle;
                    width: 100%;
                    position: ${this.state.fixed ? 'fixed' : 'absolute'}
            `   }>
                <div>
                    <div
                        className={css`
                            background: rgba(254, 255, 255, 0.85);
                            display: flex;
                            padding: 10px 0;
                            position: absolute;
                            width: 100%;
                            z-index: 5;
                        `}
                    >
                        <div 
                            className={css`
                                float: left;
                                font-family: 'Open Sans', Helvetica, arial, sans-serif;
                            `}
                        >
                            <Link 
                                className={css`
                                    color: ${colors.blueGray};
                                    font-family: 'Medula One', 'Times New Roman', serif;
                                    font-size: 26px;
                                    letter-spacing: 2px;
                                    text-transform: uppercase;
                                    text-decoration: none;
                                    padding-left: 20px;

                                    @media (min-width: ${breakpoints.tab}) {
                                        font-size: 38px;
                                    }
                                `}  
                                to="/"
                            >
                                brookeclonts.com
                            </Link>
                        </div>

                        <div 
                            className={css`
                                display: inline-flex;
                                margin-left: auto;
                                vertical-align: middle;
                                padding-right: 10px;

                                @media (max-width: ${breakpoints.tab}) {
                                    display: none;
                                }
                            `}  
                        >
                            <Link 
                                className={css`
                                    ${desktopLink}
                                `}
                                to="/books"
                            >
                                Books
                            </Link>
                            <Link 
                                className={css`
                                    ${desktopLink}
                                `}
                                to="/blog"
                            >
                                Blog
                            </Link>
                            <Link 
                                className={css`
                                    ${desktopLink}
                                `}
                                to="/about"
                            >
                                About
                            </Link>
                            <Link 
                                className={css`
                                    ${desktopLink}

                                    @media (max-width: ${breakpoints.desktop}) {
                                        display: none;
                                    }
                                `}
                                to="/projects"
                            >
                                Other Projects
                            </Link>
                            <div className=
                                {css`
                                    & Twitter, & Facebook, $ Instagram {
                                        vertical-align: top;
                                    }

                                    & svg {
                                        margin: 5px;
                                        vertical-align: middle;
                                    }

                                    & path {
                                        fill: ${colors.blueGray};
    
                                        &:hover {
                                            fill: ${colors.green};
                                        } 
                                    }
                                `}>
                                <a
                                    href="https://twitter.com/brookeclonts" 
                                    target="_blank"
                                >
                                    <Twitter size={'30px'}/>
                                </a>
                                <a 
                                    href="https://www.facebook.com/brookeclonts" 
                                    target="_blank"
                                >
                                    <Facebook size={'30px'}/>
                                </a>
                                <a 
                                    href="https://www.instagram.com/brookeclontsbooks/" 
                                    target="_blank"
                                >
                                    <Instagram size={'30px'}/>
                                </a>
                            </div>
                        </div>

                        <div 
                            className={css`
                                height: 28px;
                                width: 28px;
                                display: flex;
                                flex-direction: column;
                                justify-content: center;
                                align-items: center;
                                margin-left: auto;
                                padding-right: 20px;

                                &:hover {
                                    cursor: pointer;
                                }

                                @media (min-width: ${breakpoints.tab}) {
                                    display: none;
                                }
                            `}
                            onClick={toggleMenu}
                        >
                            <span 
                                className={css`
                                    ${menuIcon}            
                                `}
                            ></span>
                            <span 
                                className={css`
                                    ${menuIcon}            
                                `}
                            ></span>
                            <span 
                                className={css`
                                    ${menuIcon}            
                                `}
                            ></span>
                        </div>
                    </div>

                    <div 
                        className={css`
                            background-color: ${colors.pink};
                            color: ${colors.blueGray};
                            display: block;
                            text-align: center;
                            font-size: 16px;
                            padding-top: 20px;
                            padding-bottom: 30px;
                            position: absolute;
                            z-index: ${this.state.mobileMenuOpen ? 1 : 0};
                            width: 100%;
                            transition: all 0.5s ease;
                            top: ${this.state.mobileMenuOpen ? '48px' : '-300px'};

                            @media (min-width: ${breakpoints.tab}) {
                                display: none;
                            }
                        `}
                    >
                        <div 
                            className={css`
                                & svg {
                                    margin: 5px;
                                }

                                & svg path {
                                    fill: ${colors.blueGray}

                                &:hover {
                                    fill: ${colors.green};
                                } 
                                }
                            `}
                        >
                            <a href="https://twitter.com/brookeclonts" target="_blank">
                                <Twitter size={'30px'}/>
                            </a>
                            <a href="https://www.facebook.com/brookeclonts" target="_blank">
                                <Facebook size={'30px'}/>
                            </a>
                            <a href="https://www.instagram.com/brookeclontsbooks/" target="_blank">
                                <Instagram size={'30px'}/>
                            </a>
                        </div>
                        <div 
                            className={css`
                                ${mobileLinkDiv}
                            `}
                        >
                            <Link 
                                className={css`
                                    ${mobileLink}
                                `} 
                                to="/books" 
                                onClick={() => {this.scrollToBooks(this)}}
                            >
                                Books
                            </Link>
                        </div>
                        <div 
                            className={css`
                                ${mobileLinkDiv}
                            `}
                        >
                            <Link  
                                className={css`
                                    ${mobileLink}
                                `}
                                to="/blog"
                            >
                                Blog
                            </Link>
                        </div>
                        <div 
                            className={css`
                                ${mobileLinkDiv}
                            `}
                        >
                            <Link
                                className={css`
                                    ${mobileLink}
                                `} 
                                to="/about"
                            >
                                About
                            </Link>
                        </div>
                        <div 
                            className={css`
                                ${mobileLinkDiv}
                            `}
                        >
                            <Link 
                                className={css`
                                    ${mobileLink}
                                `}
                                to="/projects"
                            >
                                Other Projects
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
