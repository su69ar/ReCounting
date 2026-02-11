import { sendEmails, type EmailData } from '@/lib/email';

export async function POST(request: Request) {
  const contentType = request.headers.get('content-type') || '';
  let payload: Record<string, string>;

  if (contentType.includes('application/x-www-form-urlencoded')) {
    const text = await request.text();
    const params = new URLSearchParams(text);
    payload = Object.fromEntries(params.entries());
  } else {
    const formData = await request.formData();
    payload = Object.fromEntries(formData.entries()) as Record<string, string>;
  }

  const leadPayload = {
    ...payload,
    submittedAt: new Date().toISOString(),
    userAgent: request.headers.get("user-agent"),
    referer: request.headers.get("referer"),
  };

  // Send emails
  const emailData: EmailData = {
    name: payload.name as string,
    email: payload.email as string,
    phone: payload.phone as string | undefined,
    service: payload.service as string | undefined,
    message: payload.message as string | undefined,
    transaction_volume: payload.transaction_volume as string | undefined,
    source: payload.source as string,
  };

  try {
    await sendEmails(emailData);
  } catch (error) {
    console.error('Failed to send emails:', error);
    // Continue with webhook even if email fails
  }

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Webhook-Secret": process.env.LEAD_WEBHOOK_SECRET ?? "",
        },
        body: JSON.stringify(leadPayload),
      });

      if (!res.ok) {
        console.error('Webhook failed:', res.status, res.statusText);
      }
    } catch (error) {
      console.error('Webhook error:', error);
      // Continue even if webhook fails - email was already sent
    }
  }

  return Response.json({ ok: true });
}
