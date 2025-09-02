import React from 'react';
import ProjectDemoSection from './ProjectDemoSection';
import '../App.css';

// Sample project data - replace with your actual project data
const projectDemo = {
  title: "Kofi Hub",
  date: "Feb 27, 2025",
  description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment processing.",
  videoUrl: "https://www.youtube.com/sW6uBqPOpHQ", // Replace with your actual video URL
  thumbnailUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  technologies: ["React", "Node.js", "MongoDB", "Responsive"]
};

function App() {
  return (
    <div className="app-container">
      <div className="content-wrapper">
        <h1 className="portfolio-title">My Portfolio</h1>
        
        {/* Project Demo Section */}
        <ProjectDemoSection 
          title={projectDemo.title}
          date={projectDemo.date}
          description={projectDemo.description}
          videoUrl={projectDemo.videoUrl}
          thumbnailUrl={projectDemo.thumbnailUrl}
          technologies={projectDemo.technologies}
        />
      </div>
    </div>
  );
}

export default App;