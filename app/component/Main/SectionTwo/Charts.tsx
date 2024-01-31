"use client";
import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface DataItem {
  Timestamp: string;
  Profit_Percentage: number;
}
type Props = {
  year: string;
};

export default function Charts(props: Props) {
  const [chartData, setChartData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  async function getData() {
    const res = await fetch("http://localhost:3000/api/data");
    const data = await res.json();
    setChartData(data.data);
  }
  useEffect(() => {
    if (props.year.length > 0) {
      let data = chartData;
      let result = data.filter(
        (item: DataItem) => item.Timestamp.substring(3) === props.year
      );
      setDisplayData(result);
    } else {
      getData();
      setDisplayData(chartData);
    }
  }, [props.year]);

  useEffect(() => {
    if (props.year.length === 0) {
      getData();
      setDisplayData(chartData);
    }
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={displayData.length === 0 ? chartData : displayData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Timestamp" />
        <YAxis dataKey="Profit_Percentage" />
        <Tooltip />
        <defs>
          <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "rgba(37, 205, 37, 0.4)", stopOpacity: 1 }}
            />
            <stop
              offset="99.59%"
              style={{ stopColor: "rgba(37, 205, 37, 0)", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="Profit_Percentage"
          stroke="url(#greenGradient)"
          fill="url(#greenGradient)"
          activeDot={{ r: 8 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
