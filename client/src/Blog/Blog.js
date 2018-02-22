import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { css } from 'emotion';
import { colors } from '../constants/colors.js';
import { breakpoints } from '../constants/breakpoints.js';

class Blog extends Component {

  state = {
    posts: [],
    sort: '',
    searchString: '',
  }

  componentDidMount() {
    fetch('/api/blogposts')
    .then(res => res.json())
    .then(posts => this.setState({ posts: posts }));
  }

  constructor(props) {
      super(props);

      this.handleDateAscendingChange = this.handleDateAscendingChange.bind(this);
      this.handleSearchStringChange = this.handleSearchStringChange.bind(this);
  }

  handleDateAscendingChange(event) {
      this.setState({sort: event.target.value});
  }

  handleSearchStringChange(event) {
      this.setState({searchString: event.target.value});
  }

  render() {
    const {
        posts
    } = this.state;

    return (
      <div
        className={css`
            min-height: 100vh;
            
            & p, & a {
                text-decoration: none;
                color: black;
                font-family: 'Open Sans', Helvetica, arial, sans-serif;
            }
        `}
      >
        <h1
            className={css`
                font-size: 20px;
                padding-bottom: 20px;
                letter-spacing: 2px;
                padding-top: 50px;
                margin: 0;
                text-align: center;
                font-family: 'Medula One', 'Times New Roman', serif;
        
                @media screen and (min-width: ${breakpoints.tab}) {
                    font-size: 38px;
                    padding-top: 160px;
                }
            `}
        >
            Recent Blog Posts
        </h1>
        <div className={css`
            display: block;
            margin: auto;
            max-width: ${breakpoints.maxWidth};
            padding: 20px;
        `}>
            <div
                className={css`
                    margin-bottom: 20px;
                    text-decoration: none;

                    & select, & input, & label {
                        border-radius: 0px;
                        color: black;
                        font-family: 'Open Sans',Helvetica,arial,sans-serif;

                        &:focus {
                            outline: none;
                        }
                    }

                    & input, & select {
                        padding: 5px 10px;
                    }

                    & input {
                        min-width: 300px;
                    }

                    & select {
                        -webkit-appearance: none;
                        padding-right: 20px;
                    }

                    & label {
                        padding-right: 7px;
                    }
                `}
            >
                <label>
                    Sort By: 
                </label>
                <div
                    className={css`
                        display: inline-block;
                        position: relative;
                        
                        &:after {
                            content: "";
                            position: absolute;
                            right: 7px;
                            top: 50%;
                            margin-top: -3px;
                            width: 0;
                            height: 0;
                            border-left: 4px solid transparent;
                            border-right: 4px solid transparent;
                            border-top: 5px solid ${colors.blueGray};
                        }
                    `}
                >
                    <select
                        value={this.state.sort} onChange={this.handleDateAscendingChange}
                    >
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                    </select>
                </div>
                
                <div
                    className={css`
                        display: block;
                        margin-top: 10px;

                        @media screen and (min-width: ${breakpoints.tab}) {
                            display: inline-block;
                            margin-top: 0px;
                        }
                    `}
                >
                    <label
                        className={css`
                            @media screen and (min-width: ${breakpoints.tab}) {
                                padding-left: 10px;
                            }
                        `}
                    >
                        Search:
                    </label>
                    <input 
                        type="text" 
                        name="searchString" 
                        value={this.state.searchString} 
                        onChange={this.handleSearchStringChange} 
                    />
                </div>
            </div>
            {
                posts
                .sort((a, b) => {
                    if (this.state.sort === 'oldest') {
                        return a._id > b._id;
                    } else {
                        return a._id < b._id;
                    }
                })
                .filter(post => {
                    if (this.state.searchString) {
                        return post.title.toLowerCase().includes(this.state.searchString.toLowerCase());
                    } else {
                        return true;
                    }
                })
                .map(post =>
                    <Link 
                        to={`/post/${post.title}`}
                        key={post._id}
                    >
                        <div 
                            className={css`
                                display: block;
                                padding: 0px 0 50px 0px;
                    
                                @media screen and (min-width: ${breakpoints.tab}) {
                                    padding: 10px 0;
                                }

                                & div, & p, & a {
                                    text-align: center;

                                    @media screen and (min-width: ${breakpoints.tab}) {
                                        text-align: left;
                                    }
                                }
                            `}
                        >
                            <div 
                                className={css`
                                    vertical-align: top;
                    
                                    @media screen and (min-width: ${breakpoints.tab}) {
                                        display: inline-block;
                                        width: 15%;
                                    }
                                `}
                            >
                                <img 
                                    className={css`
                                        padding: 0 20px;
                                        width: 100%;
                                        max-width: 400px;
                                        box-sizing: border-box;
                        
                                        @media screen and (min-width: ${breakpoints.tab}) {
                                            padding: 0;
                                        }
                                    `}
                                    alt={post.title}
                                    src={post.imageUrl}
                                />
                            </div>
                            <div 
                                className={css`
                                    display: inline-block;
                                    padding-left: 20px;
                                    vertical-align: top;
                    
                                    @media screen and (min-width: ${breakpoints.tab}) {
                                        display: inline-block;
                                        width: 80%;
                                    }
                                `}
                            >
                                <p 
                                    className={css`
                                        font-size: 18px;
                                        
                                        @media screen and (min-width: ${breakpoints.tab}) {
                                            margin-top: 0;
                                        }
                                    `}
                                >
                                    {post.title}
                                </p>
                                <p 
                                    className="description"
                                >
                                    {post.description}
                                </p>
                                <p 
                                    className={css`
                                        color: ${colors.green};

                                        &:hover {
                                            color: ${colors.pink};
                                        }
                                    `}
                                >
                                    Read Now >
                                </p>
                            </div>
                        </div>
                    </Link>
                )
            }
        </div>
      </div>
    );
  }
}

export default Blog;