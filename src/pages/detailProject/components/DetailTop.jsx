import React, { useEffect } from "react";
import DetailInfo from "./DetailInfo";
import DetailHeader from "./DetailHeader";


function DetailTop({ styles }) {


  return (
    <section>
      <div className={styles.projectSection}>
        <DetailHeader styles={styles} />
        {/*  */}
        {/* 영상 */}
        {/* <div className={styles.videoWrapper}>
          <ReactPlayer
            url={projectDummy[0].video}
            controls={true}
            width="100%"
            height="100%"
          />
        </div> */}
        {/*  */}
        {/* 설명 */}
        <DetailInfo styles={styles} />
      </div>
    </section>
  );
}

export default DetailTop;
