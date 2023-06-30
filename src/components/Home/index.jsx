import React from 'react';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import './index.scss';
import { FaHandshake } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi <FaHandshake /> <br />
        </h1>
        <br />
        <h1>
          I'm <img src={logo} alt="developer"></img>
          ario Oliver
          <br />
        </h1>
        <br />
        <h1>
          Full-Stack Web Developer <br></br>
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
