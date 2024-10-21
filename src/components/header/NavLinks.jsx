import React from "react";
import { links } from "./links";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import Submenu from "./Submenu";
const NavLinks = () => {
  return (
    <>
      <ul className="flex sm:gap-[15px] lg:gap-[30px] ">
        {links.map((links, index) => {
          return (
            <div
              className="flex items-center gap-[5px] cursor-pointer text-blue-text group"
              key={index}
            >
              <li className="font-semibold tracking-[0.3px] lg:text-[16px] text-[14px]">
                {links.name}
              </li>
              <span>
                <RiArrowDropDownLine className="text-[15px] md:text-[25px] group-hover:hidden" />
                <RiArrowDropUpLine className="text-[15px] md:text-[25px] hidden group-hover:block " />
              </span>
              {links.subLinks && (
                <div className="absolute w-[1170px]  left-0 top-[30px] text-[black] bg-primary rounded-xl hidden group-hover:block  p-[30px]">
                  <Submenu subLinks={links.subLinks} />
                </div>
              )}
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default NavLinks;
