import React, { useState } from 'react';
import { Calendar, Play } from 'lucide-react';
import '../projectDemo.css';

const ProjectDemoSection = ({
  title,
  date,
  description,
  videoUrl,
  thumbnailUrl,
  technologies = []
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
    const videoElement = document.getElementById('project-video');
    if (videoElement instanceof HTMLVideoElement) {
      videoElement.play();
    }
  };

  return (
    <section className="project-demo-section">
      <div className="project-demo-header">
        <h2 className="project-title">
          <Play className="icon-play" />
          Project Demo
        </h2>
      </div>
      
      {/* Video Container */}
      <div className="video-container">
        {/* Video Thumbnail with Play Button Overlay */}
        {!isPlaying && (
          <div className="thumbnail-overlay">
            <img 
              src={thumbnailUrl} 
              alt="Project thumbnail" 
              className="thumbnail-image"
            />
            <button 
              onClick={handlePlayClick}
              className="play-button"
            >
              <Play className="play-icon" />
            </button>
          </div>
        )}
        
        {/* Actual Video */}
        <video 
          id="project-video"
          className={`project-video ${!isPlaying ? 'hidden' : ''}`} 
          controls
          poster={thumbnailUrl}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Project Details */}
      <div className="project-details">
        <div className="project-header">
          <h3 className="project-name">{title}</h3>
          <div className="project-date">
            <Calendar className="icon-calendar" />
            <span>{date}</span>
          </div>
        </div>
        <p className="project-description">{description}</p>
        
        {/* Technologies */}
        {technologies.length > 0 && (
          <div className="technologies-container">
            <div className="technologies-list">
              {technologies.map((tech, index) => (
                <span key={index} className="technology-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDemoSection;
