import { createSlice } from "@reduxjs/toolkit";
import meeting from "../assets/images/img/meeting.png";
import fivejo from "../assets/images/img/5jo.png";

const initialState = {
  dummy: [
    {
      id: 1,
      title: "과감하게 ",
      titleBr: "팅기지 말고 과팅",
      info: "대학생들을 주요 대상으로 하는 미팅 웹앱으로, ",
      infoBr: "소통과 만남을 중개해주는 플랫폼입니다.",
      date: "2024. 7. 17 - 2024. 8. 29",
      team: "3on3 조",
      img: meeting,
      video: "https://www.youtube.com/watch?v=qVWxRTHgnik&feature=youtu.be",
      url: {
        portfolio: `/project/1`,
        github: "https://github.com/3on3",
        site: "http://gwating.com/",
      },

      overview: {
        1: "학교나 학과를 기반으로 네트워크를 형성할 수 있어, 학생들이 더욱 신뢰할 수 있는 인맥을 구축하는 데 도움을 줍니다.",
        2: "원하는 지역과 인원 수에 맞춰 검색이 가능하여 편리하게 과팅을 진행할 수 있습니다.",
        3: "채팅 기능을 통해 실제 만남 전에 상대방에 대해 미리 알아볼 수 있습니다.",
        4: "알림, 결제 등 과팅을 원활하게 돕는 다양한 기능이 제공됩니다.",
        5: "유저들이 멤버십 결제를 통해 다른 유저의 프로필 사진을 확인할 수 있도록 설계하여, 추가적인 기능을 제공하면서 자연스럽게 결제를 유도하는 수익 구조입니다.",
      },

      skills: [
        {
          FrontEnd: {
            react: "React",
            javaScript: "JavaScript",
            AJAX: "AJAX",
            scss: "SASS/SCSS",
          },
          BackEnd: {
            JAVA: "JAVA",
            springBoot: "SpringBoot",
            JPA: "JPA",
          },

          Dev: {
            MySQL: "MySQL",
            MariaDB: "MariaDB",
            Redis: "Redis",
            Docker: "Docker",
            webSocket: "WebSocket",
            AWS: "AWS",
          },
          Tools: {
            git: "GIT",
            gitHub: "GitHub",
            figma: "Figma",
            discord: "Discord",
            notion: "Notion",
            postman: "Postman",
          },
        },
      ],
    },
    {
      id: 2,
      title: "나의 애착 페이지",
      info: "현대인들의 감성적인 소통과 웰빙을 지원하기 위해  ",
      infoBr: "개발된 디지털 소통 플랫폼입니다.",
      date: "2024. 6. 21 - 2024. 7. 9",
      team: "편히 쉬 조",
      img: fivejo,
      url: {
        portfolio: "/project/2",
        github: "https://github.com/project5jo",
      },
    },
  ],
};
const ProjectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
});

export const ProjectAction = ProjectSlice.actions;
export default ProjectSlice.reducer;
