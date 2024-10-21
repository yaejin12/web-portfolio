import React, { useEffect } from "react";

function AboutMe({ styles }) {
  return (
    <section className={styles.aboutMeSection}>
      {/* About Me */}
      <div className={styles.aboutMeWrapper}>
        <div className={styles.h1Title}>
          <p>About Me</p>
        </div>
      </div>
      {/* 생년월일 */}
      <div className={styles.aboutMeWrapper}>
        <div className={styles.h1Title}>
          <p>1996년 12월 5일생</p>
        </div>
      </div>
      {/* END가 아닌 AND로 */}
      <div className={styles.aboutMeWrapper}>
        <div className={styles.h1Title}>
          <p>
            <span>“END가 아닌 AND로”</span> <br />
            새로운 도전을 두려워 하지 않고, <br />
          </p>
        </div>
      </div>
      {/* END가 아닌 AND로 */}
      <div className={styles.aboutMeWrapper}>
        <div className={styles.h1Title}>
          <p>
            팀원들과 함께 성장하고 싶은 <br />
            이예진 입니다 <br />
          </p>
        </div>
      </div>
      {/* 협업 */}
      <div className={styles.aboutMeWrapper}>
        <div className={styles.h1Title}>
          <p>
            디자인부터 프론트엔드, 백엔드까지 <br />
            폭넓게 이해하고 있어 협업 시 <br />
            <span>원활한 소통이 가능</span>합니다
          </p>
        </div>
      </div>
      {/* 협업 */}
      <div className={styles.aboutMeWrapper}>
        <div className={styles.h1Title}>
          <p>
            즐겁게 개발하며, 팀원들과 함께 <br />
            의미 있는 성과를 만들어 나가고 싶습니다.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
