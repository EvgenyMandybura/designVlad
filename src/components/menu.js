import { Link, useLocation } from "react-router-dom";

import React from "react";

const Menu = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex justify-between">
      <p className={`caption1 text-dark2 ${pathname !== "/" && "linkHover"}`}>
        <Link to="/">Chyhryn Vlad</Link>
      </p>

      <nav>
        <ul className="flex flex-row">
          <li
            className={`caption1 text-dark2 mr-10 ${
              pathname !== "/" && "linkHover"
            }`}
          >
            <Link to="/">Projects</Link>
          </li>
          <li className="caption1 text-dark2 mr-10 linkHover">
            <Link to="/projects">Workflow</Link>
          </li>
          <li className="caption1 text-dark2 linkHover">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
