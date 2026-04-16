import "./index.css";

export const projects = [
  {
    id: 0,
    title: "MERN Stack E-Commerce Platform",
    date: "2024",
    description:
      "Developed a scalable MERN e-commerce platform handling 20,000+ products with secure JWT-based authentication and RBAC for Admin and User workflows. Implemented server-side pagination to reduce API payloads by 80% and optimized search/sort using MongoDB Regex, improving frontend performance by 2x. Deployed a decoupled architecture using Vercel and Render with persistent state management via Context API.",
    image:
      "https://res.cloudinary.com/dpd55e6mf/image/upload/v1776337691/Screenshot_411_fsrnjl.png",
    tags: [
      "React JS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "RBAC",
      "Pagination",
      "Context API",
      "REST API",
      "Vercel",
      "Render",
    ],
    category: "web app",
    github: "https://github.com/mb3984/mernshoppingfrontend",
    webapp: "https://mernshoppingfrontend.vercel.app/",
  },
  {
    id: 1,
    title: "NxtTrendz",
    date: "Aug 2023 - Sep 2023",
    description:
      "Developed a cutting-edge e-commerce platform inspired by Amazon and Flipkart.Built pages for Login, Products, and Product details with React Router, React components, form inputs,and event handlers.Enabled secure authentication and authorization with JWT tokens and REST API calls",
    image: "https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png",
    tags: [
      "React JS",
      "JS",
      "CSS",
      "Bootstrap",
      "Routing",
      "REST API Calls",
      "Local Storage",
      "JWT Token",
      "Authorization",
      "Authentication",
    ],
    category: "web app",
    github:
      "https://github.com/mb3984/Nxt-Trendz---Cart-Features-coding-practice-43-Nxtwave-ReactJS",
    webapp: "https://madhunxt.ccbp.tech/",
  },
  {
    id: 2,
    title: "Veg & Fruits MERN Shopping",
    date: "2024",
    description:
      "Engineered a full-stack MERN shopping platform handling 20,000+ products with optimized MongoDB queries and server-side pagination to improve load time by 60%. Implemented persistent cart and order workflows using Context API and Local Storage. Built an admin dashboard for CRUD operations, stock tracking, and role-based access control. Deployed securely on Vercel and Render.",
    image:
      "https://res.cloudinary.com/dpd55e6mf/image/upload/v1776338005/Screenshot_436_ia77ue.png",
    tags: [
      "React JS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "RBAC",
      "Pagination",
      "Context API",
      "Local Storage",
      "Admin Dashboard",
    ],
    category: "web app",
    github: "https://github.com/mb3984/mernvegfruitsfrontend",
    webapp: "https://mernvegfruitsfrontend.vercel.app/",
  },
  {
    id: 3,
    title: "Mern Stack Login App",
    date: "June 2024 - July 2024",
    description:
      "Developed a secure and user-friendly authentication system using the MERN (MongoDB, Express.js, React.js,Node.js) stack.Implemented user registration and login functionality with form validation and real-time feedback for betteruser experience.Utilized JWT (JSON Web Tokens) for user authentication and authorization, ensuring secure access to protected routes",
    image:
      "https://res.cloudinary.com/dpd55e6mf/image/upload/v1732775532/Screenshot_187_o2cwq9.png",
    tags: [
      "React JS",
      "JS",
      "CSS",
      "Bootstrap",
      "Routing",
      "REST API Calls",
      "MongoDB",
      "Node JS",
      "Express JS",
      "JWT Token",
      "Authorization",
      "Authentication",
    ],
    category: "web app",
    github: "https://github.com/mb3984/frontendmadhuloginproject",
    webapp: "https://frontendmadhuloginproject.vercel.app",
  },
  {
    id: 4,
    title: "Mern Stack Todo App",
    date: "Nov 2024 - Dec 2024",
    description:
      "Developed a  user-friendly Todo App using the MERN (MongoDB, Express.js, React.js,Node.js) stack",
    image:
      "https://res.cloudinary.com/dpd55e6mf/image/upload/v1732775566/Screenshot_186_mghc36.png",
    tags: [
      "React JS",
      "JS",
      "CSS",
      "Bootstrap",
      "Routing",
      "REST API Calls",
      "MongoDB",
      "Node JS",
      "Express JS",
    ],
    category: "web app",
    github: "https://github.com/mb3984/mern-stack-frontend-todo-app",
    webapp: "https://mern-stack-frontend-todo-app.vercel.app/",
  },
  {
    id: 5,
    title: "Todo App",
    date: "Feb 2023 - Feb 2023",
    description:
      "Developed persistent todo application with CRUD operations to track list of tasks Displayed list of todos with HTML list elements, styled todo list using CSS, Bootstrap Implemented todo crud operations by using JavaScript event listeners and updated UI dynamically by using JavaScript DOM operations.",
    image:
      "https://res.cloudinary.com/dpd55e6mf/image/upload/v1732775399/Screenshot_190_jksxwd.png",
    tags: ["HTML", "JS", "CSS", "Bootstrap", "Local Storage"],
    category: "web app",
    github: "https://github.com/mb3984/dynamictodoapp",
    webapp: "https://madhutodoappl.ccbp.tech/",
  },
  {
    id: 6,
    title: "Mern Stack Product App",
    date: "July 2024 - Aug 2024",
    description:
      "Developed a  user-friendly Product App using the MERN (MongoDB, Express.js, React.js,Node.js) stack.User can add Product and update Product and Delete Product functionality added",
    image:
      "https://res.cloudinary.com/dpd55e6mf/image/upload/v1732775497/Screenshot_188_anbvcl.png",
    tags: [
      "React JS",
      "JS",
      "CSS",
      "Bootstrap",
      "Routing",
      "REST API Calls",
      "MongoDB",
      "Node JS",
      "Express JS",
    ],
    category: "web app",
    github: "https://github.com/mb3984/fullstackaddproductapp",
    webapp: "https://fullstackaddproductapp.onrender.com",
  },
];

const Projects = () => {
  return (
    <>
      <h2 className="project-heading">Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span className="project-tag" key={index}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={project.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
