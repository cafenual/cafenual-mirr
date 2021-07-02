import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const RecipeHeader = () => {
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
    {
      name: "밀크티",
      category: "tea",
    },
  ];

  const [fakeListData, setFakeListData] = useState([]);
  useEffect(() => {
    setFakeListData(fakeData);
  }, []);

  return (
    <div id="RecipeHeader">
      {fakeListData.map((data, index) => (
        <div className="coffee">
          <Link to={`/menu/${data.category}`}>{data.category}</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeHeader;
