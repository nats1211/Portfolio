import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

const navItems = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

const linkClassName =
  "rounded-sm text-muted transition-colors hover:text-accent";

function ThemeToggle({ theme, onToggleTheme, className = "" }) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={`rounded-md p-2 text-muted transition-colors hover:bg-surface hover:text-foreground ${className}`}
    >
      {isDark ? <Sun aria-hidden="true" size={20} /> : <Moon aria-hidden="true" size={20} />}
    </button>
  );
}

function Navigation({ theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a
          href="#hero"
          onClick={() => setIsOpen(false)}
          className="rounded-sm font-semibold text-foreground"
        >
          Tristan Burgos
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-6 md:flex">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} className={linkClassName}>
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
          </div>
          <ThemeToggle
            theme={theme}
            onToggleTheme={onToggleTheme}
            className="md:hidden"
          />
          <button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((open) => !open)}
            className="rounded-md p-2 text-muted transition-colors hover:bg-surface hover:text-foreground md:hidden"
          >
            {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile primary navigation"
        className={`${isOpen ? "flex" : "hidden"} flex-col gap-1 border-t border-border px-4 py-3 md:hidden sm:px-6`}
      >
        {navItems.map(([label, id]) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setIsOpen(false)}
            className={`${linkClassName} px-2 py-2`}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navigation;
