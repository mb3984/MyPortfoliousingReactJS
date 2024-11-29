import React from "react";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll"; // Import Link from react-scroll
import "./index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="nav">
      <div className="navbar-container">
        <div className="nav-logo">
          <button onClick={() => window.scrollTo(0, 0)} className="logo-button">
            <DiCssdeck size="3rem" /> <span className="span">Portfolio</span>
          </button>
        </div>
        <div className="mobile-icon" onClick={() => setIsOpen(!isOpen)}>
          <FaBars size="2rem" /> {/* Hamburger icon */}
        </div>
        <ul className={`nav-items ${isOpen ? "nav-items-open" : ""}`}>
          <li>
            <Link className="nav-link" to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              to="projects"
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              to="education"
              smooth={true}
              duration={500}
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              to="services"
              smooth={true}
              duration={500}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="nav-link"
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        {isOpen && (
          <div className={`mobile-menu ${isOpen ? "is-open" : ""}`}>
            <Link
              className="mobile-link"
              to="about"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              className="mobile-link"
              to="skills"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
            <Link
              className="mobile-link"
              to="projects"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              className="mobile-link"
              to="education"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Education
            </Link>
            <Link
              className="mobile-link"
              to="services"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              className="mobile-link"
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
