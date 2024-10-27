import React from "react";
import MenuNav from "./components/MenuNav";

function Header({ styles }) {

  
  return (
    <header>
      <div className={styles.headerWrapper}>
        <MenuNav styles={styles} />
      </div>
    </header>
  );
}

export default Header;
