import React from "react";
import MenuNav from "./components/MenuNav";
import Logo from "./components/Logo";

function Header({ styles }) {
  return (
    <header>
      <div className={styles.headerWrapper}>
        <Logo styles={styles} />
        <MenuNav styles={styles} />
      </div>
    </header>
  );
}

export default Header;
