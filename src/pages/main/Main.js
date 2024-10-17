import React, { useEffect, useState } from "react";
import styles from "./Main.module.scss";
import MainTitle from "./components/MainTitle";

import Gnb from "./components/Gnb";
function Main() {
  return (
    <section className={styles.mainWrapper}>
      <div className={styles.titleWrapper}>
        <MainTitle styles={styles} />
        <Gnb styles={styles} />
      </div>
      <div className={styles.subWrapper}>
        <div className={styles.subInner}></div>
      </div>
    </section>
  );
}

export default Main;
