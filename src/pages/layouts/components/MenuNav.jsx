import React, { useState } from "react";
import { useSelector } from "react-redux";

function MenuNav({ styles }) {
  const [isClose, setIsClose] = useState(false);
  const closeClickHandler = () => {
    setIsClose(!isClose);
  };

  const isRef = useSelector((state) => state.isBlackRef.isBlackRef);

  return (
    <div
      className={`${styles.menuWrapper} ${isClose ? styles.close : ""}`}
      onClick={closeClickHandler}
    >
      <div
        style={{ backgroundColor: isRef ? "#fff" : "" }}
        className={styles.menuLine}
      />
      <div
        style={{ backgroundColor: isRef ? "#fff" : "" }}
        className={styles.menuLine}
      />
    </div>
  );
}

export default MenuNav;
