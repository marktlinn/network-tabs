'use client'
import { LogOut, Settings, User } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import ThemeSelector from "./ThemeSelector"
import { SidebarTrigger } from "./ui/sidebar"

const Navbar = () => {

	return (
		<nav className="flex items-center justify-between p-4 border-b-1 border-neutral-700">
			{/*Left*/}
			<SidebarTrigger />
			{/*Right*/}
			<div className="flex gap-4 items-center">
				<Link href="/">Dashboard</Link>

				<ThemeSelector />

				<DropdownMenu>
					<DropdownMenuTrigger>
						<Avatar>
							<AvatarImage src="#" />
							<AvatarFallback>?</AvatarFallback>
						</Avatar>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<User className="h-0.5 w-0.5 mr-2" />
							Profile
						</DropdownMenuItem>
						<DropdownMenuItem>
							<Settings className="h-0.5 w-0.5 mr-2" />Settings
						</DropdownMenuItem>
						<DropdownMenuItem variant="destructive">
							<LogOut className="h-0.5 w-0.5 mr-2" />Logout
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>

		</nav>
	)
}

export default Navbar
