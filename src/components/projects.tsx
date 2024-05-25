import { Badge } from "./ui/badge";
import { CardContent } from "./ui/card";
import { Card } from "./ui/card";

interface ProjectsProps {
  projects: {
    title: string;
    description: string;
    image: string;
    tags: string[];
  }[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section
      className="w-full py-6 md:py-12 lg:py-16 bg-gray-100 dark:bg-gray-800"
      id="projects"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Projects
            </h2>
            <p className="max-w-[900px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              These are some of the interesting projects I have worked on.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-white p-6 rounded-xl shadow-md transition-transform transform hover:scale-105 dark:bg-gray-700 dark:text-gray-200 flex flex-col justify-between"
              >
                <div>
                  <img
                    alt={project.title}
                    className="mx-auto mb-4 aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                    height="310"
                    src={project.image}
                    width="550"
                  />
                  <CardContent className="space-y-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {project.description}
                    </p>
                  </CardContent>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
