import React, { useEffect } from "react";
import DetailInfo from "./DetailInfo";
import DetailHeader from "./DetailHeader";
import ReactPlayer from "react-player";
import Video from "../../../components/common/video/Video";

function DetailTop({ styles }) {
  return (
    <section>
      <div className={styles.projectSection}>
        <div className={styles.projectWrapper}>
          <DetailHeader styles={styles} />
          {/*  */}
          {/* 영상 */}
          <div className={styles.videoWrapper}>
            <Video url={"https://youtu.be/qVWxRTHgnik"} />
          </div>
          {/*  */}
          {/* 설명 */}
          {/* <DetailInfo styles={styles} /> */}
        </div>
      </div>
    </section>
  );
}

export default DetailTop;
