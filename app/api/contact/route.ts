import { Resend } from "resend"

const resendApiKey = process.env.RESEND_API_KEY
const contactTo = process.env.CONTACT_TO_EMAIL ?? "andre@hallmarkoc.com"
const contactFrom = process.env.CONTACT_FROM_EMAIL ?? "SwiftApps Contact <onboarding@resend.dev>"

export async function POST(request: Request) {
  if (!resendApiKey) {
    return new Response(JSON.stringify({ error: "Missing RESEND_API_KEY" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }

  try {
    const body = (await request.json()) as {
      name?: string
      email?: string
      subject?: string
      message?: string
    }

    const name = (body.name ?? "").trim()
    const email = (body.email ?? "").trim()
    const subject = (body.subject ?? "").trim()
    const message = (body.message ?? "").trim()

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    const resend = new Resend(resendApiKey)
    const { error } = await resend.emails.send({
      from: contactFrom,
      to: [contactTo],
      replyTo: email,
      subject: `[swiftapps.pro] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <h2>New message from swiftapps.pro</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <hr />
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    })

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      })
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    })
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}
