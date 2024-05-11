import Resume from './resume.pdf';

import React from "react";
import { FaGithub } from "react-icons/fa";
import {  FaLinkedin } from "react-icons/fa";
import {  FaInstagram } from "react-icons/fa";
import {  FaTwitter } from "react-icons/fa";
import {  FaFacebook } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Ninsau</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          I am a Full Stack Developer with experience in 
          solution design and implementation of technical software projects.
          </p>
        </div>
        <a href={Resume} download className='hero--btn'>
          <button className="btn btn-primary">Download CV</button>
        </a>

        <div className="hero--icons footer--social--icon">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/ninsaufatawu"
                className="icons navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com/ninsaufatawu"
                className="icons navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.X.com/NINSAU2"
                className="icons navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter/>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/share/ZuW3S5LEVDHNHwYu/?mibextid=qi20mg"
                className="icons navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook/>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/ninsaufatawu"
                className="icons navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram/>
                
                
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/profile1.png" alt="Hero Section" />
      </div>
    </section>
  );
}
