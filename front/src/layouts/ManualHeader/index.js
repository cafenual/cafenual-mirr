import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Manualheader = () => {
  const fakeData = [
    {
      name: "오픈",
      category: "open",
    },
    {
      name: "미들",
      category: "middle",
    },
    {
      name: "마감",
      category: "closure",
    },
  ];

  const [fakeListData, setFakeListData] = useState([]);
  useEffect(() => {
    setFakeListData(fakeData);
  }, []);

  return (
    <div id="manualheader">
      {fakeListData.map((data, index) => (
        <div className="parttime">
          <Link to={`/manual/${data.category}`}>{data.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Manualheader;
