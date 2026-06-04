import type { ReactNode } from "react";

type FormInputProps = {
  label: string;
  htmlFor: string;
  children: ReactNode;
};

export function FormInput({ label, htmlFor, children }: FormInputProps) {
  return (
    <label className="block space-y-3" htmlFor={htmlFor}>
      <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-sand)]">
        {label}
      </span>
      {children}
    </label>
  );
}

export const fieldClassName =
  "min-h-12 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[var(--color-accent)] focus:bg-white/8";
