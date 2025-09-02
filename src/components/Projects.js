/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/books.png";
import projImg3 from "../assets/img/freshcart.png";
import projImg4 from "../assets/img/seven-mentor.png";
import projImg5 from "../assets/img/finder.png";
import projImg6 from "../assets/img/creative-agency.png";
import projImg21 from "../assets/img/serum.png";
import projImg22 from "../assets/img/gymweb.png";
import projImg23 from "../assets/img/amazon.png";


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  // const texturl1="https://github.com/Prapti1103/Dormitory_Booking"
  // const gotToNewPage=()=>{
  //   navigate("https://github.com/Prapti1103/Dormitory_Booking");
  // }

  const projects = [
    {
      title: "Hotel Website",
      description: "Web-application",
      imgUrl: projImg1,
      texturl: "live demo",
      projectUrl: "https://hotelweb1234.netlify.app",
    },
    {
      title: "Mclaren Website",
      description: "Web-application",
      imgUrl: projImg21,
      texturl: "live demo",
      projectUrl: "https://mclaren1234.netlify.app/",
    },

    {
      title: "Kofi Hub",
      description: "Responsive web-application",
      imgUrl: projImg3,
      texturl: "Click here for live demo ",
      projectUrl: "https://kofihub.netlify.app/",
    },
    {
      title: "Oreo Clone",
      description: "Made Oreo clone using html,css,js",
      imgUrl: projImg4,
      texturl: "Click here for live demo ",
      projectUrl: "https://oreo-clone12.netlify.app/",
    },
    {
      title: "Boat Clone",
      description: "Made Boat clone using html,css,js",
      imgUrl: projImg5,
      texturl: "Click here for live demo ",
      projectUrl: "https://boatclone1.netlify.app/",
    },
    {
      title: "turms Clothing Brand Clone",
      description: "Made Turms Clothing Brand clone using html,css,js",
      imgUrl: projImg6,
      texturl: "Click here for live demo ",
      projectUrl: "https://turnmsclone.netlify.app/",
    },
  ];
  const project2 = [
    {
      title: "Carina Fashion Figma Design",
      description: "Made Figma design during internship",
      imgUrl: projImg2,
      texturl: "Click here for live",
      projectUrl: "https://www.figma.com/design/6ZZWv22eIbYRDDanEGuC07/Shivams-Workflow?node-id=0-1&t=17hblFItHJIJQMUS-1",

    },

    {
      title: "Kofi Hub Figma Design",
      description: "Made Figma design for Kofi Hub project",
      imgUrl: projImg22,
      texturl: "Click here for live",
      projectUrl: "https://www.figma.com/design/6ZZWv22eIbYRDDanEGuC07/Shivams-Workflow?node-id=51-30&t=17hblFItHJIJQMUS-1", // Replace with your actual URL

    },
    {
      title: "CodingGita clone",
      description: "Made a figma design for CodingGita clone",
      imgUrl: projImg23,
      texturl: "Click here for live demo ",
      projectUrl: "https://your-amazon-clone.netlify.app",
    },

  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    🚀 Explore my project portfolio to see real-world examples
                    of my work, showcasing my ability to tackle complex
                    challenges and deliver efficient, scalable, and
                    user-friendly solutions. Each project is briefly described,
                    with links to code repositories and live demos, reflecting
                    my dedication to quality and innovation. Dive in to witness
                    my skills in action and how I bring ideas to life!
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center"
                      id="pills-tab"
  
                    >

                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible
                          ? "animate__animated animate__slideInUp"
                          : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {project2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};