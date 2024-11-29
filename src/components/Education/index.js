import React from "react";
import "./index.css";

export const education = [
  {
    id: 0,
    img: "https://res.cloudinary.com/dpd55e6mf/image/upload/v1732687510/nxtwaveimage_wngklz.png",
    school: "Nxtwave Disprutive Technologies,Hyderabad",
    date: "Oct 2022 - Ongoing",
    desc: "I Completed MERN Full Stack course in NxtWave And I have Completed All the Assignments and I developed Some exiciting Projects and I also improved my problem solving skills and technical skills.",
  },
  {
    id: 1,
    img: "https://res.cloudinary.com/dpd55e6mf/image/upload/v1732687657/nannayyaimage_x1et4k.jpg",
    school: "Adikavi Nannaya University,Rajmahendravaram",
    date: "June 2018 - Decemeber 2021",
    desc: "I completed Bachelor's degree in Chemistry  at G.B.R Degree College, Anaparthy. I have completed 6 semesters and have a CGPA of 8.12",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dpd55e6mf/image/upload/v1732687585/gbr_collegeimage_nxfgxg.jpg",
    school: "G.B.R Junior College, Anaparthy",
    date: "June 2016 - Apr 2018",
    grade: "85.1%",
    desc: "I completed my class 12 high school education at G.B.R Junior College, Anaparthy",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dpd55e6mf/image/upload/v1732687707/schoolforimage_udtdm5.jpg",
    school: "Z.P.P.H School, Biccavolu",
    date: "Apr 2011 - Apr 2016",
    grade: "9.7",
    desc: "I completed my class 10 education at Z.P.P.H School,  East Godavari District Andhra Pradesh Biccavolu.",
  },
];

const Education = () => {
  return (
    <div className="education-container" id="education">
      <h2 className="education-title">Education</h2>
      <div className="timeline-wrapper">
        {education.map((item) => (
          <div className="education-card" key={item.id}>
            <img className="education-image" src={item.img} alt={item.school} />
            <div className="card-content">
              <h3 className="school">{item.school}</h3>
              <p className="date">{item.date}</p>
              <p className="degree">{item.degree}</p>
              <p className="grade">{item.grade}</p>
              <p className="description">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
