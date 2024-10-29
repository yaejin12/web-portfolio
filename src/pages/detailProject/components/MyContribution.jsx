import React, { useRef } from "react";

import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import MyContributionDetailBox from "./MyContributionDetailBox";

function MyContribution({ styles }) {
  return (
    <>
      {/* 타이틀 부분 */}
      <section>
        <div className={styles.myContributionSection}>
          <div className={styles.myContributionInner}>
            <p className={styles.myContributionTitle}>My Contributions</p>
            <div>
              <MyContributionDetailBox styles={styles} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MyContribution;
