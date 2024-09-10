import React from "react";
import {
  PieChart,
  Pie,
  Sector,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Male", value: 4000000 },
  { name: "Female", value: 6000000 },
];

const COLORS = ["#799794", "#CDB1A8"];

// Custom Sector for smoother curves where segments meet
const CustomSector = ({
  cx,
  cy,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  fill,
  cornerRadius,
}) => (
  <Sector
    cx={cx}
    cy={cy}
    innerRadius={innerRadius}
    outerRadius={outerRadius}
    startAngle={startAngle}
    endAngle={endAngle}
    fill={fill}
    cornerRadius={cornerRadius} // This ensures smoother edges
  />
);

const GenderDonutChart = () => {
  const totalPopulation = data.reduce((acc, entry) => acc + entry.value, 0);

  return (
    <>
      <h3
        style={{ margin: "0 0 20px 0", fontSize: "16px", fontWeight: "normal" }}
      >
        Gender
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            startAngle={0}
            innerRadius={90}
            outerRadius={110}
            paddingAngle={-5}
            dataKey="value"
            cornerRadius={50} // Adds rounded corners
            isAnimationActive={false}
            activeShape={CustomSector}
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
      <div className="w-full flex justify-center mt-1 space-x-8">
        {data.map((entry, index) => (
          <div key={entry.name} className="flex flex-col items-center ">
            <div className="flex items-center">
              <div
                className={`w-[32px] h-[8px] rounded mr-2 ${
                  index === 0 ? "bg-[#799794]" : "bg-[#CDB1A8]"
                }`}
              ></div>
              <span className="text-[16px] font-[600] text-[#525252]">
                {entry.name}
              </span>
            </div>

            <span className="text-[18px] text-[#3D3D3D] font-[750] ml-2">
              {entry.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default GenderDonutChart;
