"use client";

import { KeyboardEvent, useEffect, useId, useMemo, useRef, useState } from "react";

type KpSelectOption = {
  label: string;
  value: string;
};

type KpSelectProps = {
  label: string;
  name: string;
  options: KpSelectOption[];
  defaultValue?: string;
  required?: boolean;
  placeholder?: string;
  errorMessage?: string;
};

export function KpSelect({
  label,
  name,
  options,
  defaultValue,
  required = false,
  placeholder = "Select an option",
  errorMessage = `${label} is required.`,
}: KpSelectProps) {
  const generatedId = useId();
  const fieldRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue ?? "");

  const selectedOption = useMemo(
    () => options.find((option) => option.value === selectedValue),
    [options, selectedValue],
  );

  const activeIndex = Math.max(
    0,
    options.findIndex((option) => option.value === selectedValue),
  );

  function selectOption(option: KpSelectOption) {
    setSelectedValue(option.value);
    setHasError(false);
    setIsOpen(false);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "Escape") {
      setIsOpen(false);
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsOpen((current) => !current);
      return;
    }

    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") {
      return;
    }

    event.preventDefault();

    const direction = event.key === "ArrowDown" ? 1 : -1;
    const nextIndex = (activeIndex + direction + options.length) % options.length;
    setSelectedValue(options[nextIndex].value);
    setHasError(false);
    setIsOpen(true);
  }

  useEffect(() => {
    const form = fieldRef.current?.closest("form");

    if (!form || !required) {
      return;
    }

    function validateSelect(event: Event) {
      if (selectedValue) {
        setHasError(false);
        return;
      }

      event.preventDefault();
      setHasError(true);
      triggerRef.current?.focus();
    }

    form.addEventListener("submit", validateSelect);

    return () => {
      form.removeEventListener("submit", validateSelect);
    };
  }, [required, selectedValue]);

  return (
    <div className="kp-select-field" ref={fieldRef}>
      <input type="hidden" name={name} value={selectedValue} />
      <span className="kp-select-label" id={`${generatedId}-label`}>
        {label}
        {required ? (
          <span className="kp-required-mark" aria-hidden="true">
            *
          </span>
        ) : null}
      </span>

      <div className="kp-select">
        <button
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-labelledby={`${generatedId}-label ${generatedId}-value`}
          aria-describedby={hasError ? `${generatedId}-error` : undefined}
          className="kp-select-trigger"
          data-invalid={hasError}
          onBlur={() => window.setTimeout(() => setIsOpen(false), 120)}
          onClick={() => setIsOpen((current) => !current)}
          onKeyDown={handleKeyDown}
          ref={triggerRef}
          type="button"
        >
          <span
            className={selectedOption ? undefined : "kp-select-placeholder"}
            id={`${generatedId}-value`}
          >
            {selectedOption?.label ?? placeholder}
          </span>
          <span className="kp-select-chevron" aria-hidden="true" />
        </button>

        {isOpen ? (
          <div
            aria-labelledby={`${generatedId}-label`}
            className="kp-select-menu"
            role="listbox"
            tabIndex={-1}
          >
            {options.map((option) => {
              const isSelected = option.value === selectedValue;

              return (
                <button
                  aria-selected={isSelected}
                  className="kp-select-option"
                  key={option.value}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => selectOption(option)}
                  role="option"
                  type="button"
                >
                  <span aria-hidden="true" className="kp-select-check">
                    {isSelected ? "✓" : ""}
                  </span>
                  {option.label}
                </button>
              );
            })}
          </div>
        ) : null}
      </div>
      {hasError ? (
        <span className="kp-select-error" id={`${generatedId}-error`}>
          {errorMessage}
        </span>
      ) : null}
    </div>
  );
}
