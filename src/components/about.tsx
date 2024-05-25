interface AboutProps {
  about: string;
}

export function About({ about }: AboutProps) {
  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
      id="about"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              About Me
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {about}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
