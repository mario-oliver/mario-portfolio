import React, { useState } from 'react';
import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo_sub.svg';

import {
  FaHome,
  FaUser,
  FaPuzzlePiece,
  FaLinkedin,
  FaYoutube,
  FaGithub,
} from 'react-icons/fa';

const Sidebar = () => {
  const [showSideNav, setShowSideNav] = useState(false);

  const toggleSideNav = () => {
    setShowSideNav(!showSideNav);
  };

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" className="active" to="/">
          <FaHome color="#c4c4c4" />
        </NavLink>
        <NavLink exact="true" to="/about" className="about-link">
          <FaUser color="#c4c4c4" />
        </NavLink>
        <NavLink exact="true" to="/portfolio" className="contact-link">
          <FaPuzzlePiece color="#c4c4c4" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/mario-oliver/"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/mario-oliver"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/@mariooliver4051/videos"
          >
            <FaYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
