import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import Tattoo from '../Icons/Tattoo';
import { Link } from 'react-router-dom';
import { colors } from '../constants/colors.js';
import { breakpoints } from '../constants/breakpoints.js';

class Home extends Component {
  state = {
    feed: [],
    post: {},
    books: []
  };

  static propTypes = {
    location: PropTypes.object.isRequired
  };

  scrollToBooks() {
    const { 
      location
    } = this.props;

    const pageLocation = location.location;

    (setTimeout(() => {
      if (pageLocation && pageLocation.pathname === '/books') {
        const elem = document.getElementById('books');
        if (elem) {
          elem.scrollIntoView();
        }
      }
    }, 1500));
  }
  
  componentWillMount() {
    fetch('/api/blogposts/one')
      .then(res => res.json())
      .then(post => this.setState({ post: post[0] }));

    fetch('/api/external/instagram')
      .then(res => res.json())
      .then(feed => this.setState({ feed: feed.data.slice(0, 4) }));

    fetch('/api/books')
      .then(res => res.json())
      .then(books => this.setState({ books }));
  }

  componentDidMount() {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.scrollToBooks();
      });
    });
  }

  constructor(props) {
      super(props);
  }

  render() {

    const {
      books
    } = this.state;

    const wrapper = `
      padding: 50px 20px;
    `;

    const sectionHeader = `
      font-size: 38px;
      margin-bottom: 30px;
      letter-spacing: 2px;
      text-align: center;
      font-family: Medula One,Times New Roman,serif;
    `;

    const headerBtn = `
      border: solid 1px $white;
      color: $white;
      font-size: 20px;
      padding: 10px 50px;

      &:hover {
          background-color: $white;
          color: $blue-gray;
      }
    `;

    const btn = `
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
      font-family: Open Sans,Helvetica,arial,sans-serif;

      &:hover {
        background-color: ${colors.trueWhite}
        cursor: pointer;
      }
    `;
    return (
      <div
        className={css`
          background-color: ${colors.blueGray};
        `}
      >
        <div 
          className={css`
            width: 100vw;
            text-align: center;
            padding: 0;
            overflow: hidden;
            padding-top: 50px;

            @media screen and (min-width: ${breakpoints.desktop}) {
                padding-top: 60px;
            }
          `}
        >
          <div 
            className={css`
              display: block;
              width: 100%;
              height: 100%;
              flex-direction: row;
              vertical-align: middle;
              position: relative;
              padding: 50px 0;
              justify-content: space-between;

              @media screen and (min-width: ${breakpoints.tab}) {
                display: flex;
            }
            `}
          >
              <div 
                className={css`
                  display: inline-flex;
                  align-self: center;
                  margin: auto;
                  width: 100%;
                  height: 100%;
      
                  @media screen and (min-width: ${breakpoints.tab}) {
                      text-align: left;
                      width: 50%;
                      padding: 0 20px;
                  }
      
                  @media screen and (min-width: 1600px) {
                      max-width: initial;
                  }
                `}
              >
                <div
                  className={css`
                    margin: auto;
                    text-align: center;
                    width: auto;

                    @media screen and (min-width: ${breakpoints.tab}) {
                      text-align: left;
                    }
                  `}
                >
                    <h1 
                      className={css`
                        color: ${colors.trueWhite};
                        font-size: 38px;
                        margin-bottom: 30px;
                        letter-spacing: 2px;
                        margin-top: 0;
                        font-family: Medula One,Times New Roman,serif;
            
                        @media screen and (min-width: ${breakpoints.tab}) {
                            font-size: 58px;
                        }
                      `}>
                        A World of Fantasy and Intrigue
                      </h1>
                      <p
                        className={css`
                          color: ${colors.trueWhite};
                          font-family: 'Open Sans',Helvetica,arial,sans-serif;
                          max-width: 650px;
                          padding: 20px;

                          @media screen and (min-width: ${breakpoints.tab}) {
                              padding: 0px;
                          }
                        `}
                      >
                        Welcome to Brooke Clonts's author website. Here you can subscribe to her email list, view her recent publications, join her social media feeds, and read about her thoughts and fantastic ideas!
                      </p>
                      <Link 
                        className={css`
                          text-decoration: none;
                        `}
                        to="/landing"
                      >
                        <div
                          className={css`
                            ${btn}
                            margin: auto;

                            @media screen and (min-width: ${breakpoints.tab}) {
                              margin: 30px 0 0 0;
                            }
                          `}
                        >
                          Subscribe
                        </div>
                      </Link>
                </div>
              </div>
              <div
                className={css`
                  display: inline-flex;
                  align-self: center;
                  width: 50%;
                  height: 100%;

                  @keyframes draw {
                      to {
                          stroke-dashoffset: 0;
                      }
                  }

                  & svg {
                    margin: auto;
                    display: none;
                    margin: auto;
                    text-align: center;
                    transition: all 0.5s ease;

                    @media screen and (min-width: ${breakpoints.tab}) {
                        display: block;
                        padding-right: 20px;
                    }
                  }

                  & path {
                    fill-opacity: 0;
                    stroke-dasharray: 800;
                    stroke-dashoffset: 900;
                    animation-name: draw;
                    animation-duration: 5s;
                    animation-fill-mode: forwards;
                    animation-iteration-count: 1;
                    animation-timing-function: linear;
                  }

                `}
              >
              <Tattoo
                  fill={colors.pink}
                  size={400}
                />
              </div>
          </div>
      </div>
      
      <div 
        className={css`
          background-color: ${colors.green};
          display: table;
          height: 100vh;
          width: 100vw;
          margin: auto;
          text-align: center;
        `}
        id="books"
      >
          <div className={css`
            display: table-cell;
            vertical-align: middle;
            ${wrapper}
            `}
          >
              <h2 
                className={css`
                  color: ${colors.blueGray};
                  ${sectionHeader}
                `}
              >
                Books
              </h2>
              {
                books.map(book =>
                  <div 
                    className="product"
                    key={book._id} 
                  >
                      <img src={book.imageUrl} alt={book.title}/>
                      <p 
                        className={css`            
                          color: ${colors.blueGray};
                          font-size: 20px;
                        `}
                      >
                          {book.status}
                      </p>
                  </div>
                )
              }
          </div>
      </div>
      <div 
        className={css`
          background-color: ${colors.trueWhite};
          display: flex;
          padding: 50px 0;
        `} 
        id="blog"
      >
          <div 
            className={css`
              ${wrapper}
              display: table-cell;
              vertical-align: middle;
              margin: auto;
            `}
          >
              <h2
                className={css`
                  color: ${colors.blueGray};
                  ${sectionHeader}
                `}
              >
                Latest Blog Post
              </h2>
              <div 
                className={css`
                  text-align: center;
                  margin-bottom: 20px;
                  padding-top: 50px;

                  & p {
                    color: ${colors.blueGray};
                  }
                `}
              >
                  <img 
                    className={css`
                      width: 100%;
                      max-width: 500px;
                      margin: auto;
                      box-sizing: border-box;
                    `}
                    src={this.state.post.imageUrl}
                    alt={this.state.post.title}
                  />
                  <p 
                    className={css`
                      font-size: 20px;
                    `}
                  >
                      {this.state.post.title}
                  </p>
                  <p 
                    className={css`
                      max-width: 500px;
                      margin: auto;
                    `}
                  >
                      {this.state.post.description}
                  </p>
              </div>
              <Link 
                className={css`
                  text-decoration: none;
                `}
                to="['/post', post.title]"
              >
                  <div 
                    className={css`
                      ${btn}

                      &:hover {
                        background-color: ${colors.green};
                      }
                    `}
                  >
                      Read More
                  </div>
              </Link>
          </div>
      </div>      

      <div 
        className={css`
          display: flex;
          background-color: ${colors.green};
        `}
        id="instagram" 
      >
          <div 
            className={css`
              ${wrapper}
              padding: 50px 20px;
              vertical-align: top;
              margin: auto;
            `}
          >
              <h2
                className={css`
                  color: ${colors.blueGray};
                  ${sectionHeader}
                `}
                >
                  Instagram Feed
              </h2>
              <div 
                className={css`
                  margin-right: -10px;
                  margin-left: -10px;
      
                  @media screen and (min-width: ${breakpoints.desktop}) {
                      padding: 50px 0px;
                  }
                `}
              >
                {
                  this.state.feed.map(post =>
                    <div 
                      key={post._id} 
                      className={css`
                        display: block;
                        text-align: center;
                        vertical-align: top;
            
                        @media screen and (min-width: ${breakpoints.desktop}) {
                            display: inline-block;
                            width: 25%;
                        }
            
                        & img {
                            box-sizing: border-box;
                            max-width: 100%;
                            padding: 10px;
                        }
                      `}
                    >
                        <img 
                          src={post.images.low_resolution.url}
                          alt="Brooke Clonts Instagram"
                        />
                        <p 
                          className={css`
                            color: #484B5A;
                            font-size: 14px;
                            padding: 0px 20px 20px;
                            text-align: center;
                            max-width: 500px;
                            margin: auto;
                            margin-top: 5px;
                            min-height: 65px;
                          `}
                        >
                            {post.caption.text}
                        </p>
                    </div>
                  )
                }
              </div>
              <a 
                className={css`
                  text-decoration: none;
                `}
                href="https://www.instagram.com/brookeclontsbooks/" 
                target="_blank"
              >
                  <div className={css`
                    ${btn}
                  `}
                  >
                      See Page
                  </div>
              </a>
          </div>
      </div>
    </div>
    );
  }
}

export default Home;