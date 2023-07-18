import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import Review from '../Reviews';
import Tours from '../Tours';
import { useEffect, useState } from 'react';

const REVIEW = 'review';
const TOURS = 'tours';

const Widgets = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [widgetToShow, setWidgetToShow] = useState(REVIEW);

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover-2');
    }, 2000);
  }, []);

  return (
    <div>
      <div className="container2 widgets-page">
        <div className="widgets">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'widgets'.split('')}
              idx={15}
            />
          </h1>
          <button className="btn">Click</button>
          <button className="btn">Click</button>
          <button
            className="btn"
            onClick={() => {
              setWidgetToShow(TOURS);
            }}
          >
            Tours
          </button>
          <button
            className="btn"
            onClick={() => {
              setWidgetToShow(REVIEW);
            }}
          >
            Review
          </button>
        </div>
        <div className="single-widget">
          {widgetToShow === REVIEW && <Review></Review>}
          {widgetToShow === TOURS && <Tours></Tours>}

          {/* <Project></Project> */}
        </div>
      </div>
      <Loader type="pacman" />
    </div>
  );
};

export default Widgets;
