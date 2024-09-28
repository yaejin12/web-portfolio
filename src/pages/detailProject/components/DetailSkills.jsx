import React, { useState } from "react";
import SkillBox from "../../../components/common/skill/SkillBox";
import SkillProgram from "./SkillProgram";

function DetailSkills({ styles, project, layout }) {
  const skills = Object.keys(project.skills[0]);
  const skillList = skills.map((key) => {
    return {
      name: key,
      detail: project.skills[0][key],
    };
  });

  return (
    <li className={styles.projectDetailBox}>
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

export default DetailSkills;
