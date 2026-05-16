import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';
import path from 'path';

export interface EmailData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message?: string;
  transaction_volume?: string;
  source: string;
}

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

const handlebarsOptions = {
  viewEngine: {
    extName: '.hbs',
    partialsDir: path.resolve('./src/emails/templates'),
    defaultLayout: false,
    helpers: {
      eq: (a: unknown, b: unknown) => a === b,
    },
  },
  viewPath: path.resolve('./src/emails/templates'),
  extName: '.hbs',
} as const;

transporter.use('compile', hbs(handlebarsOptions as any));

export async function sendUserNotificationEmail(data: EmailData) {
  const subject = data.source === 'free-consultation'
    ? 'Your Free Consultation Request - ReCounting'
    : 'Thank You for Contacting ReCounting';

  await transporter.sendMail({
    from: `"ReCounting" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
    to: data.email,
    subject,
    template: data.source === 'free-consultation' ? 'user-consultation' : 'user-contact',
    context: {
      ...data,
      year: new Date().getFullYear(),
      companyEmail: process.env.EMAIL_USER,
      companyPhone: '0811-3940-4640',
      whatsappUrl: 'https://wa.me/6281139404640',
    },
  } as any);
}

export async function sendAdminNotificationEmail(data: EmailData) {
  const subject = data.source === 'free-consultation'
    ? `New Free Consultation Request - ${data.name}`
    : `New Contact Form Submission - ${data.name}`;

  const adminEmail = process.env.ADMIN_EMAIL || process.env.EMAIL_USER;

  await transporter.sendMail({
    from: `"${data.name} via ReCounting" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
    to: adminEmail,
    replyTo: data.email,
    subject,
    template: 'admin-notification',
    context: {
      ...data,
      submittedAt: new Date().toLocaleString('en-ID', { timeZone: 'Asia/Makassar' }),
      year: new Date().getFullYear(),
    },
  } as any);
}

export async function sendEmails(data: EmailData) {
  try {
    await sendUserNotificationEmail(data);
    await sendAdminNotificationEmail(data);
    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
}

export type TokenRefreshEmailContext = {
  newToken: string;
  expiresInDays: number;
  expiresAt: string;
  refreshedAt: string;
  envWriteOk: boolean;
  envWriteError?: string;
  hostname?: string;
};

export async function sendInstagramTokenRefreshEmail(
  ctx: TokenRefreshEmailContext
): Promise<void> {
  const adminEmail = process.env.ADMIN_EMAIL || process.env.EMAIL_USER;
  if (!adminEmail) {
    console.warn('[email] ADMIN_EMAIL not set, skipping refresh notification');
    return;
  }

  const subject = ctx.envWriteOk
    ? `Instagram token refreshed — expires in ${ctx.expiresInDays} days`
    : `ACTION REQUIRED: Instagram token refreshed but .env write failed`;

  const actionBlock = ctx.envWriteOk
    ? `<p style="background:#e6f7ee;border-left:4px solid #00a865;padding:12px;">
         <strong>No action needed.</strong> Server <code>.env</code> updated automatically.
         Next refresh scheduled in 7 days.
       </p>`
    : `<p style="background:#fff5e6;border-left:4px solid #d97706;padding:12px;">
         <strong>Manual action needed.</strong> Auto-write to <code>.env</code> failed:
         <code>${escapeHtml(ctx.envWriteError || 'unknown error')}</code>.
         Paste the new token into your production environment manually before
         <strong>${escapeHtml(ctx.expiresAt)}</strong>.
       </p>`;

  const html = `
    <div style="font-family:system-ui,-apple-system,sans-serif;max-width:680px;margin:auto;color:#1f2937;">
      <h2 style="margin-bottom:4px;">Instagram token refresh report</h2>
      <p style="color:#6b7280;margin-top:0;">${escapeHtml(ctx.hostname || 'recounting.my.id')}</p>

      ${actionBlock}

      <table style="width:100%;border-collapse:collapse;margin-top:12px;font-size:14px;">
        <tr><td style="padding:6px 0;color:#6b7280;">Refreshed at</td>
            <td style="padding:6px 0;text-align:right;">${escapeHtml(ctx.refreshedAt)}</td></tr>
        <tr><td style="padding:6px 0;color:#6b7280;">Expires</td>
            <td style="padding:6px 0;text-align:right;">${escapeHtml(ctx.expiresAt)} (in ${ctx.expiresInDays} days)</td></tr>
        <tr><td style="padding:6px 0;color:#6b7280;">.env write</td>
            <td style="padding:6px 0;text-align:right;">${ctx.envWriteOk ? '✓ ok' : '✗ failed'}</td></tr>
      </table>

      <h3 style="margin-top:24px;font-size:14px;color:#6b7280;text-transform:uppercase;">New token (for production env update if needed)</h3>
      <pre style="background:#f3f4f6;padding:12px;border-radius:6px;word-break:break-all;white-space:pre-wrap;font-size:11px;">${escapeHtml(ctx.newToken)}</pre>

      <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;" />
      <p style="font-size:12px;color:#9ca3af;">
        Automated notification from <code>/api/instagram/refresh</code>.
        Cron job runs weekly to keep this token valid indefinitely.
        Replace any other Instagram token in your deployment with the value above.
      </p>
    </div>
  `;

  await transporter.sendMail({
    from: `"ReCounting Bot" <${process.env.EMAIL_FROM || process.env.EMAIL_USER}>`,
    to: adminEmail,
    subject,
    html,
  });
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
