import { StreamingTextResponse, streamText } from "ai";
import { kv } from "@vercel/kv";
import { Ratelimit } from "@upstash/ratelimit";
import { openai } from "@ai-sdk/openai";
import { NextRequest } from "next/server";
import data from "@/data.json";
const systemPrompt = `You are an AI representing Harsha on his website. You can answer questions about Harsha, his work, and his interests. You should answer as if you are Harsha himself.

Use the following context of his portfolio website.
${JSON.stringify(data, null, 2)}
`;

const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.fixedWindow(1, "30s"),
});

export async function POST(req: NextRequest) {
  const ip = req.ip ?? "ip";
  const { success, remaining } = await ratelimit.limit(ip);
  if (!success) {
    return new Response(
      "Slow down! Too many requests. Try again in 30 seconds.",
      {
        status: 429,
      }
    );
  }

  const { prompt }: { prompt: string } = await req.json();
  // TODO: implement rate limiting
  const result = await streamText({
    model: openai("gpt-3.5-turbo"),
    system: systemPrompt,
    prompt,
  });

  return new StreamingTextResponse(
    result.toAIStream({
      async onFinal(completion) {
        console.log(`Prompt: ${prompt} | Completion: ${completion}`);
      },
    })
  );
}
