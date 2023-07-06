import React from 'react';
import { useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
  let { image, info, name, price, company } = project;
  let [readMore, isReadMore] = useState(false);
  const Jobify = 'Jobify';

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img"></img>
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 180)}...`}{' '}
          <button
            type="button"
            className="info-btn"
            onClick={() => isReadMore(!readMore)}
          >
            {!readMore ? 'Read More' : 'Read Less'}
          </button>
          {!(name === Jobify) ? (
            <Link
              to="/chatgpt"
              className="flat-button"
              style={{ margin: '30px' }}
            >
              open
            </Link>
          ) : (
            <h1>Coming Soon</h1>
          )}
        </p>
      </div>
    </article>
  );
};

export default Project;
