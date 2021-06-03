import './style.css';

import logo from '../../assets/lima-logo-black.png';
import phone1 from '../../assets/iphone-portifolio-1.png';
import backgroundMiddle from '../../assets/background-middle.png'
import behanceWhite from '../../assets/behance-white.png'
import githubWhite from '../../assets/github-white.png'
import linkedinWhite from '../../assets/linkedin-white.png'
import instaWhite from '../../assets/insta-logo-white.png'
import socialBackground from '../../assets/social-background.png'

function Landing() {
    return(
        <div id='page-landing'>
            <img src={backgroundMiddle} id='background-middle' alt=""/>
            <div className='content'>
                <div id='logo'>
                    <img src={logo} alt='LIMA' />
                </div>
                <div id='title'>
                    <span id="create">CREATE</span>
                    <span id="everything">EVERYTHING</span>
                </div>
                <div></div>
                <div id="portfolio-phone-1">
                    <img src={phone1} alt="" />
                </div>
                <img src={socialBackground} alt="" id="social-background"/>
                <div id="social-links">
                    <img src={behanceWhite} alt="" className="social-link-img"/>
                    <img src={githubWhite} alt="" className="social-link-img"/>
                    <img src={linkedinWhite} alt="" className="social-link-img"/>
                    <img src={instaWhite} alt="" className="social-link-img"/>
                </div>
            </div>
        </div>
    );
}

export default Landing;