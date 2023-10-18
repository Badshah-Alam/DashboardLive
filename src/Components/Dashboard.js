import React from "react";

import DashboardGrid from "./DashboardGrid";
import TransactionChart from "./TransactionChart";
import CustomersProfileCharts from "./CustomersProfileCharts";
import RecentOrders from "./RecentOrders";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
      <DashboardGrid />

      <div className="flex flex-col gap-4 sm:flex-row w-full">
        <div className="w-full sm:w-1/2 md:w-2/3 lg:w-3/4 xl:w-4/5">
          <TransactionChart />
        </div>
        <div className=" w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
          <CustomersProfileCharts />
      
        </div>
      </div>
      <div className="w-full">
        <RecentOrders />
      </div> 
     
    </div>
  );
};

export default Dashboard;
