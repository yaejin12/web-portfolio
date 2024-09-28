import React, { useState } from "react";
import SkillBox from "../../../components/common/skill/SkillBox";

function SkillProgram({ styles, skillList }) {
  console.log(skillList.detail);
  const detail = skillList.detail;

  return (
    // <div className={styles.skillInfoWrapper}>
    <div className={styles.info}>
      <p className={styles.listName}>{skillList.name}</p>
      <p className={styles.infoDetailText}>
        {Object.keys(detail).map((key) => {
          return <SkillBox Bk={"Bk"} text={detail[key]} />;
        })}
      </p>
    </div>
    // </div>
  );
}

export default SkillProgram;
