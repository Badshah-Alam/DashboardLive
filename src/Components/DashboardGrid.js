import React from "react";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { RiListUnordered } from "react-icons/ri";
import { MdOutlineAccountBalance } from "react-icons/md";
import { TbShoppingCartDollar } from "react-icons/tb";

const DashboardGrid = () => {
  return (
    <div className="flex  gap-5 flex-wrap mx-4 ">
      <BoxWrapper>
        <div className="rounded-full p-6 flex items-center justify-center bg-green-500 mx-4">
          <RiMoneyDollarCircleFill className="text-2xl text-white" />
        </div>
        <div className="m-auto text-center">
          <p>earning</p>
          <strong>$100k</strong>
          <div>
            <span className="text-green-600">⬆50%</span>
            <span>this month</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full p-6 flex items-center justify-center bg-blue-400 mx-4">
          <RiListUnordered className="text-2xl text-white" />
        </div>
        <div className="m-auto text-center">
          <p>order</p>
          <strong>$4.5k</strong>
          <div>
            <span className="text-red-600">⬇3%</span>
            <span>this month</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full p-6 flex items-center justify-center bg-sky-300 mx-4">
          <MdOutlineAccountBalance className="text-2xl text-white" />
        </div>
        <div className="m-auto text-center">
          <p>earning</p>
          <strong>$75k</strong>
          <div>
            <span className="text-green-300">⬆10%</span>
            <span>this week</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full p-6 flex items-center justify-center bg-rose-300 mx-4">
          <TbShoppingCartDollar className="text-2xl text-white" />
        </div>
        <div className="m-auto text-center">
          <p>total sales</p>
          <strong>$89k</strong>
          <div>
            <span className="text-green-600">⬆20%</span>
            <span>this month</span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
};

function BoxWrapper({ children }) {
  return (
    <div className="bg-white p-4 flex-1 border border-gray-200 rounded-2xl flex items-center h-36">
      {children}
    </div>
  );
}

export default DashboardGrid;
