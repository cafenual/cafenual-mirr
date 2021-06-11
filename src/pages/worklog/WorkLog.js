import React, { useState } from "react";
import "./WorkLog.css";

const WorkLog = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [currentText, setCurrentText] = useState("");
  const [changeTime, setchangeTime] = useState("");

  const changeTimeHandle = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    setchangeTime(`${hours}:${minutes}:${seconds}`);
  };

  setInterval(changeTimeHandle, 100);

  const onClickEnter = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    setCurrentText("출근되었습니다.");
    setCurrentTime(`${hours}:${minutes}:${seconds}`);
  };

  const onClickEnter2 = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    setCurrentText("퇴근되었습니다.");
    setCurrentTime(`${hours}:${minutes}:${seconds}`);
  };

  return (
    <div id="worklog">
      <body>
        <div className="background">
          <div className="container">
            <center>
              <div className="middle">
                <div className="Date"></div>
                <br></br>
                <div className="Clock"></div>

                <p />
                <input
                  type="button"
                  name="출근"
                  value="출근"
                  onClick={onClickEnter}
                />
                <p />
                <input
                  type="button"
                  name="퇴근"
                  value="퇴근"
                  onClick={onClickEnter2}
                />
                <div className="ot"> {currentTime}</div>
                <br />
                <div className="textprint">{currentText}</div>
              </div>
            </center>
          </div>
        </div>
      </body>
    </div>
  );
};

export default WorkLog;
