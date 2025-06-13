import React from "react";
import "./index.css";
import { FaCode, FaDatabase, FaLaptopCode, FaTools } from "react-icons/fa";

const Services = () => {
  return (
    <div id="services">
      <div className="container">
        <h1 className="sub-title">My Services</h1>
        <div className="services-list">
          <div className="service-item">
            <FaLaptopCode className="service-icon" />
            <h2>Full Stack Development</h2>
            <p>
              "I build complete web applications using frontend and backend
              technologies. From designing responsive user interfaces with React
              to managing server-side logic with Node.js, Express, and MongoDB,
              I deliver scalable and secure solutions."
            </p>
          </div>

          <div className="service-item">
            <FaDatabase className="service-icon" />
            <h2>Backend Development</h2>
            <p>
              "I design robust RESTful APIs and manage database interactions
              using Node.js, Express, MySQL, and MongoDB. I focus on writing
              clean, maintainable code with secure authentication and efficient
              data handling."
            </p>
          </div>

          <div className="service-item">
            <FaCode className="service-icon" />
            <h2>Frontend Development</h2>
            <p>
              "I create responsive and interactive user interfaces using HTML,
              CSS, JavaScript, React, and TypeScript. My goal is to deliver
              seamless experiences with optimized performance across devices."
            </p>
          </div>

          <div className="service-item">
            <FaTools className="service-icon" />
            <h2>Software Engineering</h2>
            <p>
              "With strong software engineering principles, I build scalable
              systems and follow best practices in version control, testing, and
              deployment. My focus is on clean architecture, modular design, and
              long-term maintainability."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
