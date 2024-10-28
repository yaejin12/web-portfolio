import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { meetingCircleText, pageCircleText } from "./DetailInfoText";
import { v4 as uuidV4 } from "uuid";

function DetailInfo({ styles }) {
  // 프로젝트 더미 데이터
  const [projectInfo, setProjectInfo] = useState([]);
  const location = useLocation();

  const updateProjectInfo = () => {
    if (location.pathname === "/1") {
      setProjectInfo(meetingCircleText);
    } else if (location.pathname === "/2") {
      setProjectInfo(pageCircleText);
    }
  };

  useEffect(() => {
    updateProjectInfo();
  }, [location]);

  return (
    <div className={styles.detailInfoWrapper}>
      {projectInfo.map((text) => {
        return (
          <div key={uuidV4()} className={styles.circle}>
            <p>{text.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default DetailInfo;
