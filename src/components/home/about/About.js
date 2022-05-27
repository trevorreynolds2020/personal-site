import React from 'react';

import gradPic from "../../../assets/images/gradpic.png"

import "../../_common/common.css"
import "./about.css"

import ReactGA from 'react-ga';

const About = () => {

    const onLinkClick = () => {
        ReactGA.event({
            category: 'User',
            action: 'Click on CV'
        });
    }

    return (
        <div className="home-section container-about">        
            <img className="profile-picture-about" alt="profilepic" src={gradPic} />
            <div className="about-text">
                <span className="about-text-main">I'm <span className="about-name">Trevor</span></span>
                <br/><span className="about-text-subtitle">Software Engineer</span>
                <br/><br/>I love coding
                <br/>Some of my interests are: UX/UI design, Full Stack development, App development
                <br/><br/>If you want to know more: <a onClick={onLinkClick} href="https://docs.google.com/document/d/1_S8W1z_u70k0Z5Z1k1unJ1De4AV3L8PNml2VhypvMz0/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><span className="about-cv">here is my resume.</span></a>
                <br/><br/>Keep scrolling to see some of the projects I've worked on.
            </div>                
        </div>
    );
}

export default About;