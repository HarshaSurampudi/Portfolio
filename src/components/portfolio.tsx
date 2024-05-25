import data from "@/data.json";
import { Hero } from "./hero";
import { About } from "./about";
import { Projects } from "./projects";
import { Experience } from "./experience";
import { Achievements } from "./achievements";
import { Skills } from "./skills";
import { Socials } from "./socials";

export function Portfolio() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <Hero hero={data.hero} />
      {/* About Section */}
      <About about={data.about} />
      {/* Projects Section */}
      <Projects projects={data.projects} />
      {/* Experience Section */}
      <Experience experience={data.experience} />
      {/* Achievements Section */}
      <Achievements achievements={data.achievements} />
      {/* Skills Section */}
      <Skills skills={data.skills} />
      {/* Socials Section */}
      <Socials socials={data.socials} />
    </main>
  );
}
