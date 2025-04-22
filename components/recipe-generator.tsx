"use client";

import { recipeSchema } from "@/lib/recipe-schema";
// Import the full list and the function instead of the pre-selected list
import {
  allRecipeSuggestions,
  getRandomElements,
  RecipeSuggestion,
} from "@/lib/suggestions";
import { experimental_useObject as useObject } from "@ai-sdk/react";
import { Annoyed, ChefHat, Clock, Loader2, Users } from "lucide-react"; // Import icons
import type React from "react";
// Import useState and useEffect
import { useLimit } from "@/hooks/use-limit";
import { Suspense, useEffect, useState } from "react";
import { toast } from "sonner";
import { mutate } from "swr";
import RecipeError from "./recipe-error";
import RecipeNoLimit from "./recipe-nolimit";
import RemainingTooltip from "./remaining-tooltip";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"; // Added CardDescription, CardFooter
import { Input } from "./ui/input";

interface RecipeGeneratorProps {
  modelId: string;
}

export default function RecipeGenerator({ modelId }: RecipeGeneratorProps) {
  const {
    error: limitError,
    isLoading: isLimitLoading,
    isLimitReached,
    resetAtEpoch,
  } = useLimit(); // Fetch the limit data
  const { object, submit, isLoading, error } = useObject({
    api: "/api/chat",
    schema: recipeSchema, // Use the enhanced schema,

    headers: {
      model: modelId,
    },

    onError: (error) => {
      if (error.message == "rate_limit_exceded") {
        toast.error("Rate limit exceeded. Please try again later.");
      } else if (error.message === "no_prompt") {
        toast.error("Please enter a dish name.");
      } else if (error.message === "no_response") {
        toast.error("Something went wrong. Please try again.");
      } else {
        toast.error("An error occurred. Please try again.");
        console.log(error.message);
      }
    },
    onFinish: async (data) => {
      // Handle the finished data here if needed
      console.log("Recipe generated:", data);
      await mutate("/api/limit"); // Refresh the limit data after a successful request
    },
  });
  const [inputValue, setInputValue] = useState("");
  // State to hold the client-side generated suggestions
  const [clientSuggestions, setClientSuggestions] = useState<
    RecipeSuggestion[]
  >([]);

  // Generate suggestions only on the client after mount
  useEffect(() => {
    setClientSuggestions(getRandomElements(allRecipeSuggestions, 3));
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    submit({ prompt: inputValue });
  };

  // Helper to check if any metadata exists
  const hasMetadata =
    object?.prepTime ||
    object?.cookTime ||
    object?.servings ||
    object?.difficulty;

  // if no recipe is generated, show suggestions box

  return (
    <div className="space-y-6">
      {/* ... form ... */}
      <form onSubmit={handleSubmit} className="flex gap-2 relative">
        {/* ... Input and Button remain the same ... */}
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a dish name (e.g., Chocolate Chip Cookies)"
          disabled={isLoading || isLimitReached}
          className="flex-grow"
        />
        <Button
          type="submit"
          className="min-w-[140px]"
          disabled={isLoading || isLimitReached}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...
            </>
          ) : isLimitReached ? (
            <Annoyed />
          ) : (
            "Generate Recipe"
          )}
        </Button>
        <RemainingTooltip />
      </form>

      {isLimitReached && <RecipeNoLimit resetAtEpoch={resetAtEpoch} />}
      {error && limitError && <RecipeError />}

      {/* Display suggestions if no recipe is generated and suggestions are ready */}
      {!object?.recipe &&
        !isLoading &&
        !isLimitLoading &&
        !isLimitReached &&
        !limitError &&
        !error &&
        clientSuggestions.length > 0 && (
          <Suspense fallback={<div>Loading suggestions...</div>}>
            <div className="flex justify-between gap-3">
              {/* Use clientSuggestions state here */}
              {clientSuggestions.map((suggestion, index) => (
                <div
                  key={`suggestion-${index}`}
                  className="p-2 border grow h-20 rounded-md flex flex-col w-full cursor-pointer hover:border-muted transition-colors"
                  onClick={() => {
                    setInputValue(suggestion.title);
                    submit({ prompt: suggestion.title });
                  }}
                >
                  <p>{suggestion.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {suggestion.description}
                  </p>
                </div>
              ))}
            </div>
          </Suspense>
        )}
      {/* ... loading state ... */}
      {/* Display loading state more prominently */}
      {isLoading && !object?.recipe && (
        <div className="flex justify-center items-center p-8">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <span className="ml-2">Generating your recipe...</span>
        </div>
      )}

      {/* ... recipe card ... */}
      {object?.recipe && (
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              {object.recipe}
            </CardTitle>
            {/* Display description if available */}
            {object.description && (
              <CardDescription className="pt-2">
                {object.description}
              </CardDescription>
            )}
          </CardHeader>
          <CardContent className="space-y-6">
            {" "}
            {/* Increased spacing */}
            {/* Metadata Section */}
            {hasMetadata && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-muted-foreground border-b pb-4 mb-4">
                {object.prepTime && (
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    <span>Prep: {object.prepTime}</span>
                  </div>
                )}
                {object.cookTime && (
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    <span>Cook: {object.cookTime}</span>
                  </div>
                )}
                {object.servings && (
                  <div className="flex items-center gap-1.5">
                    <Users className="h-4 w-4" />
                    <span>{object.servings}</span>
                  </div>
                )}
                {object.difficulty && (
                  <div className="flex items-center gap-1.5">
                    <ChefHat className="h-4 w-4" />
                    <span>{object.difficulty}</span>
                  </div>
                )}
              </div>
            )}
            {/* Ingredients Section */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Ingredients:</h3>{" "}
              {/* Increased margin */}
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                {" "}
                {/* Added padding */}
                {object.ingredients?.map((ingredient, index) => (
                  <li key={`ing-${index}`}>{ingredient}</li> // Added prefix to key
                ))}
              </ul>
            </div>
            {/* Instructions Section */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Instructions:</h3>{" "}
              {/* Increased margin */}
              <ol className="list-decimal list-inside space-y-2">
                {" "}
                {/* Increased spacing */}
                {object.instructions?.map((instruction, index) => (
                  <li key={`inst-${index}`}>{instruction}</li> // Added prefix to key
                ))}
              </ol>
            </div>
            {/* Tips Section (Optional) */}
            {object.tips && object.tips.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Tips & Variations:
                </h3>{" "}
                {/* Increased margin */}
                <ul className="list-disc list-inside space-y-1.5 pl-2">
                  {" "}
                  {/* Added padding */}
                  {object.tips.map((tip, index) => (
                    <li key={`tip-${index}`}>{tip}</li> // Added prefix to key
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
