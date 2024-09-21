import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Tuberculosis", cases: 218 },
  { name: "Malaria", cases: 99 },
  { name: "Typhoid", cases: 158 },
  { name: "HIV", cases: 218 },
  { name: "Scurvy", cases: 99 },
  { name: "Covid-19", cases: 158 },
  { name: "Pregnancy", cases: 218 },
  { name: "Pneumonia", cases: 99 },
  { name: "Common cold", cases: 158 },
  { name: "Influenza flu", cases: 99 },
  { name: "Colon cancer", cases: 49 },
  { name: "Diabetes", cases: 49 },
];

const ReportedCasesChart = () => {
  return (
    <div
      className="chart-container aspect={1300 / 481}"
      style={{
        width: "100%",
        height: "481px",
      }}
    >
      <h3 className="font-[600] ml-1 text-[#3D3D3D] text-[20px] mb-[56px]">
        Reported Cases
      </h3>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart
          data={data}
          layout="horizontal"
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#e0e0e0"
          />
          <XAxis
            dataKey="name"
            type="category"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#7A7A7A" }}
            interval={0}
            height={100}
            tickMargin={5}
            textAnchor="middle"
            // angle={-45}
          />
          <YAxis
            type="number"
            domain={[0, 250]}
            ticks={[0, 50, 100, 150, 200, 250]}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#7A7A7A" }}
          />
          <Bar
            dataKey="cases"
            fill="#9EB1B8"
            barSize={8}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReportedCasesChart;
