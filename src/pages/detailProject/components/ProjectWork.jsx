import React from "react";

function ProjectWork({ styles }) {
  return (
    <li className={styles.projectDetailBox}>
      {/* 왼쪽 wrapper */}
      <div className={styles.titleWrapper}>
        <div className={styles.title}>내가 기여한 부분</div>
      </div>

      {/* 오른쪽 wrapper */}

      <div className={styles.infoWrapper}>
        <div className={styles.skillInfo}>
          <p className={styles.skillListName}>
            메인페이지
            <p>frontEnd & BackEnd</p>
          </p>
          <p className={styles.skillKind}></p>
        </div>
      </div>
    </li>
  );
}

export default ProjectWork;
