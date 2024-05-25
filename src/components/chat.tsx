"use client";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { ArrowUpIcon } from "@/components/ui/arrowup";
import { Input } from "./ui/input";
import { useCompletion } from "ai/react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function Chat() {
  const { completion, input, handleInputChange, handleSubmit, error } =
    useCompletion({
      api: "/api/completion",
    });

  return (
    <>
      <div className="w-full">
        <form className="relative" onSubmit={handleSubmit}>
          <Input
            className="w-full rounded-2xl border border-gray-200 border-gray-300 p-4 pr-16 focus:border-gray-900 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-800 dark:focus:border-gray-50"
            placeholder="Ask me anything..."
            name="prompt"
            value={input}
            onChange={handleInputChange}
            id="input"
          />
          <Button
            className="absolute top-2 right-3 w-6 h-6"
            size="icon"
            type="submit"
          >
            <ArrowUpIcon className="w-4 h-4" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </div>
      {completion && (
        <Card className="w-full mt-4">
          <CardContent className="flex items-start p-4">
            <div className="grid gap-1">
              <div className="prose prose-stone">
                <Markdown remarkPlugins={[remarkGfm]} children={completion} />
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      {error && (
        <Card className="w-full mt-4">
          <CardContent className="flex items-start p-4">
            <div className="grid gap-1">
              <div className="prose prose-stone text-red-600">
                {error.message}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
