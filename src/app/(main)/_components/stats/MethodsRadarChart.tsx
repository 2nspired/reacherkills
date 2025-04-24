"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { getReacherMethods } from "~/utilities/reacher-data-helper";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";

import { useState } from "react";

const chartConfig = {
  methods: {
    label: "Method",
    color: "hsl(var(--chart-1))",
  },
  methodLocations: {
    label: "Location",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const methodsData = getReacherMethods();

export function MethodsRadarChart({
  select,
}: {
  select?: "methods" | "methodLocations";
}) {
  const [selected] = useState<"methods" | "methodLocations">(
    select ?? "methods",
  );

  const axisKey = selected === "methods" ? "method" : "methodLocation";
  const radarColor = chartConfig[selected].color;

  return (
    <div className="p-4 lg:p-6">
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[500px]"
      >
        <RadarChart data={methodsData[selected]}>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent className="text-black" />}
          />
          <PolarAngleAxis dataKey={axisKey} />
          <PolarGrid />
          <Radar dataKey="kills" fill={radarColor} fillOpacity={0.6} />
        </RadarChart>
      </ChartContainer>
    </div>
  );
}
