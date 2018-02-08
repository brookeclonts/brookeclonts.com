import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import { css } from 'emotion';
import { colors } from '../constants/colors.js';
import { breakpoints } from '../constants/breakpoints.js';

class AdminPortal extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div
                className={css`
                    background-color: ${colors.white};
                    display: block;
                    padding: 50px 0px 50px;
                    text-align: center;
                    height: 100%;
                
                    @media screen and (min-width: ${breakpoints.tab}) {
                        padding: 0px 0px 100px;
                    }

                    & h1 {
                        font-size: 20px;
                        padding-bottom: 20px;
                        letter-spacing: 2px;
                        padding-top: 50px;
                        margin: 0;
                        font-family: 'Medula One', 'Times New Roman', serif;
                        color: ${colors.medGray};
                
                        @media screen and (min-width: ${breakpoints.tab}) {
                            font-size: 38px;
                            padding-top: 160px;
                        }
                    }

                    & p, & a {
                        font-family: 'Open Sans', Helvetica, arial, sans-serif;
                    }
                
                    & p {
                        font-size: 14px;
                        line-height: 1.5;
                        margin: 0;
                        margin-bottom: 10px;
                        text-align: left;
                    }

                    & a {
                        color: ${colors.darkPink};
                        text-decoration: none;
            
                        &:hover {
                            color: ${colors.green};
                        }
                    }
                
                    & ul {
                        margin-bottom: 50px;
                
                        & li {
                            text-align: left;
                            text-decoration: none;
                            list-style-type: none;
                        }
                    }
                `}
            >
                <h1>Admin Portal</h1>
                <ul className="sitemap-content">
                    <li>
                        <Link to="/admin-portal">
                            Upload Blog Post
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default AdminPortal;
