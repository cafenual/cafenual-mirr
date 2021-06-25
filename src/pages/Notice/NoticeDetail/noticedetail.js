import React from "react";
import "./noticedetail.scss";
const noticedetail = () => {
  return (
    <>
      <div id="NoticeDetail" className="page-layout">
        <div className="tit">
          <h4 className="tit-corp">
            <a href="/notice">공지사항</a>
          </h4>
        </div>
        <div className="notice-cont">
          <div className="content-tit">
            title
            <div className="tit-date"></div>
          </div>
          <div className="content-cont"></div>
          <div className="content-btn">
            <a className="btn-move">이전</a>
            <a className="btn-move">다음</a>
            <a href="/notice" className="btn-list">
              목록
            </a>
            <a href="/notice/edit" className="btn-list">
              수정
            </a>
            <a className="btn-list">삭제</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default noticedetail;
