'use client'
import { Home, Settings } from 'lucide-react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from './ui/sidebar'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useMounted } from '@/hooks/useMounted'
const sidebarItems = [
	{
		label: "Home",
		url: "/",
		icon: Home
	},
	{
		label: "Setting",
		url: "#",
		icon: Settings
	}
]

const AppSidebar = () => {
	const { resolvedTheme } = useTheme()
	const { mounted } = useMounted()
	const imageTheme = mounted ? (resolvedTheme || 'dark') : 'dark'

	return (
		<Sidebar>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton asChild>
							<Link href="/" >
								<Image src={`/user-default-${imageTheme}.svg`} alt="user icon" height={20} width={20} />
								<span>Network Tabs</span>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>

			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Application</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{
								sidebarItems.map((si) => (
									<SidebarMenuItem key={si.label}>
										<SidebarMenuButton asChild>
											<Link href={si.url}>
												<si.icon />
												<span>{si.label}</span>
											</Link>
										</SidebarMenuButton>
									</SidebarMenuItem>)
								)
							}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>

			<SidebarFooter>
			</SidebarFooter>
		</Sidebar>
	)
}

export default AppSidebar
