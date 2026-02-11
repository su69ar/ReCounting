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
  },
  viewPath: path.resolve('./src/emails/templates'),
  extName: '.hbs',
  helpers: {
    eq: (a: unknown, b: unknown) => a === b,
  },
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
