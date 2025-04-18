import { DEFAULT_AI_MODEL } from "@/lib/models";
import { models } from "@/lib/providers";
import { recipeSchema } from "@/lib/recipe-schema";
import { openai } from "@ai-sdk/openai";
import { streamObject } from "ai";
import { headers } from "next/headers";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const headerStore = await headers();
  const request = await req.json();
  const model = headerStore.get("model") ?? DEFAULT_AI_MODEL;

  const { prompt: recipePrompt } = request;

  if (!recipePrompt) {
    return new Response("Prompt is required", { status: 400 });
  }

  const result = streamObject({
    model: models.languageModel(model),
    schema: recipeSchema,
    prompt: `You are a helpful culinary assistant. Generate a complete, clear, and easy-to-follow recipe for "${recipePrompt}".

Provide the following details:
- A concise, engaging description (optional).
- Estimated prep time (optional).
- Estimated cook time (optional).
- Number of servings (optional).
- Difficulty level (Easy, Medium, Hard) (optional).
- A list of ingredients with precise quantities.
- Step-by-step instructions.
- Any helpful tips or variations (optional).

Ensure the instructions are numbered and easy to understand for a home cook. Format the output according to the provided schema.`,

    onError: (error) => {
      console.error("Error generating recipe on server:", error);
    },
  });

  // Use toAIStreamResponse when using useObject on the client
  return result.toTextStreamResponse();
}
