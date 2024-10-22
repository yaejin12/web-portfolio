import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleBlackRef } from "../../../store/BlackRef-slice";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";

function MenuClickPage({ styles }) {
  const isCloseMenu = useSelector((state) => state.isCloseMenu.isCloseMenu);

  const dispatch = useDispatch();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    dispatch(toggleBlackRef(inView));
  }, [inView]);
  return (
    <>
      <div
        className={`${styles.menuClickWrapper} ${
          isCloseMenu ? styles.open : ""
        }`}
        ref={ref}
      >
        <div className={styles.gnb}>
          <p>과팅 웹 앱</p>
          <p>나의 애착페이지 웹</p>
        </div>
      </div>
    </>
  );
}

export default MenuClickPage;
