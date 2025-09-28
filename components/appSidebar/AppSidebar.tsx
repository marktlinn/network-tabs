import { Home, Settings } from 'lucide-react'
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarSeparator } from '@/components/ui/sidebar'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import AppSidebarHeader from '@/components/appSidebar/AppSidebarHeader'
import AppSidebarFooter from '@/components/appSidebar/AppSidebarFooter'

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
	return (
		<Sidebar collapsible='icon' >
			<AppSidebarHeader />

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

			<AppSidebarFooter />

		</Sidebar>
	)
}

export default AppSidebar
