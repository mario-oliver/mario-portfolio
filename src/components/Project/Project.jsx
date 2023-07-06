import React from 'react';
import { useState } from 'react';

const Project = ({ project }) => {
  let { image, info, name, price, company } = project;
  let [readMore, isReadMore] = useState(false);

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
        </p>
      </div>
    </article>
  );
};

export default Project;
