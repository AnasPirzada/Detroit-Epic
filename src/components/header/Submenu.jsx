import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Submenu = ({ subLinks }) => {

  return (
    <div className="w-[100%] grid grid-cols-[35%_auto]">
      <ul>
        {subLinks.map((link, index) => (
          <div
            className="flex items-center hover:bg-hover hover:text-blue justify-between max-w-[300px] py-[10px] px-[5px] rounded-lg"
            key={index}
          >
            <li className="text-[14px]">{link.name}</li>
            <FaChevronRight className="text-[12px] text-slate-500" />
          </div>
        ))}
      </ul>

      {/* <div className="flex justify-between">
        <div>
          <h1>TITLE</h1>
          <p>Heading</p>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Submenu;
