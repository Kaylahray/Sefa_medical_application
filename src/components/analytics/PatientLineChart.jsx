import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "JAN", newPatients: 110, returningPatients: 0 },
  { month: "FEB", newPatients: 150, returningPatients: 100 },
  { month: "MAR", newPatients: 120, returningPatients: 150 },
  { month: "APR", newPatients: 30, returningPatients: 310 },
  { month: "MAY", newPatients: 40, returningPatients: 420 },
  { month: "JUN", newPatients: 100, returningPatients: 400 },
  { month: "JUL", newPatients: 180, returningPatients: 300 },
  { month: "AUG", newPatients: 220, returningPatients: 200 },
  { month: "SEP", newPatients: 200, returningPatients: 190 },
  { month: "OCT", newPatients: 30, returningPatients: 240 },
  { month: "NOV", newPatients: 50, returningPatients: 380 },
  { month: "DEC", newPatients: 80, returningPatients: 300 },
];

const PatientChart = () => {
  return (
    <div
      className="chart-container"
      style={{
        width: "100%",
        height: "400px",
      }}
    >
      <div className="flex items-center gap-10 mb-[26px]">
        <h3 className="ml-1 mt-1 font-[600] text-[20px] text-[#525252]">
          Patient
        </h3>
        <div className="w-full flex mt-1 space-x-8 font-[600] text-[16px] text-[#525252]">
          {["New Patients", "Returning Patients"].map((label, index) => (
            <div key={label} className="flex flex-col items-center">
              <div className="flex items-center">
                <div
                  className={`w-[32px] h-[8px] rounded mr-2 ${
                    index === 0 ? "bg-[#799794]" : "bg-[#CDB1A8]"
                  }`}
                ></div>
                <span className="text-sm text-gray-700">{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height="85%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            padding={{ left: 20 }}
            textAnchor="middle"
            // ="text-[#7A7A7A] font-[400]"
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            padding={{ bottom: 20 }}
            ticks={[0, 100, 200, 300, 400, 500]}
          />
          <Tooltip />
          {/* <Legend
            layout="horizontal"
            align="left"
            verticalAlign="top"
            iconType="rect" // Options: 'circle', 'square', 'rect', 'line', etc.
            wrapperStyle={{
              paddingBottom: "10px",
              fontSize: "14px",
              color: "#333",
            }} // Custom styles
          /> */}
          <defs>
            <linearGradient id="colorNewPatients" x1="0" y1="0" x2="0" y2="1">
              {/* <stop offset="5%" stopColor="#D3A7A2" stopOpacity={0.8} /> */}
              {/* <stop offset="95%" stopColor="#919191" stopOpacity={0} /> */}
            </linearGradient>
            <linearGradient
              id="colorReturningPatients"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor="rgba(188, 203, 202, 0)" />
              <stop offset="98.87%" stopColor="rgba(188, 203, 202, 0.24)" />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="newPatients"
            stroke="#CDB1A8"
            fillOpacity={1}
            fill="url(#colorNewPatients)"
            name="New patients"
            strokeWidth={3}
          />
          <Area
            type="monotone"
            dataKey="returningPatients"
            stroke="#799794"
            fillOpacity={1}
            fill="url(#colorReturningPatients)"
            name="Returning patients"
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PatientChart;
