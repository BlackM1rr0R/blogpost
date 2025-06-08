import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/project/${project.id}`} className={styles.card}>
      <img src={project.images} alt={project.name} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3>{project.name}</h3>
        <p>{project.overview.slice(0, 100)}...</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
