"use client";

import { useEffect, useState } from "react";

/**
 * ThemeToggle — the sliding light/dark switch in the top-right of the nav.
 *
 * How it works:
 * - The page's colors come from app/theme.css. Adding data-theme="dark" to
 *   the <html> tag switches every color to the dark set.
 * - Clicking the switch flips that attribute and remembers the choice in the
 *   browser (localStorage), so the next visit opens in the same mode.
 * - A tiny script in app/layout.tsx applies the saved choice before the page
 *   paints, so there is no white flash when dark mode is on.
 *
 * The knob's position and icon are driven by CSS (ui.css), not React state,
 * so the switch is already in the right place on first paint.
 */

type Theme = "light" | "dark";
const STORAGE_KEY = "theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  // Read the mode the layout script already applied.
  useEffect(() => {
    setTheme(
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "dark"
        : "light",
    );
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage can be blocked (private mode). The switch still works for
      // this visit.
    }
    setTheme(next);
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="theme-toggle"
      onClick={toggle}
    >
      <span className="theme-toggle__knob" aria-hidden="true">
        {/* Sun: shown in light mode */}
        <svg
          className="theme-toggle__icon theme-toggle__icon--sun"
          viewBox="0 0 24 24"
          width="14"
          height="14"
        >
          <circle cx="12" cy="12" r="5" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="12" y1="1.5" x2="12" y2="4" />
            <line x1="12" y1="20" x2="12" y2="22.5" />
            <line x1="1.5" y1="12" x2="4" y2="12" />
            <line x1="20" y1="12" x2="22.5" y2="12" />
            <line x1="4.6" y1="4.6" x2="6.4" y2="6.4" />
            <line x1="17.6" y1="17.6" x2="19.4" y2="19.4" />
            <line x1="4.6" y1="19.4" x2="6.4" y2="17.6" />
            <line x1="17.6" y1="6.4" x2="19.4" y2="4.6" />
          </g>
        </svg>
        {/* Moon: shown in dark mode */}
        <svg
          className="theme-toggle__icon theme-toggle__icon--moon"
          viewBox="0 0 24 24"
          width="14"
          height="14"
        >
          <path
            d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z"
            fill="currentColor"
          />
        </svg>
      </span>
    </button>
  );
}
