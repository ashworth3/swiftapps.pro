import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicy() {
  const policies = [
    { href: "/privacy", label: "Privacy Policy (swiftapps.pro)" },
    { href: "/privacy/batteryclock", label: "BatteryClock Privacy Policy" },
    { href: "/privacy/copyboard", label: "CopyBoard Privacy Policy" },
    { href: "/privacy/strengthai", label: "Strength AI Privacy Policy" },
    { href: "/privacy/sendify", label: "Sendify Privacy Policy" },
  ] as const

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button variant="outline" asChild className="mb-4 bg-transparent">
              <Link href="/" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Home
              </Link>
            </Button>
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: March 2026</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Privacy Policy (swiftapps.pro)</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  This page covers privacy for the website itself. App-specific policies are available below.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  We collect limited information that you submit directly, such as contact form messages and waitlist emails.
                </p>
                <p>
                  We do not sell your personal data.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Third-Party Services</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <ul>
                  <li>Website forms may be processed through providers such as Resend and Formspree.</li>
                  <li>Hosting and lightweight analytics providers may process technical request data.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>All Privacy Policies</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <ul>
                  {policies.map((policy) => (
                    <li key={policy.href}>
                      <Link href={policy.href} className="text-blue-600 hover:underline dark:text-blue-400">
                        {policy.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  If you have any questions, contact us at{" "}
                  <a href="mailto:andre@hallmarkoc.com">andre@hallmarkoc.com</a>.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
