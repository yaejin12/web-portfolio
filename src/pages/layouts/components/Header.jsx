import React from "react";
import MenuNav from "./MenuNav";
import SocialNav from "./SocialNav";

function Header({ styles }) {
  return (
    <header>
      <MenuNav styles={styles} />
    </header>
  );
}

export default Header;
