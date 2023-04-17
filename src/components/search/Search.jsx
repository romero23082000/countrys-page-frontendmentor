import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Search.css";

const Search = (props) => {
  const { handleSearch, inputSearch } = props;
  return (
    <div className="inputSearch">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={handleSearch}
        value={inputSearch}
      />
    </div>
  );
};

export default Search;
