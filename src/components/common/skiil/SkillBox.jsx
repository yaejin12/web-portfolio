import React from "react";
import styles from "./SkiilBox.module.scss";

function SkillBox({ text }) {
  return <div className={styles.skillBox}>{text}</div>;
}

export default SkillBox;
