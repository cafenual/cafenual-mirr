import React from "react";
import "./styles.scss";

const handoverdetail = () => {
  return (
    <div id="handoverdetail" className="page-layout">
      <div className="notice-cont">
        <div className="content-tit">
          토요일에 예약있습니다
          <div className="tit-date"></div>
        </div>
        <div className="content-cont">예약내용</div>
        <div className="content-btn">
          <a className="btn-move">이전</a>
          <a className="btn-move">다음</a>
          <a href="/handoverlist" className="btn-list">
            목록
          </a>
          <a href="/handover/edit" className="btn-list">
            수정
          </a>
          <a className="btn-list">삭제</a>
        </div>
      </div>
    </div>
  );
};

export default handoverdetail;
