import './style.css';

import logo from '../../assets/lima-logo-black.png';
import phone1 from '../../assets/iphone-portifolio-1.png';
import phone2 from '../../assets/iphone-portifolio-2.png';
import behanceWhite from '../../assets/behance-white.png'
import githubWhite from '../../assets/github-white.png'
import linkedinWhite from '../../assets/linkedin-white.png'
import instaWhite from '../../assets/insta-logo-white.png'

function Landing() {
    return(
        <div id='page-landing'>
            <div id="background-middle">
            </div>
            <div className='content'>
                <div id='logo'>
                    <img src={logo} alt='LIMA' />
                </div>
                <div id='landing-phrase'>
                    <span id="create">CREATE</span>
                    <span id="everything">EVERYTHING</span>
                </div>
                <div></div>
                <div id="portfolio-phone-1">
                    <img src={phone1} alt="" />
                </div>

                <div id="social-background">
                </div>
                <div id="social-links">
                    <a href="https://www.behance.net/lucianolima00" target="_blank">
                        <img src={behanceWhite} alt="" className="social-link-img"/>
                    </a>
                    <a href="https://github.com/lucianolima00" target="_blank">
                        <img src={githubWhite} alt="" className="social-link-img"/>
                    </a>
                    <a href="https://www.linkedin.com/in/lucianolima00" target="_blank">
                        <img src={linkedinWhite} alt="" className="social-link-img"/>
                    </a>
                    <a href="https://www.instagram.com/luciano.lima00" target="_blank">
                        <img src={instaWhite} alt="" className="social-link-img"/>
                    </a>
                </div>

                <div id="about-content">
                    <span className="title">ABOUT</span>
                    <div id="portfolio-phone-2">
                        <img src={phone2} alt="" />
                    </div>
                    <div id="knowledge">
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
                            <p>VUE</p>
                            <p>JQUERY</p>
                        </div>
                    </div>
                </div>
                <div id="projects">
                    <span className="title">PROJECTS</span>
                </div>
            </div>
        </div>
    );
}

export default Landing;