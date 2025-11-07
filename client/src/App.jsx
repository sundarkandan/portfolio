import { useState } from "react";
import "./App.css";
import Resume from "./assets/K_Sundar_MERN_Stack_Developer_Resume.pdf"
import profilePic from "./assets/profile-pic.png";
import aboutPic from "./assets/about-pic.jpeg";
import experienceIcon from "./assets/experience.png";
import educationIcon from "./assets/education.png";
import arrowIcon from "./assets/arrow.png";
import linkedinIcon from "./assets/linkedin.png";
import githubIcon from "./assets/github.png";
import checkmarkIcon from "./assets/checkmark.png";
import project1 from "./assets/project-1.png";
import project2 from "./assets/project-2.png";

import emailIcon from "./assets/email.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const openLink = (url) => {
    window.location.href = url;
  };

  return (
    <>
      
      <nav id="desktop-nav">
        <div className="logo">Sundar K</div>
        <div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      
      <nav id="hamburger-nav">
        <div className="logo">Sundar K</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${menuOpen ? "open" : ""}`}>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </div>
        </div>
      </nav>

     
      <section id="profile">
        <div className="section__pic-container">
          <img src={profilePic} alt="Sundar K profile" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Sundar K</h1>
          <p className="section__text__p2">MERN Stack Developer</p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick={() => openLink(Resume)}
              
            >
              Resume
            </button>
            <button
              className="btn btn-color-1"
              onClick={() => openLink("#contact")}
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="icon"
              onClick={() => openLink("https://www.linkedin.com/in/sundar-kandan/")}
            />
            <img
              src={githubIcon}
              alt="GitHub"
              className="icon"
              onClick={() => openLink("https://github.com/sundarkandan")}
            />
          </div>
        </div>
      </section>

     
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img src={aboutPic} alt="About" className="about-pic" />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img src={experienceIcon} alt="Experience" className="icon" />
                <h3>Fresher</h3>
                <p>MERN Stack Development</p>
              </div>
              <div className="details-container">
                <img src={educationIcon} alt="Education" className="icon" />
                <h3>Education</h3>
                <p>B.Sc. Computer Science(Final Year)</p>
              </div>
            </div>
            <div className="text-container">
              <p>
               I build full-stack web applications using MongoDB, Express, React, and Node.js. Passionate about creating efficient, scalable, and user-friendly solutions.
              </p>
            </div>
          </div>
        </div>
        <img
          src={arrowIcon}
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => openLink("#experience")}
        />
      </section>

      
      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Skills</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                {["HTML", "CSS", "Bootstrap", "React.js"].map(
                  (skill, i) => (
                    <article key={i}>
                      <img src={checkmarkIcon} alt="check" className="icon" />
                      <div>
                        <h3>{skill}</h3>
                       
                      </div>
                    </article>
                  )
                )}
              </div>
            </div>

            <div className="details-container">
              <h2 className="experience-sub-title">Backend Development</h2>
              <div className="article-container">
                {[
                  { skill: "MongoDb", level: "Basic" },
                  { skill: "Node JS", level: "Intermediate" },
                  { skill: "Express JS", level: "Intermediate" },
                  
                ].map((item, i) => (
                  <article key={i}>
                    <img src={checkmarkIcon} alt="check" className="icon" />
                    <div>
                      <h3>{item.skill}</h3>
                      
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
        <img
          src={arrowIcon}
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => openLink("#projects")}
        />
      </section>

    
      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            
              <div className="details-container color-container">
                <div className="article-container">
                  <img
                    src={project1}
                    alt={`Project`}
                    className="project-img"
                  />
                </div>
                <h2 className="experience-sub-title project-title">
                  Attendance System
                </h2>
                <center><p>Working with Large Amount of data using Client and Admin role</p></center>
                <div className="btn-container">
                  <button
                    className="btn btn-color-2 project-btn"
                    onClick={() => openLink("https://github.com/sundarkandan/project/tree/main/attandance%20system")}
                  >
                    Github
                  </button>
                  
                </div>
              </div>

              <div className="details-container color-container">
                <div className="article-container">
                  <img
                    src={project2}
                    alt={`Project`}
                    className="project-img"
                  />
                </div>
                <h2 className="experience-sub-title project-title">
                  Movie Ticket Booking System
                </h2>
                 <center><p>Handling file inputs like videos and image uploading to the server and access it from server</p></center>
                <div className="btn-container">
                  <button
                    className="btn btn-color-2 project-btn"
                    onClick={() => openLink("https://github.com/sundarkandan/project/tree/main/theatre")}
                  >
                    Github
                  </button>
                 
                </div>
              </div>
            
          </div>
        </div>
        <img
          src={arrowIcon}
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => openLink("#contact")}
        />
      </section>

     
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img src={emailIcon} alt="Email icon" className="icon contact-icon" />
            <p><a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGMhhnstHNdMSZDsnpQXxjWptRFQrlLJMtFSvxgldDGrGJRkkCWVgPBrjKKCsxqNwvqwFld">sundarkandan23506@gmail.com</a></p>
          </div>
          <div className="contact-info-container">
            <img src={linkedinIcon} alt="LinkedIn icon" className="icon contact-icon" />
            <p><a href="https://www.linkedin.com/in/sundar-kandan/">LinkedIn</a></p>
          </div>
        </div>
      </section>

    
      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      
      </footer>
    </>
  );
}

export default App;
