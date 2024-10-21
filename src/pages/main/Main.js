import React, { useEffect } from "react";
import MainBanner from "./components/MainBanner";
import mainStyles from "./Main.module.scss";
import aboutMeStyles from "./AboutMe.module.scss";
import AboutMe from "./components/AboutMe";
import MySkill from "./components/MySkill";

import { useDispatch } from "react-redux";
import { toggleBlackRef } from "../../store/BlackRef-slice";
import { useInView } from "react-intersection-observer";

function Main() {
  const [ref, inView] = useInView({
    threshold: 0.09,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleBlackRef(inView));
  }, [inView]);

  return (
    <>
      <MainBanner styles={mainStyles} />
      <div style={{ height: "100%" }} ref={ref}>
        <AboutMe styles={aboutMeStyles} />
        <MySkill styles={aboutMeStyles} />
      </div>
    </>
  );
}

export default Main;
