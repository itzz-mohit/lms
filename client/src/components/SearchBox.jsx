import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchText } from "../features/searchSlice";
import ShowData from "./ShowData";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");

  const handleClick = () => {
    console.log(searchText);
    dispatch(getSearchText(searchText));
  };
  return (
    <div>
      <h1>ShowData</h1>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Enter the text
        </label>
        <input
          className="border border-black p-5"
          placeholder="Enter the text"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="m-5 bg-rose-500 p-5" onClick={handleClick}>
          Submit
        </button>
      </div>
      <div>
        <ShowData />
      </div>
    </div>
  );
};

export default SearchBox;
