import React from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from "recharts";

const array = [
  {
    name: "Jan",
    earn: 80,
  },
  {
    name: "Feb",
    earn: 90,
  },
  {
    name: "Mar",
    earn: 70,
  },
  {
    name: "Apr",
    earn: 60,
  },
  {
    name: "May",
    earn: 90,
  },
  {
    name: "Jun",
    earn: 90,
  },
  {
    name: "Jul",
    earn: 80,
  },
  {
    name: "Aug",
    earn: 60,
  },
  {
    name: "Set",
    earn: 90,
  },
  {
    name: "oct",
    earnHig: 160,
  },
  {
    name: "Nov",
    earn: 80,
  },
  {
    name: "dec",
    earn: 65,
  },
];

const TransactionChart = () => {
  return (
    <div className="h-[20rem] bg-white rounded-sm border border-gray-200 flex flex-col flex-1">
      <strong className="text-gray-700 font-medium">Overview</strong>

      <div className="w-full mt-3 flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={array}
            margin={{
              top: 20,
              right: 10,
              left: 10,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <Tooltip />

            <Bar dataKey="earn" fill="#8883d8" />
            <Bar dataKey="earnHig" fill="green" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TransactionChart;
