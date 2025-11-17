import type { ReactElement } from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Notification } from "./Notification"
import { CircleAlert, ServerCrash, CircleQuestionMark, CirclePause, CircleCheck } from "lucide-react"
export type Icon = typeof CircleCheck

const NotificationSeverity = {
	"URGENT": "URGENT",
	"NEUTRAL": "NEUTRAL",
	"UNKNOWN": "UNKNOWN",
	"ERROR": "ERROR",
} as const


export interface NotificationMessage {
	severity: keyof typeof NotificationSeverity
	title: string
	resource: string
	message: string
	icon: ReactElement
}

const notifications: NotificationMessage[] = [
	{
		icon: <CircleAlert />,
		severity: NotificationSeverity.ERROR,
		resource: "Node-1",
		title: "System failed",
		message: "Runtime for Python version 3.9 not found."
	},
	{
		icon: <CircleCheck color="green" />,
		severity: NotificationSeverity.NEUTRAL,
		resource: "Node-2",
		title: "updated",
		message: "System update complete"
	},
	{
		icon: <CircleCheck color="green" />,
		severity: NotificationSeverity.NEUTRAL,
		resource: "Office",
		title: "complete",
		message: "Full system backup completed at\n" + new Date().toLocaleString()
	},
	{
		icon: <CircleQuestionMark color="yellow" />,
		severity: NotificationSeverity.UNKNOWN,
		resource: "Node-3",
		title: "unknown",
		message: "Recent healthchecks received no response"
	}
]

export function NotificationsCard() {
	return (
		<ScrollArea className="bg-primary-foreground p-4 rounded-lg">
			<h5>Notifications</h5>
			{
				notifications.map((n, i) => (
					<Notification
						key={i}
						icon={n.icon}
						severity={n.severity}
						resource={n.resource}
						title={n.title}
						message={n.message}
					/>
				))
			}

		</ScrollArea>
	)
}
