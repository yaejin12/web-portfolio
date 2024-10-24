import React, { useState } from "react";
import iconOpen from "../../../assets/images/icons/arrow_url.svg";

function MyContributionDetail({ styles, project }) {
  const [isBoxClick, setIsBoxClick] = useState(
    Array(project.length).fill(false)
  );
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
              key={text.id}
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
                {text && text.text.map((detailText) => <p>{detailText}</p>)}
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default MyContributionDetail;
