import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { css } from 'emotion';
import { colors } from '../constants/colors.js';
import { breakpoints } from '../constants/breakpoints.js';
import Twitter from '../Icons/Twitter';
import Facebook from '../Icons/Facebook';
import { ShareFacebook, ShareTwitter, ReloadWidgets } from '../utilities/socialShare.js';
import setHeaderInfo from '../utilities/setHeaderInfo.js';

class BlogPost extends Component {
  state = {
    post: {},
  }

  componentDidMount() {
    fetch(`/api/blogposts/title/${this.props.location.match.params.title}`)
    .then(res => res.json())
    .then(post => {
        this.setState({ post: post });
        setHeaderInfo({ title: post.title, desc: post.description, image: `https://brookeclontsbooks.s3-us-west-1.amazonaws.com/${post.imageUrl}` });
        ReloadWidgets();    
    });
  }

  render() {
    const {
        post
    } = this.state;
    const tweet = 'Checkout this awesome blog post by brookeclonts.com!'

    return (
      <div
        className={css`
            padding-bottom: 50px;
            text-align: center;
        `}
      >
        <div 
            className={css`
                display: block;
                margin: auto;
                max-width: ${breakpoints.maxWidth};
                padding: 20px;
        
                div {
                    text-align: left;
                }
            `}
        >
            <img 
                src={`https://brookeclontsbooks.s3-us-west-1.amazonaws.com/${post.imageUrl}`}
                alt={post.title}
                className={css`
                    max-width: 300px;
                    padding-top: 50px;
            
                    @media screen and (min-width: ${breakpoints.tab}) {
                        padding-top: 80px;
                    }
                `}
            />
            <div className={css`
                & svg {
                    margin: 5px;
                    margin-bottom: 0;
                }

                & svg path {
                    fill: ${colors.pink}

                    &:hover {
                        cursor: pointer;
                        fill: ${colors.green};
                    } 
                }

                margin: auto;
                padding: 10px;
                text-align: center !important;
            `}
            >
                <h1
                    className={css`
                        display: inline-block;
                        font-size: 20px;
                        padding-bottom: 20px;
                        padding-top: 30px;
                        padding-right: 10px;
                        letter-spacing: 2px;
                        margin: 0;
                        text-align: center;
                        font-family: Medula One,Times New Roman,serif;
                        color: ${colors.medGray};
                
                        @media screen and (min-width: ${breakpoints.tab}) {
                            font-size: 38px;
                        }
                    `}
                >
                    {post.title}
                </h1>
                <a onClick={() => {ShareTwitter(window.location, tweet)}}>
                    <Twitter size={'30px'}/>
                </a>
                <a onClick={() => {ShareFacebook(window.location, tweet, `https://brookeclontsbooks.s3-us-west-1.amazonaws.com/${post.imageUrl}`)}}>
                    <Facebook size={'30px'}/>
                </a>
            </div>
            <div 
                className={css`
                    font-family: Open Sans,Helvetica,arial,sans-serif;
                    color: black;
                    font-weight: 300;
                    font-size: 14px;

                    & a {
                        text-decoration: none;
                        color: black;
                    }
                `}
                dangerouslySetInnerHTML={{__html: post.body}}>
            </div>
        </div>
        <div 
            className={css`
                display: block;
                text-align: center;
                padding: 50px 0;
                margin: auto;
                max-width: ${breakpoints.desktop};
            `}
        >
            <Link 
                to="/landing">
                <div 
                    className={css`
                        display: inline-block;
                        margin: auto;
                        padding: 20px 40px;
                        background-color: ${colors.green};
                        color: ${colors.trueWhite};
                        text-transform: uppercase;
                        box-sizing: border-box;
                        font-size: 18px;
                        letter-spacing: 1px;
                    `}
                >
                    Subscribe
                </div>
            </Link>
        </div>
      </div>
    );
  }
}

export default BlogPost;