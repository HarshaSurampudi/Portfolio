interface AchievementsProps {
  achievements: {
    title: string;
    description: string;
  }[];
}

export function Achievements({ achievements }: AchievementsProps) {
  return (
    <section
      className="w-full py-6 md:py-12 lg:py-16 bg-gray-100 dark:bg-gray-800"
      id="awards"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Achievements
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Here are some of my achievements and awards.
            </p>
          </div>
          <div className="space-y-6">
            {achievements?.map((achievement, index) => (
              <div
                key={index}
                className="text-left p-6 bg-white rounded-xl shadow-md transition-transform transform hover:scale-105 dark:bg-gray-700 dark:text-gray-200"
              >
                <h3 className="text-xl font-bold">{achievement.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
