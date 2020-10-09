import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import { css } from 'emotion';
import SubscriptionForm from '../SubscriptionForm/SubscriptionForm';
import Twitter from '../Icons/Twitter';
import Facebook from '../Icons/Facebook';
import Instagram from '../Icons/Instagram';
import { colors } from '../constants/colors.js';
import { breakpoints } from '../constants/breakpoints.js';


class Footer extends Component {

    // static propTypes = {
    //     openMessage: PropTypes.function.isRequired,
    // };

    constructor(props) {
        super(props);
    }

    render() {
        const link = `
            color: ${colors.trueWhite};
            font-size: 16px;
            line-height: 1.5;
            font-family: 'Open Sans', Helvetica, arial, sans-serif;
            text-decoration: none;

            &:hover {
                color: ${colors.pink};
            }
        `;

        const links = `
            display: block;

            &:not(:last-child) {
                margin-bottom: 10px;
            }
        `;

        const headers = `
            font-family: 'Medula One', 'Times New Roman', serif;
            color: ${colors.trueWhite};
            display: block;
            font-size: 38px;
            margin-bottom: 20px;
            margin-top: 0;
        `;

        const footerBlocks = `
            padding-right: 20px;

            @media screen and (min-width: ${breakpoints.tab}) {
                display: inline-flex;
                flex-grow: 1;
            }

            &:not(:first-of-type) {
                margin-top: 30px;

                @media screen and (min-width: ${breakpoints.tab}) {
                    margin-left: 50px;
                    margin-top: 0;
                }
            }
        `;

        return (
            <div>
                <div 
                    className={css`
                        background-color: ${colors.blueGray};
                        color: ${colors.trueWhite};
                        padding: 50px 20px;
                        display: block;

                        @media screen and (min-width: ${breakpoints.tab}) {
                            display: flex;
                        }
                        
                        & p, & a {
                            font-family: 'Open Sans', Helvetica, arial, sans-serif;
                        }
                    `}
                >
                    <div 
                        className={css`
                            ${footerBlocks}
                        `}>
                        <div>
                            <h3
                                className={css`
                                    ${headers}
                                `}
                            >
                                Helpful Links
                            </h3>
                            <div 
                                className={css`
                                    ${links}
                                `}
                            >
                                <div>
                                    <Link 
                                        className={css`
                                            ${link}
                                        `} 
                                        to="/books" 
                                    >
                                        Books
                                    </Link>
                                </div>
                                <div>
                                    <Link 
                                        className={css`
                                            ${link}
                                        `}
                                        to="/blog"
                                    >
                                        Blog
                                    </Link>
                                </div>
                                <div>
                                    <Link 
                                        className={css`
                                            ${link}
                                        `} 
                                        to="/about"
                                    >
                                        About the Author
                                    </Link>
                                </div>
                                <div>
                                    <a 
                                        className={
                                            css`${link}
                                        `} 
                                        href="https://www.goodreads.com/brookeclonts" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Brooke Clonts on Goodreads
                                    </a>
                                </div>
                                <div>
                                    <Link 
                                        className={css`
                                            ${link}
                                        `} 
                                        to="/sitemap"
                                    >
                                        Sitemap
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div 
                        className={css`
                            ${footerBlocks}
                        `}
                    >
                        <div>
                            <h3
                                className={css`
                                    ${headers}
                                `}
                            >
                                Contact
                            </h3>
                            <div className={links}>
                                <div 
                                    className={css`
                                        ${link}
                                    `}
                                >
                                    <a 
                                        className={css`
                                            ${link}
                                        `}
                                        href="mailto:brooke@brookeclonts.com"
                                    >
                                        brooke@brookeclonts.com
                                    </a>
                                </div>
                                <div 
                                    className={css `
                                        margin-top: 20px;

                                        & svg {
                                            margin-right: 10px;

                                            path {
                                                fill: ${colors.trueWhite};

                                                &:hover {
                                                    fill: ${colors.pink};
                                                }
                                            }
                                        }
                                    `}
                                >
                                    <a 
                                        href="https://twitter.com/brookeclonts" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Twitter size={'30px'}/>
                                    </a>
                                    <a 
                                        href="https://www.facebook.com/brookeclonts" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Facebook size={'30px'}/>
                                    </a>
                                    <a 
                                        href="https://www.instagram.com/brookeclonts/" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Instagram size={'30px'}/>
                                    </a>
                                </div>
                                <div
                                    className={css`
                                        margin-top: 20px;

                                        & span {
                                            color: ${colors.trueWhite};
                                        }
                                    `}
                                >
                                    <div 
                                        className="fb-like" 
                                        data-href="https://www.facebook.com/brookeclonts" 
                                        data-layout="standard" 
                                        data-action="like" 
                                        data-size="small" 
                                        data-show-faces="true" 
                                        data-share="true">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div 
                        className={css`
                            ${footerBlocks}
                        `}
                    >
                        <div>
                            <h3
                                className={css`
                                    ${headers}
                                `}
                            >
                                Get the inside scoop!
                            </h3>
                            <SubscriptionForm colors={colors} openMessage={this.props.openMessage}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;

