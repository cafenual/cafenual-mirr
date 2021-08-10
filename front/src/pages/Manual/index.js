import Manualheader from "layouts/ManualHeader";
import React, { useEffect, useState } from "react";
import "./styles.scss";
import { withRouter } from "react-router-dom";
import {
  MdAdd,
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import cn from "classnames";

const Manual = ({ match }) => {
  const category = match.params.categoryid;

  const fakeData = [
    {
      task: "pos & kiosk 개점등록",
      category: "open",
      checked: true,
    },
    {
      task: "매장 불켜기",
      category: "open",
      checked: false,
    },
    {
      task: "매장 정리 (쓸기 & 닦기)",
      category: "open",
      checked: false,
    },
    {
      task: "사용한 컵 & 쟁반 회수",
      category: "middle",
      checked: false,
    },
    {
      task: "출근하고 테이블 닦기",
      category: "middle",
      checked: false,
    },
    {
      task: "재료 채우기",
      category: "middle",
      checked: false,
    },
    {
      task: "설거지",
      category: "closure",
      checked: true,
    },
    {
      task: "주방 쓰레기 비우기",
      category: "closure",
      checked: true,
    },
    {
      task: "분리수거",
      category: "closure",
      checked: true,
    },
  ];

  const [fakeListData, setFakeListData] = useState([]);
  useEffect(() => {
    setFakeListData(fakeData.filter((data) => data.category === category));
  }, [category]);

  return (
    <>
      <div id="manual">
        <div className="container">
          <form className="insert">
            <input placeholder="할 일을 입력하세요" />
            <select className="time">
              <option value="none">선택하세요</option>
              <option value="001">오픈</option>
              <option value="002">미들</option>
              <option value="003">마감</option>
            </select>
            <button type="submit">
              <MdAdd />
            </button>
          </form>
          <div className="header">
            <Manualheader />
          </div>
          {fakeListData.map((data, index) => (
            <div className="cont">
              <div className="checkbox">
                {data.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{data.task}</div>
              </div>
              <div className="remove">
                <MdRemoveCircleOutline />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default withRouter(Manual);
