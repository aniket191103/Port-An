import React from 'react';
import { useInView } from 'react-intersection-observer';
import './WhatIdo.css'; // Ensure the path is correct
import { FaCss3, FaHtml5, FaReact } from 'react-icons/fa';
import JS from '../images/JS.png'; // Adjust the path if necessary
import illustrator2 from '../images/Illustrator2.jpg';

const WhatIdo = () => {
    const { ref: leftRef, inView: leftInView } = useInView({
        triggerOnce: true,
        threshold: 0.25, // Trigger when 25% of the element is in view
    });

    const { ref: rightRef, inView: rightInView } = useInView({
        triggerOnce: true,
        threshold: 0.25,
    });

    return (
        <div className='whatIdo'>
            <h1 className="heading">What I Do?</h1>
            <div className="content">
                <div className={`illustrator-flex ${leftInView ? 'show' : ''}`} ref={leftRef}>
                    <img className="illustrator" src={illustrator2} alt='Illustrator design' />
                </div>
                <div className={`container right ${rightInView ? 'show' : ''}`} ref={rightRef}>
                    <h3 className="sub-heading">Front End Development</h3>
                    <div className="Front-End">
                        <div className='html-container' data-title="HTML5">
                            <FaHtml5 className="icon html" size={40} />
                        </div>
                        <div className='css-container' data-title="CSS3">
                            <FaCss3 className="icon css" size={40} />
                        </div>
                        <div className='react-container' data-title="React">
                            <FaReact className="icon react" size={40} />
                        </div>
                        <div className="js-container" data-title="JavaScript">
                            <img src={JS} alt="JS Logo" className="icon js-icon" />
                        </div>
                    </div>
                    <ul className="tasks">
                        <li className="task-item">
                            <span className="task-icon">⚡</span> Building responsive website front end using React-Redux
                        </li>
                        <li className="task-item">
                            <span className="task-icon">⚡</span> Creating application backend in Node, Express
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WhatIdo;
