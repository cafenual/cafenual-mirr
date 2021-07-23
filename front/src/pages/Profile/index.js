import React, { useEffect, useState } from "react";
import "./styles.scss";
import { withRouter } from "react-router-dom"; //withRouter를 사용해야 match가 사용가능
import { RiProfileLine } from "react-icons/ri";
import { ImCross } from "react-icons/im";

const Profile = () => {
  return (
    <div id="Profile">
      <div className="container">
        <div className="top">
          <div className="tleft">
            <div className="title">
              <div className="icon">
                <RiProfileLine size="40" />
              </div>
              <div className="text">
                <h2>계정 정보</h2>
              </div>
            </div>
          </div>
          <div className="tright">
            <div className="trtop">
              <div className="head">
                <h2>기본 정보</h2>
              </div>
              <div className="box">
                <h2>이름</h2>
                <h2 className="cont">신미르</h2>
              </div>
              <div className="box">
                <h2>생일</h2>
                <h2 className="cont">1998년 11월 17일</h2>
              </div>
              <div className="box">
                <h2>직책</h2>
                <h2 className="cont">아르바이트</h2>
              </div>
              <div className="box">
                <h2>시급</h2>
                <h2 className="cont">8720원</h2>
              </div>
              <div className="box">
                <h2>비밀번호</h2>
                <h2 className="cont"></h2>
              </div>
            </div>
            <div className="trbottom">
              <div className="head">
                <h2>연락 정보</h2>
              </div>
              <div className="box">
                <h2>이메일</h2>
                <h2 className="cont">tlsalfm820@naver.com</h2>
              </div>
              <div className="box">
                <h2>연락처</h2>
                <h2 className="cont">010-7711-5243</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="bleft">
            <div className="icon">
              <ImCross size="32" />
            </div>
            <div className="text">
              <h2>계정 탈퇴</h2>
            </div>
            <div className="edit">
              <h3>수정</h3>
            </div>
          </div>
          <div className="bright"></div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Profile);
