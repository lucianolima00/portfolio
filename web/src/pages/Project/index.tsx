import './style.css';
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import api from "../../services/api";
import openOnGit from '../../assets/open-on-git.png'

import Header from "../../components/Header";


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
    return (
        <div id='page-project'>
            <div id="background-middle-right">
            </div>
            <div className='container'>

                {/* HEADER */}

                <Header backButton={true}/>

                {/* PROJECTS */}

                {
                    project ? (<div className="project">
                        <div className="image">
                            <img src={project.image} alt={project.name}/>
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
                                        <img src={openOnGit} alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>) : ""
                }

                <div id="copyright-container">
                    <b id="copyright">COPYRIGHT © 2024 LIMA</b>
                </div>
                <div id="background-bottom-container-right">
                    <div id="background-bottom-right"/>
                </div>
            </div>
        </div>
    );
}

export default ProjectView;