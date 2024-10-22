import React from "react";

import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import DetailInfo from "./DetailInfo";
import DetailHeader from "./DetailHeader";

function DetailTop({ styles }) {
  const projectDummy = useSelector((action) => action.project.dummy);
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
