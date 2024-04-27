import openOnGit from "../../assets/open-on-git.png";
import {Link} from "react-router-dom";
import cardOpen from "../../assets/card-open-button.png";
import React from "react";
import PropTypes from "prop-types";

function Card(props: {
    id: React.Key;
    image: string | undefined;
    name: string | undefined;
    first_tech_color: string | undefined;
    first_tech_name: string | undefined;
    second_tech_color: string | undefined;
    second_tech_name: string | undefined;
    url: string | undefined;
}) {
    return (
        <div className="card" key={props.id}>
            <div className="card-body">
                <div className="card-picture">
                    <img src={props.image} alt={props.name}/>
                </div>
                <div className="card-content">
                    <div className="card-technologies">
                        <div className="tech-dot" style={{backgroundColor: props.first_tech_color}}/>
                        <div className="tech-name">
                            <p>{props.first_tech_name}</p>
                        </div>
                        <div className="tech-dot" style={{backgroundColor: props.second_tech_color}}/>
                        <div className="tech-name">
                            <p>{props.second_tech_name}</p>
                        </div>
                    </div>
                    <div className="card-link">
                        <a href={props.url} target="_blank">
                            <img src={openOnGit} alt=""/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="card-info">
                <div className="card-title">
                    <p>{props.name}</p>
                </div>
                <div className="card-button">
                    <Link to={`project/${props.id}`}>
                        <img src={cardOpen} alt=""/>
                    </Link>
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    first_tech_color: PropTypes.string,
    first_tech_name: PropTypes.string,
    second_tech_color: PropTypes.string,
    second_tech_name: PropTypes.string,
    url: PropTypes.string,
}

export default Card;