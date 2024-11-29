import React from "react";
import Typewriter from "typewriter-effect"; // Import typewriter-effect package
import "./index.css"; // Import the CSS file

const About = () => {
  const Bio = {
    name: "Madhu Babu",
    roles: [
      "Full Stack Developer",
      "Android Developer",
      "UI/UX Designer",
      "Programmer",
    ],
    description:
      "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning, I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
    resume:
      "https://drive.google.com/file/d/1bG3R4kaZGKm2AHf324N12lMh0xtQ-CyP/view?usp=sharing",
    github: "https://github.com/mb3984",
    linkedin: "https://www.linkedin.com/feed/",
    image: "https://via.placeholder.com/300", // Replace with your actual image URL
  };

  return (
    <div className="about-container">
      {/* Main Content */}
      <div className="about-content">
        <div className="about-image-container">
          <img
            src="https://res.cloudinary.com/dpd55e6mf/image/upload/v1732844360/portfolioimage_jjzaye.png"
            alt="PortFolio"
            className="about-image"
          />
        </div>
        <div className="about-text">
          <h1 className="about-title">Hi, I am {Bio.name}</h1>

          {/* Typewriter effect */}
          <div className="typewriter">
            I am a{" "}
            <Typewriter
              options={{
                strings: Bio.roles,
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 50,
              }}
            />
          </div>

          {/* Description */}
          <p className="about-subtitle">{Bio.description}</p>

          {/* Resume Button */}
          <div className="button-container">
            <a
              className="button"
              href={Bio.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <a
              href={Bio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              GitHub
            </a>
            <a
              href={Bio.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
