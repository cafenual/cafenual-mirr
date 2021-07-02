import React from "react";
import "./styles.scss";
const index = () => {
  return (
    <div id="RecipeDetail">
      <div className="container">
        <div className="left">
          <div className="img-area">
            <img className="picture" />
            <span>사진</span>
          </div>
          <div className="ingredient">재료</div>
        </div>
        <div className="right">
          <div className="top-btn">
            <div className="menuname">
              <h2>메뉴이름</h2>
            </div>
            <div className="listbtn">
              <a href="/menu">목록</a>
            </div>
          </div>
          <div className="text-area">레시피</div>
          <div className="bottom-btn">
            <div className="edit">수정</div>
            <div className="delete">삭제</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
