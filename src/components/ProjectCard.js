/* eslint-disable jsx-a11y/alt-text */
import { Col } from "react-bootstrap";
// import React,{useState} from 'react';
// const texturl1="https://github.com/Prapti1103/Dormitory_Booking"
export const ProjectCard = ({ title, description, imgUrl, texturl, projectUrl }) => {
  
  // const texturl1="https://github.com/Prapti1103/Dormitory_Booking";
  const myfun = () => {
    if (projectUrl) {
      window.open(projectUrl, "_blank");
    } else {
      window.open("https://github.com/shivamsinghnegi-ai", "_blank");
    }
  }
  
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx" >
          <h4>{title}</h4>
          <span>{description}</span>
          <a href={projectUrl || "https://github.com/shivamsinghnegi-ai"} target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>{texturl}</a>
        
           </div>
      </div>
    </Col>
  )
}
