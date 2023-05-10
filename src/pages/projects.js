import React from "react";
import Menu from "../components/menu";
import { ReactComponent as Arrow } from "../assets/arrowBottom.svg";
import Footer from "../components/footer";
import { cycleSteps } from "../constants/cycleSteps";
import twoDiamond from "../assets/twoDiamond.svg";
import group from "../assets/stars/groupOfStars.svg";
import star from "../assets/stars/star.svg";
import star2 from "../assets/stars/star2.svg";

const Projects = () => (
  <div>
    <div className="bg-mainLight px-[140px] pt-[40px] h-[100vh]">
      <Menu />
      <div className="flex flex-col justify-between">
        <div className="flex flex-col items-center mt-[100px] mb-2">
          <div className="flex flex-row">
            <p className="caption2 mr-10 uppercase">My whole design </p>
            <div>
              <img src={star} alt="star" id="star1" />
              <img src={star} alt="star" id="star2" />
              <img src={star} alt="star" id="star3" />
              <img src={group} alt="group" />
              <img src={star} alt="star2" id="star4" />
              <img src={star} alt="star2" id="star5" />
            </div>
          </div>
          <div className="flex flex-row items-center mt-8">
            <p className="font-font3 text-base font-normal text-gray w-[130px]">
              My design is magic and maybe I’m a wizard
            </p>
            <p className="caption2 mr-10 uppercase mr-12 ml-10">Process</p>
            <div className="flex flex-col ">
              <div className="flex flex-row justify-between mb-5 w-[360px]">
                <p className="caption13 text-gray">Define</p>
                <p className="caption13 text-gray">Prototype</p>
                <p className="caption13 text-gray">Magic</p>
              </div>
              <div className="flex flex-row justify-around w-[360px]">
                <p className="caption13 text-gray">Research</p>
                <p className="caption13 text-gray">Test</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-[200px]">
          <Arrow
            onClick={() =>
              document
                .getElementById("page2")
                .scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="mt-[-90px] "
          />
        </div>
      </div>
    </div>

    <div id="page2" className="bg-mainDark">
      <div className="flex flex-col px-[140px] py-[200px]">
        <p className="caption5 mb-[80px]">My full cycle Design pipeline</p>

        {cycleSteps.map((step, index) => (
          <div>
            <div className="h-[1px] bg-gray"></div>
            <div className="flex flex-row justify-between my-16">
              <p className="caption12 text-mainLight">0{index + 1}</p>
              <div className="w-[578px]">
                <p className="caption13 text-mainLight mb-3">{step.title}</p>
                <p className="caption14 text-gray">{step.description}</p>
              </div>
            </div>
          </div>
        ))}

        <p className="caption5 mt-[140px] mb-[60px]">
          I usually use Double Diamond model
        </p>

        <div className="flex justify-center items-center">
          <img src={twoDiamond} alt="twoDiamond" />
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default Projects;
