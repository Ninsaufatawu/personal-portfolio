import { Link } from "react-scroll";

import React from "react";
import { FaGithub } from "react-icons/fa";
import {  FaLinkedin } from "react-icons/fa";
import {  FaInstagram } from "react-icons/fa";
import {  FaTwitter } from "react-icons/fa";
import {  FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
      <div>
        <img src="./img/ninsau-logo.png" alt="Logoipsum" className="footer_logo" />
      </div>
        <div className="footer--items">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="heroSection"
                className="text-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="MyPortfolio"
                className="text-md"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="AboutMe"
                className="text-md"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className="text-md"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="testimonial"
                className="text-md"
              >
                Testimonials
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer--social--icon">
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
      <hr className="divider" />
      <div className="footer--content--container">
        <p className="footer--content">Made with 💖 by Ninsau</p>
        <div className="footer--social--icon">
          <ul>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Privacy_Policy"
                className="text-sm"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Terms_of_Service"
                className="text-sm"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Cookies_Settings"
                className="text-sm"
              >
                Cookies Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
