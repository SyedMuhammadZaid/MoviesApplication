import { Input } from "antd";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./Search.scss";

const { Search } = Input;

const SearchBar = ({
  placeholder,
  style,
  onChange,
  value,
  onSearch,
  className,
}) => {
  return (
    <div className="searchBar">
      <input
        type="search"
        style={style}
        className="searchInput"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {/* <AiOutlineClose className="icon-input" onClick={onSearch} /> */}
    </div>
  );
};

export default SearchBar;
