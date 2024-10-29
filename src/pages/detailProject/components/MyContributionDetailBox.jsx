import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";
import {
  meetingMyContributionText,
  pageMyContributionText,
} from "./MyContributionDetailText";
import { useLocation } from "react-router-dom";

function MyContributionDetailBox({ styles }) {
  const location = useLocation();
  const [projectText, setProjectText] = useState([]);
  const [isMoreClick, setIsMoreClick] = useState(
    new Array(projectText.length).fill(false)
  );
  useEffect(() => {
    if (location.pathname === "/1") {
      setProjectText(meetingMyContributionText);
    } else if (location.pathname === "/2") {
      setProjectText(pageMyContributionText);
    }
  }, []);

  const moreClickHandler = (index) => {
    console.log(isMoreClick[index]);
    setIsMoreClick((prev) => {
      if (prev[index]) {
        return !prev[index];
      } else {
        const newState = new Array(prev.length).fill(false);
        newState[index] = true;
        return newState;
      }
    });
  };

  return (
    <>
      {projectText.map((text, i) => {
        return (
          <div
            className={`${styles.Box} ${isMoreClick[i] ? styles.open : ""}`}
            key={text.id}
            onClick={() => moreClickHandler(i)}
          >
            {/* 제목 wrapper */}
            <div className={styles.myContributionDetailTitleWrapper}>
              <p>{text.skill}</p>
              <p>{text.pageTitle}</p>
              {/* 더보기 wrapper */}
              <div className={styles.detailMore}>
                <div className={styles.detailMoreLine}></div>
                <div className={styles.detailMoreLine}></div>
              </div>
            </div>
            {/* 상세 내용 */}
            <ul className={styles.detailTextWrapper}>
              {text.details.map((detailText) => {
                return (
                  <li>
                    <p className={styles.detailTextTitle}>
                      <FontAwesomeIcon
                        icon={faStarOfLife}
                        className={styles.icon}
                      />
                      {detailText.title}
                    </p>
                    <p className={styles.detailText}>
                      {detailText.description}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default MyContributionDetailBox;
