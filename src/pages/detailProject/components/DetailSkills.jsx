import React from "react";
import SkillBox from "../../../components/common/skill/SkillBox";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function DetailSkills({ styles }) {
  const location = useLocation();

  const meetingSkills = useSelector((state) => {
    if (location.pathname === "/1") {
      return state.projectSkills.meetingSkills;
    } else if (location.pathname === "/2") {
      return state.projectSkills.healingPageSkills;
    } else {
      return null;
    }
  });



  return (
    <section className={styles.mySkillSection}>
      <SkillBox skills={meetingSkills} />
    </section>
  );
}

export default DetailSkills;
