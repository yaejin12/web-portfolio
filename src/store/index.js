import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./ProjectDummy-slice";
import isBlackRef from "./BlackRef-slice";
import { closeMenuReducer } from "./BlackRef-slice";
// 단일 리덕스 스토어 생성
const store = configureStore({
  reducer: {
    project: projectReducer,
    isBlackRef: isBlackRef,
    isCloseMenu: closeMenuReducer,
  },
});

export default store;
