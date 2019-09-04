import React, { PropTypes, Component } from 'react';
import { css } from 'emotion';
import { colors } from '../constants/colors.js';
import { breakpoints } from '../constants/breakpoints.js';

class About extends Component {

  constructor(props) {
      super(props);
  }

  render() {

    return (
      <div
        className={css`
          background-color: ${colors.trueWhite};
          display: block;
          text-align: center;
          height: 100%;
          font-family: Open Sans,Helvetica,arial,sans-serif;
          padding: 50px 0;

          @media screen and (min-width: ${breakpoints.tab}) {
            padding: 0px;
          }

          & p {
              font-size: 14px;
              line-height: 1.5;
              margin: 0;
              margin-bottom: 20px;
              text-align: left;
              font-family: Open Sans,Helvetica,arial,sans-serif;

              @media screen and (min-width: ${breakpoints.tab}) {
                font-size: 20px;
              }
      
              & a {
                  color: ${colors.darkPink};
      
                  &:hover {
                      color: ${colors.green};
                  }
              }
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
            font-family: Medula One,Times New Roman,serif;
    
            @media screen and (min-width: ${breakpoints.tab}) {
                font-size: 38px;
                padding-top: 160px;
            }
          `}
        >
          About the Author
        </h1>
        <div 
          className={css`
            max-width: 1000px;
            margin: auto;
            padding: 20px;
    
            @media screen and (min-width: ${breakpoints.tab}) {
                display: flex;
                padding: 0 20px;
                margin-top: 50px;
                margin-bottom: 50px;
            }
          `}
        >
            <div 
              className={css`
                display: block;
                padding: 0;

                @media screen and (min-width: ${breakpoints.tab}) {
                    display: flex-inline;
                }
              `}
            >
                <img 
                  className={css`
                    max-height: 500px;
                    padding-bottom: 20px;
                    width: 100%;
            
                    @media screen and (min-width: 375px) {
                        width: auto;
                    }
            
                    @media screen and (min-width: ${breakpoints.tab}) {
                        padding-bottom: 0;
                    }
                  `}
                  src="https://brookeclontsbooks.s3-us-west-1.amazonaws.com/other/brookeclonts.jpg" 
                  alt="Brooke Clonts"
                />
            </div>
            <div 
              className={css`
                text-align: left;

                @media screen and (min-width: ${breakpoints.tab}) {
                    padding: 0 20px;
                }

                & p {
                  display: block;

                  @media screen and (min-width: ${breakpoints.tab}) {
                      display: flex-inline;
                  }
                }
              `}
            >
                <p>
                  When she's not writing, Brooke Clonts is a software engineer who can be caught in the mountains with her two huskies, playing D&D with her writing group, or traveling the world to experience diverse cultures. Her favorite books include <i>Harry Potter and The Goblet of Fire</i>, <i>The Hobbit</i>, <i>The Two Princesses of Bamarre</i>, <i>Ella Enchanted</i>, <i>Howl's Moving Castle</i>, and <i>East</i>. 
                </p>
                <p>
                    Contact Brooke via email: <a href="mailto:brooke@brookeclonts.com?Subject=Hello%20Brooke">brooke@brookeclonts.com</a>
                </p>
                <div
                  className={css`
                    margin-top: 10px;
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
    );
  }
}

export default About;