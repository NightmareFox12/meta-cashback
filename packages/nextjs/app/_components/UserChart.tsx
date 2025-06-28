"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Cell, XAxis } from "recharts";
import { formatUnits } from "viem";
import { useAccount } from "wagmi";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~~/components/shad/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "~~/components/shad/ui/chart";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth/useScaffoldEventHistory";

export function UserChart() {
  const { address } = useAccount();

  const { data: events } = useScaffoldEventHistory({
    contractName: "MetaCashback",
    eventName: "Staking",
    fromBlock: 137559986n,
    watch: true,
    filters: { user: address },
    blockData: true,
    transactionData: true,
    receiptData: true,
  });

  const weekdayMap = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // last 7 days
  const now = new Date();
  const pastWeek = Array.from({ length: 7 }).map((_, i) => {
    const date = new Date();
    date.setDate(now.getDate() - i);
    return {
      date,
      label: weekdayMap[date.getDay()],
      earning: 0,
    };
  });

  const earningsByDay = pastWeek.reduce(
    (acc, day) => {
      acc[day.label] = 0;
      return acc;
    },
    {} as Record<string, number>,
  );

  events?.forEach(x => {
    const args = x?.args;
    if (!args) return;

    const timestamp = args.timeStamp;
    if (!timestamp) return;

    const timestampSeconds = parseFloat(timestamp.toString());
    const eventDate = new Date(timestampSeconds * 1000);

    const isInLast7Days = (now.getTime() - eventDate.getTime()) / (1000 * 60 * 60 * 24) <= 7;
    if (!isInLast7Days) return;

    const dayLabel = weekdayMap[eventDate.getDay()];
    const amount = parseFloat(formatUnits(args.amount ?? 0n, 6).toString());

    earningsByDay[dayLabel] += amount;
  });

  const chartData = weekdayMap.map(day => ({
    month: day,
    earning: earningsByDay[day] || 0,
  }));

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
        <CardTitle className="text-center text-2xl font-bold">Staking Chart</CardTitle>
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
        <div className="text-white">Showing total Staking last week</div>
      </CardFooter>
    </Card>
  );
}
