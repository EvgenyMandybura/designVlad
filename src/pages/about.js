import React from "react";
import Menu from "../components/menu";
import photo from "../assets/photoVlad.svg";

const About = () => (
  <div className="mainContainer">
    <Menu />
    <div className="flex flex-col items-center">
      <div className="flex flex-row items-center my-[100px] pb-9">
        <p className="caption2 mr-10">ABOUT ME</p>
        <div className="flex flex-col">
          <p className="caption11 text-gray">Life goes on</p>
          <div className="flex flex-row items-center">
            <div className="w-8 h-[1.2px] bg-mainDark mr-4"></div>
            <span className="caption11 text-gray">Let’s live on</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row pb-9">
        <div className="w-[50%]">
          <img src={photo} alt="photo" />
        </div>
        <div className="w-[50%]">
          <p className="caption2">IN A SHORT</p>
        </div>
      </div>
    </div>
  </div>
);

export default About;
