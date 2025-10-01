"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A stacked area chart"

const chartData = [
	{ month: "July", "node-1": 186, office: 80, "node-2": 120, "node-3": 90 },
	{ month: "August", "node-1": 305, office: 200, "node-2": 180, "node-3": 130 },
	{ month: "September", "node-1": 237, office: 120, "node-2": 150, "node-3": 110 },
	{ month: "October", "node-1": 273, office: 190, "node-2": 140, "node-3": 100 },
]

const chartConfig = {
	"node-1": {
		label: "Node-1",
		color: "var(--chart-1)",
	},
	office: {
		label: "Office",
		color: "var(--chart-2)",
	},
	"node-2": {
		label: "Node-2",
		color: "var(--chart-3)",
	},
	"node-3": {
		label: "Node-3",
		color: "var(--chart-4)",
	},
} satisfies ChartConfig

export default function AppAreaChart() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Area Chart - Stacked</CardTitle>
				<CardDescription>
					Showing total visitors for the last 6 months
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<AreaChart
						accessibilityLayer
						data={chartData}
						margin={{
							left: 12,
							right: 12,
						}}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="month"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent indicator="dot" />}
						/>
						<Area
							dataKey="node-3"
							type="natural"
							fill="var(--color-node-3)"
							fillOpacity={0.4}
							stroke="var(--color-node-3)"
							stackId="a"
						/>
						<Area
							dataKey="node-2"
							type="natural"
							fill="var(--color-node-2)"
							fillOpacity={0.4}
							stroke="var(--color-node-2)"
							stackId="a"
						/>
						<Area
							dataKey="office"
							type="natural"
							fill="var(--color-office)"
							fillOpacity={0.4}
							stroke="var(--color-office)"
							stackId="a"
						/>
						<Area
							dataKey="node-1"
							type="natural"
							fill="var(--color-node-1)"
							fillOpacity={0.4}
							stroke="var(--color-node-1)"
							stackId="a"
						/>
					</AreaChart>
				</ChartContainer>
			</CardContent>
			<CardFooter>
				<div className="flex w-full items-start gap-2 text-sm">
					<div className="grid gap-2">
						<CardTitle>Network Traffic - Last 6 Months</CardTitle>
						<CardDescription>
							Data transferred per node (TB)
						</CardDescription>
					</div>
				</div>
			</CardFooter>
		</Card>
	)
}
