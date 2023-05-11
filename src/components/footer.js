import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../assets/arrow.svg";

import React from "react";

const Footer = () => (
  <div className="bg-mainLight px-[140px] pt-[180px] pb-10">
    <div className="flex flex-col items-center">
      <p className="font-font2 text-lg leading-[40px] mb-[124px]">
        LET’S START SOMETHING
      </p>

      <nav>
        <ul className="flex flex-row">
          <li className="caption10 text-dark2 mr-[120px] linkHover">
            <a href="mailto: chyhryn.vlad@gmail.com">E-mail</a>
          </li>
          <li className="caption10 text-dark2 mr-[120px] linkHover">
            <Link
              to="https://www.linkedin.com/in/vladyslav-chyhryn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
          </li>
          <li className="caption10 text-dark2 mr-[120px] linkHover">
            <Link
              to="https://www.behance.net/chyhryn_vlad"
              target="_blank"
              rel="noopener noreferrer"
            >
              Behance
            </Link>
          </li>
          <li className="caption10 text-dark2 linkHover">
            <Link
              to="https://dribbble.com/chyhryn_vlad"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dribbble
            </Link>
          </li>
        </ul>
      </nav>

      <div
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }
        className="mt-[100px]"
      >
        <Arrow />
      </div>
    </div>
    <div className="flex flex-row !justify-between">
      <span>© Chyhryn Vladyslav</span>
      <span className="ml-auto mr-0">
        Built with love by mandybura1994@gmail.com
      </span>
    </div>
  </div>
);

export default Footer;
