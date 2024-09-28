import React, { Children, useEffect, useState } from "react";
import styles from "./GradationBg.module.scss";

function GradationBg({ children }) {
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
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={styles.mainBg} onMouseMove={(e) => handleMouseMove(e)}>
      {children}
      <div className={styles.circle} style={{ left: xy.x, top: xy.y }}></div>
    </div>
  );
}

export default GradationBg;
