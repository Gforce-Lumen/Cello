"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import {
  initialEnquiryState,
  submitEnquiry,
  type EnquiryFormState,
} from "@/app/actions";
import { fieldClassName, FormInput } from "@/components/form-input";
import { MessageBlock } from "@/components/message-block";

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-accent)] px-6 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-ink-strong)] transition hover:bg-[var(--color-accent-soft)] disabled:cursor-not-allowed disabled:opacity-70"
      disabled={pending}
    >
      {pending ? "Sending..." : label}
    </button>
  );
}

type BookingFormProps = {
  enquiryType: "reservation" | "private-booking";
  heading: string;
  description: string;
  buttonLabel: string;
};

export function BookingForm({
  enquiryType,
  heading,
  description,
  buttonLabel,
}: BookingFormProps) {
  const [state, formAction] = useActionState<EnquiryFormState, FormData>(
    submitEnquiry,
    initialEnquiryState,
  );

  return (
    <section className="rounded-[2rem] border border-white/10 bg-[#121013] p-6 sm:p-8">
      <div className="max-w-2xl space-y-3">
        <h2 className="font-display text-4xl text-white">{heading}</h2>
        <p className="text-sm leading-7 text-[var(--color-ink-muted)]">{description}</p>
      </div>

      <form action={formAction} className="mt-8 grid gap-5 md:grid-cols-2">
        <input type="hidden" name="enquiryType" value={enquiryType} />

        <FormInput label="Full Name" htmlFor={`${enquiryType}-name`}>
          <input
            id={`${enquiryType}-name`}
            name="name"
            type="text"
            required
            className={fieldClassName}
            placeholder="Your name"
          />
        </FormInput>
        <FormInput label="Email" htmlFor={`${enquiryType}-email`}>
          <input
            id={`${enquiryType}-email`}
            name="email"
            type="email"
            required
            className={fieldClassName}
            placeholder="you@example.com"
          />
        </FormInput>
        <FormInput label="Phone / WhatsApp" htmlFor={`${enquiryType}-phone`}>
          <input
            id={`${enquiryType}-phone`}
            name="phone"
            type="tel"
            required
            className={fieldClassName}
            placeholder="+233..."
          />
        </FormInput>
        <FormInput label="Preferred Date" htmlFor={`${enquiryType}-date`}>
          <input id={`${enquiryType}-date`} name="date" type="date" required className={fieldClassName} />
        </FormInput>
        <FormInput label="Guests" htmlFor={`${enquiryType}-guests`}>
          <select id={`${enquiryType}-guests`} name="guests" required className={fieldClassName}>
            <option value="">Select guest count</option>
            <option value="2-4">2-4</option>
            <option value="5-8">5-8</option>
            <option value="9-14">9-14</option>
            <option value="15+">15+</option>
          </select>
        </FormInput>
        <FormInput label="Notes" htmlFor={`${enquiryType}-notes`}>
          <textarea
            id={`${enquiryType}-notes`}
            name="notes"
            rows={5}
            className={fieldClassName}
            placeholder="Tell us about timing, occasion, seating, or menu preferences."
          />
        </FormInput>

        <div className="md:col-span-2 space-y-4">
          {state.status !== "idle" ? (
            <MessageBlock status={state.status} message={state.message} />
          ) : null}
          <div className="flex flex-wrap items-center gap-4">
            <SubmitButton label={buttonLabel} />
            <p className="text-sm text-[var(--color-ink-muted)]">
              Clear submit, success, and failure states are wired now. Real delivery can be connected later without changing the UI contract.
            </p>
          </div>
        </div>
      </form>
    </section>
  );
}
