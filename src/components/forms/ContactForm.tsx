'use client';

import { useState } from 'react';
import { Toast } from '@/components/ui/Toast';

type FormSource = 'contact' | 'free-consultation';

interface ContactFormProps {
  source: FormSource;
  submitText?: string;
  showTransactionVolume?: boolean;
}

export function ContactForm({ source, submitText, showTransactionVolume }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    type: 'success' | 'error';
    message: string;
    isVisible: boolean;
  }>({ type: 'success', message: '', isVisible: false });

  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ type, message, isVisible: true });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(data as Record<string, string>).toString(),
      });

      const result = await response.json();

      if (result.ok) {
        showToast(
          'success',
          source === 'free-consultation'
            ? 'Consultation request submitted! We\'ll contact you soon.'
            : 'Message sent! We\'ll get back to you within 2 hours.'
        );
        (e.currentTarget as HTMLFormElement).reset();
      } else {
        showToast('error', 'Something went wrong. Please try again or contact us on WhatsApp.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showToast('error', 'Network error. Please try again or contact us on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form className="mt-4 grid gap-4 relative z-10" onSubmit={handleSubmit}>
        <input type="hidden" name="source" value={source} />
        <label className="text-sm font-medium">
          {source === 'free-consultation' ? 'Full name' : 'Name'}
          <input
            type="text"
            name="name"
            className="mt-2 w-full rounded-lg border border-[color:var(--color-border)] px-4 py-3 text-sm input-glow"
            placeholder={source === 'free-consultation' ? 'Jane Smith' : 'Your name'}
            required
            disabled={isSubmitting}
          />
        </label>
        <label className="text-sm font-medium">
          {source === 'free-consultation' ? 'Email address' : 'Email'}
          <input
            type="email"
            name="email"
            className="mt-2 w-full rounded-lg border border-[color:var(--color-border)] px-4 py-3 text-sm input-glow"
            placeholder="you@company.com"
            required
            disabled={isSubmitting}
          />
        </label>
        <label className="text-sm font-medium">
          {source === 'free-consultation' ? 'WhatsApp number' : 'Phone / WhatsApp'}
          <input
            type="tel"
            name="phone"
            className="mt-2 w-full rounded-lg border border-[color:var(--color-border)] px-4 py-3 text-sm input-glow"
            placeholder="+62"
            disabled={isSubmitting}
          />
        </label>
        <label className="text-sm font-medium">
          Service interest
          <select
            name="service"
            className="mt-2 w-full rounded-lg border border-[color:var(--color-border)] px-4 py-3 text-sm input-glow bg-white"
            disabled={isSubmitting}
          >
            <option value="Bookkeeping">Bookkeeping</option>
            <option value="Tax compliance">Tax compliance</option>
            <option value="Payroll">Payroll (coming soon)</option>
            <option value="Business setup">Business setup (coming soon)</option>
          </select>
        </label>
        {showTransactionVolume && (
          <label className="text-sm font-medium">
            Monthly transaction volume
            <select
              name="transaction_volume"
              className="mt-2 w-full rounded-lg border border-[color:var(--color-border)] px-4 py-3 text-sm input-glow bg-white"
              disabled={isSubmitting}
            >
              <option value="Below 100">Below 100</option>
              <option value="100-300">100–300</option>
              <option value="300-600">300–600</option>
              <option value="600+">600+</option>
            </select>
          </label>
        )}
        <label className="text-sm font-medium">
          {source === 'free-consultation' ? 'What do you need help with?' : 'Message'}
          <textarea
            name="message"
            className="mt-2 min-h-[120px] w-full rounded-lg border border-[color:var(--color-border)] px-4 py-3 text-sm input-glow resize-none"
            placeholder={
              source === 'free-consultation'
                ? 'Tell us about your business and goals...'
                : 'Tell us about your needs...'
            }
            disabled={isSubmitting}
          />
        </label>
        <button
          type="submit"
          className="btn-primary w-full shimmer relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : submitText || (source === 'free-consultation' ? 'Submit request' : 'Send message')}
        </button>
      </form>
      {source === 'free-consultation' && (
        <p className="text-xs text-[color:var(--color-slate-light)] mt-3">
          By submitting, you agree to be contacted by the ReCounting team
          in less than 2 hours during business days.
        </p>
      )}
      <Toast
        type={toast.type}
        message={toast.message}
        isVisible={toast.isVisible}
        onClose={() => setToast(prev => ({ ...prev, isVisible: false }))}
      />
    </>
  );
}
