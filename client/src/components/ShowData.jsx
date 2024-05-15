import React from "react";
import { useSelector } from "react-redux";

const ShowData = () => {
  const searchText = useSelector((state) => state.search.text);
  return (
    <div>
      <h1>ShowData</h1>
      <p>{searchText}</p>
    </div>
  );
};

export default ShowData;
