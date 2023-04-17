import React from "react";
import { Link } from "react-router-dom";
import "./Country.css";
const Countrys = (props) => {
  const { item } = props;
  return (
    <Link className="card" to={`/country/${item.ccn3}`}>
      <div className="div-img">
        <img className="img-flag" src={item.flags.svg} alt="flag" />
      </div>
      <div className="div-text">
        <p className="item-title">
          <b>{item.name.common}</b>
        </p>
        <br />
        <p className="item-text">
          <b>Population: </b>
          {parseInt(item.population).toLocaleString("es")}
        </p>
        <p className="item-text">
          <b>Region: </b>
          {item.region}
        </p>
        <p className="item-text">
          <b>Capital: </b>
          {item.capital}
        </p>
      </div>
    </Link>
  );
};

export default Countrys;
