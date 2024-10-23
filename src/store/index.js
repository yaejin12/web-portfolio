import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./ProjectSkills-slice";
import isBlackRef from "./Toggle-slice";
import { closeMenuReducer } from "./Toggle-slice";
import MyContributionReducer from "./MyContribution-slice";
// 단일 리덕스 스토어 생성
const store = configureStore({
  reducer: {
    projectSkills: projectReducer,
    isBlackRef: isBlackRef,
    isCloseMenu: closeMenuReducer,
    myContribution: MyContributionReducer,
  },
});

export default store;
