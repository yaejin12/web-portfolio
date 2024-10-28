import React, { useState } from "react";
import iconOpen from "../../../assets/images/icons/arrow_url.svg";
import { v4 as uuidV4 } from "uuid";

function MyContributionDetail({ styles, project }) {
  // 박스 클릭했는지 상태관리
  const [isBoxClick, setIsBoxClick] = useState(
    Array(project.length).fill(false)
  );

  // 어떤 박스 클릭했는지 확인하는 함수
  const BoxClickHandler = (id) => {
    setIsBoxClick((prv) => {
      return prv.map((isClick, index) => (index === id ? !isClick : false));
    });
  };

  return (
    <div>
      {/* 내역할 박스 */}
      {project &&
        project.map((text) => {
          return (
            <div
              key={uuidV4()}
              className={`${styles.Box} ${
                isBoxClick[text.id] ? styles.open : ""
              }`}
              onClick={() => BoxClickHandler(text.id)}
            >
              <div className={styles.contributionTitleWrapper}>
                <p className={styles.contributionTitle}>{text.title}</p>
                <img src={iconOpen} />
              </div>
              <div className={styles.contributionText}>
                {text &&
                  text.text.map((detailText, index) => (
                    <p key={index}>{detailText}</p>
                  ))}
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default MyContributionDetail;
