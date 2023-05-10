import React from "react";
import Menu from "../components/menu";
import photo from "../assets/photoVlad.svg";
import dog from "../assets/dog.svg";
import bear from "../assets/bear.svg";
import turtle from "../assets/turtle.svg";
import Footer from "../components/footer";

const About = () => (
  <div>
    <div className="bg-mainLight px-[140px] pt-[40px] ">
      <Menu />
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center mt-[100px] mb-2">
          <p className="caption2 mr-10">ABOUT ME</p>
          <div className="flex flex-col">
            <p className="caption11 text-gray">Life goes on</p>
            <div className="flex flex-row items-center mt-2">
              <div className="w-8 h-[1.2px] bg-mainDark mr-4"></div>
              <span className="caption11 text-gray">Let’s live on</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row pb-9">
          <div className="w-[35%] mt-[66px] mr-[72px]">
            <img src={photo} alt="photoVlad" />
            <p className="font-font3 text-base font-normal text-gray mt-8">
              I always make sure I meet business goals, user needs, and tech
              requirements. I create only “Human Centered Design”.
            </p>
          </div>
          <div className="w-[65%] mt-6">
            <p className="caption2">IN A SHORT</p>

            <div className="mt-12 ml-[110px]">
              <p className="caption13 mb-2">About</p>
              <p className="caption14 text-gray">
                Hi, my name is Vlad. Available worldwide. I am a full-cycle
                designer with over 5 years of multidisciplinary hands-on
                experience. I consistently produce designs that raise the
                collective quality bar. My passion is to turn ideas into
                strategies and end-to-end experiences.
              </p>

              <p className="caption13 mt-12 mb-2">Experience</p>
              <p className="caption14 text-gray">
                I worked on various projects: mobile applications for both IOS
                and Android, WEB development, huge cross-platform projects, and
                acquired extensive experience in collaborating and interacting
                with developers. Worked in such business areas as B2C, B2B and
                BaaS, creating Banking, Gambling, Crypto, UI for games and
                various graphics for their projects.
              </p>

              <p className="caption13 mt-12 mb-2">Progress & Achievements</p>
              <p className="caption14 text-gray">
                During my design career I have released on Prod more than 50
                projects in different business areas. I am constantly improving
                my skills. I have experience in team building and management. I
                was the Leading Designer at the agency and Art Director in the
                Starlite League project. Doubled up the agency team and projects
                growth.
              </p>

              <div className="w-fit my-[68px] ">
                <p className="caption1 mb-1 hover:mb-3">
                  Open for new opportunities and contacts
                </p>
                <div className="w-full h-[2px] bg-mainDark"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-mainDark">
      <div className="flex flex-col px-[140px] py-[200px]">
        <div>
          <p className="text-gray">A journey of a thousand miles</p>
          <p className="text-gray pl-12">begins with a single step ©</p>
        </div>
        <p className="font-font1 text-[100px] leading-[70px] text-mainLight mx-auto mt-10 mb-20">
          MY FIRST STEP WAS
        </p>

        <img src={dog} alt="dog" />
        <div className="flex flex-row mt-3">
          <img src={bear} className="w-[70%]" alt="bear" />

          <div className="flex items-center justify-center img9Bg ml-3 w-[30%]">
            <img src={turtle} alt="turtle" />
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default About;
