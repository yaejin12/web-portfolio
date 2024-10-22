import React, { useEffect } from "react";
import SkillBox from "../../../components/common/skill/SkillBox";
import { useSelector } from "react-redux";

function MySkill({ styles }) {
  const mySkills = useSelector((state) => state.projectSkills.mySkills);
  return (
    <section className={styles.mySkillSection}>
      <SkillBox skills={mySkills} title={"Skills"} />
    </section>
  );
}

export default MySkill;
