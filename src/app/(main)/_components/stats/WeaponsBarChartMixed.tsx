"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";
import { getReacherWeapons } from "~/utilities/reacher-data-helper";
const weaponsConfig = {
  gun: {
    label: "Gun",
    color: "hsl(var(--accent))",
  },
  knife: {
    label: "Knife",
    color: "hsl(var(--chart-2))",
  },
  tie: {
    label: "Tie",
    color: "hsl(var(--chart-3))",
  },
  foot: {
    label: "Foot",
    color: "hsl(var(--chart-4))",
  },
  car: {
    label: "Car",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

const weaponsData = getReacherWeapons()
  .slice(0, 5)
  .map((weapon) => ({
    ...weapon,
    fill: weaponsConfig[weapon.weapon as keyof typeof weaponsConfig]?.color,
  }));

export function WeaponsBarChartMixed() {
  return (
    <ChartContainer config={weaponsConfig} className="size-full min-h-[200px]">
      <BarChart
        accessibilityLayer
        data={weaponsData}
        layout="vertical"
        margin={{
          left: 0,
        }}
      >
        <YAxis
          dataKey="weapon"
          type="category"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) =>
            weaponsConfig[value as keyof typeof weaponsConfig]?.label
          }
        />
        <XAxis dataKey="kills" type="number" hide />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Bar dataKey="kills" layout="vertical" radius={5} />
      </BarChart>
    </ChartContainer>
  );
}
