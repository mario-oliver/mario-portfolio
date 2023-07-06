import React from 'react';
import { useState } from 'react';
import projects from '../../data/projects_data';
import Loader from 'react-loaders';
import Project from './Project';

const Projects = () => {
  const [projectData, setProjectData] = useState([...projects]);

  return (
    <div className="title">
      <h2>Our Tours</h2>
      <div className="title-underline"></div>
      <div className="tours">
        {projectData.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </div>
      <Loader type="pacman" />
    </div>
  );
};

export default Projects;
