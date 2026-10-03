import { profile } from "../data/profile.js";

function Footer() {
  return (
    <footer className="border-t border-border px-4 py-6 text-sm text-muted sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#hero" className="w-fit text-accent hover:underline">
          Back to top
        </a>
      </div>
    </footer>
  );
}

export default Footer;
