import React from "react";
import "./styles.scss";

const handoverupload = () => {
  return (
    <div id="handoverupload">
      <div className="upload-form">
        <form action="">
          <input type="text" value="제목" placeholder="제목을 입력하세요" />
          <select name="worker" className="select">
            <option>미르</option>
            <option>소현</option>
            <option>도현</option>
            <option>지호</option>
          </select>
          <div className="write-cont"></div>

          <button type="submit">등록하기</button>
        </form>
      </div>
    </div>
  );
};

export default handoverupload;
