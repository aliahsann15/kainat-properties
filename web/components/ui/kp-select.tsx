"use client";

import { KeyboardEvent, useId, useMemo, useState } from "react";

type KpSelectOption = {
  label: string;
  value: string;
};

type KpSelectProps = {
  label: string;
  name: string;
  options: KpSelectOption[];
  defaultValue?: string;
  placeholder?: string;
};

export function KpSelect({
  label,
  name,
  options,
  defaultValue,
  placeholder = "Select an option",
}: KpSelectProps) {
  const generatedId = useId();
  const [isOpen, setIsOpen] = useState(false);
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
    setIsOpen(true);
  }

  return (
    <div className="kp-select-field">
      <input type="hidden" name={name} value={selectedValue} />
      <span className="kp-select-label" id={`${generatedId}-label`}>
        {label}
      </span>

      <div className="kp-select">
        <button
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-labelledby={`${generatedId}-label ${generatedId}-value`}
          className="kp-select-trigger"
          onBlur={() => window.setTimeout(() => setIsOpen(false), 120)}
          onClick={() => setIsOpen((current) => !current)}
          onKeyDown={handleKeyDown}
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
    </div>
  );
}
