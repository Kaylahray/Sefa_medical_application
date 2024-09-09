import React from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Male", value: 4000000 },
  { name: "Female", value: 6000000 },
];

const COLORS = ["#799794", "#CDB1A8"];

const GenderDonutChart = () => {
  const totalPopulation = data.reduce((acc, entry) => acc + entry.value, 0);

  return (
    <>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={24}
            fontWeight="bold"
          >
            {totalPopulation.toLocaleString()}
          </text>
          <text
            x="50%"
            y="60%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={16}
          >
            Total Patients
          </text>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className="w-full flex justify-center mt-4 space-x-8">
        {data.map((entry, index) => (
          <div key={entry.name} className="flex flex-col items-center">
            <div className="flex items-center">
              <div
                className={`w-[32px] h-[8px] rounded mr-2 ${
                  index === 0 ? "bg-[#799794]" : "bg-[#CDB1A8]"
                }`}
              ></div>
              <span className="text-sm text-gray-700">{entry.name}</span>
            </div>

            <span className="text-sm text-gray-700 ml-2">
              {entry.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default GenderDonutChart;
