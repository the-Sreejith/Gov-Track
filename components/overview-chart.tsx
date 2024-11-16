"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { month: "Jan", amount: 400 },
  { month: "Feb", amount: 300 },
  { month: "Mar", amount: 200 },
  { month: "Apr", amount: 278 },
  { month: "May", amount: 189 },
  { month: "Jun", amount: 239 },
];

export function OverviewChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="month" stroke="#888888" fontSize={12} />
        <YAxis stroke="#888888" fontSize={12} />
        <Tooltip />
        <Bar dataKey="amount" fill="currentColor" radius={[4, 4, 0, 0]} className="fill-primary" />
      </BarChart>
    </ResponsiveContainer>
  );
}