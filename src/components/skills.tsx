import { Badge } from "./ui/badge";
interface SkillsProps {
  skills: {
    title: string;
    items: string[];
  }[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
      id="skills"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Skills
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              A comprehensive list of my technical skills and expertise in the
              field of AI and Data Science.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills?.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md transition-transform transform hover:scale-105 dark:bg-gray-700 dark:text-gray-200"
              >
                <h3 className="text-xl font-bold">{skill.title}</h3>
                <div className="text-gray-500 dark:text-gray-400 mt-2">
                  {skill.items.map((item, index) => (
                    <Badge key={index} variant="secondary" className="mt-2">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
