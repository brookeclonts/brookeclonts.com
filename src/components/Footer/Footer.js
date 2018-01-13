import React, { PropTypes, Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { css } from 'emotion';
import SubscriptionForm from '../SubscriptionForm/SubscriptionForm';
import Twitter from '../Icons/Twitter';
import Facebook from '../Icons/Facebook';
import Instagram from '../Icons/Instagram';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    scrollToBooks() {
        // add ref='books' to books section
        // const booksRef = ReactDOM.findDOMNode(this.refs.books)
        // if (booksRef) {
        //     window.scrollTo(0, booksRef.offsetTop);
        // }
    }

    render() {
        let { breakpoints, colors } = this.props;

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

            &:not(:first-child) {
                margin-top: 30px;

                @media screen and (min-width: ${breakpoints.tab}) {
                    margin-left: 50px;
                    margin-top: 0;
                }
            }
        `;

        return (
            <Router>
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
                                <div 
                                    onClick={this.scrollToBooks}
                                >
                                    <Link 
                                        className={css`
                                            ${link}
                                        `} 
                                        to="/" 
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
                            <SubscriptionForm colors={colors}/>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Footer;

