import React, { useEffect, useState } from "react";

function MainTitle({ styles }) {
  return (
    <>
      <div className={styles.title}>
        도전에 대한 열정이 넘치며, <br />
        팀과 함께 성장하고 싶은 <br /> <span>개발자 이예진</span>
        입니다.
      </div>
    </>
  );
}

export default MainTitle;
