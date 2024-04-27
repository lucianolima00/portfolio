import {Link} from "react-router-dom";
import logo from "../../assets/lima-logo-black.png";
import React from "react";
import arrowButton from '../../assets/arrow-button.svg'

function Header(props: { backButton: boolean }) {
    return (
        <div id="header">
            <div id="header-logo-back">
                <div id="logo-container">
                    <Link id='logo' to="/">
                        <img src={logo} alt='LIMA'/>
                    </Link>
                </div>
                {props.backButton ? (
                    <Link id='back-home' to="/">
                        <img src={arrowButton} alt=''/>
                        <b>BACK TO HOME</b>
                    </Link>
                ) : (
                    <div></div>
                )}
            </div>
            <div id='header-phrase'>
                <span id="create">CREATE</span>
                <span id="everything">EVERYTHING</span>
            </div>
        </div>
    );
}

export default Header;