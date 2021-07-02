import React from "react";
import "./Sidemenu.scss";

const Sidemenu = () => {
  return (
    <div id="sidemenu">
      <div className="side">
        <div className="home">
          <span>Home</span>
        </div>
        <div className="dashboard">
          <a href="/dashboard">대시보드</a>
        </div>
        <div className="sch">
          <span>스케줄러</span>
        </div>
        <div className="worktime">
          <span>일한시간</span>
        </div>
      </div>
    </div>
  );
};

export default Sidemenu;
