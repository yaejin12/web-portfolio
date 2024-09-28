import React from "react";
import { NavLink } from "react-router-dom";
import ProjectListHeader from "./ProjectListHeader";
import ProjectListBtn from "./ProjectListBtn";

function ProjectList({ styles, project }) {
  const { url } = project;

  // 링크 정보와 이름을 매핑
  const links = [
    { name: "바로가기", link: url.portfolio },
    { name: "사이트", link: url.site },
    { name: "GitHub", link: url.github },
  ];



  return (
    <>
      <ul className={styles.projectList}>
        <li className={styles.projectBox}>
          <div className={styles.projectInfoWrapper}>
            <ProjectListHeader project={project} />
            <ProjectListBtn links={links} />
          </div>
          <div className={styles.projectImgWrapper}>
            <img src={project.img}></img>
          </div>
        </li>
      </ul>
    </>
  );
}

export default ProjectList;
