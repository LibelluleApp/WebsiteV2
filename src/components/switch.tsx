"use client";

import { useState } from "react";

export default function Switcher({
  setDarkMode,
  darkMode,
}: {
  setDarkMode: (mode: boolean) => void;
  darkMode: boolean;
}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setDarkMode(!darkMode);
  };

  return (
    <>
      <label className="flex cursor-pointer select-none items-center scale-75">
        <div className="relative">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="sr-only"
          />
          <div
            className={`box block h-8 w-14 rounded-full ${
              isChecked ? "bg-blue-700" : "bg-grey"
            }`}
          ></div>
          <div
            className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
              isChecked ? "translate-x-full" : ""
            }`}
          ></div>
        </div>
      </label>
    </>
  );
}
