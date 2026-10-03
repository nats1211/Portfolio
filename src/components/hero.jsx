import Button from "./ui/button.jsx";
import Reveal from "./reveal.jsx";
import { profile } from "../data/profile.js";

function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-28"
    >
      <Reveal className="mx-auto max-w-5xl">
        <p className="mb-3 font-medium text-accent">{profile.role}</p>
        <h1
          id="hero-heading"
          className="mb-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl"
        >
          {profile.name}
        </h1>
        <p className="mb-8 max-w-[65ch] text-lg leading-relaxed text-muted">
          {profile.valueStatement}
        </p>
        <div className="flex flex-wrap gap-3">
          <Button as="a" href="#projects">
            View projects
          </Button>
          <Button as="a" href="#contact" variant="secondary">
            Contact
          </Button>
        </div>
      </Reveal>
    </section>
  );
}

export default Hero;
