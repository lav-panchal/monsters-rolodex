import React from "react";
import "./SearchBox.css";
export const SearchBox = ({ placeholder, handlerChange }) => {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handlerChange}
      />
    </div>
  );
};
