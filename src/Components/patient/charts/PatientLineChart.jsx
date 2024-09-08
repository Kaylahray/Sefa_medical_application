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
  { month: "JAN", newPatients: 120, returningPatients: 10 },
  { month: "FEB", newPatients: 180, returningPatients: 110 },
  { month: "MAR", newPatients: 100, returningPatients: 200 },
  { month: "APR", newPatients: 30, returningPatients: 300 },
  { month: "MAY", newPatients: 80, returningPatients: 430 },
  { month: "JUN", newPatients: 130, returningPatients: 420 },
  { month: "JUL", newPatients: 180, returningPatients: 360 },
  { month: "AUG", newPatients: 230, returningPatients: 280 },
  { month: "SEP", newPatients: 180, returningPatients: 220 },
  { month: "OCT", newPatients: 50, returningPatients: 300 },
  { month: "NOV", newPatients: 40, returningPatients: 380 },
  { month: "DEC", newPatients: 120, returningPatients: 270 },
];

const PatientChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
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
            <stop offset="5%" stopColor="#919191" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#919191" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="newPatients"
          stroke="#D3A7A2"
          fillOpacity={1}
          fill="url(#colorNewPatients)"
          name="New patients"
        />
        <Area
          type="monotone"
          dataKey="returningPatients"
          stroke="#5E908F"
          fillOpacity={1}
          fill="url(#colorReturningPatients)"
          name="Returning patients"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default PatientChart;
