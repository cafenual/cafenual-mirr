import Sidemenu from "layouts/Sidemenu/Sidemenu";
import React, { useEffect, useState } from "react";
import "./styles.scss";

const StaffList = () => {
  const fakeData = [
    {
      name: "000",
      position: "매니저",
      date: "21.03.25",
      age: "27",
      email: "abcdefghijk@naver.com",
      tel: "010-1234-5678",
      info: "게으름",
    },
    {
      name: "123",
      position: "아르바이트",
      date: "21.05.27",
      age: "22",
      email: "abcdefghijk@naver.com",
      tel: "010-1234-5678",
      info: "일을 느리게 배움",
    },
    {
      name: "456",
      position: "아르바이트",
      date: "21.05.30",
      age: "19",
      email: "abcdefghijk@naver.com",
      tel: "010-1234-5678",
      info: "돈 밝힘",
    },
    {
      name: "789",
      position: "아르바이트",
      date: "21.06.29",
      age: "20",
      email: "abcdefghijk@naver.com",
      tel: "010-1234-5678",
      info: "지각 자주함",
    },
  ];

  const [fakeListData, setFakeListData] = useState([]);
  useEffect(() => {
    setFakeListData(fakeData);
  }, []);

  return (
    <>
      <Sidemenu />

      <div id="stafflist">
        <div className="container">
          <div className="nav">목록</div>
          <div className="cont">
            <div className="cont-top">
              <div className="left"></div>
              <div className="middle">직원 목록</div>
              <div className="right"></div>
            </div>
            <div className="cont-list">
              <div className="bar">
                <div>이름</div>
                <div>직책</div>
                <div>가입일자</div>
              </div>
              {fakeListData.map((data, index) => (
                <details>
                  <summary>
                    <div className="flexbox">
                      <div className="name">{data.name}</div>
                      <div className="position">{data.position}</div>
                      <div className="date">{data.date}</div>
                    </div>
                  </summary>
                  <div className="detailflexbox">
                    <div className="image"></div>
                    <div className="detailinfo">
                      <div className="age">나이 : {data.age}</div>
                      <div className="email">이메일 : {data.email}</div>
                      <div className="tel">전화번호 : {data.tel}</div>
                      <div className="info">특이사항 : {data.info}</div>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffList;
