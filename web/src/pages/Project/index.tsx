import './style.css';
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import api from "../../services/api";

import logo from '../../assets/lima-logo-black.png';
import openOnGit from '../../assets/open-on-git.png'
import arrowButton from '../../assets/arrow-button.svg'


const ProjectView = () => {
    interface Project {
        id: number;
        name: string;
        image: string;
        description: string;
        first_tech_name: string;
        first_tech_color: string;
        second_tech_name: string;
        second_tech_color: string;
        url: string;
    }

    let id: any;
    ({id} = useParams());

    console.log(id);

    const [project, setProject] = useState<Project>();

    useEffect(() => {
        api.get(`/project/${id}`).then(response => {
            setProject(response.data);
        })
    }, []);
    return(
        <div id='page-project'>
            <div id="background-middle-right">
            </div>
            <div className='container'>

                {/* HEADER */}

                <div id="header">
                    <div id="header-logo-back">
                        <div id="logo-container">
                            <Link id='logo' to="/">
                                <img src={logo} alt='LIMA' />
                            </Link>
                        </div>
                        <Link id='back-home' to="/">
                            <img src={arrowButton} alt='' />
                            <b>BACK TO HOME</b>
                        </Link>
                    </div>
                    <div id='header-phrase'>
                        <span id="create">CREATE</span>
                        <span id="everything">EVERYTHING</span>
                    </div>
                </div>

                {/* PROJECTS */}

                {
                    project ? (<div className="project">
                        <div className="image">
                            <img src={project.image} alt={project.name} />
                        </div>
                        <div id="content">
                            <div className="project-title">
                                <p>{project.name}</p>
                            </div>
                            <div className="project-description">
                                <p>{project.description}</p>
                            </div>
                            <div className="project-info">
                                <div className="project-technologies">
                                    <div className="tech-dot" style={{backgroundColor: project.first_tech_color}}/>
                                    <div className="tech-name">
                                        <p>{project.first_tech_name}</p>
                                    </div>
                                    <div className="tech-dot" style={{backgroundColor: project.second_tech_color}}/>
                                    <div className="tech-name">
                                        <p>{project.second_tech_name}</p>
                                    </div>
                                </div>
                                <div className="project-link">
                                    <a href={project.url} target="_blank">
                                        <img src={openOnGit} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>) : ""
                }

                <div id="copyright-container">
                    <b id="copyright">COPYRIGHT © 2021 LIMA</b>
                </div>
                <div id="background-bottom-container-right">
                    <div id="background-bottom-right"/>
                </div>
            </div>
        </div>
    );
}

export default ProjectView;