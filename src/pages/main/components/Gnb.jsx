import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Gnb({ styles }) {
  const [isMoreClick, setIsMoreClick] = useState(false);
  const gnbClickHandler = () => {
    setIsMoreClick((prev) => !prev);
  };

  return (
    <div className={styles.gnb}>
      <ul className={styles.menu} onClick={gnbClickHandler}>
        <div className={styles.titleMenuWrapper}>
          <div className={styles.titleMenu}>포트폴리오</div>
          {isMoreClick ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronRight} />
          )}
        </div>
        <div className={styles.subMenuWrapper}>
          <li className={styles.subMenu}>과팅 웹 앱</li>
          <li className={styles.subMenu}>나의 애착 페이지 웹</li>
        </div>
      </ul>
      <ul className={styles.menu} onClick={gnbClickHandler}>
        <div className={styles.titleMenuWrapper}>
          <div className={styles.titleMenu}>내 소개</div>
          {isMoreClick ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronRight} />
          )}
        </div>
        <div className={styles.subMenuWrapper}>
          <li className={styles.subMenu}>pos03167@naver.com</li>
          <li className={styles.subMenu}>010.5667.8759</li>
          <li className={styles.subMenu}>1996.12.05</li>
        </div>
      </ul>
    </div>
  );
}

export default Gnb;
