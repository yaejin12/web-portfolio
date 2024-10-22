import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCloseMenu } from "../../../store/BlackRef-slice";

function MenuNav({ styles }) {
  const [isClose, setIsClose] = useState(false);
  const dispatch = useDispatch();
  const closeClickHandler = () => {
    setIsClose(!isClose);
    dispatch(toggleCloseMenu());
    
  };

  useEffect(()=>{
    if(isClose){
      document.body.classList.add('body-lock');
    }else{
      document.body.classList.remove('body-lock');
    }
    return () => {
      document.body.classList.remove('body-lock'); // 컴포넌트 언마운트 시 제거
    };
},[isClose])

  const isRef = useSelector((state) => state.isBlackRef.isBlackRef);

  return (
    <>
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
    </>
  );
}

export default MenuNav;
