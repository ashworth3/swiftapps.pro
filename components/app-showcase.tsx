'use client'

import { useEffect, useMemo, useState } from "react"
import { useTheme } from "next-themes"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Battery, Clock, Copy, Download, Zap, Shield, Smartphone, Layers, Github } from "lucide-react"

const apps = [
	{
		id: "batteryclock",
		name: "BatteryClock",
		tagline: "Battery Time in Your Touch Bar",
		description:
			"A sleek utility for Pock that displays your MacBook's battery percentage and remaining time directly in the Touch Bar. Never be caught off guard by a dead battery again. Perfect for MacBook Pro users who want quick access to battery information without opening system preferences. Requires Pock (https://pock.app) to be installed and running.",
		icon: Battery,
		color: "bg-green-500",
		features: [
			{ icon: Battery, text: "Battery percentage display" },
			{ icon: Clock, text: "Time remaining estimates" },
			{ icon: Zap, text: "Smart refresh battery tracking" },
			{ icon: Smartphone, text: "Seamless Touch Bar integration" },
		],
		image: "/batteryclock.png?height=400&width=600",
		downloadUrl: "https://github.com/ashworth3/BatteryClock/releases/tag/BatteryClock",
		githubUrl: "https://github.com/ashworth3/BatteryClock",
	},
	{
		id: "copyboard",
		name: "Copyboard - Clipboard Manager",
		tagline: "Save and reuse clipboard items",
		description:
			"A lightweight clipboard manager that keeps track of everything you copy. Features seamless drag-and-drop support and integrates perfectly with your workflow. Store clipboard history locally and access it instantly—now available on the Mac App Store with a DMG download for offline installs.",
		icon: Copy,
		color: "bg-blue-500",
		appStoreUrl: "https://apps.apple.com/us/app/copyboard-clipboard-manager/id6755758977?mt=12",
		dmgUrl: "https://github.com/ashworth3/CopyBoard/releases/latest/download/CopyBoard-1.0.dmg",
		features: [
			{ icon: Copy, text: "Short term clipboard history" },
			{ icon: Layers, text: "File drag & drop support" },
			{ icon: Shield, text: "Privacy-focused, only stored locally" },
			{ icon: Zap, text: "Automatic clipboard detection" },
		],
		image: "/CopyBoard-1.webp",
		githubUrl: "https://github.com/ashworth3/CopyBoard",
	},
]

const badgeFiles: Record<
	string,
	{
		black: string
		white: string
	}
