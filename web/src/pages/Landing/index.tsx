import React, { useEffect } from "react";
import './style.css';
import CSS from 'csstype';
import { Link } from "react-router-dom";

import api from '../../services/api';

import logo from '../../assets/lima-logo-black.png';
import phone1 from '../../assets/iphone-portifolio-1.png';
import phone2 from '../../assets/iphone-portifolio-2.png';
import phone3 from '../../assets/iphone-portifolio-3.png';
import behanceWhite from '../../assets/behance-white.png'
import githubWhite from '../../assets/github-white.png'
import linkedinWhite from '../../assets/linkedin-white.png'
import instaWhite from '../../assets/insta-logo-white.png'
import behanceBlack from '../../assets/behance.png'
import githubBlack from '../../assets/github.png'
import linkedinBlack from '../../assets/linkedin.png'
import instaBlack from '../../assets/insta-logo.png'
import backButton from '../../assets/back-button.png'
import forwardButton from '../../assets/forward-button.png'
import openOnGit from '../../assets/open-on-git.png'
import cardOpen from '../../assets/card-open-button.png'
import sendButton from '../../assets/send-button.png'
import {useRef} from "react";

var bgColors = { 
    "Purple": "#4F309B",
    "Blue": "#04DAF2",
    "Green": "#8CC152",
    "Orange": "#EC6C3C",
    "Yellow": "#ECE03C",
};

function Landing() {

    useEffect(() => {
        api.get('items').then(response => {
            console.log(response)
        })
    }, [])

    const ref = useRef<HTMLDivElement>(document.createElement("div"));

    const scroll = (scrollOffset = 0) => {
        ref.current.scrollLeft += scrollOffset;
    };

    return(
        <div id='page-landing'>
            <div id="background-middle">
            </div>
            <div className='container'>

                {/* LANDING */}

                <div id="header">
                    <Link id='logo' to="/">
                        <img src={logo} alt='LIMA' />
                    </Link>
                    <div id='header-phrase'>
                        <span id="create">CREATE</span>
                        <span id="everything">EVERYTHING</span>
                    </div>
                    <div></div>
                    <div id="portfolio-phone-1">
                        <img src={phone1} alt="" />
                    </div>

                    <div id="social-background"></div>
                    <div id="white-social-links">
                        <a href="https://github.com/lucianolima00" target="_blank" className="social-link">
                            <img src={githubWhite} alt=""/>
                        </a>
                        <a href="https://www.behance.net/lucianolima00" target="_blank" className="social-link">
                            <img src={behanceWhite} alt=""/>
                        </a>
                        <a href="https://www.linkedin.com/in/lucianolima00" target="_blank" className="social-link">
                            <img src={linkedinWhite} alt=""/>
                        </a>
                        <a href="https://www.instagram.com/luciano.lima00" target="_blank" className="social-link">
                            <img src={instaWhite} alt=""/>
                        </a>
                    </div>
                </div>

                {/* PROJECTS */}

                <div className="topic project-topic">
                    <div className="topic-header">
                        <span className="title">PROJECTS</span>
                        <div id="interactive-buttons">
                            <div className="arrow-button">
                                <img src={backButton} alt="" onClick={() => scroll(-600)}/>
                            </div>
                            <div className="arrow-button">
                                <img src={forwardButton} alt="" onClick={() => scroll(600)}/>
                            </div>
                        </div>
                    </div>
                    <div id="project-content" ref={ref!}>
                        <div className="card">
                            <div className="card-body">
                                <div className="card-picture"></div>
                                <div className="card-content">
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
                            <div className="card-info">
                                <div className="card-title">
                                    <p>PORTFOLIO WEB</p>
                                </div>
                                <div className="card-button">
                                    <Link to="/project">
                                        <img src={cardOpen} alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="card-picture"></div>
                                <div className="card-content">
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
                            <div className="card-info">
                                <div className="card-title">
                                    <p>PORTFOLIO WEB</p>
                                </div>
                                <div className="card-button">
                                    <a href="#">
                                        <img src={cardOpen} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="card-picture"></div>
                                <div className="card-content">
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
                            <div className="card-info">
                                <div className="card-title">
                                    <p>PORTFOLIO WEB</p>
                                </div>
                                <div className="card-button">
                                    <a href="#">
                                        <img src={cardOpen} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <div className="card-picture"></div>
                                <div className="card-content">
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
                            <div className="card-info">
                                <div className="card-title">
                                    <p>PORTFOLIO WEB</p>
                                </div>
                                <div className="card-button">
                                    <a href="#">
                                        <img src={cardOpen} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ABOUT */}

                <div className="topic">
                    <div className="topic-header">
                        <span className="title">ABOUT</span>
                    </div>
                    <div className="topic-content">
                        <div id="portfolio-phone-2">
                            <img src={phone2} alt="" />
                        </div>
                        <div id="knownledge">
                            <div id="knowledge-titles">
                                <span>WEB DEVELOPER</span>
                                <span>WEB DESIGNER</span>
                                <span>MOBILE DEVELOPER</span>
                            </div>
                            <div id="knowledge-skills">
                                <p>PHP</p>
                                <p>RUBY</p>
                                <p>FLUTTER</p>
                                <p>PHOTOSHOP</p>
                                <p>ILLUSTRATOR</p>
                                <p>ADOBE XD</p>
                                <p>REACT</p>
                                <p>NODEJS</p>
                                <p>DEVOPS</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CONTACT */}

                <div className="topic">
                    <div className="topic-header">
                        <span className="title">CONTACT</span>
                    </div>
                    <div className="topic-content">
                        <div className="contact-input">
                            <form >
                                <div className="contact-text">
                                        <textarea name="contact-textarea" id="contact-textarea" rows={15} cols={35} placeholder="MESSAGE"></textarea>
                                        <input type="email" name="contact-email" id="contact-email" placeholder="E-MAIL"/>
                                </div>
                                <div className="contact-submit">
                                    <img src={sendButton} alt="" />
                                </div>
                            </form>
                        </div>
                        <div id="portfolio-phone-3">
                            <img src={phone3} alt="" />
                        </div>
                        <div id="black-social-links">
                            <a href="https://github.com/lucianolima00" target="_blank" className="social-link">
                                <p>LUCIANOLIMA00</p>
                                <img src={githubBlack} alt=""/>
                            </a>
                            <a href="https://www.behance.net/lucianolima00" target="_blank" className="social-link">
                                <p>LUCIANOLIMA00</p>
                                <img src={behanceBlack} alt=""/>
                            </a>
                            <a href="https://www.linkedin.com/in/lucianolima00" target="_blank" className="social-link">
                                <p>LUCIANOLIMA00</p>
                                <img src={linkedinBlack} alt=""/>
                            </a>
                            <a href="https://www.instagram.com/luciano.lima00" target="_blank" className="social-link">
                                <p>LUCIANO.LIMA00</p>
                                <img src={instaBlack} alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="copyright-container">
                <b id="copyright">COPYRIGHT © 2021 LIMA</b>
            </div>
            <div id="background-bottom-container">
                <div id="background-bottom"></div>
            </div>
        </div>
    );
}

export default Landing;