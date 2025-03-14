import React from 'react';
import '../styles/components/ProjectCard.scss';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div
        className="project-image"
        style={{
          backgroundImage: `url(${project.image})`, // Dynamisch das Bild setzen
        }}
      ></div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="buttons">
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
          Live ansehen
        </a>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
}
