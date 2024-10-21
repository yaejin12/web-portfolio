import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import styles from "./Layout.module.scss";
import Header from "./Header";
import ScrollTop from "./ScrollTop.js";
import Footer from "./Footer.js";

function Layout() {
  const location = useLocation();

  return (
    <>
      <ScrollTop />
      <Header styles={styles} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
