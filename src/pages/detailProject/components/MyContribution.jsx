import React, { useState } from "react";
import iconOpen from "../../../assets/images/icons/arrow_url.svg";


function MyContribution({ styles }) {
  // ================
  const myContribution = [
    {
      id: 1,
      title: "메인페이지",
      text: (
        <>
          <p>조건에 따른 다중필터링</p>
          <p> 그룹 목록 조회</p>
          <p> 무한스크롤 구현</p>
        </>
      ),
    },
    {
      id: 2,
      title: "익명게시판",
      text: (
        <>
          <p>댓글 목록 조회, 등록 구현</p>
          <p> 내가 쓴 글만 삭제</p>
          <p> 무한스크롤</p>
        </>
      ),
    },
    {
      id: 3,
      title: "그 외 페이지 생성",
      text: (
        <>
          <p>게시글 생성</p>
          <p>내가 속한 그룹</p>
          <p>내가 속한 채팅 페이지</p>
        </>
      ),
    },
    {
      id: 4,
      title: "공통 컴포넌트",
      text: (
        <>
          <p>Input 컴포넌트</p>
          <p>그룹이 없을 경우 안내하는 메시지</p>
        </>
      ),
    },
  ];

  // =================
  const [isBoxClick, setIsBoxClick] = useState(
    Array(myContribution.length).fill(false)
  );

  console.log("isBoxClick", isBoxClick);
  // =======
  const BoxClickHandler = (id) => {
    console.log(id);
    setIsBoxClick((prv) => {
      return prv.map((isClick, index) => (index === id ? !isClick : false));
    });
  };

  return (
    <>
      <section>
        <div className={styles.myContributionSection}>
          <h1>My Contributions</h1>
          <div className={styles.contributionWrapper}>
            {/* 링크 연결 */}
            <div className={styles.urlWrapper}>
              <div className={styles.url}>Notion</div>
              <div className={styles.url}>
                GIT <br /> HUB
              </div>
              <div className={styles.url}>
                프로젝트
                <br />
                상세보기
              </div>
            </div>
            <div>
              {/* 내역할 박스 */}
              {myContribution.map((text, index) => {
                return (
                  <div
                    key={text.id}
                    className={`${styles.Box} ${
                      isBoxClick[index] ? styles.open : ""
                    }`}
                    onClick={() => BoxClickHandler(index)}
                  >
                    <div className={styles.contributionTitleWrapper}>
                      <p className={styles.contributionTitle}>{text.title}</p>
                      <img src={iconOpen} />
                    </div>
                    <div className={styles.contributionText}>{text.text}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MyContribution;
