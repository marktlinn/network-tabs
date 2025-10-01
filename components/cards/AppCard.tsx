import type { ReactNode } from 'react'
import { Workflow, ShieldCheck, ShieldX, ShieldQuestionMark, ShieldAlert } from 'lucide-react'
import {
	Card,
	CardContent,
	CardTitle,
	CardDescription,
	CardFooter

} from "@/components/ui/card"
import { ConnectionStatus } from "@/types/node"

interface NodeStatus {
	name: string
	lastSeen: Date
	status: ConnectionStatus
}

const renderConnStatus = (status: ConnectionStatus) => {
	switch (status) {
		case ConnectionStatus.CONNECTED:
			return (
				<div className="flex gap-2 items-center">
					<span>Connected</span>
					<ShieldCheck color="green" />
				</div>
			);
		case ConnectionStatus.DISCONNECTED:
			return (
				<div className="flex gap-2 items-center">
					<span>Disconnected</span>
					<ShieldX color="red" />
				</div>
			);

		case ConnectionStatus.ERROR:
			return (
				<div className="flex gap-2 items-center">
					<span>Error</span>
					<ShieldAlert color="red" />
				</div>
			);
		default:
			return (
				<div className="flex gap-2 items-center">
					<span>Unknown</span>
					<ShieldQuestionMark />
				</div>
			);
	}
}

const parseDate = (d: Date) => {
	const day = d.getDate()
	const month = d.getMonth()
	const year = d.getFullYear()
	return `${day}-${month}-${year}`
}

const parseTime = (d: Date) => {
	let hours: number | string = d.getHours()
	let mins: number | string = d.getMinutes()
	if (hours < 10) {
		hours = "0" + hours
	}
	if (mins < 10) {
		mins = "0" + mins
	}
	return `${hours}:${mins}`
}



export function AppCard(props: NodeStatus) {
	return (
		<Card className="flex-col items-center py-4">
			<CardContent className="flex gap-2 items-center">
				<Workflow />
				<CardTitle>{props.name}</CardTitle>
			</CardContent>

			<CardContent className="w-full flex gap-2 justify-between">

				<div className='flex flex-col'>
					<CardDescription>Status: </CardDescription>
					{renderConnStatus(props.status)}
				</div>

				<div className='flex flex-col items-center'>
					<CardDescription>Last Seen: </CardDescription>
					<span>{parseDate(props.lastSeen)}</span>
					<span>{parseTime(props.lastSeen)}</span>
				</div>

			</CardContent>

		</Card>
	)
}

