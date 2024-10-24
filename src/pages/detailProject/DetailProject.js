import React from "react";
import DetailTop from "./components/DetailTop";
import stylesTop from "./DetailProject.module.scss";
import MyContribution from "./components/MyContribution";
import DetailStyles from "./DetailProject.module.scss";
import DetailSkills from "./components/DetailSkills";

function DetailProject() {
  return (
    <>
      <DetailTop styles={stylesTop} />
      <DetailSkills styles={DetailStyles} />
      <MyContribution styles={DetailStyles} />
    </>
  );
}

export default DetailProject;
