import React, {ChangeEvent, FormEvent, useEffect, useRef, useState} from "react";
import './style.css';

import api from '../../services/api';
import emailjs from 'emailjs-com';

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
import sendButton from '../../assets/send-button.png'
import Footer from "../../components/Footer";
import Card from "../../components/Card";
import Header from "../../components/Header";

// @ts-ignore
emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);

const Landing = () => {

    interface Project {
        id: number;
        name: string;
        image: string;
        first_tech_name: string;
        first_tech_color: string;
        second_tech_name: string;
        second_tech_color: string;
        url: string;
    }

    const [projects, setProjects] = useState<Project[]>([]);

    const [formData, setFormData] = useState({
        message: '',
        email: ''
    });

    useEffect(() => {
        api.get('/').then(response => {
            setProjects(response.data);
        })
    }, [])

    const ref = useRef<HTMLDivElement>(document.createElement("div"));

    const scroll = (scrollOffset = 0) => {
        ref.current.scrollLeft += scrollOffset;
    };

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }

    function handleTextAreaChange(event: ChangeEvent<HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        // @ts-ignore
        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, event.target, process.env.REACT_APP_EMAILJS_USER_ID, {
            message: formData.message,
            email: formData.email
        }).then(() => {
            alert("E-mail sent successfully, Thank You!!");
        },
        (error) => {
            alert(error.text);
        });
    };

    return (
        <div id='page-landing'>
            <div id="background-middle">
            </div>
            <div className='container'>

                {/* LANDING */}

                <Header backButton={false}/>
                <div id="portfolio-phone-1">
                    <img src={phone1} alt=""/>
                </div>

                <div id="social-background"/>
                <div id="white-social-links">
                    <a href="https://github.com/lucianolima00" target="_blank" rel="noreferrer"
                       className="social-link">
                        <img src={githubWhite} alt=""/>
                    </a>
                    <a href="https://www.behance.net/lucianolima00" target="_blank" rel="noreferrer"
                       className="social-link">
                        <img src={behanceWhite} alt=""/>
                    </a>
                    <a href="https://www.linkedin.com/in/lucianolima00" target="_blank" rel="noreferrer"
                       className="social-link">
                        <img src={linkedinWhite} alt=""/>
                    </a>
                    <a href="https://www.instagram.com/luciano.lima00" target="_blank" rel="noreferrer"
                       className="social-link">
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
                    {projects.map(project => (
                        <Card id={project.id}
                              image={project.image}
                              name={project.name}
                              first_tech_color={project.first_tech_color}
                              first_tech_name={project.first_tech_name}
                              second_tech_color={project.second_tech_color}
                              second_tech_name={project.second_tech_name}
                              url={project.url}
                        />
                    ))}
                </div>
            </div>

            {/* ABOUT */}

            <div className="topic">
                <div className="topic-header">
                    <span className="title">ABOUT</span>
                </div>
                <div className="topic-content">
                    <div id="portfolio-phone-2">
                        <img src={phone2} alt=""/>
                    </div>
                    <div id="knowledge">
                        <div id="knowledge-titles">
                            <span>WEB DEVELOPER</span>
                            <span>WEB DESIGNER</span>
                            <span>MOBILE DEVELOPER</span>
                        </div>
                        <div id="knowledge-skills">
                            <p>PHP</p>
                            <p>YII2</p>
                            <p>LARAVEL</p>
                            <p>TYPESCRIPT</p>
                            <p>REACTJS</p>
                            <p>NODEJS</p>
                            <p>PHOTOSHOP</p>
                            <p>ILLUSTRATOR</p>
                            <p>ADOBE XD</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CONTACT */}

            <div className="topic">
                <div className="topic-header">
                    <span className="title">CONTACT</span>
                </div>
                <div className="topic-content" id="contact-content">
                    <div className="contact-input">
                        <form id="contact-form" onSubmit={handleSubmit}>
                                <textarea className="contact-text" name="message" id="contact-textarea" rows={16}
                                          cols={40} placeholder="MESSAGE" onChange={handleTextAreaChange}/>
                            <input className="contact-text" type="email" name="email" id="contact-email"
                                   placeholder="E-MAIL" onChange={handleInputChange}/>
                            <input className="contact-submit" type="image" src={sendButton} alt=""
                                   onSubmit={handleSubmit}/>
                        </form>
                    </div>
                    <div id="portfolio-phone-3">
                        <img src={phone3} alt=""/>
                    </div>
                    <div id="black-social-links">
                        <a href="https://github.com/lucianolima00" target="_blank" rel="noreferrer"
                           className="social-link">
                            <p>LUCIANOLIMA00</p>
                            <img src={githubBlack} alt=""/>
                        </a>
                        <a href="https://www.behance.net/lucianolima00" target="_blank" rel="noreferrer"
                           className="social-link">
                            <p>LUCIANOLIMA00</p>
                            <img src={behanceBlack} alt=""/>
                        </a>
                        <a href="https://www.linkedin.com/in/lucianolima00" target="_blank" rel="noreferrer"
                           className="social-link">
                            <p>LUCIANOLIMA00</p>
                            <img src={linkedinBlack} alt=""/>
                        </a>
                        <a href="https://www.instagram.com/luciano.lima00" target="_blank" rel="noreferrer"
                           className="social-link">
                            <p>LUCIANO.LIMA00</p>
                            <img src={instaBlack} alt=""/>
                        </a>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Landing;