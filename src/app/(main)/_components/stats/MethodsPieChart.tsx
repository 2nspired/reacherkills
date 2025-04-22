"use client";

import { Label, Pie, PieChart } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";
import { getReacherMethods } from "~/utilities/data-helpers";

const reacherMethods = getReacherMethods();
const methods = reacherMethods.methods.map((method) => ({
  name: method.method,
  value: method.kill,
}));

const methodsColors = [
  "hsl(var(--accent))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-2))",
];

const methodsData = methods.map((method, index) => ({
  name: method.name,
  value: method.value,
  fill: methodsColors[index % methodsColors.length],
}));

const methodsConfig = {
  name: {
    label: "Method",
  },
  value: {
    label: "Count",
  },
  "hsl(var(--chart-1))": {
    label: "Method 1",
    color: "hsl(var(--chart-1))",
  },
  "hsl(var(--chart-2))": {
    label: "Method 2",
    color: "hsl(var(--chart-2))",
  },
  "hsl(var(--chart-3))": {
    label: "Method 3",
    color: "hsl(var(--chart-3))",
  },
  "hsl(var(--chart-4))": {
    label: "Method 4",
    color: "hsl(var(--chart-4))",
  },
  "hsl(var(--chart-5))": {
    label: "Method 5",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export default function MethodsPieChart() {
  return (
    <ChartContainer
      config={methodsConfig}
      className="mx-auto aspect-square size-full max-h-[250px]"
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={methodsData}
          dataKey="value"
          nameKey="name"
          innerRadius={60}
          strokeWidth={5}
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="font-sometype fill-zinc-200 text-4xl font-bold"
                    >
                      {reacherMethods.methods.length}
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy ?? 0) + 24}
                      className="fill-muted-foreground"
                    >
                      Total
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}
