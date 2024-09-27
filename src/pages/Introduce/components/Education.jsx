import React from "react";

function Education({ styles }) {
  return (
    <li className={styles.box}>
      <div className={styles.line}></div>
      <div className={styles.infoTitle}>Education</div>

      {/* 디테일 내용 */}
      <div className={styles.detailInfoWrapper}>
        <div className={styles.detailInfo}>
          <div className={styles.detailInfoTitle}>대구대학교</div>
          <div className={styles.detailInfoText}>
            <span>2015. 3 - 2019. 2</span>
            <br />
            현대미술과
          </div>
        </div>

        {/* 디테일 내용 */}
        <div className={styles.detailInfo}>
          <div className={styles.detailInfoTitle}>포항예술고등학교</div>
          <div className={styles.detailInfoText}>
            <span>2012. 3 - 2015. 2 </span>
            <br />
            서양화과
          </div>
        </div>

        {/* 디테일 내용 */}
        <div className={styles.detailInfo}>
          <div className={styles.detailInfoTitle}>중앙정보처리학원</div>
          <div className={styles.detailInfoText}>
            <span>2024. 2 - 2024. 8</span>
            <br />
            Front-end & Back-end
          </div>
        </div>
      </div>
    </li>
  );
}

export default Education;
