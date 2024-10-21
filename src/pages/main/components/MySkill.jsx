import React, { useEffect } from "react";
import SkillBox from "../../../components/common/skill/SkillBox";

function MySkill({ styles }) {
  return (
    <section className={styles.mySkillSection}>
      <div className={styles.mySkillWrapper}>
        <div className={styles.title}>Skills</div>
        <div className={styles.skill}>
          {/* <div className={styles.skillTop}> */}
          <SkillBox text={"React"} />
          <SkillBox text={"Redux"} />
          <SkillBox text={"SCSS"} />
          <SkillBox text={"JavaScript"} />
          <SkillBox text={"HTML5"} />
          <SkillBox text={"CSS"} />
          <SkillBox text={"JSP"} />
          <SkillBox text={"Ajax"} />
          {/* </div>
          <div className={styles.skillBottom}> */}
          <SkillBox text={"Java"} />
          <SkillBox text={"Spring Boot"} />
          <SkillBox text={"MyBatis"} />
          <SkillBox text={"MySQL"} />
          <SkillBox text={"MariaDB"} />
          <SkillBox text={"Git"} />
          <SkillBox text={"GitHub"} />
          <SkillBox text={"Figma"} />
          <SkillBox text={"Postman"} />
          <SkillBox text={"Postman"} />
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}

export default MySkill;
