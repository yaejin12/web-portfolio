import { useGSAP } from "@gsap/react";
import React, { useEffect, useRef } from "react";
import { aboutMeText } from "./AboutMetText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { v4 as uuidV4 } from "uuid";

function AboutMe({ styles }) {
  const refs = useRef([]);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    refs.current.map((ref) => {
      gsap.fromTo(
        ref,
        { opacity: 0.1 },
        {
          opacity: 1,

          scrollTrigger: {
            trigger: ref,
            start: "top 80%", // 요소가 화면의 80% 위치에 도달할 때 시작
            end: "top 20%", // 요소가 화면의 20% 위치에 도달할 때 종료
            scrub: true,
            onLeave: () => gsap.to(ref, { opacity: 0.1 }), // 스크롤이 끝난 뒤 opacity를 0.1으로
          },
        }
      );
    });
  });

  return (
    <section className={styles.aboutMeSection}>
      {/* About Me */}
      {aboutMeText.map((text, i) => {
        return (
          <div className={styles.aboutMeWrapper} key={i}>
            <div className={styles.h1Title}>
              <p ref={(el) => (refs.current[i] = el)}>{text}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default AboutMe;
