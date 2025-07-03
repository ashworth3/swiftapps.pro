import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Battery, Clock, Copy, Download, Zap, Shield, Smartphone, Layers, Github, ExternalLink } from "lucide-react"

const apps = [
	{
		id: "batteryclock",
		name: "BatteryClock",
		tagline: "Battery Time in Your Touch Bar",
		description:
			"A sleek utility for Pock that displays your MacBook's battery percentage and remaining time directly in the Touch Bar. Never be caught off guard by a dead battery again. Perfect for MacBook Pro users who want quick access to battery information without opening system preferences.",
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
		name: "CopyBoard",
		tagline: "Lightweight Clipboard Manager",
		description:
			"A lightweight clipboard manager that keeps track of everything you copy. Features seamless drag-and-drop support and integrates perfectly with your workflow. Store clipboard history local and access it instantly whenever you need it.",
		icon: Copy,
		color: "bg-blue-500",
		features: [
			{ icon: Copy, text: "Short term clipboard history" },
			{ icon: Layers, text: "File drag & drop support" },
			{ icon: Shield, text: "Privacy-focused, only stored locally" },
			{ icon: Zap, text: "Automatic clipboard detection" },
		],
		image: "/copyboard.png?height=400&width=600",
		downloadUrl: "https://github.com/ashworth3/CopyBoard/releases/latest/download/CopyBoard-1.0.dmg",
		githubUrl: "https://github.com/ashworth3/CopyBoard",
	},
]

export function AppShowcase() {
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
						key={app.id}
						className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
							}`}
					>
						<div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
							<div className="space-y-6">
								<div className="flex items-center gap-4">
									<div className={`p-3 rounded-2xl ${app.color}`}>
										<app.icon className="h-8 w-8 text-white" />
									</div>
									<div>
										<h3 className="text-3xl font-bold">{app.name}</h3>
										<p className="text-lg text-muted-foreground">{app.tagline}</p>
									</div>
								</div>

								<p className="text-lg leading-relaxed">{app.description}</p>

								<div className="grid sm:grid-cols-2 gap-4">
									{app.features.map((feature, featureIndex) => (
										<div key={featureIndex} className="flex items-center gap-3">
											<feature.icon className="h-5 w-5 text-muted-foreground" />
											<span className="text-sm">{feature.text}</span>
										</div>
									))}
								</div>

								<div className="flex flex-col sm:flex-row gap-3">
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

			<p className="text-center text-muted-foreground text-sm mt-8">
				More apps coming soon...
			</p>

			{/* GitHub Repositories Section */}
			<div id="github-repos" className="mt-20 pt-16 border-t">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Open Source</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Swift projects on Github
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					{apps.map((app) => (
						<Card key={`${app.id}-github`} className="hover:shadow-lg transition-shadow">
							<CardContent className="p-6">
								<div className="flex items-center gap-4 mb-4">
									<div className={`p-2 rounded-lg ${app.color}`}>
										<app.icon className="h-6 w-6 text-white" />
									</div>
									<div>
										<h3 className="text-xl font-semibold">{app.name}</h3>
										<p className="text-sm text-muted-foreground">App Repository</p>
									</div>
								</div>
								<p className="text-muted-foreground mb-4">
									View the source code, contribute to development, or report issues for {app.name}.
								</p>
								<div className="flex gap-2">
									<Button variant="outline" className="flex-1 gap-2 bg-transparent" asChild>
										<a href={app.githubUrl} target="_blank" rel="noopener noreferrer">
											<Github className="h-4 w-4" />
											View Repository
										</a>
									</Button>
									<Button variant="outline" size="icon" asChild>
										<a href={`${app.githubUrl}/issues`} target="_blank" rel="noopener noreferrer">
											<ExternalLink className="h-4 w-4" />
										</a>
									</Button>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
