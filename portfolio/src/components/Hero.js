import React from 'react';
import './Hero.css';
import Node from '../images/Node.png';
import herokuIcon from '../images/illustrator3.jpg';
import Mongo from '../images/Mongo.png';
import Docker from '../images/Docker.png';
import MySql from '../images/MySql.png';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
    const { ref: imageRef, inView: imageInView } = useInView({
        triggerOnce: true,
        threshold: 0.25,
    });

    const { ref: textRef, inView: textInView } = useInView({
        triggerOnce: true,
        threshold: 0.25,
    });

    return (
        <div className="hero-container">
            <div className={`hero-content ${imageInView && textInView ? 'show' : ''}`}>
                <div className={`hero-image ${imageInView ? 'show' : ''}`} ref={imageRef}>
                    <img src={herokuIcon} alt="Heroku" className="hero-icon"/>
                </div>
                <div className={`hero-text ${textInView ? 'show' : ''}`} ref={textRef}>
                    <h1>Back-End Developement</h1>
                    <div className="hero-icons">
                        <div className="icon-container" data-title="Node.js">
                            <img src={Node} alt="Node"  className='logo'/ >
                        </div>
                        <div className="icon-container" data-title="MongoDB">
                            <img src={Mongo} alt="Mongo"className='logo' />
                        </div>
                        <div className="icon-container" data-title="Docker">
                            <img src={Docker} alt="Docker" className='logo'/>
                        </div>
                        <div className="icon-container" data-title="MySQL">
                            <img src={MySql} alt="MySQL"className='logo' />
                        </div>
                    </div>
                    <ul>
                        <li>Experience working on backend technologies</li>
                        <li>Hosting and maintaining websites on virtual machine instances along with integration of
                            database
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Hero;
