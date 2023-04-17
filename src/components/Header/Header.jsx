import React, { useEffect, useState } from "react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

const Header = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const handleMode = (mode) => {
    console.log(mode);
    setTheme(mode);
  };

  return (
    <div className="container-header">
      <div className="header-content">
        <h3>Where in the world?</h3>
        <div className="dark-mode">
          {theme === "light" ? (
            <FontAwesomeIcon
              icon={faSun}
              className="icon-mode"
              onClick={() => handleMode("dark")}
            />
          ) : (
            <FontAwesomeIcon
              icon={faMoon}
              className="icon-mode"
              onClick={() => handleMode("light")}
            />
          )}
          <p>Dark Mode</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
