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
        <div className="staff">
          <a href="/staff">직원관리</a>
        </div>
      </div>
    </div>
  );
};

export default Sidemenu;
