import React, { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover-2');
    }, 2000);
  }, []);

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'about me'.split('')}
            idx={15}
          />
        </h1>
        <p>
          I love creating... creating regardless of the medium - paint, film,
          sound, design, web, and most importantly, code. Once I decoupled the
          medium from the act of creating, coding became a superpower.
        </p>
        <p>
          My current obsession is with web tools, specifically leveraging AI.
          Discovering how to create a product that scales, that users loves, and
          that utilizes Large Language Models and vector-based databases.
          Sprinkle in my latest love of Javascript and you have my complete
          attention.
        </p>
        <p>
          I spent the last year doing two things:{' '}
          <ol>
            1) Learning how to leverage logic in Javascript and web technologies
            - mainly with React.js, Next.js, Express, Node.js, HTML5, CSS3,
            Sass, Styled-Components, animate.css, and Framer Motion.{' '}
          </ol>
          <ol>
            2) And, Fully immersing myself into the creative process through the
            creation of digital agency focused on leverage web automation,
            content creation, and film production for different clients,
            including Kahoot, Inc.
          </ol>
        </p>
        <p>
          My career took me to creating and maintaining a Highly Scalable...
          Vercel AI, Tailwind.css, Next.js, and Three.js.
        </p>
      </div>
    </div>
  );
};

export default About;
