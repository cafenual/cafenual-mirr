import React from "react";
import { IoIosCafe, IoMdListBox, IoMdBookmarks } from "react-icons/io";
import { ImSpoonKnife, ImBell } from "react-icons/im";
import "./Header.css";
const Header = () => {
  return (
    <div id="Header">
      <div className="headerleft">
        <div className="header-logo">
          <IoIosCafe size="40" />
        </div>
        <span className="cn">cafenual</span>

        <div className="headermenu">
          <div className="notice flexbox">
            <ImBell size="40" />
            <a href="/notice">공지사항</a>
          </div>
          <div className="recipe flexbox">
            <ImSpoonKnife size="40" />
            <span>메뉴</span>
          </div>
          <div className="hoto flexbox">
            <IoMdListBox size="40" />
            <span>인수인계</span>
          </div>
          <div className="manual flexbox">
            <IoMdBookmarks size="40" />
            <span>매뉴얼</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
