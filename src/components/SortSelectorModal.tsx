"use client";

import Image from "next/image";

export default function SortSelectorModal({
  sortOptions,
  selectedOption,
  setSelectedOption,
}: {
  sortOptions: string[];
  selectedOption: string;
  setSelectedOption: (option: string) => void;
}) {
  return (
    <div
      className="sort-selector-modal"
      role="dialog"
      aria-labelledby="sort-options-title"
    >
      {sortOptions.map((option) => (
        <div
          key={option}
          className={`sort-option ${
            selectedOption === option ? "selected" : ""
          }`}
          role="button"
          tabIndex={0}
          aria-pressed={selectedOption === option}
          onClick={() => setSelectedOption(option)}
        >
          {selectedOption === option && (
            <Image
              src="/assets/svg/tick.svg"
              alt={`Selected: ${option}`}
              className="header-icon"
              width={20}
              height={20}
            />
          )}
          {option}
        </div>
      ))}
    </div>
  );
}
