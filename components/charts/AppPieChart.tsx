"use client"

import { Pie, PieChart, Sector } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"

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

export const description = "Network nodes by activity"

const chartData = [
	{ node: "Node-1", traffic: 2.7, fill: "var(--color-node-1)" },
	{ node: "Office", traffic: 2.0, fill: "var(--color-office)" },
	{ node: "Node-2", traffic: 0.7, fill: "var(--color-node-2)" },
	{ node: "Node-3", traffic: 0.4, fill: "var(--color-node-3)" },
]

const ttlTraffic = () => Object.values(chartData).reduce((a, b) => a + b.traffic, 0).toFixed(2)

const chartConfig = {
	traffic: {
		label: "traffic",
	},
	"node-1": {
		label: "Data (TB)",
		color: "var(--chart-1)",
	},
	"office": {
		label: "Data (TB)",
		color: "var(--chart-2)",
	},
	"node-2": {
		label: "Data (TB)",
		color: "var(--chart-3)",
	},
	"node-3": {
		label: "Data (TB)",
		color: "var(--chart-4)",
	},
} satisfies ChartConfig

export default function ChartPieDonutActive() {
	return (
		<Card className="flex flex-col justify-between h-full">
			<CardHeader className="items-center pb-0">
				<CardTitle>Network Nodes By Activity</CardTitle>
				<CardDescription>July - October</CardDescription>
			</CardHeader>
			<CardContent className="pb-0">
				<ChartContainer
					config={chartConfig}
					className="mx-auto aspect-square max-h-[250px]"
				>
					<PieChart>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent />}
						/>
						<Pie
							data={chartData}
							dataKey="traffic"
							nameKey="node"
							innerRadius={60}
							strokeWidth={5}
							activeIndex={0}
							activeShape={({
								outerRadius = 0,
								...props
							}: PieSectorDataItem) => (
								<Sector {...props} outerRadius={outerRadius + 10} />
							)}
						/>
					</PieChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex-col gap-2 text-sm">
				<div className="flex gap-2 leading-none font-medium">
					{ttlTraffic()} TB
				</div>
				<div className="text-muted-foreground leading-none">
					Showing total data transferred for the last 6 months
				</div>
			</CardFooter>
		</Card>
	)
}

