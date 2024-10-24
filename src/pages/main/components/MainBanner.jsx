import React, { useEffect, useState } from "react";
// import charater from "../../../assets/images/logo/logo_charater_body.svg";
import charaterFull from "../../../assets/images/logo/logo_full.svg";
import charaterLine from "../../../assets/images/logo/logo_line.svg";
import gitArrow from "../../../assets/images/icons/arrow_git.svg";

function MainBanner({ styles }) {
  // 바뀌는 시간 상태관리
  const [isFullImg, setIsFullImg] = useState(false);

  // 바뀌는 시간 함수
  const changeImg = () => {
    setTimeout(() => {
      setIsFullImg(!isFullImg);
    }, 2500);
  };

  // 바뀌는 시간 상태가 변경될때 마다 실행
  useEffect(() => {
    changeImg();
  }, [isFullImg]);

  return (
    <section>
      <div className={styles.mainBannerInner}>
        {/* 텍스트 부분 */}
        <div className={styles.mainBannerWrapper}>
          {/* 첫줄 */}
          <div className={styles.text}>
            <p>Lee</p>
            <p>yae</p>
            <p>jin</p>
          </div>
          <div className={styles.text}>Frontend</div>
          <div className={styles.text}>Portfolio</div>

          {/* 깃 바로가기 */}
          <div className={styles.git}>
            <a href="https://github.com/yaejin12">
              MY GIT HUB
              <img src={gitArrow} />
            </a>
          </div>
        </div>
        {/* 캐릭터 */}
        <div className={`${styles.charaterImages} ${styles.isView}`}>
          <img src={charaterLine} />
          <img src={charaterFull} className={isFullImg ? styles.isView : ""} />
        </div>
      </div>
    </section>
  );
}

export default MainBanner;
