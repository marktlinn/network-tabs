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

const Navbar = () => {

	return (
		<nav className="flex items-center justify-between p-4">
			{/*left*/}
			CollapseBtn
			{/*right*/}
			<Link href="/">Dashboard</Link>

			<ThemeSelector />

			<DropdownMenu>
				<DropdownMenuTrigger>
					<Avatar>
						<AvatarImage src="#" />
						<AvatarFallback>Loading...</AvatarFallback>
					</Avatar>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
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

		</nav>
	)
}

export default Navbar
