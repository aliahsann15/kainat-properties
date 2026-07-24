"use client";

import { FormEvent } from "react";

type KpInputProps = {
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  multiline?: boolean;
  validation?: "name" | "phone" | "location" | "message";
};

const inputClass =
  "min-h-12 rounded-2xl border-2 border-kp-graphite bg-kp-porcelain px-4 py-3 font-bold text-kp-graphite outline-none transition-colors duration-200 placeholder:text-kp-stone-taupe focus:border-kp-ember";

function sanitizeValue(value: string, validation: KpInputProps["validation"]) {
  if (validation === "phone") {
    const startsWithPlus = value.trim().startsWith("+");
    const digits = value.replace(/\D/g, "").slice(0, startsWithPlus ? 12 : 11);

    return startsWithPlus ? `+${digits}` : digits;
  }

  if (validation === "name") {
    return value.replace(/[^A-Za-z\s.'-]/g, "").replace(/\s{2,}/g, " ");
  }

  if (validation === "location") {
    return value.replace(/[^A-Za-z\s,./'-]/g, "").replace(/\s{2,}/g, " ");
  }

  return value;
}

function KpInput({
  label,
  name,
  placeholder,
  required = false,
  multiline = false,
  validation = "message",
}: KpInputProps) {
  const sharedProps = {
    className: multiline ? `${inputClass} min-h-32 resize-y` : inputClass,
    minLength: validation === "message" ? undefined : 2,
    name,
    onInput: (
      event: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>,
    ) => {
      const target = event.currentTarget;
      target.value = sanitizeValue(target.value, validation);
    },
    placeholder,
    required,
  };

  return (
    <label className="grid gap-2 text-sm font-extrabold text-kp-graphite">
      <span>
        {label}
        {required ? <span className="text-kp-danger"> *</span> : null}
      </span>

      {multiline ? (
        <textarea {...sharedProps} />
      ) : (
        <input
          {...sharedProps}
          autoComplete={validation === "phone" ? "tel" : undefined}
          inputMode={validation === "phone" ? "tel" : "text"}
          maxLength={validation === "phone" ? 13 : undefined}
          pattern={
            validation === "phone" ? "^(\\+92|0)?3[0-9]{9}$" : undefined
          }
          title={
            validation === "phone"
              ? "Enter a valid Pakistani mobile number, for example 03001234567 or +923001234567."
              : undefined
          }
          type="text"
        />
      )}
    </label>
  );
}

export default KpInput;
