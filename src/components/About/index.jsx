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
            As a versatile creator, I find joy in expressing my creativity
            across various mediums including paint, film, sound, design, web,
            and code. By realizing that coding transcends any specific medium,
            it has become a superpower that empowers me to bring my ideas to
            life.
          </p>
          <p>
            My current passion lies in the realm of web development, where I am
            fascinated by the possibilities of leveraging AI to build scalable
            and user-centric products. I am driven by the pursuit of creating
            web experiences that users love, harnessing the potential of Large
            Language Models and vector-based databases. JavaScript has captured
            my full attention and I continuously explore its capabilities.
          </p>
          <p>
            Over the past year, I have dedicated myself to two key areas of
            growth:
          </p>
          <p>
            <span>1. JavaScript and Web Technologies:</span> I have immersed
            myself in mastering the logic and intricacies of JavaScript, while
            also expanding my expertise in a range of web technologies. I am
            proficient in utilizing frameworks such as React.js, Next.js, and
            libraries like Express and Node.js. Additionally, I have a solid
            foundation in HTML5, CSS3, Sass, Styled-Components, animate.css, and
            Framer Motion.
          </p>
          <p>
            <span>2. Digital Agency and Creative Process: </span>Embracing the
            creative process, I have established a digital agency where I
            harness the power of web automation, content creation, and film
            production to serve diverse clients. Notably, I have had the
            privilege of collaborating with esteemed organizations like Kahoot,
            Inc. in delivering tailored solutions that meet their unique
            requirements.
          </p>
          <p>
            Throughout my career, I have demonstrated my ability to create and
            maintain highly scalable projects. Leveraging advanced
            infrastructure and code to manage the "single source of truth" API
            (infrastructure and code) and database for all customer financial
            data (transactions, accounts, account relationships) at Capital One.
            This API is used across all Capital One as a high-impact, high
            resiliency application used to service 160 Million users handling
            100,000+ TPS with availability and durability of 99.9^6.
            Responsibilities:
          </p>
          <p>
            Passionate about pushing the boundaries of technology and design, I
            am committed to continuous learning and exploring innovative ways to
            merge my creative instincts with my technical skills. By combining
            my love for creation, expertise in web development, and enthusiasm
            for AI-driven solutions, I aim to make a lasting impact in the field
            of full stack web development.
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
