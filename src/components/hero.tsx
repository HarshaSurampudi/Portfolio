import { Chat } from "./chat";

interface HeroProps {
  hero: {
    title: string;
    description: string;
    image: string;
  };
}

export function Hero({ hero }: HeroProps) {
  return (
    <section className="w-full py-10 bg-gray-100 dark:bg-gray-800" id="hero">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                {hero.title}
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                {hero.description}
              </p>
            </div>
            <div className="flex justify-center flex-col">
              <Chat />
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              alt={hero.title}
              className="aspect-square overflow-hidden rounded-xl object-cover transform transition-transform hover:scale-105 sm:w-full"
              height="550"
              src={hero.image}
              width="550"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
