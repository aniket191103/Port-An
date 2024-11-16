import "./Hero2.css"
import React from 'react'

const Hero2 = (props) => {
  return (
    <div className="hero-dad">

    <div className="hero-img">
      <div className="heading">
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
      </div>
    </div>
    </div>
  )
}

export default Hero2;
