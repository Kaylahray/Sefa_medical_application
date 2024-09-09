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
  { month: "OCT", newPatients: 20, returningPatients: 240 },
  { month: "NOV", newPatients: 30, returningPatients: 380 },
  { month: "DEC", newPatients: 40, returningPatients: 300 },
];

const PatientChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 30, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" axisLine={false} padding={{ left: 20 }} />
        <YAxis axisLine={false} padding={{ bottom: 20 }} />
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
        />
        <Area
          type="monotone"
          dataKey="returningPatients"
          stroke="#799794"
          fillOpacity={1}
          fill="url(#colorReturningPatients)"
          name="Returning patients"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default PatientChart;
