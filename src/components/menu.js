import { Link, useLocation } from "react-router-dom";

import React from "react";

const Menu = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex justify-between">
      <p
        className={`caption1 text-dark2 !tracking-[.02em] ${
          pathname !== "/" && "linkHover"
        }`}
      >
        <Link to="/">Chyhryn Vlad</Link>
      </p>

      <nav>
        <ul className="flex flex-row">
          <li
            className={`caption1 text-dark2 mr-10 !tracking-[.02em] ${
              pathname !== "/" && "linkHover"
            }`}
          >
            <Link to="/">Projects</Link>
          </li>
          <li
            className={`caption1 text-dark2 mr-10 !tracking-[.02em] ${
              pathname !== "/projects" && "linkHover"
            }`}
          >
            <>
              <Link
                to="/projects"
                className={pathname === "/projects" ? "cursor-default" : null}
              >
                Workflow
              </Link>
              {pathname === "/projects" && (
                <div className="linkHoverActive"></div>
              )}
            </>
          </li>
          <li
            className={`caption1 text-dark2 !tracking-[.02em] ${
              pathname !== "/about" && "linkHover"
            }`}
          >
            <>
              <Link to="/about">About</Link>
              {pathname === "/about" && <div className="linkHoverActive"></div>}
            </>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
