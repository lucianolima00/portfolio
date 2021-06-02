import React from "react";
import './style.css';

import logo from '../../assets/lima-logo-black.png';
import phone1 from '../../assets/iphone-portifolio-1.png';
import backgroundMiddle from '../../assets/background-middle.png'

function Landing() {
    return(
        <div id='page-landing'>
            <img src={backgroundMiddle} id='background-middle'/>
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
            </div>
        </div>
    );
}

export default Landing;