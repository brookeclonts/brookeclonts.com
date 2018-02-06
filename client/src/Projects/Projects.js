import React, { Component } from 'react';
import { css } from 'emotion';

class Projects extends Component {
    state={
        projects: [],
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        fetch('/api/projects')
            .then(res => res.json())
            .then(projects => this.setState({ projects }));
    }

    render() {
        const { projects } = this.state;
        const { colors, breakpoints } = this.props;

        return (
            <div
               className={css`
                    background-color: ${colors.white};
                    display: block;
                    padding: 50px 0px 50px;
                    text-align: center;
                    height: 100%;
                    min-height: 100vh;

                    @media screen and (min-width: ${breakpoints.tab}) {
                        padding: 0px 0px 100px;
                    }

                    & a {
                        text-decoration: none;
                        font-family: 'Open Sans',Helvetica,arial,sans-serif;
                        color: ${colors.darkPink};
                
                        &:hover {
                            color: ${colors.green};
                        }
                    }

                    & p {
                        font-family: 'Open Sans',Helvetica,arial,sans-serif;
                        font-size: 14px;
                        line-height: 1.5;
                        margin: 0;
                        text-align: center;
                    }
               `} 
            >
                <h1
                    className={css`
                        font-size: 20px;
                        padding-bottom: 20px;
                        letter-spacing: 2px;
                        padding-top: 50px;
                        font-family: 'Medula One','Times New Roman',serif;
                
                        @media screen and (min-width: ${breakpoints.tab}) {
                            font-size: 38px;
                            padding-top: 160px;
                            margin: 0;
                        }
                    `}
                >
                    Projects
                </h1>
                <div 
                    className={css`
                        @media screen and (min-width: ${breakpoints.tab}) {
                            padding: 0 20px;
                        }
                    `}
                >
                    <div 
                        className={css`
                            max-width: ${breakpoints.maxWidth};
                            margin: auto;
                            text-align: center;
                        `}
                    >
                        <div 
                            className={css`
                                margin-bottom: 50px;
                            `}
                        >
                            <p>
                                Brooke Clonts is a MEAN stack developer. Below is a list of projects she has worked on.
                            </p>
                            <div>
                                <a 
                                    href="https://github.com/brookeclonts" 
                                    target="_blank">
                                    github: brookeclonts
                                </a>
                            </div>
                        </div>
                
                        <div 
                            className={css`
                                padding-bottom: 50px;

                                @media screen and (min-width: ${breakpoints.desktop}) {
                                    text-align: left;
                                }
                            `}
                        >
                            { 
                                projects.map( project =>
                                    <div 
                                        className={css`
                                            display: block;

                                            &:not(:last-child) {
                                                margin-bottom: 20px;
                                            }
                                    
                                            @media screen and (min-width: ${breakpoints.tab}) {
                                                display: inline-block;
                                                width: 47%;
                                                padding: 10px;
                                                vertical-align: top;
                                            }
                                    
                                            @media screen and (min-width: ${breakpoints.desktop}) {
                                                width: 31%;
                                            }
                                        `}
                                    >
                                        <a href={project.url} target="_blank">
                                            <img 
                                                className={css`
                                                    width: 100%;
                                                    max-width: 350px;
                                                    margin: auto;
                                                `}
                                                src={project.img} 
                                                alt={project.title}
                                            />
                                        </a>
                                        <h2 
                                            className={css`
                                                font-family: 'Medula One','Times New Roman',serif;
                                                font-size: 28px;
                                                margin-top: 20px;
                                                text-align: center;
                                            `}
                                        >
                                            {project.title}
                                        </h2>
                                        <p 
                                            className={css`
                                                padding: 20px;

                                                @media screen and (min-width: ${breakpoints.tab}) {
                                                    padding: 0px;
                                                }
                                            `}
                                        >
                                            {project.description}
                                            <div>
                                                You can view the project
                                                <a 
                                                    className={css`
                                                        padding-left: 7px;
                                                    `}
                                                    href={project.url} 
                                                    target="_blank"
                                                >
                                                    here
                                                </a>
                                            </div>
                                        </p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}

export default Projects;