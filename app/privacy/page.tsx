import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button variant="outline" asChild className="mb-4 bg-transparent">
              <Link href="/" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Our Commitment to Privacy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  Your privacy is important to us. This privacy policy explains how our macOS applications (BatteryClock
                  and CopyBoard) handle your data and what information we collect, if any.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>BatteryClock</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <h3>Data Collection</h3>
                <ul>
                  <li>BatteryClock only accesses your Mac's battery information to display current status</li>
                  <li>No personal data is collected, stored, or transmitted</li>
                  <li>All battery data remains on your device</li>
                </ul>
                <h3>Permissions</h3>
                <ul>
                  <li>System battery information access (read-only)</li>
                  <li>Touch Bar display access for showing battery status</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>CopyBoard</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <h3>Data Collection</h3>
                <ul>
                  <li>CopyBoard stores clipboard history locally on your Mac</li>
                  <li>No clipboard data is transmitted to external servers</li>
                  <li>All clipboard history remains private and local to your device</li>
                </ul>
                <h3>Permissions</h3>
                <ul>
                  <li>Clipboard access to monitor and store copied content</li>
                  <li>File system access for drag-and-drop functionality</li>
                </ul>
                <h3>Data Storage</h3>
                <ul>
                  <li>Clipboard history is stored in your user directory</li>
                  <li>You can clear history at any time through the app</li>
                  <li>Data is automatically cleaned based on your retention settings</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Analytics and Tracking</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  Neither BatteryClock nor CopyBoard include any analytics, tracking, or telemetry. We believe in
                  keeping your usage private and don't collect any usage statistics or crash reports.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Third-Party Services</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  Our applications do not integrate with any third-party services or APIs. They operate entirely offline
                  and independently on your Mac.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Updates to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  We may update this privacy policy from time to time. Any changes will be reflected on this page with
                  an updated "Last updated" date. Continued use of our applications after changes constitutes acceptance
                  of the updated policy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  If you have any questions about this privacy policy or our applications, please{" "}
                  <Link href="/#contact" className="text-blue-600 hover:underline">
                    contact us
                  </Link>
                  .
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
