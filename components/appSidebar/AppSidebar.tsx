import { ChevronDown, Home, Plus, Settings, Workflow, LifeBuoy, MessageSquareQuote } from 'lucide-react'
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupAction,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarSeparator
} from '@/components/ui/sidebar'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import AppSidebarHeader from '@/components/appSidebar/AppSidebarHeader'
import AppSidebarFooter from '@/components/appSidebar/AppSidebarFooter'
import { CollapsibleTrigger, Collapsible, CollapsibleContent } from '@/components/ui/collapsible'

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

const applications = [
	{ name: "Node" },
	{ name: "Office" }
]

const AppSidebar = () => {
	return (
		<Sidebar collapsible='icon' >
			<AppSidebarHeader />

			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Admin</SidebarGroupLabel>
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


				<SidebarGroup>
					<SidebarGroupLabel>Application</SidebarGroupLabel>
					<SidebarGroupAction>
						<Plus className="cursor-pointer" /> <span className="sr-only">Add Project</span>
					</SidebarGroupAction>

					<SidebarMenu>
						{
							applications.map((app) => (
								<SidebarMenuItem key={app.name}>
									<SidebarMenuButton asChild>
										<Link href="#">
											<Workflow />
											<span>{app.name}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>)
							)
						}
					</SidebarMenu>
				</SidebarGroup>


				<Collapsible defaultOpen className="group/collapsible">
					<SidebarGroup>
						<SidebarGroupLabel asChild>
							<CollapsibleTrigger>
								Help
								<ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
							</CollapsibleTrigger>
						</SidebarGroupLabel>
						<CollapsibleContent>
							<SidebarGroupContent />

							<SidebarMenu>
								<SidebarMenuItem>
									<SidebarMenuButton asChild>
										<Link href="#">
											<LifeBuoy />
											<span>Help</span>
										</Link>
									</SidebarMenuButton>
									<SidebarMenuButton asChild>
										<Link href="#">
											<MessageSquareQuote />
											<span>Feedback</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							</SidebarMenu>
						</CollapsibleContent>
					</SidebarGroup>
				</Collapsible>

			</SidebarContent>

			<AppSidebarFooter />

		</Sidebar>
	)
}

export default AppSidebar
