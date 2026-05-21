// Publications.jsx

import React from "react";
import "./publications.css";
import { FaExternalLinkAlt, FaAward } from "react-icons/fa";
import { MdOutlineWorkspacePremium } from "react-icons/md";

const publications = [
  {
    id: 1,
    title:
      "Explainable AI-Based Automated Grading of Essay and Multiple Choice Student responses Using Embedding Based Semantic Similarity",
    conference:
      "International Conference on Advanced Research in Computing 2026 (ICARC 2026)",
    // description:
      // "Developed an NLP-based automated grading system using transformer-based semantic similarity techniques to evaluate descriptive answers with improved accuracy and fairness.",
    image: "/src/assets/icarc.jpg",
    award: "International Research Publication",
    link: "https://ieeexplore.ieee.org/document/11453521",
    button: "View IEEE Publication",
  },

  {
    id: 2,
    // title:
    //   "Automated Evaluation of Responses Using Embedding-Based Similarity with Explainable AI Support",
    conference:
      "Computing Undergraduate Research Symposium 2026 (comURS 2026)",
    description:
      "Developed an NLP-based automated grading system using transformer-based semantic similarity techniques to evaluate descriptive answers with Explainable AI support.",
    image: "/src/assets/comurs.jpg",
    award: "Best Paper Award - Data Science",
    link: "https://drive.google.com/file/d/1aJWHhRnh4L5YbVVMrjy3Efwd0o4snDm9/view?usp=drive_link",
    button: "View Abstract",
  },
];

const Publications = () => {
  return (
    <section className="publications section" id="publications">
      <h2 className="section__title">Research Publications</h2>
      {/* <span className="section__subtitle">
        Conferences, Research & Achievements
      </span> */}

      <div className="publications__container container grid">
        {publications.map((pub) => (
          <div className="publication__card" key={pub.id}>
            <div className="publication__image-container">
              <img
                src={pub.image}
                // alt={pub.title}
                className="publication__image"
              />
            </div>

            <div className="publication__content">
              <div className="publication__award">
                <MdOutlineWorkspacePremium className="award__icon" />
                <span>{pub.award}</span>
              </div>

              <h3 className="publication__title">{pub.title}</h3>

              <p className="publication__conference">{pub.conference}</p>

              <p className="publication__description">
                {pub.description}
              </p>

              <a
                href={pub.link}
                target="_blank"
                rel="noreferrer"
                className="publication__button"
              >
                {pub.button}
                <FaExternalLinkAlt className="button__icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;