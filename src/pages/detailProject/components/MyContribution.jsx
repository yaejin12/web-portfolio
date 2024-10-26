import React, { useEffect } from "react";

import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { toggleBlackRef } from "../../../store/Toggle-slice";
import MyContributionDetail from "./MyContributionDetail";
import { useLocation } from "react-router-dom";

function MyContribution({ styles }) {
  // ================
  const [ref, inView] = useInView({
    threshold: 0.01,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleBlackRef(!inView));
  }, [inView, dispatch]);

  
  //  ================
  const location = useLocation();

  // 프로젝트 내가 기여한 역할 내용 불러오기
  const project = useSelector((state) => {
    if (location.pathname === "/1") {
      return state.myContribution.meetingProject;
    } else if (location.pathname === "/2") {
      return state.myContribution.healingPage;
    } else {
      return null;
    }
  });

  // 프로젝트 Git URL 불러오기
  const projectUrl = useSelector((state) => {
    if (location.pathname === "/1") {
      return state.myContribution.meetingUrl;
    } else if (location.pathname === "/2") {
      return state.myContribution.healingPageUrl;
    } else {
      return null;
    }
  });

  // URL 이름 리턴
  const urlName = (url) => {
    if (url.includes("github")) {
      return (
        <>
          GIT <br /> HUB
        </>
      );
    } else if (url.includes("canva")) {
      return (
        <>
          프로젝트
          <br />
          상세보기
        </>
      );
    } else if (url.includes("notion")) {
      return <>Notion</>;
    } else {
      return null;
    }
  };

  return (
    <>
      <section>
        <div className={styles.myContributionSection} ref={ref}>
          <div className={styles.myContributionInner}>
            <h1>My Contributions</h1>
            {/* 하단 wrapper */}
            <div className={styles.contributionWrapper}>
              {/* 링크 연결 */}
              <div className={styles.urlWrapper}>
                {projectUrl &&
                  projectUrl.map((url, index) => {
                    return url.url.map((urlDetail, i) => {
                      return (
                        <a href={urlDetail}>
                          <div key={i} className={styles.url}>
                            {urlName(urlDetail)}
                          </div>
                        </a>
                      );
                    });
                  })}
              </div>
              <MyContributionDetail styles={styles} project={project} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MyContribution;
