import React from "react";
import githubLogo from "../../../assets/images/icons/github_logo.svg";
import notionLogo from "../../../assets/images/icons/notion_logo.svg";
import homeIcon from "../../../assets/images/icons/house.svg";
import { NavLink } from "react-router-dom";

function SocialNav({ styles }) {
  return (
    <nav className={styles.socialNav}>
      <ul>
        <li>
          <a href="https://github.com/yaejin12">
            <img src={githubLogo} />
          </a>
        </li>
        <li>
          {/* <a href="https://tarry-windscreen-9de.notion.site/108d3e9ea333805088f8ec1aa808d297?pvs=74"> */}
          <NavLink to={"/"}>
            <img className={styles.home} src={homeIcon} />
          </NavLink>
          {/* </a> */}
        </li>
      </ul>
    </nav>
  );
}

export default SocialNav;
