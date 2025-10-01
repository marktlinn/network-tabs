"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

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

export const description = "Network uptime by month"

const chartData = [
	{ month: "July", uptime: 700, issues: 12 },
	{ month: "August", uptime: 745, issues: 1 },
	{ month: "September", uptime: 777, issues: 4 },
	{ month: "October", uptime: 800, issues: 3 },
]

const chartConfig = {
	uptime: {
		label: "uptime",
		color: "var(--chart-1)",
	},
	issues: {
		label: "issues",
		color: "var(--chart-2)",
	},
} satisfies ChartConfig

const AppBarChart = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Data from all networks</CardTitle>
				<CardDescription>July - October 2025</CardDescription>
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
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<YAxis
							tickLine={false}
							tickMargin={10}
							axisLine={false}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent indicator="dashed" />}
						/>
						<Bar dataKey="uptime" fill="var(--color-uptime)" radius={4} />
						<Bar dataKey="issues" fill="var(--color-issues)" radius={4} />
					</BarChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex-col items-start gap-2 text-sm">
				<div className="flex gap-2 leading-none font-medium">
					Uptime trend increasing <TrendingUp className="h-4 w-4" />
				</div>
				<div className="text-muted-foreground leading-none">
					Showing total uptime for last four months
				</div>
			</CardFooter>
		</Card>
	)
}
export default AppBarChart
