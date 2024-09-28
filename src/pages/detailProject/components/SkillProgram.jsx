import React, { useState } from "react";
import SkillBox from "../../../components/common/skill/SkillBox";
import styles from "../DetailProject.module.scss"

function SkillProgram({ skillList }) {

  const detail = skillList.detail;

  return (

    <div className={styles.info}>
      <p className={styles.listName}>{skillList.name}</p>
      <p className={styles.infoDetailText}>
        {Object.keys(detail).map((key) => {
          return <SkillBox Bk={"Bk"} text={detail[key]} />;
        })}
      </p>
    </div>
  
  );
}

export default SkillProgram;
