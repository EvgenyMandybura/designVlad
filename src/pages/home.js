import React, { useState } from "react";
import Menu from "../components/menu";
import {
  fullListLastIndex,
  projects,
  shortListLastIndex,
} from "../constants/project";
import { Project } from "../components/project";
import Footer from "../components/footer";

const Home = () => {
  const [showedMore, setShowedMore] = useState(false);

  return (
    <div>
      <div className="bg-mainLight px-[140px] pt-[40px] h-[100vh]">
        <Menu />

        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center my-[100px]">
            <div className="flex flex-row items-center pb-9">
              <p className="caption2 mr-10">I help companies</p>
              <p className="caption3 !text-[#7A7A7A] !font-font3">
                Web, mobile applications, <br /> huge systems, CRM and etc.
              </p>
            </div>
            <div className="flex flex-row pb-9">
              <p className="caption3 mr-10 !text-[#7A7A7A] !font-font3">
                Building products that <br /> communicate value & <br /> achieve
                business goals
              </p>
              <p className="caption2">create digital</p>
            </div>
            <p className="caption2">experiences </p>
          </div>
          <div className="flex flex-col items-center">
            <div
              className="scroll-downs"
              onClick={() =>
                document
                  .getElementById("page2")
                  .scrollIntoView({ behavior: "smooth", block: "center" })
              }
            >
              <div className="mousey">
                <div className="scroller"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="page2" className="bg-mainLight px-[140px] pt-[40px] h-[100vh]">
        <p className="caption9">
          I am Digital Product Designer with a passion to create simple
          products. I’ve been working in the UX/UI field for 5 years and enjoy
          facing new challenges
        </p>

        <div className="flex flex-row mt-[80px] mb-[200px]">
          <div className={`w-[50%]`}></div>
          <div className={`w-[50%]`}>
            <span className="font3 text-dark2 text-lg leading-7">
              Hi there, I’m Vlad.
            </span>{" "}
            <span className="italic opacity-60">
              Designer with 5-year-experience in creating projects, product and
              the execution strategy. I create validated solutions oriented on
              the Business and Human-Centered design.
            </span>
            <p className="italic opacity-60 my-6">
              I define systems and processes that others company members are
              able to follow. I consistently produce designs that raise the
              collective quality bar. I have a keen eye on maintaining quality
              across the entire product.
            </p>
            <p className="italic opacity-60">
              During my design career I have released on Prod more than 50
              projects in different areas of the business. I have solid
              experience in building products from scratch. So I know the whole
              design cycle, and aware of team building and management processes.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-mainDark flex flex-col items-center">
        <p className="caption4 mt-[200px]">Projects</p>
        <div className="bg-gray w-[220px] h-[1px] opacity-50 mt-8 mb-[60px]" />

        <div className="px-[140px] mb-[100px]">
          {projects.map((project, index) =>
            !showedMore ? (
              index < shortListLastIndex && (
                <Project
                  project={project}
                  index={index}
                  lastIndex={shortListLastIndex}
                />
              )
            ) : (
              <Project
                project={project}
                index={index}
                lastIndex={fullListLastIndex}
              />
            )
          )}
          <div className="flex flex-row items-center">
            <div className="bg-gray h-[1px] opacity-50 my-16 w-full" />
            <button
              onClick={() => setShowedMore(!showedMore)}
              className="w-[154px] hover:border-2 hover:border-gray rounded-[24px]"
            >
              <p className="font-sans text-base leading-5 text-mainLight min-w-fit mx-10">
                {showedMore ? "Show less" : "Show more"}
              </p>
            </button>
            <div className="bg-gray h-[1px] opacity-50 my-16 w-full" />
          </div>
        </div>
      </div>

      <div className="flex flex-row bg-mainLight px-[140px] py-[180px] h-[100vh]">
        <div className="flex flex-col w-[50%] pr-[90px]">
          <p className="caption10 pb-[60px]">Services</p>
          <div>
            <span className="caption1">Product Design </span>
            <span className="font-font2 text-base leading-8 text-gray">
              (Full package design)
            </span>
            <div className="bg-gray h-[1px] opacity-50 my-5" />
          </div>

          <div className="pt-[18px]">
            <span className="caption1">Design Strategy & Vision</span>
            <div className="bg-gray h-[1px] opacity-50 my-5" />
          </div>

          <div className="pt-4">
            <span className="caption1">Design System</span>
            <div className="bg-gray h-[1px] opacity-50 my-5" />
          </div>

          <div className="pt-4">
            <span className="caption1">Team Management</span>
            <div className="bg-gray h-[1px] opacity-50 my-5" />
          </div>

          <div className="pt-4">
            <span className="caption1">Graphics Assistance</span>
            <div className="bg-gray h-[1px] opacity-50 my-5" />
          </div>
        </div>
        <div className="flex flex-col w-[50%]">
          <p className="caption10 pb-[46px]">Experience</p>

          <div>
            <p className="caption1">Product Designer</p>
            <div className="flex flex-row justify-between">
              <p className="caption11 text-gray">
                <span className="mr-[14px]">NCube</span>{" "}
                <span> Launched the banking platform with huge eco system</span>
              </p>
              <p className="caption11 text-gray">Jul 2022 - Apr 2023</p>
            </div>
            <div className="bg-gray h-[1px] opacity-50 my-5" />
          </div>

          <div>
            <p className="caption1">Lead UX/UI Designer</p>
            <div className="flex flex-row justify-between">
              <p className="caption11 text-gray">
                <span className="mr-[14px]">Bazu</span>{" "}
                <span>
                  Managed design team, led projects, helped at pre-sale stage
                </span>
              </p>
              <p className="caption11 text-gray">Mar 2021 - Jan 2022</p>
            </div>
            <div className="bg-gray h-[1px] opacity-50 my-5" />
          </div>

          <div>
            <p className="caption1">UX/UI Solo Designer</p>
            <div className="flex flex-row justify-between">
              <p className="caption11 text-gray">
                <span className="mr-[14px]">Bazu</span>{" "}
                <span>
                  Designed various projects with the full cycle design
                </span>
              </p>
              <p className="caption11 text-gray">Jul 2019 - Feb 2021</p>
            </div>
            <div className="bg-gray h-[1px] opacity-50 my-5" />
          </div>

          <div>
            <p className="caption1">UX/UI Designer</p>
            <div className="flex flex-row justify-between">
              <p className="caption11 text-gray">
                <span className="mr-[14px]">NDA</span>{" "}
                <span>
                  Worked in the team of designers on web platforms and sites
                </span>
              </p>
              <p className="caption11 text-gray">Feb 2018 - Apr 2019</p>
            </div>
            <div className="bg-gray h-[1px] opacity-50 my-5" />
          </div>

          <div>
            <p className="caption1">Graphic Designer</p>
            <div className="flex flex-row justify-between">
              <p className="caption11 text-gray">
                <span className="mr-[14px]">Blackflag software</span>{" "}
                <span>Created various graphic designs</span>
              </p>
              <p className="caption11 text-gray">Jun 2017 - Jan 2018</p>
            </div>
            <div className="bg-gray h-[1px] opacity-50 my-5" />
          </div>
        </div>
      </div>

      <div className="bg-mainDark">
        <div className="flex flex-row px-[140px] py-[180px]">
          <div className="w-[50%]">
            <p className="caption5">Achievements</p>
          </div>
          <div className="flex flex-row w-[50%]">
            <div className="flex flex-col mr-[64px]">
              <div className="bg-gray h-[1px] opacity-50 mt-16 mb-6 w-full" />
              <p className="caption12 text-mainLight">5+</p>
              <p className="text-mainLight">Years of active design growth</p>
              <div className="bg-gray h-[1px] opacity-50 mt-16 mb-6 w-full" />
              <p className="caption12 text-mainLight">2x</p>
              <p className="text-mainLight">Doubled up the agency</p>
              <p className="text-mainLight">team and projects growth</p>
            </div>
            <div className="flex flex-col">
              <div className="bg-gray h-[1px] opacity-50 mt-16 mb-6 w-full" />
              <p className="caption12 text-mainLight">50+</p>
              <p className="text-mainLight">More than 50 projects on prod</p>
              <div className="bg-gray h-[1px] opacity-50 mt-16 mb-6 w-full" />
              <p className="caption12 text-mainLight">100%</p>
              <p className="text-mainLight">Happy clients & colleaguesh</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
