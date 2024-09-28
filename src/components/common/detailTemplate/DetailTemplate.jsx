import React from "react";
import styles from "./DetailTemplate.module.scss";
import SkillProgram from "../../../pages/detailProject/components/SkillProgram";

function DetailTemplate({ layout, title }) {
  let layout;
  if (layout === "work") {
    layout = styles.work;
  } else {
    layout = "";
  }

  return (
    <li className={`${styles.projectDetailBox} ${layout}`}>
      <div className={styles.titleWrapper}>
        {/* 왼쪽 wrapper */}
        <div className={styles.title}>skills</div>
      </div>
      {/* 오른쪽 wrapper */}

      <div className={styles.infoWrapper}>
        {skillList.map((skill, i) => {
          return <SkillProgram key={i} styles={styles} skillList={skill} />;
        })}
      </div>
    </li>
  );
}

export default DetailTemplate;
