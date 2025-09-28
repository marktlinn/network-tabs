'use client'
import { SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useMounted } from '@/hooks/useMounted'

const AppSidebarHeader = () => {
	const { resolvedTheme } = useTheme()
	const { mounted } = useMounted()
	const imageTheme = mounted ? (resolvedTheme || 'dark') : 'dark'

	return (
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
	)
}

export default AppSidebarHeader
