import React, { forwardRef, useEffect, useRef } from "react";
import styles from "./SkillBox.module.scss";

// skills 더미 넘기기
const SkillBox = forwardRef(({ skills, title }, ref) => {
  return (
    <div className={styles.mySkillWrapper}>
      {title && <div className={styles.title}>{title}</div>}
      {/* 각각의 skill */}
      <ul className={styles.skill} ref={ref}>
        {skills?.map((skillText, i) => {
          return (
            <li key={i} className={styles.skillBox}>
              {skillText}
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default SkillBox;
