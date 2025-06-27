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
  //components
  const BackgroundIcon = () => {
    return (
      <>
        <div className="absolute top-2 right-2 opacity-20">
          <TrendingUp className="w-16 h-16" />
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
          <div className="absolute inset-0 bg-white rounded-full transform translate-x-8 -translate-y-8">
            <TrendingUp className="w-8 h-8 opacity-20" />
          </div>
        </div>
      </>
    );
  };

  return (
    <Card className="h-full bg-gradient-to-br from-blue-700 via-indigo-500 to-cyan-300 relative overflow-hidden justify-center flex-1">
      <CardHeader>
        <div className="mx-auto w-16 h-16  bg-blue-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <TrendingUp className="w-8 h-8" />
        </div>
        <BackgroundIcon />
        <CardTitle className="text-center text-2xl font-bold">Earning Chart</CardTitle>
        <CardDescription className="text-center">Last Week</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
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
