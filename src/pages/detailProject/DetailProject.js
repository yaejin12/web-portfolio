import React from "react";
import DetailTop from "./components/DetailTop";
import stylesTop from "./DetailProject.module.scss";
import MyContribution from "./components/MyContribution";
import styles from "./DetailProject.module.scss";

function DetailProject() {
  return (
    <>
      <DetailTop styles={stylesTop} />
      <MyContribution styles={styles} />
    </>
  );
}

export default DetailProject;
