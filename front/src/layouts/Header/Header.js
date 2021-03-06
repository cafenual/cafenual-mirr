import React from "react";
import { IoIosCafe, IoMdListBox, IoMdBookmarks } from "react-icons/io";
import { ImSpoonKnife, ImBell } from "react-icons/im";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { EmptyUser } from "modules/users";
const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onLogout = async () => {
    try {
      await axios.post("http://localhost:4000/api/user/logout");
      sessionStorage.removeItem("user");
      dispatch(EmptyUser());
    } catch (e) {
      alert("로그아웃에 실패했습니다");
    }
  };

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
            <a href="/menu">메뉴</a>
          </div>
          <div className="hoto flexbox">
            <IoMdListBox size="40" />
            <a href="/handoverlist">인수인계</a>
          </div>
          <div className="manual flexbox">
            <IoMdBookmarks size="40" />
            <a href="/manual">매뉴얼</a>
          </div>
        </div>
      </div>
      <div className="headerr">
        {user.email && (
          <>
            <div>{user.name}님 안녕하세요</div>
            <button onClick={onLogout}>로그아웃</button>
          </>
        )}
        {!user.email && (
          <>
            <button>로그인</button>
            <button>회원가입</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
