"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, Cell } from "recharts"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~~/components/shad/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "~~/components/shad/ui/chart";

export const description = "Earnings Bar"

const chartData = [
  { month: "Monday", earning: 30 },
  { month: "Tuesday", earning: 10 },
  { month: "Wednesday", earning: 5 },
  { month: "Thursday", earning: 2 },
  { month: "Friday", earning: 20 },
  { month: "Saturday", earning: 13 },
  { month: "Sunday", earning: 6 },
]

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
} satisfies ChartConfig

const colors = [
  "#3b82f6", 
  "#3b82f6", 
  "#3b82f6", 
  "#3b82f6",
  "#3b82f6", 
  "#3b82f6", 
  "#3b82f6", 
]

export function UserChart() {
  return (
    <Card className="bg-primary max-w-lg h-full">
      <CardHeader>
        <CardTitle>Earning Chart</CardTitle>
        <CardDescription>Last Week</CardDescription>
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
              tickFormatter={(value) => value.slice(0, 3)}
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
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this week <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">Showing total Earning last week</div>
      </CardFooter>
    </Card>
  )
}
