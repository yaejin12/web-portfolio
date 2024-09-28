import React from "react";
import styles from "../DetailProject.module.scss";
import DetailHeaderTitle from "./DetailHeaderTitle";
import DetailMainImg from "./DetailMainImg";
import DetailSkills from "./DetailSkills";
import ProjectWork from "./ProjectWork";
import ProjectVideo from "./ProjectVideo";

function DetailHeader({ project }) {
  return (
    <ul className={styles.projectDetail}>
      <DetailHeaderTitle styles={styles} project={project} />
      <DetailMainImg styles={styles} project={project} />
      <DetailSkills styles={styles} project={project} />
      <ProjectVideo styles={styles} project={project}/>
      <ProjectWork styles={styles} project={project} />
    </ul>
  );
}

export default DetailHeader;
