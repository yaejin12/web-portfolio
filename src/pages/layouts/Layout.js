import React from "react";
import Header from "./components/Header";
import { Outlet, useLocation } from "react-router-dom";
import styles from "./Layout.module.scss";
import SocialNav from "./components/SocialNav";

function Layout() {
  const location = useLocation();

  return (
    <>
      <Header styles={styles} />
      <SocialNav styles={styles} />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
