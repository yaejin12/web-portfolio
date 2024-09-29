import React from "react";
import ReactPlayer from "react-player";

function ProjectVideo({ styles, project }) {
  return (
    <li className={styles.projectDetailBox}>
      <div className={styles.skillTitleWrapper}>
        <div className={styles.videoWrapper}>
          {project.video ? (
            <ReactPlayer
              className={styles.video}
              url={project.video}
              controls={true}
              width="100%"
              height="100%"
            />
          ) : (
            project.subImg.map((img, i) => (
              <img key={i} className={styles.img} src={img}></img>
            ))
          )}
        </div>
      </div>
    </li>
  );
}

export default ProjectVideo;
