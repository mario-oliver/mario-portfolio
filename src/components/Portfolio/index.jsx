import React, { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover-2');
    }, 2000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'portfolio'.split('')}
              idx={15}
            />
          </h1>
          <h2> (336) 624-2373 | marioaoliver93@gmail.com | Washington, DC</h2>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
