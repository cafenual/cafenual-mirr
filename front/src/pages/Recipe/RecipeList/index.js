import React, { useEffect, useState } from "react";
import "./styles.scss";
import RecipeHeader from "layouts/RecipeHeader";
import Sidemenu from "layouts/Sidemenu/Sidemenu";
import { withRouter } from "react-router-dom"; //withRouter를 사용해야 match가 사용가능

const RecipeList = ({ match }) => {
  const category = match.params.categoryid;
  console.log(category);
  const fakeData = [
    {
      name: "아메라카노",
      category: "coffee",
    },
    {
      name: "복숭아 아이스티",
      category: "juice",
    },
    {
      name: "카페라떼",
      category: "latte",
    },
    {
      name: "밀크티",
      category: "tea",
    },
  ];

  const [fakeListData, setFakeListData] = useState([]);
  useEffect(() => {
    setFakeListData(fakeData.filter((data) => data.category === category));
  }, [category]);

  return (
    <>
      <Sidemenu />

      <div id="RecipeList">
        <RecipeHeader />
        <ul>
          {fakeListData.map((data, index) => (
            <li>
              <div className="img-area">
                <img className="image" />
              </div>
              <div className="txt-area">{data.name}</div>
            </li>
          ))}
        </ul>
        <a href="/menu/detail">디테일</a>
      </div>
    </>
  );
};

export default withRouter(RecipeList);