> = {
	AR: {
		black: "/Download-on-the-Mac-App-Store/AR/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_AR_RGB_blk_102417.svg",
		white: "/Download-on-the-Mac-App-Store/AR/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_AR_RGB_wht_102417.svg",
	},
	AZ: {
		black: "/Download-on-the-Mac-App-Store/AZ/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_AZ_RGB_blk_100517.svg",
		white: "/Download-on-the-Mac-App-Store/AZ/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_AZ_RGB_wht_100517.svg",
	},
	BG: {
		black: "/Download-on-the-Mac-App-Store/BG/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_BG_RGB_blk_100217.svg",
		white: "/Download-on-the-Mac-App-Store/BG/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_BG_RGB_wht_100217.svg",
	},
	CAES: {
		black: "/Download-on-the-Mac-App-Store/CAES/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_Blk_CAES_CI_091224.svg",
		white: "/Download-on-the-Mac-App-Store/CAES/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_Wht_CAES_CI_091224.svg",
	},
	"CNSC": {
		black: "/Download-on-the-Mac-App-Store/CN(SC)/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_CNSC_RGB_blk_092917.svg",
		white: "/Download-on-the-Mac-App-Store/CN(SC)/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_CNSC_RGB_wht_092917.svg",
	},
	CZ: {
		black: "/Download-on-the-Mac-App-Store/CZ/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_CZ_RGB_blk_092917.svg",
		white: "/Download-on-the-Mac-App-Store/CZ/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_CZ_RGB_wht_092917.svg",
	},
	DE: {
		black: "/Download-on-the-Mac-App-Store/DE/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_DE_RGB_blk_092917.svg",
		white: "/Download-on-the-Mac-App-Store/DE/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_DE_RGB_wht_092917.svg",
	},
	DK: {
		black: "/Download-on-the-Mac-App-Store/DK/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_DK_RGB_blk_100217.svg",
		white: "/Download-on-the-Mac-App-Store/DK/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_DK_RGB_wht_100217.svg",
	},
	EE: {
		black: "/Download-on-the-Mac-App-Store/EE/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_EE_RGB_blk_100217.svg",
		white: "/Download-on-the-Mac-App-Store/EE/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_EE_RGB_wht_100217.svg",
	},
	ES: {
		black: "/Download-on-the-Mac-App-Store/ES/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_ES_RGB_blk_100217.svg",
		white: "/Download-on-the-Mac-App-Store/ES/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_ES_RGB_wht_100217.svg",
	},
	ESMX: {
		black: "/Download-on-the-Mac-App-Store/ESMX/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_ESMX_RGB_blk_100217.svg",
		white: "/Download-on-the-Mac-App-Store/ESMX/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_ESMX_RGB_wht_100217.svg",
	},
	FI: {
		black: "/Download-on-the-Mac-App-Store/FI/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_FI_RGB_blk_100217.svg",
		white: "/Download-on-the-Mac-App-Store/FI/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_FI_RGB_wht_100217.svg",
	},
	FR: {
		black: "/Download-on-the-Mac-App-Store/FR/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_FR_RGB_blk_100217.svg",
		white: "/Download-on-the-Mac-App-Store/FR/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_FR_RGB_wht_100217.svg",
	},
	FRCA: {
		black: "/Download-on-the-Mac-App-Store/FRCA/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_FRCA_RGB_blk_100217.svg",
		white: "/Download-on-the-Mac-App-Store/FRCA/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_FRCA_RGB_wht_100217.svg",
	},
	GR: {
		black: "/Download-on-the-Mac-App-Store/GR/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_GR_RGB_blk_100217.svg",
		white: "/Download-on-the-Mac-App-Store/GR/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_GR_RGB_wht_100217.svg",
	},
	HB: {
		black: "/Download-on-the-Mac-App-Store/HB/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_Blk_HB_CI_110824.svg",
		white: "/Download-on-the-Mac-App-Store/HB/White__lockup/SVG/Download_on_the_Mac_App_Store_Badge_Wht_HB_CI_110824.svg",
	},
	"HKTW(TC)": {
		black: "/Download-on-the-Mac-App-Store/HKTW(TC)/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_CNTC_RGB_blk_100217.svg",
		white: "/Download-on-the-Mac-App-Store/HKTW(TC)/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_CNTC_RGB_wht_100217.svg",
	},
	HR: {
		black: "/Download-on-the-Mac-App-Store/HR/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_Blk_HR_CI_091224.svg",
		white: "/Download-on-the-Mac-App-Store/HR/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_Wht_HR_CI_091224.svg",
	},
	HU: {
		black: "/Download-on-the-Mac-App-Store/HU/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_HU_RGB_blk_100317.svg",
		white: "/Download-on-the-Mac-App-Store/HU/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_HU_RGB_wht_100317.svg",
	},
	ID: {
		black: "/Download-on-the-Mac-App-Store/ID/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_ID_RGB_blk_100317.svg",
		white: "/Download-on-the-Mac-App-Store/ID/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_ID_RGB_wht_100317.svg",
	},
	IL: {
		black: "/Download-on-the-Mac-App-Store/IL/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_IL_RGB_blk_102517.svg",
		white: "/Download-on-the-Mac-App-Store/IL/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_IL_RGB_wht_102517.svg",
	},
	IN: {
		black: "/Download-on-the-Mac-App-Store/IN/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_Blk_IN_CI_091224.svg",
		white: "/Download-on-the-Mac-App-Store/IN/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_Wht_IN_CI_091224.svg",
	},
	IT: {
		black: "/Download-on-the-Mac-App-Store/IT/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_IT_RGB_blk_100317.svg",
		white: "/Download-on-the-Mac-App-Store/IT/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_IT_RGB_wht_100317.svg",
	},
	JP: {
		black: "/Download-on-the-Mac-App-Store/JP/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_JP_RGB_blk_100317.svg",
		white: "/Download-on-the-Mac-App-Store/JP/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_JP_RGB_wht_100317.svg",
	},
	KR: {
		black: "/Download-on-the-Mac-App-Store/KR/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_KR_RGB_blk_100317.svg",
		white: "/Download-on-the-Mac-App-Store/KR/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_KR_RGB_wht_100317.svg",
	},
	LT: {
		black: "/Download-on-the-Mac-App-Store/LT/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_LT_RGB_blk_100317.svg",
		white: "/Download-on-the-Mac-App-Store/LT/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_LT_RGB_wht_100317.svg",
	},
	LV: {
		black: "/Download-on-the-Mac-App-Store/LV/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_LV_RGB_blk_100317.svg",
		white: "/Download-on-the-Mac-App-Store/LV/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_LV_RGB_wht_100317.svg",
	},
	MT: {
		black: "/Download-on-the-Mac-App-Store/MT/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_MT_RGB_blk_100317.svg",
		white: "/Download-on-the-Mac-App-Store/MT/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_MT_RGB_wht_100317.svg",
	},
	MY: {
		black: "/Download-on-the-Mac-App-Store/MY/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_MY_RGB_blk_100317.svg",
		white: "/Download-on-the-Mac-App-Store/MY/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_MY_RGB_wht_100317.svg",
	},
	NL: {
		black: "/Download-on-the-Mac-App-Store/NL/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_NL_RGB_blk_100317.svg",
		white: "/Download-on-the-Mac-App-Store/NL/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_NL_RGB_wht_100317.svg",
	},
	NO: {
		black: "/Download-on-the-Mac-App-Store/NO/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_NO_RGB_blk_100317.svg",
		white: "/Download-on-the-Mac-App-Store/NO/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_NO_RGB_wht_100317.svg",
	},
	PH: {
		black: "/Download-on-the-Mac-App-Store/PH/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_PH_RGB_blk_100317.svg",
		white: "/Download-on-the-Mac-App-Store/PH/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_PH_RGB_wht_100317.svg",
	},
	PL: {
		black: "/Download-on-the-Mac-App-Store/PL/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_PL_RGB_blk_100317.svg",
		white: "/Download-on-the-Mac-App-Store/PL/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_PL_RGB_wht_100317.svg",
	},
	PTBR: {
		black: "/Download-on-the-Mac-App-Store/PTBR/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_PTBR_RGB_blk_100317.svg",
		white: "/Download-on-the-Mac-App-Store/PTBR/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_PTBR_RGB_wht_100317.svg",
	},
	PTPT: {
		black: "/Download-on-the-Mac-App-Store/PTPT/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_PTPT_RGB_blk_100317.svg",
		white: "/Download-on-the-Mac-App-Store/PTPT/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_PTPT_RGB_wht_100317.svg",
	},
	RO: {
		black: "/Download-on-the-Mac-App-Store/RO/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_RO_RGB_blk_100317.svg",
		white: "/Download-on-the-Mac-App-Store/RO/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_RO_RGB_wht_100317.svg",
	},
	RU: {
		black: "/Download-on-the-Mac-App-Store/RU/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_RU_RGB_blk_100317.svg",
		white: "/Download-on-the-Mac-App-Store/RU/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_RU_RGB_wht_100317.svg",
	},
	SE: {
		black: "/Download-on-the-Mac-App-Store/SE/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_SE_RGB_blk_100317.svg",
		white: "/Download-on-the-Mac-App-Store/SE/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_SE_RGB_wht_100317.svg",
	},
	SI: {
		black: "/Download-on-the-Mac-App-Store/SI/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_SI_RGB_blk_100317.svg",
		white: "/Download-on-the-Mac-App-Store/SI/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_SI_RGB_wht_100317.svg",
	},
	SK: {
		black: "/Download-on-the-Mac-App-Store/SK/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_SK_RGB_blk_100317.svg",
		white: "/Download-on-the-Mac-App-Store/SK/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_SK_RGB_wht_100317.svg",
	},
	TH: {
		black: "/Download-on-the-Mac-App-Store/TH/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_TH_RGB_blk_092917.svg",
		white: "/Download-on-the-Mac-App-Store/TH/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_TH_RGB_wht_092917.svg",
	},
	TR: {
		black: "/Download-on-the-Mac-App-Store/TR/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_TR_RGB_blk_092717.svg",
		white: "/Download-on-the-Mac-App-Store/TR/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_TR_RGB_wht_100217.svg",
	},
	UA: {
		black: "/Download-on-the-Mac-App-Store/UA/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_Blk_UA_CI_091224.svg",
		white: "/Download-on-the-Mac-App-Store/UA/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_Wht_UA_CI_091224.svg",
	},
	US: {
		black: "/Download-on-the-Mac-App-Store/US/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_blk_092917.svg",
		white: "/Download-on-the-Mac-App-Store/US/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_US-UK_RGB_wht_092917.svg",
	},
	VN: {
		black: "/Download-on-the-Mac-App-Store/VN/Download_on_Mac_App_Store/Black_lockup/SVG/Download_on_the_Mac_App_Store_Badge_VN_RGB_blk_092917.svg",
		white: "/Download-on-the-Mac-App-Store/VN/Download_on_Mac_App_Store/White_lockup/SVG/Download_on_the_Mac_App_Store_Badge_VN_RGB_wht_092917.svg",
	},
}

