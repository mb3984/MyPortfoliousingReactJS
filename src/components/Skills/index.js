import React from "react";
import "./index.css"; // Importing the CSS file

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        image:
          "https://res.cloudinary.com/dpd55e6mf/image/upload/v1732689869/htmlimage_e6kgm1.png",
      },
      {
        name: "CSS",
        image:
          "https://res.cloudinary.com/dpd55e6mf/image/upload/v1732689837/cssimage_xhm7hb.png",
      },
      {
        name: "CSS Flexbox",
        image:
          "https://res.cloudinary.com/dpd55e6mf/image/upload/v1732689133/flexboximage_xnpn2t.webp",
      },
      {
        name: "JavaScript",
        image:
          "https://res.cloudinary.com/dpd55e6mf/image/upload/v1732689800/jsimage_a1t6kt.webp",
      },
      {
        name: "Bootstrap",
        image:
          "https://res.cloudinary.com/dpd55e6mf/image/upload/v1732689527/bootstrapimage_efvq9o.png",
      },
      {
        name: "React Js",
        image:
          "https://res.cloudinary.com/dpd55e6mf/image/upload/v1732689669/reactjsimage_hxna92.png",
      },
      {
        name: "React Hooks",
        image:
          "https://res.cloudinary.com/dpd55e6mf/image/upload/v1732689599/reacthooksimage_eyqond.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image:
          "https://res.cloudinary.com/dpd55e6mf/image/upload/v1732689702/nodejsimage_rekv5j.png",
      },
      {
        name: "Express Js",
        image:
          "https://res.cloudinary.com/dpd55e6mf/image/upload/v1732689634/expressjsimage_lffjkr.jpg",
      },
      {
        name: "Python",
        image:
          "https://res.cloudinary.com/dpd55e6mf/image/upload/v1732689770/pythonimage_wkb6rh.png",
      },
      {
        name: "SQLite",
        image:
          "https://res.cloudinary.com/dpd55e6mf/image/upload/v1732689903/sqliteimage_m2fwwe.webp",
      },
      {
        name: "MongoDB",
        image:
          "https://res.cloudinary.com/dpd55e6mf/image/upload/v1732689735/mognodbimage_bonq4m.webp",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://res.cloudinary.com/dpd55e6mf/image/upload/v1732689486/gitimage_oczwm8.png",
      },
      {
        name: "GitHub",
        image:
          "https://res.cloudinary.com/dpd55e6mf/image/upload/v1732689453/githubimage_aiy1xe.png",
      },
      {
        name: "Netlify",
        image:
          "https://res.cloudinary.com/dpd55e6mf/image/upload/v1732689345/netlifyimage_q56sps.png",
      },
      {
        name: "Vercel",
        image:
          "https://res.cloudinary.com/dpd55e6mf/image/upload/v1732689380/vercelimage_kfucya.jpg",
      },
      {
        name: "Render",
        image:
          "https://res.cloudinary.com/dpd55e6mf/image/upload/v1732689408/renderimage_wf0vjh.jpg",
      },
      {
        name: "VS Code",
        image:
          "https://res.cloudinary.com/dpd55e6mf/image/upload/v1732689213/vscodeimage_du14px.png",
      },
      {
        name: "Postman",
        image:
          "https://res.cloudinary.com/dpd55e6mf/image/upload/v1732689270/postmanimage_fi34sc.png",
      },
      {
        name: "Figma",
        image:
          "https://res.cloudinary.com/dpd55e6mf/image/upload/v1732689037/figmaimage_ypxj3l.png",
      },
    ],
  },
];

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <div className="skills-wrapper">
        <h2 className="skills-title">Skills</h2>
        <p className="skills-desc">
          Here are some of my skills on which I have been working on for the
          past 2 years.
        </p>
        <div className="skills-list-container">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.title}>
              <h3 className="skill-title">{skill.title}</h3>
              <div className="skill-items">
                {skill.skills.map((item) => (
                  <div className="skill-item" key={item.name}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="skill-image"
                    />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
