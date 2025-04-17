import { z } from "zod";

export const recipeSchema = z.object({
  // Keep the enhanced schema from step 1 here
  recipe: z.string().describe("Name of the dish"),
  description: z
    .string()
    .optional()
    .describe("A brief, engaging description of the dish."),
  prepTime: z
    .string()
    .optional()
    .describe("Estimated preparation time (e.g., '15 minutes')"),
  cookTime: z
    .string()
    .optional()
    .describe("Estimated cooking time (e.g., '30 minutes')"),
  servings: z
    .string()
    .optional()
    .describe("Number of servings the recipe makes (e.g., '4 servings')"),
  difficulty: z
    .string()
    .optional()
    .describe("Difficulty level (e.g., 'Easy', 'Medium', 'Hard')"),
  ingredients: z
    .array(z.string())
    .describe(
      "List of ingredients, including quantities (e.g., '1 cup flour', '2 large eggs')"
    ),
  instructions: z
    .array(z.string())
    .describe("Clear, step-by-step instructions for preparing the dish."),
  tips: z
    .array(z.string())
    .optional()
    .describe("Optional tips or variations for the recipe."),
});
