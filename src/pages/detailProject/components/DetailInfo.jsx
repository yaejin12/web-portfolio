import React from "react";

function DetailInfo({ styles }) {
  const circleText = [
    {
      id: 1,
      text: (
        <>
          <span>대학 인증메일</span>을 통해 신뢰할 수 <br />
          있는 네트워크를 형성하여 <br />
          학생들이 <span>안전한 인맥을 구축</span>할 수 있도록 지원합니다.
        </>
      ),
    },
    {
      id: 2,
      text: (
        <>
          매칭 된 상대방과
          <span>
            실시간 채팅을 <br />
            통해 소통
          </span>
          하며 실제 만남 전에 <br />
          상대방에 대해 미리 알아볼 수 <br />
          있습니다.
        </>
      ),
    },
    {
      id: 3,
      text: (
        <>
          프리미엄 사용자는 다른 유저의 <br />
          프로필 사진을 열람할 수 있으며, <br /> 이 멤버십 구조는 자연스럽게{" "}
          <br />
          <span>결제를 유도하는 수익 모델</span>입니다.
        </>
      ),
    },
  ];

  return (
    <div className={styles.detailInfoWrapper}>
      {circleText.map((text) => {
        return (
          <div key={text.id} className={styles.circle}>
            <p>{text.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default DetailInfo;
