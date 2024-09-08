import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "JAN", new: 100, returning: 200 },
  { month: "FEB", new: 80, returning: 100 },
  { month: "MAR", new: 120, returning: 150 },
  { month: "APR", new: 150, returning: 250 },
  { month: "MAY", new: 150, returning: 250 },
  { month: "JUN", new: 150, returning: 250 },
  { month: "JUL", new: 150, returning: 250 },
  { month: "AUG", new: 150, returning: 250 },
  { month: "SEP", new: 150, returning: 250 },
  { month: "OCT", new: 150, returning: 250 },
  { month: "NOV", new: 150, returning: 250 },
  { month: "DEC", new: 150, returning: 250 },
  // Add other months here...
];

const PatientLineChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="new"
        stroke="#D2691E"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="returning" stroke="#2E8B57" />
    </LineChart>
  </ResponsiveContainer>
);

export default PatientLineChart;
