import React from "react";
import project1 from "../assets/project3.svg";
import project2 from "../assets/project2.svg";
import project3 from "../assets/project1.svg";
import project4 from "../assets/project4.svg";
import project5 from "../assets/project5.svg";
import project6 from "../assets/project6.svg";
import project7 from "../assets/project7.svg";
import project8 from "../assets/project8.svg";

export const projects = [
  {
    name: "Starlite racing league",
    categories: "ART DIRECTION,  UX/UI DESIGN,  INTERACTION & GAME DESIGN",
    dates: "Nov 21 - Jan 22",
    description:
      "Starlite made using the Unreal Engine 4.26 and AWS cloud. \n" +
      "This is the MVP version.\n" +
      " The main idea is to  develop a game with a rout “Bering Strait”. I was as the Art director in that project.\n" +
      "The game design is in the futuristic style. The racing cars are electric and can be charged during a race on the charging strips.\n" +
      " \n",
    image: (
      <div className="photo">
        <img src={project1} className="imgProject" alt="p1" />
      </div>
    ),
    img: "img1Bg",
  },

  {
    name: "Let’s app",
    categories: "UX/UI DESIGN,  GRAPHIC DESIGN,  INTERACTION DESIGN",
    dates: "Apr 2020 - Jul 2020",
    description:
      "This application was created during COVID time.\n" +
      "A large cross-platform mobile application for choosing a vacation place.\n" +
      " First, the user goes through onboarding.\n" +
      "After onboarding, the user can select 4 sections:\n" +
      "Smoke a hookah, Drink, Eat, Vibe\n" +
      ".\n",
    image: (
      <div className="photo">
        <img src={project2} className="imgProject" alt="p2" />
      </div>
    ),
    img: "img4Bg",
  },
  {
    name: "Moonstone bank",
    categories: "PRODUCT DESIGN,  STRATEGY,  DESIGN SYSTEM",
    dates: "Jul 2022 - Mar 2023 ",
    description:
      "Moonstone Bank™ is a Washington State bank that specializes in catering to Small and Medium Enterprises (SMEs). \n" +
      "The goal was to create quick MVP version, this product has a huge eco product system and should be adapted as a white label with scalable design system.",
    image: (
      <div className="photo4">
        <img src={project3} className="imgProject" alt="p3" />
      </div>
    ),
    img: "img1Bg",
  },
  {
    name: "Control Software",
    categories: "Product design,  CRM, Branding,  interaction Design",
    dates: "Jul 2020 - Apr 2021 ",
    description:
      "A large-scale “Control hub” of accounting and tracking the implementation of projects, which combines the best functionality: costs, calculation of companies profitability in terms of projects, products and departments. \n" +
      "\n" +
      "It is possible to add a client to the system and they can track in real-time the amount of work done . Also they can check the remaining financial debts for the project.\n",
    image: (
      <div className="photo4">
        <img src={project4} className="imgProject" alt="p4" />
      </div>
    ),
    img: "img4Bg",
  },
  {
    name: "Swiss value card",
    categories: "UX/UI DESIGN, CROSS PLATFORM, BRANDING",
    dates: "Jan 21 - Mar 21",
    description:
      "Swiss Value Card mobile application, it has a virtual discount card that provides users with a range of benefits, including: Access to discounts and promotions at various places in Switzerland, including restaurants, sightseeing, entertainment, shopping, service providers, and sports.",
    image: (
      <div className="photo">
        <img src={project5} className="imgProject" alt="p5" />
      </div>
    ),
    img: "img5Bg",
  },
  {
    name: "ETQueue",
    categories: "UX/UI DESIGN, CROSS PLATFORM, BRANDING",
    dates: "Jun 2021 - Sep 2021",
    description:
      "In this design case, an Electronic Queue (ETQ) system was developed for border control, aimed at optimizing the process and reducing waiting time for both border control officers and drivers. \n" +
      "The system was designed to work on tablet devices and consisted of three parts: an application for operators, an application for a customs officer, and a website for drivers, where they can buy a ticket.",
    image: (
      <div className="photo">
        <img src={project6} className="imgProject" alt="p6" />
      </div>
    ),
    img: "img6Bg",
  },
  {
    name: "Hunting Grounds",
    categories: "UX/UI DESIGN, CROSS PLATFORM, BRANDING",
    dates: "Nov 21 - Jan 22",
    description:
      "My agency won the government tender and we had a chance to create  this governmental project from scratch.\n" +
      "The platform includes a main site for users, featuring a map of the areas with open hunting seasons and the number of animals, news and useful information with the contacts of the main center. \n" +
      "\n" +
      "Additionally, the platform includes a CRM system for reporting, allowing small districts to submit reports to the region, after reviewing administrator publish statistics on the official website. ",
    image: (
      <div className="photo ml-[50px]">
        <img src={project7} className="imgProject" alt="p7" />
      </div>
    ),
    img: "img7Bg",
  },
  {
    name: "Bohdan Shevchenko dev's portfolio",
    categories: "UX/UI DESIGN, CROSS PLATFORM, BRANDING",
    dates: "Jan 23 (2 weeks)",
    description:
      "The main goal was to create a simple, modern, and easy-to-implement design. It was important to keep in mind that the purpose of the portfolio is to showcase the Junior Front-End Developer's skills and approach. \n" +
      "I had to create the design within a short period of time. \n" +
      "Bohdan ordered a photo session, so the process of creation was quite fun and the result is outstanding.",
    image: (
      <div className="photo">
        <img src={project8} className="imgProject" alt="p8" />
      </div>
    ),
    img: "img8Bg",
  },
];

export const fullListLastIndex = 7;
export const shortListLastIndex = 5;
