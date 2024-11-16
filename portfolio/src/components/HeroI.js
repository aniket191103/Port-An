import React from 'react';
import './Hero1.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import illustrator from "../images/illustrator.jpg";
// import WhatIdo from '../components/WhatIdo';
// import Hero from '../components/Hero';

const HeroI = () => {
  return (
    <div className="home-container">
      <div className="home">
        <header className="home-header">
          <h1>Aniket Srivastava</h1>
          <p>
            A passionate individual who always thrives to work on end to end products
            which develop sustainable and scalable social and technical systems to create impact.
          </p>
          <div className="social-icons">
            <a className='git' href="https://github.com/aniket191103" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>
            <a className='linkedIn' href="https://www.linkedin.com/in/aniket-srivastava-167011269/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
            <a className='mail' href="mailto:aniketsrivastava1911@gmail.com"><FaEnvelope size={30} /></a>
          </div>
        </header>
        <div className="home-illustration">
          <img src={illustrator} alt="Illustration" />
        </div>
      </div>
    </div>
  );
};

export default HeroI;
