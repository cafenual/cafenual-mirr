import React from "react";
import "./noticeupload.scss";

const noticeupload = () => {
  return (
    <div id="NoticeUpload">
      <div className="upload-form">
        <form action="">
          <input type="text" value="제목" placeholder="제목을 입력하세요" />
          <div className="write-cont"></div>

          <button type="submit">등록하기</button>
        </form>
      </div>
    </div>
  );
};

export default noticeupload;
