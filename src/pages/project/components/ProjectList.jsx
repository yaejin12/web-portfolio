import React from "react";
import detailIcon from "../../../assets/images/icons/detail_W.svg";

function ProjectList({ styles, title, date, team, img }) {
  return (
    <>
      <ul className={styles.projectList}>
        <li className={styles.projectBox}>
          <div className={styles.projectInfoWrapper}>
            <div className={styles.projectText}>
              <div>{title}</div>
              <p className={styles.infoDetail}>
                {date} <br />
                {team}
              </p>
            </div>
            <div className={styles.projectLink}>
              <a>
                <div className={styles.detailBtn}>
                  상세 정보<img src={detailIcon}></img>
                </div>
              </a>
            </div>
          </div>
          <div className={styles.projectImgWrapper}>
            <img src={img}></img>
          </div>
        </li>
      </ul>
    </>
  );
}

export default ProjectList;
