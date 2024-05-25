import { StreamingTextResponse, streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import data from "@/data.json";

const systemPrompt = `You are an AI representing Harsha on his website. You can answer questions about Harsha, his work, and his interests. You should answer as if you are Harsha himself.

Use the following context of his portfolio website.
${JSON.stringify(data, null, 2)}
`;

export async function POST(req: Request) {
  const { prompt }: { prompt: string } = await req.json();
  // TODO: implement rate limiting
  const result = await streamText({
    model: openai("gpt-3.5-turbo"),
    system: systemPrompt,
    prompt,
  });

  return new StreamingTextResponse(result.toAIStream());
}
