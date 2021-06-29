import React from "react";
import "./DashBoard.scss";
import { AiOutlineUser } from "react-icons/ai";
import Sidemenu from "layouts/Sidemenu/Sidemenu";

const DashBoardAD = () => {
  return (
    <>
      <Sidemenu />

      <div id="dashboard">
        <div className="container">
          <div className="allmenu">
            <div className="menul">
              <div className="menuevent">
                <div className="menu">신메뉴&신이벤트</div>
                <div className="schedule">스케줄</div>
              </div>
              <div className="notice">공지사항</div>
            </div>
            <div className="menur">
              <div className="profile">
                계정정보
                <center>
                  <p>
                    <AiOutlineUser size="200" />
                  </p>
                  이름 : 신미르
                  <p>아이디 : tlsalfm820 </p>
                  <button>출근하기</button>
                  <button>퇴근하기</button>
                </center>
              </div>
              <div className="worklist">할 일</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardAD;
