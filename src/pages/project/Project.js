import React from "react";
import styles from "./Project.module.scss";
import ProjectList from "./components/ProjectList";
import meeting from "../../assets/images/img/meeting.png";
import fivejo from "../../assets/images/img/5jo.png";
import GradationBg from "../../components/common/gradationBg/GradationBg";

function Project() {
  return (
    <GradationBg>
      <div className={styles.projectWrapper}>
        <div className={styles.inner}>
          <ProjectList
            styles={styles}
            title={"과감하게 팅기지 말고 과팅"}
            date={"2024. 7. 17 - 2024. 8. 29"}
            team={"3on3 조"}
            img={meeting}
          />

          <ProjectList
            styles={styles}
            title={"나의 애착 페이지"}
            date={"2024. 6. 21 - 2024. 7. 9"}
            team={"편히 쉬 조"}
            img={fivejo}
          />
        </div>
      </div>
    </GradationBg>
  );
}

export default Project;
