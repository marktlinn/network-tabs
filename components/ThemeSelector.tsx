'use client'
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from 'react'
import { useMounted } from "@/hooks/useMounted"

const ThemeSelector = () => {
	const { theme, setTheme } = useTheme()
	const { mounted } = useMounted()

	if (!mounted) {
		return <div style={{ cursor: 'pointer', height: 20, width: 20 }}></div>;
	}

	return (
		<div style={{ cursor: 'pointer' }}>
			{theme === 'dark' ?
				<Moon onClick={() => setTheme("light")} /> :
				<Sun onClick={() => setTheme("dark")} />
			}
		</div>
	)
}

export default ThemeSelector
