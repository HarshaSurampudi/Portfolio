import { Badge } from "./ui/badge";

interface ExperienceProps {
  experience: {
    title: string;
    organization: string;
    duration: string;
    description: string;
    tags?: string[];
  }[];
}

export function Experience({ experience }: ExperienceProps) {
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
      id="experience"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Experience & Education
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore my educational and professional background.
            </p>
          </div>
          <div className="relative w-full max-w-3xl">
            <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-px bg-gray-500/20 dark:bg-gray-400/20"></div>
            <div className="space-y-10">
              {experience.map((exp, index) => (
                <div key={index} className="relative flex items-center group">
                  <div className="flex-1 p-6 bg-white rounded-xl shadow-md transition-transform transform group-hover:scale-105 dark:bg-gray-700 dark:text-gray-200">
                    <h3 className="text-xl font-bold">
                      {exp.title}
                      <span className="block text-lg font-semibold text-gray-600 dark:text-gray-300">
                        {exp.organization}
                      </span>
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {exp.duration}
                    </p>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                      {exp.description}
                    </p>
                    {exp.tags?.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="mt-4 mr-2"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
