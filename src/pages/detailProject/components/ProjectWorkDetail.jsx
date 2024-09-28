import React from "react";

function ProjectWorkDetail({ styles, project }) {
  const text = project.text;

  return (
    <div className={`${styles.info} ${styles.work} `}>
      {/* 설명1 */}
      {/* 왼쪽 */}
      <div>
        {/* 페이지 */}
        <p className={styles.listName}>{project.workPage}</p>
        {/* 스킬 */}
        <p className={styles.DetailWorkSkill}>{project.workSkill}</p>
      </div>
      <div className={styles.infoDetailText}>
        {/* //  오른쪽 디테일 내용 */}
        {text.map((text) => {
          return (
            <>
              <div className={styles.detailWork}>{text.title}</div>

              {/* 기능 상세 정보 */}
              {text.detail.map((detail) => {
                return <div className={styles.detailWorkSubText}>{detail}</div>;
              })}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectWorkDetail;
