import React, { useEffect, useRef, useState } from "react";
import SkillBox from "../../../components/common/skill/SkillBox";
import { useSelector } from "react-redux";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

function MySkill({ styles }) {
  const skillSectionRef = useRef();
  const skillUlRef = useRef();

  // kill 애니메이션
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(skillUlRef.current, {
      xPercent: -170,
      ease: "none",
      scrollTrigger: {
        trigger: skillSectionRef.current,
        pin: true,
        scrub: 1,
        start: "center center",
        end: "300%",
      },
    });
  });
  const mySkills = useSelector((state) => state.projectSkills.mySkills);
  return (
    <section className={styles.mySkillSection} ref={skillSectionRef}>
      <SkillBox skills={mySkills} title={"Skills"} ref={skillUlRef} />
    </section>
  );
}

export default MySkill;