const localeToBadgeKey = (locale: string) => {
	const normalized = locale.toLowerCase()
	const [language, region = ""] = normalized.split("-")

	switch (language) {
		case "ar":
			return "AR"
		case "az":
			return "AZ"
		case "bg":
			return "BG"
		case "ca":
			return "CAES"
		case "zh":
			return region === "tw" || region === "hk" ? "HKTW(TC)" : "CNSC"
		case "cs":
			return "CZ"
		case "da":
			return "DK"
		case "de":
			return "DE"
		case "et":
			return "EE"
		case "es":
			return region === "mx" || region === "419" ? "ESMX" : "ES"
		case "fi":
			return "FI"
		case "fr":
			return region === "ca" ? "FRCA" : "FR"
		case "el":
			return "GR"
		case "he":
		case "iw":
			return "HB"
		case "hr":
			return "HR"
		case "hu":
			return "HU"
		case "id":
			return "ID"
		case "hi":
		case "en":
			return "US"
		case "it":
			return "IT"
		case "ja":
			return "JP"
		case "ko":
			return "KR"
		case "lt":
			return "LT"
		case "lv":
			return "LV"
		case "mt":
			return "MT"
		case "ms":
			return "MY"
		case "nl":
			return "NL"
		case "nb":
		case "nn":
		case "no":
			return "NO"
		case "ph":
		case "tl":
			return "PH"
		case "pl":
			return "PL"
		case "pt":
			return region === "br" ? "PTBR" : "PTPT"
		case "ro":
			return "RO"
		case "ru":
			return "RU"
		case "sv":
			return "SE"
		case "sl":
			return "SI"
		case "sk":
			return "SK"
		case "th":
			return "TH"
		case "tr":
			return "TR"
		case "uk":
			return "UA"
		case "vi":
			return "VN"
		default:
			return "US"
	}
}

