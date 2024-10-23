import React from "react";
import styles from "./SkillBox.module.scss";

// skills 더미 넘기기
function SkillBox({ skills, title }) {
  return (
    <div className={styles.mySkillWrapper}>
      {title && <div className={styles.title}>{title}</div>}
      <div className={styles.skill}>
        {skills?.map((skillText, i) => {
          return (
            <div key={i} className={styles.skillBox}>
              {skillText}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillBox;
