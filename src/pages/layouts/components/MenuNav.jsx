import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import backImg from "../../../assets/images/icons/back.svg";

function MenuNav({ styles }) {
  const location = useLocation();
  const isIntroduce = location.pathname === "/introduce";
  const isProject = location.pathname === "/project";

  const ClassFn = () => {
    if (isIntroduce) {
      return styles.isIntroduce;
    }
    if (isProject) {
      return styles.isProject;
    } else {
      return "";
    }
  };

  return (
    <nav className={styles.menu}>
      <div className={styles.inner}>
        <ul className={`${styles.gnb} ${ClassFn()}`}>
          <li className={styles.backImgWrapper}>
            {isIntroduce && (
              <NavLink to="/">
                <img src={backImg}></img>
              </NavLink>
            )}
          </li>
          <li className={styles.nav}>
            <NavLink to="/introduce">
              <div className={styles.intro}>INTRODUCE</div>
            </NavLink>
            <NavLink to={"/project"}>
              <div className={styles.project}>PROJECT</div>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MenuNav;
