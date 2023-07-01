import React, { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaAws,
} from 'react-icons/fa';

const About = () => {
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
              strArray={'about me'.split('')}
              idx={15}
            />
          </h1>
          <h2> (336) 624-2373 | marioaoliver93@gmail.com | Washington, DC</h2>

          <p>
            I love creating... creating regardless of the medium - paint, film,
            sound, design, web, and most importantly, code. Once I decoupled the
            medium from the act of creating, coding became a superpower.
          </p>
          <p>
            My current obsession is with web tools, specifically leveraging AI.
            Discovering how to create a product that scales, that users loves,
            and that utilizes Large Language Models and vector-based databases.
            Sprinkle in my latest love of Javascript and you have my complete
            attention.
          </p>
          <p>
            I spent the last year doing two things:{' '}
            <ol>
              1) Learning how to leverage logic in Javascript and web
              technologies - mainly with React.js, Next.js, Express, Node.js,
              HTML5, CSS3, Sass, Styled-Components, animate.css, and Framer
              Motion.{' '}
            </ol>
            <ol>
              2) And, Fully immersing myself into the creative process through
              the creation of digital agency focused on leverage web automation,
              content creation, and film production for different clients,
              including Kahoot, Inc.
            </ol>
          </p>
          <p>
            My career took me to creating and maintaining a Highly Scalable...
            Vercel AI, Tailwind.css, Next.js, and Three.js.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FaHtml5 color="#f06529" />
            </div>
            <div className="face2">
              <FaCss3 color="#5ed4f4" />
            </div>
            <div className="face3">
              <FaReact color="#28a4d9" />
            </div>
            <div className="face4">
              <FaJsSquare color="#efd81d" />
            </div>
            <div className="face5">
              <FaNodeJs color="#407f37" />
            </div>
            <div className="face6">
              <FaAws color="#ec4d28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
