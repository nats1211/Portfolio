import Card from "./ui/card.jsx";
import { profile } from "../data/profile.js";

function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[1fr_16rem]">
        <div>
          <h2 id="about-heading" className="mb-5 text-3xl font-semibold tracking-tight">
            About
          </h2>
          <p className="mb-4 max-w-[65ch] text-muted">{profile.bio}</p>
          <p className="max-w-[65ch] text-muted">{profile.education}</p>
        </div>
        <Card as="figure" className="mx-auto w-full max-w-64 p-3">
          <img
            src={profile.photoSrc}
            alt={profile.photoAlt}
            width="512"
            height="640"
            loading="lazy"
            className="aspect-4/5 w-full rounded-md object-cover"
          />
        </Card>
      </div>
    </section>
  );
}

export default About;
