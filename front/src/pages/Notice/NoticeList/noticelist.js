import React from "react";
import "./noticelist.scss";
import { AiOutlineSearch } from "react-icons/ai";

const noticelist = () => {
  return (
    <div id="notice">
      <div className="left">
        <div className="stitle">
          <h3>공지사항</h3>
        </div>
        <div className="write">
          <a href="/notice/upload">작성</a>
        </div>
      </div>
      <div className="right">
        <div className="search">
          <div className="searchbar">
            <center>
              <input
                type="text"
                className="searchindex"
                placeholder="검색어를 입력해주세요"
              />
              <button type="submit" className="serachicon">
                <AiOutlineSearch size="20" />
              </button>
            </center>
          </div>
        </div>

        <div className="table-comm">
          <table className="table">
            <colgroup>
              <col className="coll" />
              <col className="colr" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">내용</th>
                <th scope="col">등록일</th>
              </tr>
            </thead>
            <tbody>
              <a href={`/notice/detail/`}>디테일</a>
            </tbody>
          </table>
        </div>

        <div className="paging-comm"></div>
      </div>
    </div>
  );
};

export default noticelist;
