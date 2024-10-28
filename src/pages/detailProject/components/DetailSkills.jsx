import React, { useRef } from "react";
import SkillBox from "../../../components/common/skill/SkillBox";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { toggleBlackRef } from "../../../store/Toggle-slice";

function DetailSkills({ styles }) {
  const location = useLocation();
  const skillSectionRef = useRef();
  const skillUlRef = useRef();

  const meetingSkills = useSelector((state) => {
    if (location.pathname === "/1") {

      return state.projectSkills.meetingSkills;
    } else if (location.pathname === "/2") {

      return state.projectSkills.healingPageSkills;
    } else {
      return null;
    }
  });

  //  // kill 애니메이션

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(skillUlRef.current, {
      xPercent: -170,
      ease: "none",
      scrollTrigger: {
        trigger: skillSectionRef.current,
        pin: false,
        scrub: 1,
        start: "top center",
        end: "10%",
      },
    });
  });

  return (
    <section className={styles.mySkillSection} ref={skillSectionRef}>
      <SkillBox skills={meetingSkills} ref={skillUlRef} />
    </section>
  );
}

export default DetailSkills;
