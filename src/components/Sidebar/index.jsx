import React from 'react';
import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo_sub.svg';

import {
  FaHome,
  FaUser,
  FaEnvelope,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" className="active" to="/">
          <FaHome color="#ffd700" />
        </NavLink>
        <NavLink exact="true" to="/about" className="about-link">
          <FaUser color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" to="/contact" className="contact-link">
          <FaEnvelope color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/mario-oliver/"
          >
            <FaLinkedin color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
