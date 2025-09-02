import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import SchoolIcon from "@material-ui/icons/School";
// import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <>
      <div className="exp-title">
        <h3>WHAT I HAVE DONE SO FAR</h3>
        <h1>WORK EXPERIANCE</h1>
      </div>
      <div className="experience" id="experiences">
        <VerticalTimeline lineColor=" rgba(170, 54, 124, 0.5)">
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="October 2024"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
          >
            <div>
              <h3 className="vertical-timeline-element-title">
              Beginner Frontend Developer
              </h3>
              <h5>Self-Learning & College Assignments</h5>
              <p>◦ Started learning HTML, CSS & JavaScript through college projects.</p>
              <p>◦ Built small websites with interactive elements like carousels and video controls.
              </p><p>◦ Created personal Ko-fi hub project and explored frontend design principles.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="November 2024"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
            MERN Stack Explorer
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
            College MERN Project
            </h5>
            <p>◦ Learned how to set up MongoDB, Express.js and integrate with React frontend.</p>
            <p>◦ Created MongoDB schemas for contact form, coffee equipment & cold coffee products.</p>
            <p> ◦ Designed UI using Tailwind CSS and started using Git & GitHub for version control.</p>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="December 2024"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title ">
            Frontend Intern (UI + React)
            </h3>

            <h5 className="vertical-timeline-element-subtitle">
            Carina Fashion (Internship)
            </h5>

            <p>◦ Created Figma wireframes for e-commerce dashboards.</p>
            <p>◦ Worked with React and Tailwind CSS to build components and improve UI/UX.</p>
            <p>◦ Integrated APIs and dynamic rendering with useEffect and state management.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="January 2025"
            iconStyle={{ background: "#E9D35B", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title ">
            MERN Stack Learner
            </h3>

            <h5 className="vertical-timeline-element-subtitle">
            Self-Development
            </h5>

            <p>◦ Started building full-stack projects using the MERN stack (MongoDB, Express.js, React, Node.js).</p>
            <p>◦ Learned how to set up and connect frontend and backend using RESTful APIs.</p>
            <p>◦ Gained hands-on experience with MongoDB and Mongoose to define schemas and manage data.</p>
            <p>◦ Focused on React fundamentals like props, state, and useEffect to dynamically fetch and render data.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Feburary 2025"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title ">
            Advanced Project Builder
            </h3>

            <h5 className="vertical-timeline-element-subtitle">
            Kofi Hub (Class Project)
            </h5>

            <p>◦ Built full-stack coffee e-commerce site with filtering, testimonial & product CRUD features.</p>
            <p>◦ Implemented review system and category-based filtering using MongoDB and React hooks.</p>
            <p>◦ Handled complex data fetching and component reusability in React.</p>
          </VerticalTimelineElement>



        </VerticalTimeline>
      </div>
    </>
  );
}

export default Experience;
