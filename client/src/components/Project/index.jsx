import React from 'react';
import { useState } from 'react';
import projects from '../../data/projects_data';
import Loader from 'react-loaders';
import Project from './Project';
import './index.scss';

const Projects = () => {
  const [projectData, setProjectData] = useState([...projects]);

  return (
    <div className="tours">
      {projectData.map((project) => {
        return <Project key={project.id} project={project} />;
      })}
    </div>
  );
};

export default Projects;
