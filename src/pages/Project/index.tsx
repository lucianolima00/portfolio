import './style.css';
import CSS from 'csstype';
import { Link } from "react-router-dom";

import logo from '../../assets/lima-logo-black.png';
import openOnGit from '../../assets/open-on-git.png'
import {useRef} from "react";

var bgColors = { 
    "Purple": "#4F309B",
    "Blue": "#04DAF2",
    "Green": "#8CC152",
    "Orange": "#EC6C3C",
    "Yellow": "#ECE03C",
};

const projectName = "WEB PORTFOLIO";
const projectImage = "";

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
                    <Link id='logo' to="/">
                        <img src={logo} alt='LIMA' />
                    </Link>
                    <div id='header-phrase'>
                        <span id="create">CREATE</span>
                        <span id="everything">EVERYTHING</span>
                    </div>
                    <div id='header-back'>
                        <Link id='back-home' to="/">
                            <span>Back to home</span>
                        </Link>
                    </div>
                </div>

                {/* PROJECTS */}

                <div className="project">
                    <div className="project-image">
                        <img src={projectImage} alt={projectName} />
                    </div>
                    <div id="project-content">
                        <div className="project-title">
                            <p>PORTFOLIO WEB</p>
                        </div>
                        <div className="project-description">
                            <p></p>
                        </div>
                        <div className="card-tecnologies">
                            <div className="tech-dot" style={{backgroundColor:bgColors.Purple}}></div>
                            <div className="tech-name">
                                <p>PHP</p>
                            </div>
                            <div className="tech-dot" style={{backgroundColor:bgColors.Yellow}}></div>
                            <div className="tech-name">
                                <p>Javascript</p>
                            </div>
                        </div>
                        <div className="card-link">
                            <a href="https://github.com/lucianolima00">
                                <img src={openOnGit} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="background-bottom-container-right">
                <div id="background-bottom-right"></div>
            </div>
        </div>
    );
}

export default Project;