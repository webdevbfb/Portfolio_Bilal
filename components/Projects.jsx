import React from 'react';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';
import '../styles/components/Projects.scss';

export default function Projects() {
  return (
    <section className="projects">
      <h2>Meine Projekte</h2>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}