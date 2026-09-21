'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { contactInfo, serviceOptions } from '@/lib/data';

type FormState = {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  serviceType: '',
  message: '',
};

const inputBase =
  'w-full rounded-lg border bg-white px-4 py-3 text-sm text-slate-700 placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-accent';

const inputClass = (hasError: boolean) =>
  `${inputBase} ${hasError ? 'border-red-400' : 'border-slate-300 focus:border-accent'}`;

/**
 * Contact / quote request form.
 *
 * Validation and the success state are handled client side because this demo
 * has no backend — see the TODO inside handleSubmit for where to POST the data.
 */
export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setValues((previous) => ({ ...previous, [name]: value }));
    setErrors((previous) => ({ ...previous, [name]: undefined }));
  };

  const validate = (data: FormState): FormErrors => {
    const nextErrors: FormErrors = {};
    const digits = data.phone.replace(/\D/g, '');

    if (!data.name.trim()) nextErrors.name = 'Please enter your full name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (digits.length < 10) {
      nextErrors.phone = 'Please enter a 10-digit phone number.';
    }
    if (!data.serviceType) {
      nextErrors.serviceType = 'Please choose the service you need.';
    }
    if (data.message.trim().length < 10) {
      nextErrors.message = 'Please give us at least 10 characters so we can help.';
    }

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('submitting');
    // TODO: replace this simulated request with a real submission, e.g.
    // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(values) })
    window.setTimeout(() => {
      setStatus('submitted');
      setValues(initialState);
    }, 600);
  };

  if (status === 'submitted') {
    return (
      <div
        role="status"
        className="flex h-full flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-card"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-50">
          <CheckCircle2 className="h-9 w-9 text-accent" aria-hidden="true" />
        </span>
        <h2 className="mt-6 text-2xl font-bold">Request Received</h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
          Thank you. A PolarPeak dispatcher will call you back within 15 minutes
          during business hours. If this is an emergency, call{' '}
          <a
            href={contactInfo.phoneHref}
            className="font-semibold text-accent hover:underline"
          >
            {contactInfo.phoneDisplay}
          </a>{' '}
          and we will dispatch a truck immediately.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="btn btn-outline-navy mt-7"
        >
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-slate-200 bg-white p-7 shadow-card sm:p-9"
    >
      <h2 className="text-2xl font-bold">Request a Free Quote</h2>
      <p className="mt-2 text-sm text-slate-600">
        Tell us what is going on with your system and we will get back to you —
        usually within 15 minutes.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-primary">
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
            placeholder="Jane Doe"
            className={`mt-2 ${inputClass(Boolean(errors.name))}`}
          />
          {errors.name ? (
            <p id="name-error" role="alert" className="mt-1.5 text-xs font-medium text-red-600">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-primary">
            Email Address <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            placeholder="jane@example.com"
            className={`mt-2 ${inputClass(Boolean(errors.email))}`}
          />
          {errors.email ? (
            <p id="email-error" role="alert" className="mt-1.5 text-xs font-medium text-red-600">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-primary">
            Phone Number <span className="text-accent">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={handleChange}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            placeholder="(614) 555-0192"
            className={`mt-2 ${inputClass(Boolean(errors.phone))}`}
          />
          {errors.phone ? (
            <p id="phone-error" role="alert" className="mt-1.5 text-xs font-medium text-red-600">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="serviceType"
            className="block text-sm font-semibold text-primary"
          >
            Service Needed <span className="text-accent">*</span>
          </label>
          <select
            id="serviceType"
            name="serviceType"
            value={values.serviceType}
            onChange={handleChange}
            aria-invalid={Boolean(errors.serviceType)}
            aria-describedby={errors.serviceType ? 'service-error' : undefined}
            className={`mt-2 ${inputClass(Boolean(errors.serviceType))}`}
          >
            <option value="">Select a service…</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
            <option value="Other / Not sure">Other / Not sure yet</option>
          </select>
          {errors.serviceType ? (
            <p
              id="service-error"
              role="alert"
              className="mt-1.5 text-xs font-medium text-red-600"
            >
              {errors.serviceType}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="block text-sm font-semibold text-primary">
          How Can We Help? <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          placeholder="No cooling since this morning. Thermostat is on but the outdoor unit is silent."
          className={`mt-2 resize-y ${inputClass(Boolean(errors.message))}`}
        />
        {errors.message ? (
          <p id="message-error" role="alert" className="mt-1.5 text-xs font-medium text-red-600">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn btn-accent mt-7 w-full px-8 py-4 text-base disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-5 w-5" aria-hidden="true" />
            Request My Free Quote
          </>
        )}
      </button>

      <p className="mt-4 text-center text-xs leading-relaxed text-slate-500">
        We only use your details to schedule and quote your service. No spam, ever.
      </p>
    </form>
  );
}
