export async function POST(request: Request) {
  const formData = await request.formData();
  const payload = Object.fromEntries(formData.entries());

  const leadPayload = {
    ...payload,
    submittedAt: new Date().toISOString(),
    userAgent: request.headers.get("user-agent"),
    referer: request.headers.get("referer"),
  };

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;

  if (webhookUrl) {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Webhook-Secret": process.env.LEAD_WEBHOOK_SECRET ?? "",
      },
      body: JSON.stringify(leadPayload),
    });

    if (!res.ok) {
      return Response.json({ ok: false }, { status: 502 });
    }
  }

  return Response.json({ ok: true });
}
