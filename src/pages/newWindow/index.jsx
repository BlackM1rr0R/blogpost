import React from "react";
import { Link, useParams } from "react-router-dom";
import projectsData from "../../data/projectsData";
import styles from "./index.module.css";

const NewWindow = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));

  const otherProjects = projectsData.filter((p) => p.id !== parseInt(id));

  if (!project)
    return <p className={styles.notFound}>Project not found.</p>;

  return (
    <div>
      {/* Header */}
      <header className={styles.header}>
        <Link to="/" className={styles.homeLink}>← Home</Link>
      </header>

      {/* Main Project */}
      <div className={styles.newWindow}>
        <h1>{project.name}</h1>
        <img src={project.images} alt={project.name} className={styles.projectImages} />
        <p className={styles.overview}>{project.overview}</p>
        <p className={styles.date}>Date: {project.date}</p>
      </div>

      {/* Other Projects */}
      <div className={styles.otherProjects}>
        <h2>Other Projects</h2>
        <div className={styles.cardGrid}>
          {otherProjects.map((p) => (
            <Link to={`/about/post/${p.id}`} key={p.id} className={styles.card}>
              <img src={p.images} alt={p.name} className={styles.cardImage} />
              <div className={styles.cardContent}>
                <h3>{p.name}</h3>
                <p>{p.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        © 2020 All rights reserved.
      </footer>
    </div>
  );
};

export default NewWindow;
