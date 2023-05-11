import React from "react";
import { fullListLastIndex, shortListLastIndex } from "../constants/project";

export const Project = ({ project, index, lastIndex }) => {
  let isOdd = index % 2 === 0;
  return (
    <div key={index}>
      <div className="flex flex-row">
        <div
          className={`${project.img} w-[50%] ${isOdd ? "order-1" : "order-3"} `}
        >
          {project.image}
        </div>
        <div className={`w-[50%] ${isOdd && "pl-[80px]"} order-2`}>
          <p className="caption5 mb-[22px] w-fit projectNameHover">
            {project.name}
          </p>
          <p className="caption6 mb-8">{project.categories}</p>
          <div className="flex flex-row mb-4">
            <p className="caption7">Timeline</p>
            <p className="caption8 ml-3 opacity-60">{project.dates}</p>
          </div>
          <p className="caption8 !font-font3 !text-[16px] opacity-60 pr-[60px] tracking-[.01em] !leading-7">
            {project.description}
          </p>
        </div>
      </div>

      {lastIndex === shortListLastIndex && index < shortListLastIndex - 1 && (
        <div className="bg-gray h-[1px] opacity-50 my-16" />
      )}

      {lastIndex === fullListLastIndex && index !== fullListLastIndex && (
        <div className="bg-gray h-[1px] opacity-50 my-16" />
      )}
    </div>
  );
};
