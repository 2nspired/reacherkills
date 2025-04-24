"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";

import { getReacherKills } from "~/utilities/reacher-data-helper";

const rkData = getReacherKills();

const chartData = rkData;

const chartConfig = {
  views: {
    label: "Page Views",
  },
  season: {
    label: "Season",
    color: "hsl(var(--chart-1))",
  },
  episode: {
    label: "Episode",
    color: "hsl(var(--chart-2))",
  },
  kills: {
    label: "Kills",
    color: "hsl(var(--accent))",
  },
} satisfies ChartConfig;

export function RKLineChart() {
  return (
    <ChartContainer
      config={chartConfig}
      className="aspect-auto h-[250px] w-full"
    >
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="key"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          minTickGap={32}
          tickFormatter={(value: string) => {
            const [season, episode] = value.split("-");
            return `S${season ?? 0} E${episode ?? 0}`;
          }}
        />
        <ChartTooltip
          content={
            <ChartTooltipContent
              className="w-[150px] text-black"
              nameKey="kills"
              labelFormatter={(value: string) => {
                const [season, episode] = value.split("-");
                return `S${season ?? 0} E${episode ?? 0}`;
              }}
            />
          }
        />
        <Line
          dataKey={"kills"}
          type="monotone"
          stroke={`var(--color-${"kills"})`}
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}
