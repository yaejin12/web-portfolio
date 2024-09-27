import React, { useEffect, useState } from "react";
import styles from "./Main.module.scss";
import MainTitle from "./components/MainTitle";
import Info from "./components/Info";

function Main() {
  const [xy, setXY] = useState({ x: 760, y: 160 });
  const [isMouseMove, setIsMouseMove] = useState(false);

  // ======마우스 효과=======
  const handleMouseMove = (e) => {
    if (!isMouseMove) return;
    setXY({ x: e.clientX - 250, y: e.clientY - 200 });
  };

  //2초 뒤 마우스 이벤트 활성화
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMouseMove(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // ===== 화면전환 ======

  return (
    <div className={styles.mainBg} onMouseMove={(e) => handleMouseMove(e)}>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <div className={styles.mainWrapper}>
            <MainTitle styles={styles} />
            <Info styles={styles} />
          </div>
        </div>
      </div>
      <div className={styles.circle} style={{ left: xy.x, top: xy.y }}></div>
    </div>
  );
}

export default Main;
