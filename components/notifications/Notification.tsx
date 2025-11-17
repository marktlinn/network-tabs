import { NotificationMessage } from "./Notifications"
import { CircleAlert, ServerCrash, CircleQuestionMark, CirclePause, CircleCheck } from "lucide-react"

import {
	Alert,
	AlertDescription,
	AlertTitle,
} from "@/components/ui/alert"

export function Notification({ severity, title, resource, message, icon }: NotificationMessage) {
	return (
		<div className="my-2">
			<Alert variant={severity === "ERROR" ? "destructive" : 'default'}>
				{icon}
				<div className="flex justify-between">
					<AlertTitle className="font-bold">{resource}</AlertTitle>
					<AlertTitle className="capitalize">{title}</AlertTitle>
				</div>
				<AlertDescription>
					<p>{message}</p>
				</AlertDescription>
			</Alert>
		</div >
	)
}
