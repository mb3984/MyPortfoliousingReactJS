import React from "react";
import "./index.css";
import { FaCode, FaCrop } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa6";

const Services = () => {
  return (
    <div id="services">
      <div className="container">
        <h1 className="sub-title">My Services</h1>
        <div className="services-list">
          <div className="service-item">
            <FaCode className="service-icon" />
            <h2>Web Design</h2>
            <p>
              "I create visually appealing and user-friendly websites that work
              seamlessly on all devices. My designs focus on modern, responsive
              layouts that enhance user engagement. My goal is to turn ideas
              into functional, eye-catching websites."
            </p>
          </div>
          <div className="service-item">
            <FaCrop className="service-icon" />
            <h2>UI/UX Design</h2>
            <p>
              "My UI/UX design approach centers on creating intuitive and
              engaging user experiences. I design interfaces that guide users
              smoothly and effectively, blending aesthetics with usability."
            </p>
          </div>
          <div className="service-item">
            <FaAppStore className="service-icon" />
            <h2>App Design</h2>
            <p>
              "I design apps that prioritize user experience, combining
              functionality with clean, appealing visuals. My focus is on
              creating intuitive interfaces that enhance user interaction."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
