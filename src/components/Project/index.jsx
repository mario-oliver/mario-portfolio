import React from 'react';
import Tour from './Project';
import { useEffect } from 'react';
import { useState } from 'react';
const url = 'https://course-api.com/react-tours-project';
import Loader from 'react-loaders';

const Projects = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return (
      <main>
        <Loader type="pacman" />
      </main>
    );
  }

  return (
    <div className="title">
      <h2>Our Tours</h2>
      <div className="title-underline"></div>
      <div className="tours">
        {tours.map((tour) => {
          return <Tour key={tour.id} tour={tour} removeTour={removeTour} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
