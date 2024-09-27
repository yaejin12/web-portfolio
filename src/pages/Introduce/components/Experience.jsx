import React from "react";

function Experience({ styles }) {
  return (
    <li className={styles.box}>
      <div className={styles.line}></div>
      <div className={styles.infoTitle}>Experience</div>

      {/* 디테일 내용 */}
      <div className={styles.detailInfoWrapper}>
        <div className={styles.detailInfo}>
          <div className={styles.detailInfoTitle}>정디자인</div>
          <div className={styles.detailInfoText}>
            <span>2021. 8 - 2023.12</span>
            <br />
            디자인 팀 / 대리
          </div>
        </div>

        {/* 디테일 내용 */}
        <div className={styles.detailInfo}>
          <div className={styles.detailInfoTitle}>가온상패공장</div>
          <div className={styles.detailInfoText}>
            <span>2019. 6 - 2020. 9 </span>
            <br />
            디자인 / 사원
          </div>
        </div>

        {/* 디테일 내용 */}
        <div className={styles.detailInfo}>
          <div className={styles.detailInfoTitle}>TONGART</div>
          <div className={styles.detailInfoText}>
            <span>2017. 5 - 2018. 12</span>
            <br />
            드로잉 전문강사
          </div>
        </div>
      </div>
    </li>
  );
}

export default Experience;
