import React, { useEffect, useState } from "react";
// import charater from "../../../assets/images/logo/logo_charater_body.svg";
import charaterFull from "../../../assets/images/logo/logo_full.svg";
import charaterLine from "../../../assets/images/logo/logo_line.svg";
import gitArrow from "../../../assets/images/icons/arrow_git.svg";

function MainBanner({ styles }) {
  const [isFullImg, setIsFullImg] = useState(false);

  const changeImg = () => {
    setTimeout(() => {
      setIsFullImg(!isFullImg);
    }, 3000);
  };

  useEffect(() => {
    changeImg();
  }, [isFullImg]);

  return (
    <section>
      <div className={styles.mainBannerSection}>
        {/* 텍스트 부분 */}
        <div className={styles.titleWrapper}>
          <div>
            <div className={styles.text}>
              <p>Lee</p>
              <p>yae</p>
              <p>jin</p>
            </div>
            <p className={styles.text}>Frontend</p>
            <p className={styles.text}>Portfolio</p>
          </div>
          {/* 깃 바로가기 */}
          <div className={styles.git}>
            <a href="https://github.com/yaejin12">
              MY GIT HUB
              <img src={gitArrow} />
            </a>
          </div>
        </div>
        {/* 캐릭터 */}
        <div className={styles.charaterWrapper}>
          <img src={charaterLine} />
          <img src={charaterFull} className={isFullImg ? styles.isView : ""} />
        </div>
      </div>
    </section>
  );
}

export default MainBanner;
