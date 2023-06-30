import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import './index.scss';
import { FaHandshake } from 'react-icons/fa';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['a', 'r', 'i', 'o', ' ', 'O', 'l', 'i', 'v', 'e', 'r'];
  const jobArray = 'Full-Stack Web Developer'.split('');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _10`}>i</span>
          <span className={`${letterClass} _11`}> </span>
          <span className={`${letterClass} _12`}>
            <FaHandshake /> <br />
          </span>
        </h1>
        <br />
        <h1>
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={logo} alt="developer"></img>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
        </h1>
        <br />
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={26}
          />{' '}
          <br></br>
        </h1>
        <h2>
          Javascript & Java Expert | AWS Certified | Filmmaker | Cycling &
          Basketball
          <br></br>
        </h2>
        <Link to="/contact" className="flat-button">
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Home;
