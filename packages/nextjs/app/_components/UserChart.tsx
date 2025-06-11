"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~~/components/shad/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "~~/components/shad/ui/chart";

export const description = "Earnings Bar";

const chartData = [
  { month: "Monday", earning: 305 },
  { month: "Tuesday", earning: 237 },
  { month: "Wednesday", earning: 73 },
  { month: "Thursday", earning: 209 },
  { month: "Friday", earning: 214 },
  { month: "Saturday", earning: 13 },
  { month: "Sunday", earning: 214 },
];

const chartConfig = {
  earning: {
    label: "Earning",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function UserChart() {
  return (
    <Card className="bg-primary max-w-lg">
      <CardHeader>
        <CardTitle>Earning Chart</CardTitle>
        <CardDescription>Last Week</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="earning"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              // tickFormatter={value => value + "USDc"}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar dataKey="earning" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this week <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">Showing total Earning last week</div>
      </CardFooter>
    </Card>
  );
}
