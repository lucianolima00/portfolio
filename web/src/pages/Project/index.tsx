import './style.css';
import CSS from 'csstype';
import { Link } from "react-router-dom";

import logo from '../../assets/lima-logo-black.png';
import openOnGit from '../../assets/open-on-git.png'
import projectImage from '../../assets/project-image.png'
import arrowButton from '../../assets/arrow-button.svg'
import {useRef} from "react";

var bgColors = { 
    "Purple": "#4F309B",
    "Blue": "#04DAF2",
    "Green": "#8CC152",
    "Orange": "#EC6C3C",
    "Yellow": "#ECE03C",
};

const projectName = "WEB PORTFOLIO";

function Project() {
    const ref = useRef<HTMLDivElement>(document.createElement("div"));

    const scroll = (scrollOffset = 0) => {
        ref.current.scrollLeft += scrollOffset;
    };

    return(
        <div id='page-project'>
            <div id="background-middle-right">
            </div>
            <div className='container'>

                {/* HEADER */}

                <div id="header">
                    <div id="header-logo-back">
                        <Link id='logo' to="/">
                            <img src={logo} alt='LIMA' />
                        </Link>
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

                <div className="project">
                    <div className="image">
                        <img src={projectImage} alt={projectName} />
                    </div>
                    <div id="content">
                        <div className="project-title">
                            <p>MOBILE PORTFOLIO</p>
                        </div>
                        <div className="project-description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis, ipsum in eleifend elementum, leo turpis gravida orci, id ullamcorper sem nunc eget nisl. Etiam non consequat libero. Nulla facilisi. Proin odio nulla, dapibus et imperdiet sed, maximus et nunc. Curabitur viverra gravida leo, vel egestas magna vehicula nec. Quisque ac libero sagittis, tempor nisi a, venenatis nunc. Morbi vehicula fringilla consectetur. Quisque tellus odio, pretium in ipsum eget, efficitur varius mi</p>
                        </div>
                        <div className="project-info">
                            <div className="project-tecnologies">
                                <div className="tech-dot" style={{backgroundColor:bgColors.Purple}}></div>
                                <div className="tech-name">
                                    <p>PHP</p>
                                </div>
                                <div className="tech-dot" style={{backgroundColor:bgColors.Yellow}}></div>
                                <div className="tech-name">
                                    <p>Javascript</p>
                                </div>
                            </div>
                            <div className="project-link">
                                <a href="https://github.com/lucianolima00">
                                    <img src={openOnGit} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="copyright-container">
                <b id="copyright">COPYRIGHT © 2021 LIMA</b>
            </div>
            <div id="background-bottom-container-right">
                <div id="background-bottom-right"></div>
            </div>
        </div>
    );
}

export default Project;