import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const payload = {
      name: form.get("name") as string,
      email: form.get("email") as string,
      business: form.get("business") as string,
      budget: form.get("budget") as string,
      timeline: form.get("timeline") as string,
      message: form.get("message") as string,
      serious: form.get("serious") as string,
    };

    await resend.emails.send({
      from: `${process.env.FROM_EMAIL}`,
      to: `${process.env.TO_EMAIL}`,
      subject: "New System Evaluation Submission",
      text: `
New submission:

Name: ${payload.name}
Email: ${payload.email}
Business: ${payload.business}
Budget: ${payload.budget}
Timeline: ${payload.timeline}
Serious: ${payload.serious}

Message:
${payload.message}
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("Error sending email", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
