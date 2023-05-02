import { Link } from "react-router-dom";

import React from "react";

const Menu = () => (
  <div className="flex justify-between">
    <p className="caption1 text-dark2">Chyhryn Vlad</p>

    <nav>
      <ul className="flex flex-row">
        <li className="caption1 text-dark2 mr-10 linkHover">
          <Link to="/">Home</Link>
        </li>
        <li className="caption1 text-dark2 mr-10 linkHover">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="caption1 text-dark2 linkHover">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Menu;
