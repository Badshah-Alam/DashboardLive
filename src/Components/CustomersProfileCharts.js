
import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Label,
} from "recharts";

const data = [
  { name: "Group A", value: 15 },
  { name: "Group B", value: 25 },
  { name: "Group C", value: 30 },
];

const COLORS = ["#FF0080", "#8883d8", "blue"];

const CustomersProfileCharts = () => {
  return (
    <div className="w-full max-w-screen-lg mx-auto my-4 bg-white border border-gray-200">
      <div className="mt-3 text-xs">
        <strong className="text-gray-700  flex justify-center ">
          Customers  that buy this product
        </strong>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={[{ name: "Group A", value: 100 }]}
              innerRadius="40%"
              outerRadius="50%"
              fill="#fff"
              paddingAngle={0}
              dataKey="value"
            >
              <Label width={30} position="center">
                65% Customer
              </Label>
              <Cell fill={"#f5f5f5"} />
            </Pie>
            <Pie
              data={data}
              innerRadius="30%"
              outerRadius="40%"
              fill="#fff"
              paddingAngle={12}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  strokeWidth={index !== 0 ? 10 : 20}
                  stroke={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CustomersProfileCharts;




