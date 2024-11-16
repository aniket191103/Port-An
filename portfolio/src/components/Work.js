import "./Card.css"
import React from 'react' 
import Card from "./Card"
import projectCardData from "./Work.data"
import './Wrok.css'
// import { NavLink } from "react-router-dom"
const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">

      </h1>
      <div className="project-container">
        {
            projectCardData.map((val,index)=>{
                return (
                    <Card key={index}
                    imgsrc={val.imgsrc}
                    tittle={val.tittle}
                    text= {val.text}
                    view = {val.view}
                    source= {val.source}/>
                )
            })
        }
      </div>
       
    </div>
  )
}

export default Work
