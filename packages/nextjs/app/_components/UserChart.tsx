"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Cell, XAxis } from "recharts";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~~/components/shad/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "~~/components/shad/ui/chart";

const chartData = [
  { month: "Monday", earning: 30 },
  { month: "Tuesday", earning: 10 },
  { month: "Wednesday", earning: 5 },
  { month: "Thursday", earning: 2 },
  { month: "Friday", earning: 20 },
  { month: "Saturday", earning: 13 },
  { month: "Sunday", earning: 6 },
];

const chartConfig = {
  monday: {
    label: "Monday",
  },
  tuesday: {
    label: "Tuesday",
  },
  wednesday: {
    label: "Wednesday",
  },
  thursday: {
    label: "Thursday",
  },
  friday: {
    label: "Friday",
  },
  saturday: {
    label: "Saturday",
  },
  sunday: {
    label: "Sunday",
  },
} satisfies ChartConfig;

const colors = [
  "#fb923c", // Orange
  "#fb923c",
  "#fb923c",
  "#fb923c",
  "#fb923c",
  "#fb923c",
  "#fb923c",
];

export function UserChart() {
  return (
    <Card className="bg-gradient-to-br from-blue-700 via-indigo-500 to-cyan-400 max-w-lg h-full">
      <CardHeader>
        <CardTitle className="text-white">Earning Chart</CardTitle>
        <CardDescription className="text-white">Last Week</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-42">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tick={{ fontSize: 14, fontWeight: "bold" }}
              tickFormatter={value => value.slice(0, 3)}
            />

            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar dataKey="earning" radius={12}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-center gap-2 text-sm">
        <div className="flex gap-2 font-medium text-white">
          Trending up by 5.2% this week <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-white">Showing total Earning last week</div>
      </CardFooter>
    </Card>
  );
}
