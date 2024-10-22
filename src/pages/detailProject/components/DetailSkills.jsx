import React from "react";
import SkillBox from "../../../components/common/skill/SkillBox";
import { useSelector } from "react-redux";

function DetailSkills({ styles }) {
  const meetingSkills = useSelector(
    (state) => state.projectSkills.meetingSkills
  );

  console.log("meetingSkills", meetingSkills);

  return (
    <section className={styles.mySkillSection}>
      <SkillBox skills={meetingSkills} />
    </section>
  );
}

export default DetailSkills;