export function AppShowcase() {
	const { resolvedTheme } = useTheme()
	const [badgeKey, setBadgeKey] = useState<string>("US")
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		const navigatorLocale = typeof navigator !== "undefined" ? navigator.language || "en-US" : "en-US"
		setBadgeKey(localeToBadgeKey(navigatorLocale))
		setMounted(true)
	}, [])

	const badgeSrc = useMemo(() => {
		if (!mounted) return badgeFiles["US"].black
		const entry = badgeFiles[badgeKey] ?? badgeFiles["US"]
		if (resolvedTheme === "dark") return entry.white
		return entry.black
	}, [badgeKey, resolvedTheme, mounted])

	return (
		<section id="apps" className="container mx-auto px-4 py-20">
			<div className="text-center mb-16">
				<h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Apps</h2>
				<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
					Discover the apps that make your device experience better
				</p>
			</div>

			<div className="space-y-20">
				{apps.map((app, index) => (
					<div
						id={app.id}
						key={app.id}
						className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
							}`}
					>
						<div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
							<div className="space-y-6">
								<div className="flex items-center gap-4">
									{app.id === "copyboard" ? (
										<div className="rounded-2xl">
											<img
												src="/CopyBoard.webp"
												alt={`${app.name} icon`}
												className="h-16 w-16 rounded-2xl object-cover"
											/>
										</div>
									) : (
										<div className={`p-3 rounded-2xl ${app.color}`}>
											<app.icon className="h-8 w-8 text-white" />
										</div>
									)}
									<div>
										<h3 className="text-3xl font-bold">{app.name}</h3>
										<p className="text-lg text-muted-foreground">{app.tagline}</p>
									</div>
								</div>

								<p className="text-lg leading-relaxed">{app.description}</p>
								{app.id === "batteryclock" && (
									<p className="text-xs text-muted-foreground italic">
										Requires{" "}
										<a
											href="https://pock.app"
											target="_blank"
											rel="noopener noreferrer"
											className="underline hover:text-primary"
										>
											Pock
										</a>{" "}
										to be installed and running.
									</p>
								)}

								<div className="grid sm:grid-cols-2 gap-4">
									{app.features.map((feature, featureIndex) => (
										<div key={featureIndex} className="flex items-center gap-3">
											<feature.icon className="h-5 w-5 text-muted-foreground" />
											<span className="text-sm">{feature.text}</span>
										</div>
									))}
								</div>

								<div className="flex flex-col sm:flex-row gap-3 items-start">
									{app.appStoreUrl ? (
										<>
											<a
												href={app.appStoreUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex transition-transform hover:scale-[1.01]"
												aria-label={`Download ${app.name} on the Mac App Store`}
											>
												<img
													src={badgeSrc}
													alt="Download on the Mac App Store"
													className="h-12 w-auto"
												/>
											</a>
											{app.dmgUrl && (
												<Button variant="outline" size="lg" className="gap-2 bg-transparent" asChild>
													<a href={app.dmgUrl}>
														<Download className="h-4 w-4" />
														Download .dmg
													</a>
												</Button>
											)}
											{app.id !== "copyboard" && (
												<Button variant="outline" size="lg" className="gap-2 bg-transparent" asChild>
													<a href={app.githubUrl} target="_blank" rel="noopener noreferrer">
														<Github className="h-4 w-4" />
														View Repo
													</a>
												</Button>
											)}
										</>
									) : (
										<>
											<Button size="lg" className="gap-2" asChild>
												<a href={app.downloadUrl}>
													<Download className="h-4 w-4" />
													Download
												</a>
											</Button>
											<Button variant="outline" size="lg" className="gap-2 bg-transparent" asChild>
												<a href={app.githubUrl} target="_blank" rel="noopener noreferrer">
													<Github className="h-4 w-4" />
													View Repo
												</a>
											</Button>
										</>
									)}
								</div>

								<div className="flex gap-2 flex-wrap">
									<Badge variant="secondary">macOS 10.15+</Badge>
									<Badge variant="secondary">Swift</Badge>
								</div>
							</div>
						</div>

						<div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
							<Card className="overflow-hidden shadow-2xl">
								<CardContent className="p-0">
									<img
										src={app.image || "/placeholder.svg"}
										alt={`${app.name} screenshot showing the app interface and features`}
										className="w-full h-auto object-cover"
									/>
								</CardContent>
							</Card>
						</div>
					</div>
				))}
			</div>

		</section>
	)
}
