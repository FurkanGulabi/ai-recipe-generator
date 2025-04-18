import { google } from "@ai-sdk/google";
import { openai } from "@ai-sdk/openai";
import { customProvider } from "ai";
import "server-only";

export const models = customProvider({
  languageModels: {
    "smart-model": google("gemini-2.0-flash-exp"), // Corrected model definition
    "smarter-model": openai("gpt-4.1"),
    "smartest-model": google("gemini-2.5-pro-exp-03-25"),
  },
});
