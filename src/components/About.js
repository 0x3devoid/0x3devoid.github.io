import React from "react";

function About() {
  return (
    <div className="about__container">
      <div className="about__content">
        <p className="gradient-text">ABOUT ME</p>
        <h1>Let's walk back a few years...</h1>

        <p>
          I'm a self-taught full-stack developer with a passion for building
          applications that solve real-world problems. I started my journey in
          2018 and have since worked on a variety of projects ranging from
          simple web applications to complex blockchain projects. I'm always
          eager to learn new technologies and improve my skills.
        </p>

        <p>
          I'm proficient in HTML, CSS, JavaScript, React, Node.js, Express.js,
          MongoDB, Python, Flask, SQL, Git, GitHub, and Solidity. I'm currently
          looking for opportunities to work on exciting projects and collaborate
          with other developers.
        </p>

        <h1>Recently...</h1>

        <p>
          I'm currently working on a personal project that involves building a
          decentralized application (dApp) on the Ethereum blockchain. I'm also
          learning how to use smart contracts to create a decentralized finance
          (DeFi) application.
        </p>
      </div>

      <div className="skills">
        <h3 className="gradient-text">Skills</h3>
        <ul className="skills__list">
          <li>
            <span>HTML</span>
          </li>
          <li>
            <span>CSS</span>
          </li>
          <li>
            <span>JavaScript</span>
          </li>
          <li>
            <span>React Js</span>
          </li>
          <li>
            <span>Node.js</span>
          </li>
          <li>
            <span>Express.js</span>
          </li>
          <li>
            <span>MongoDB</span>
          </li>
          <li>
            <span>Python</span>
          </li>
          <li>
            <span>Flask</span>
          </li>
          <li>
            <span>SQL</span>
          </li>
          <li>
            <span>Git</span>
          </li>
          <li>
            <span>GitHub</span>
          </li>
          <li>
            <span>Solidity</span>
          </li>
          <li>
            <span>Rust</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
