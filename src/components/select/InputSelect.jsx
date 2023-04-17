import React from "react";
import "./Select.css";

const InputSelect = (props) => {
  const { selectFilter, handleSelect } = props;
  return (
    <div className="container-select">
      <select onChange={handleSelect} value={selectFilter}>
        <option hidden value="">
          Filter by
        </option>
        <option value="Africa">Africa </option>
        <option value="Americas"> America</option>
        <option value="Asia">Asia </option>
        <option value="Europe">Europe </option>
        <option value="Oceania">Oceania </option>
      </select>
    </div>
  );
};

export default InputSelect;
