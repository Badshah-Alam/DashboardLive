import React from "react";
import { RiSearchLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className=" bg-white h-20 px-8 flex justify-between items-center border border-gray-200">
      <div className=" bg-cyan-400">Hi Badshah👋,</div>

      <div className=" relative">
        <RiSearchLine
          fontSize={20}
          className=" text-gray-600 absolute top-1/2 -translate-y-1/2  left-0"
        />
        <input
          type=""
          placeholder="search.."
          className=" text-sm focus:outline-none active:outline-none h-10 w-52 
           border border-gray-400 rounded-sm px-4"
        />
      </div>
    </div>
  );
};

export default Header;
